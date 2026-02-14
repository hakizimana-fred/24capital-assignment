'use client';

import { useCallback, useState } from 'react';
import { PageHeader } from '@/components/organisms/PageHeader';
import { LineChartCard } from '@/components/organisms/charts/LineChartCard';
import { MultiLineChart } from '@/components/organisms/charts/MultiLineChart';
import { PieChartCard } from '@/components/organisms/charts/PieChartCard';
import { BarChartCard } from '@/components/organisms/charts/BarChartCard';
import { SunburstChartCard } from '@/components/organisms/charts/SunburstChartCard';
import {
  lineChartData,
  pieChartData,
  barChartData,
  sunburstData,
  companySizeData,
  companySizeSeries,
  yearOptions,
} from '@/data/charts';

export function AnalyticsTemplate() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const handleYearChange = useCallback((value: string) => setSelectedYear(value), []);

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <PageHeader
        title="Analytics"
        subtitle="Portfolio performance and allocation insights."
      />

      <MultiLineChart
        title="Company Size Comparison"
        subtitle="Review the size of company by selected period"
        data={companySizeData}
        xAxisKey="month"
        series={companySizeSeries}
        xAxisLabel="Month"
        yAxisLabel="Company Size"
        yAxisDomain={[200, 240]}
        height={320}
        periodOptions={yearOptions}
        periodValue={selectedYear}
        onPeriodChange={handleYearChange}
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
