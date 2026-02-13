'use client';

import { Card, Text } from '@/components/atoms';
import { SunburstChart } from './SunburstChart';
import type { SunburstNode } from '@/types';

interface SunburstChartCardProps {
  title: string;
  data: SunburstNode;
}

export function SunburstChartCard({ title, data }: SunburstChartCardProps) {
  const counterparties = data.children ?? [];

  return (
    <Card className="p-6">
      <Text variant="heading-4" className="mb-4">
        {title}
      </Text>
      <div className="flex items-center justify-between gap-4">
        <SunburstChart data={data} width={260} height={260} />
        <div className="flex flex-col gap-2">
          {counterparties.map((cp) => (
            <div key={cp.name} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: cp.color }}
              />
              <span className="text-xs text-txt-secondary">{cp.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
