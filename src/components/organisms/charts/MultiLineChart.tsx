'use client';

import { Card, Select, Text } from '@/components/atoms';
import { colors } from '@/design-system/tokens';
import { cn } from '@/lib/cn';
import type { MultiLineChartProps } from '@/types';
import { Calendar } from 'lucide-react';
import { memo } from 'react';
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const MultiLineChart = memo(function MultiLineChart({
  title,
  subtitle,
  data,
  xAxisKey,
  series,
  xAxisLabel,
  yAxisLabel,
  yAxisTicks,
  height = 280,
  showDots = true,
  yAxisDomain,
  tooltipFormatter,
  yAxisFormatter,
  periodOptions,
  periodValue,
  onPeriodChange,
  className,
}: MultiLineChartProps) {
  return (
    <Card className={cn('p-6', className)}>
      <div className="mb-4 flex items-start justify-between">
        <div>
          <Text variant="heading-4">{title}</Text>
          {subtitle && (
            <Text variant="body-sm" className="mt-1">
              {subtitle}
            </Text>
          )}
        </div>
        {periodOptions && periodValue && onPeriodChange && (
          <Select
            options={periodOptions}
            value={periodValue}
            onChange={(e) => onPeriodChange(e.target.value)}
            icon={<Calendar className="h-4 w-4" />}
          />
        )}
      </div>

      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: yAxisLabel ? 20 : 5, right: 20, left: 10, bottom: xAxisLabel ? 20 : 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={colors.border.light} />
            <XAxis
              dataKey={xAxisKey}
              tick={{ fontSize: 12, fill: colors.txt.tertiary }}
              axisLine={{ stroke: colors.border.DEFAULT }}
              tickLine={false}
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
              tick={{ fontSize: 12, fill: colors.txt.tertiary }}
              axisLine={false}
              tickLine={false}
              domain={yAxisDomain}
              ticks={yAxisTicks}
              tickFormatter={yAxisFormatter}
            >
              {yAxisLabel && (
                <Label
                  value={yAxisLabel}
                  angle={-90}
                  position="insideTopLeft"
                  dy={-15}
                  style={{
                    fontSize: 12,
                    fill: colors.txt.tertiary,
                    textAnchor: 'end',
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
                  : Number(value).toLocaleString(),
                undefined,
              ]}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: '12px', color: colors.txt.secondary }}
            />
            {series.map((s, i) => (
              <Line
                key={s.dataKey}
                type="monotone"
                dataKey={s.dataKey}
                name={s.name}
                stroke={s.color}
                strokeWidth={2.5}
                dot={showDots ? { r: 4, fill: s.color, strokeWidth: 0 } : false}
                activeDot={{ r: 5, strokeWidth: 2 }}
                animationDuration={800}
                animationEasing="ease-out"
                animationBegin={i * 200}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
});
