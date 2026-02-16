'use client';

import { memo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { PieLabelRenderProps } from 'recharts';
import { Card, Text } from '@/components/atoms';
import { colors } from '@/design-system/tokens';
import { cn } from '@/lib/cn';
import type { ReusablePieChartProps, PieChartDataPoint } from '@/types';

const RADIAN = Math.PI / 180;

function renderOuterLabel(props: PieLabelRenderProps) {
  const { cx, cy, midAngle, outerRadius, percent } = props;
  if (
    typeof cx !== 'number' ||
    typeof cy !== 'number' ||
    typeof midAngle !== 'number' ||
    typeof outerRadius !== 'number' ||
    typeof percent !== 'number' ||
    percent < 0.02
  )
    return null;

  const radius = outerRadius + 18;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
      fontWeight={500}
      fill={colors.txt.secondary}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
}

export const ReusablePieChart = memo(function ReusablePieChart({
  title,
  data,
  innerRadius = 0,
  outerRadius = 120,
  showLabels = true,
  height = 320,
  className,
}: ReusablePieChartProps) {
  return (
    <Card className={cn('p-6', className)}>
      {title && (
        <Text variant="heading-4" className="mb-4">
          {title}
        </Text>
      )}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={1}
              dataKey="value"
              nameKey="name"
              label={showLabels ? renderOuterLabel : false}
              labelLine={false}
              animationDuration={1200}
              animationEasing="ease-out"
              isAnimationActive={true}
            >
              {data.map((entry: PieChartDataPoint, index: number) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: colors.surface.DEFAULT,
                border: `1px solid ${colors.border.DEFAULT}`,
                borderRadius: '8px',
                fontSize: '13px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
              formatter={(value, name) => [
                `${Number(value)}%`,
                name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
});
