'use client';

import { memo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
  ReferenceLine,
} from 'recharts';
import { Card, Text } from '@/components/atoms';
import { colors } from '@/design-system/tokens';
import { cn } from '@/lib/cn';
import type { HorizontalBarChartProps } from '@/types';

export const HorizontalBarChart = memo(function HorizontalBarChart({
  title,
  data,
  categoryKey,
  series,
  xAxisLabel,
  yAxisLabel,
  height = 380,
  xAxisDomain,
  tooltipFormatter,
  className,
}: HorizontalBarChartProps) {
  return (
    <Card className={cn('p-6', className)}>
      <Text variant="heading-4" className="mb-4">
        {title}
      </Text>
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: xAxisLabel ? 25 : 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={colors.border.light}
              horizontal={false}
            />
            <XAxis
              type="number"
              tick={{ fontSize: 12, fill: colors.txt.tertiary }}
              axisLine={{ stroke: colors.border.DEFAULT }}
              tickLine={false}
              domain={xAxisDomain}
            >
              {xAxisLabel && (
                <Label
                  value={xAxisLabel}
                  position="insideBottomRight"
                  offset={-10}
                  style={{ fontSize: 12, fill: colors.txt.tertiary }}
                />
              )}
            </XAxis>
            <YAxis
              type="category"
              dataKey={categoryKey}
              tick={{ fontSize: 12, fill: colors.txt.tertiary }}
              axisLine={false}
              tickLine={false}
              width={70}
            >
              {yAxisLabel && (
                <Label
                  value={yAxisLabel}
                  angle={-90}
                  position="insideLeft"
                  offset={10}
                  style={{
                    fontSize: 12,
                    fill: colors.txt.tertiary,
                    textAnchor: 'middle',
                  }}
                />
              )}
            </YAxis>
            <Tooltip
              contentStyle={{
                backgroundColor: colors.surface.DEFAULT,
                border: `1px solid ${colors.border.DEFAULT}`,
                borderRadius: '8px',
                fontSize: '13px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
              formatter={(value, name) => [
                tooltipFormatter
                  ? tooltipFormatter(Number(value), String(name))
                  : `${Number(value).toFixed(1)}%`,
                undefined,
              ]}
            />
            <Legend
              iconType="square"
              iconSize={10}
              wrapperStyle={{ fontSize: '12px', color: colors.txt.secondary }}
            />
            <ReferenceLine x={0} stroke={colors.border.DEFAULT} />
            {series.map((s, i) => (
              <Bar
                key={s.dataKey}
                dataKey={s.dataKey}
                name={s.name}
                fill={s.color}
                radius={[0, 4, 4, 0]}
                animationDuration={800}
                animationEasing="ease-out"
                animationBegin={i * 200}
                barSize={10}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
});
