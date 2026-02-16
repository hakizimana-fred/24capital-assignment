'use client';

import { memo, useMemo, useState, useCallback } from 'react';
import { hierarchy, partition } from 'd3-hierarchy';
import { arc as d3Arc } from 'd3-shape';
import { Card, Text } from '@/components/atoms';
import { colors } from '@/design-system/tokens';
import { cn } from '@/lib/cn';
import type { SunburstNode, ReusableSunburstChartProps } from '@/types';

interface ArcDatum {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  data: SunburstNode;
  depth: number;
  parent: ArcDatum | null;
}

interface TooltipState {
  x: number;
  y: number;
  name: string;
  value: number;
}

function getColor(d: ArcDatum): string {
  if (d.data.color) return d.data.color;
  if (d.parent?.data.color) return d.parent.data.color;
  return colors.chart.slate;
}

const MIN_ARC_FOR_LABEL = 0.2; // radians (~11 degrees)

export const ReusableSunburstChart = memo(function ReusableSunburstChart({
  title,
  data,
  showLabels = true,
  width = 380,
  height = 380,
  className,
}: ReusableSunburstChartProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const radius = Math.min(width, height) / 2;

  const arcData = useMemo(() => {
    const root = hierarchy<SunburstNode>(data)
      .sum((d) => d.value ?? 0)
      .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

    const partitioned = partition<SunburstNode>().size([2 * Math.PI, radius])(root);

    return partitioned.descendants().filter((d) => d.depth > 0);
  }, [data, radius]);

  const arcGenerator = useMemo(
    () =>
      d3Arc<ArcDatum>()
        .startAngle((d) => d.x0)
        .endAngle((d) => d.x1)
        .innerRadius((d) => d.y0)
        .outerRadius((d) => d.y1)
        .padAngle(0.02)
        .padRadius(radius / 2)
        .cornerRadius(3),
    [radius],
  );

  const handleMouseEnter = useCallback(
    (id: string, datum: ArcDatum, event: React.MouseEvent) => {
      setHoveredId(id);
      const svgRect = (event.currentTarget as SVGElement).closest('svg')?.getBoundingClientRect();
      if (svgRect) {
        setTooltip({
          x: event.clientX - svgRect.left,
          y: event.clientY - svgRect.top - 10,
          name: datum.data.name,
          value: datum.data.value ?? 0,
        });
      }
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
    setTooltip(null);
  }, []);

  return (
    <Card className={cn('p-6', className)}>
      {title && (
        <Text variant="heading-4" className="mb-4">
          {title}
        </Text>
      )}
      <div className="flex items-center justify-center">
        <div className="relative" style={{ width, height }}>
          <svg
            width={width}
            height={height}
            viewBox={`${-width / 2} ${-height / 2} ${width} ${height}`}
          >
            {arcData.map((d, i) => {
              const datum = d as unknown as ArcDatum;
              const id = `${datum.data.name}-${datum.depth}-${i}`;
              const isHovered = hoveredId === id;
              const parentHovered =
                datum.parent &&
                hoveredId?.startsWith(datum.parent.data.name);
              const fill = getColor(datum);
              const opacity =
                hoveredId === null
                  ? datum.depth === 1
                    ? 1
                    : 0.7
                  : isHovered || parentHovered
                    ? 1
                    : 0.3;

              const arcWidth = datum.x1 - datum.x0;
              const midAngle = (datum.x0 + datum.x1) / 2;
              const centroid = arcGenerator.centroid(datum);
              let rotationDeg = (midAngle * 180) / Math.PI - 90;
              if (midAngle > Math.PI) rotationDeg += 180;

              const canShowLabel =
                showLabels && arcWidth > MIN_ARC_FOR_LABEL;

              return (
                <g key={id}>
                  <path
                    d={arcGenerator(datum) ?? ''}
                    fill={fill}
                    opacity={opacity}
                    stroke={colors.surface.DEFAULT}
                    strokeWidth={1.5}
                    style={{
                      transition: 'opacity 200ms ease, transform 100ms ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => handleMouseEnter(id, datum, e)}
                    onMouseLeave={handleMouseLeave}
                  />
                  {canShowLabel && centroid && (
                    <text
                      x={centroid[0]}
                      y={centroid[1]}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={datum.depth === 1 ? 11 : 9}
                      fontWeight={datum.depth === 1 ? 600 : 400}
                      fill={colors.txt.primary}
                      opacity={
                        hoveredId === null
                          ? 1
                          : isHovered || parentHovered
                            ? 1
                            : 0.3
                      }
                      transform={`rotate(${rotationDeg}, ${centroid[0]}, ${centroid[1]})`}
                      style={{
                        pointerEvents: 'none',
                        transition: 'opacity 200ms ease',
                      }}
                    >
                      {datum.data.name}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {tooltip && (
            <div
              className="pointer-events-none absolute rounded-lg border border-border bg-surface px-3 py-2 text-xs shadow-md"
              style={{
                left: tooltip.x,
                top: tooltip.y,
                transform: 'translate(-50%, -100%)',
              }}
            >
              <span className="font-medium text-txt-primary">
                {tooltip.name}
              </span>
              {tooltip.value > 0 && (
                <span className="ml-2 text-txt-secondary">
                  {tooltip.value}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
});
