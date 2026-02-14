'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, Text } from '@/components/atoms';
import { colors } from '@/design-system/tokens';
import type { BarChartDataPoint } from '@/types';

interface BarChartCardProps {
  title: string;
  data: BarChartDataPoint[];
}

export function BarChartCard({ title, data }: BarChartCardProps) {
  return (
    <Card className="p-6">
      <Text variant="heading-4" className="mb-4">
        {title}
      </Text>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={colors.border.light} vertical={false} />
            <XAxis
              dataKey="symbol"
              tick={{ fontSize: 12, fill: colors.txt.tertiary }}
              axisLine={{ stroke: colors.border.DEFAULT }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: colors.txt.tertiary }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: colors.surface.DEFAULT,
                border: `1px solid ${colors.border.DEFAULT}`,
                borderRadius: '8px',
                fontSize: '13px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
              formatter={(value) => [`$${Number(value).toLocaleString()}`, undefined]}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: '12px', color: colors.txt.secondary }}
            />
            <Bar
              dataKey="month1"
              name="July 2025"
              fill={colors.chart.blue}
              radius={[4, 4, 0, 0]}
              animationDuration={800}
              animationEasing="ease-out"
            />
            <Bar
              dataKey="month2"
              name="August 2025"
              fill={colors.chart.teal}
              radius={[4, 4, 0, 0]}
              animationDuration={800}
              animationEasing="ease-out"
              animationBegin={200}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
