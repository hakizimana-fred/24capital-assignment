'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, Text } from '@/components/atoms';
import { colors } from '@/design-system/tokens';
import type { PieChartDataPoint } from '@/types';

interface PieChartCardProps {
  title: string;
  data: PieChartDataPoint[];
}

export function PieChartCard({ title, data }: PieChartCardProps) {
  return (
    <Card className="p-6">
      <Text variant="heading-4" className="mb-4">
        {title}
      </Text>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={95}
              paddingAngle={2}
              dataKey="value"
              animationDuration={1200}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
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
              formatter={(value) => [`${value}%`, undefined]}
            />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: '12px', color: colors.txt.secondary }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
