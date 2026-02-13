'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { LineChartCard } from '@/components/organisms/charts/LineChartCard';
import { PieChartCard } from '@/components/organisms/charts/PieChartCard';
import { BarChartCard } from '@/components/organisms/charts/BarChartCard';
import { SunburstChartCard } from '@/components/organisms/charts/SunburstChartCard';
import {
  lineChartData,
  pieChartData,
  barChartData,
  sunburstData,
} from '@/data/charts';

export function AnalyticsTemplate() {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <PageHeader
        title="Analytics"
        subtitle="Portfolio performance and allocation insights."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LineChartCard title="Fund Performance" data={lineChartData} />
        <PieChartCard title="Counterparty Allocation" data={pieChartData} />
        <BarChartCard title="Top Holdings by Symbol" data={barChartData} />
        <SunburstChartCard
          title="Asset Breakdown by Counterparty"
          data={sunburstData}
        />
      </div>
    </div>
  );
}
