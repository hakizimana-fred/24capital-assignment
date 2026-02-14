'use client';

import { useMemo, useState } from 'react';
import { hierarchy, partition } from 'd3-hierarchy';
import { arc as d3Arc } from 'd3-shape';
import type { SunburstNode } from '@/types';
import { colors } from '@/design-system/tokens';

interface SunburstChartProps {
  data: SunburstNode;
  width?: number;
  height?: number;
}

interface ArcDatum {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  data: SunburstNode;
  depth: number;
  parent: ArcDatum | null;
}

export function SunburstChart({
  data,
  width = 300,
  height = 300,
}: SunburstChartProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const radius = Math.min(width, height) / 2;

  const arcData = useMemo(() => {
    const root = hierarchy<SunburstNode>(data)
      .sum((d) => d.value ?? 0)
      .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

    const partitioned = partition<SunburstNode>().size([2 * Math.PI, radius])(
      root,
    );

    return partitioned.descendants().filter((d) => d.depth > 0);
  }, [data, radius]);

  const arcGenerator = d3Arc<ArcDatum>()
    .startAngle((d) => d.x0)
    .endAngle((d) => d.x1)
    .innerRadius((d) => d.y0)
    .outerRadius((d) => d.y1)
    .padAngle(0.02)
    .padRadius(radius / 2)
    .cornerRadius(3);

  function getColor(d: ArcDatum): string {
    if (d.data.color) return d.data.color;
    if (d.parent?.data.color) return d.parent.data.color;
    return colors.chart.slate;
  }

  return (
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
          datum.parent && hoveredId?.startsWith(datum.parent.data.name);
        const fill = getColor(datum);
        const opacity =
          hoveredId === null
            ? datum.depth === 1
              ? 1
              : 0.7
            : isHovered || parentHovered
              ? 1
              : 0.3;

        return (
          <path
            key={id}
            d={arcGenerator(datum) ?? ''}
            fill={fill}
            opacity={opacity}
            stroke={colors.surface.DEFAULT}
            strokeWidth={1.5}
            style={{ transition: 'opacity 200ms ease, transform 100ms ease' }}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
          />
        );
      })}
    </svg>
  );
}
