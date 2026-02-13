'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, Text } from '@/components/atoms';
import { colors } from '@/design-system/tokens';
import type { LineChartDataPoint } from '@/types';

interface LineChartCardProps {
  title: string;
  data: LineChartDataPoint[];
}

export function LineChartCard({ title, data }: LineChartCardProps) {
  return (
    <Card className="p-6">
      <Text variant="heading-4" className="mb-4">
        {title}
      </Text>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={colors.border.light} />
            <XAxis
              dataKey="month"
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
            <Line
              type="monotone"
              dataKey="company1"
              name="Company A"
              stroke={colors.chart.blue}
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, strokeWidth: 2 }}
              animationDuration={800}
              animationEasing="ease-out"
            />
            <Line
              type="monotone"
              dataKey="company2"
              name="Company B"
              stroke={colors.chart.teal}
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, strokeWidth: 2 }}
              animationDuration={800}
              animationEasing="ease-out"
              animationBegin={200}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
