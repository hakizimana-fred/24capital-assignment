'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { MultiLineChart } from '@/components/organisms/charts/MultiLineChart';
import { companySizeData, companySizeSeries, yearOptions } from '@/data/charts';
import { useCallback, useState } from 'react';

export function AnalyticsTemplate() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const handleYearChange = useCallback((value: string) => setSelectedYear(value), []);

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <PageHeader
        title="Company Size Comparison"
        subtitle="Review the size of company by selected period."
      />

      <MultiLineChart
        title=""
        subtitle=""
        data={companySizeData}
        xAxisKey="month"
        series={companySizeSeries}
        xAxisLabel="Month"
        yAxisLabel="Company Size"
        yAxisDomain={[199, 241]}
        yAxisTicks={[200, 205, 210, 215, 220, 225, 230, 235, 240]}
        height={320}
        periodOptions={yearOptions}
        periodValue={selectedYear}
        onPeriodChange={handleYearChange}
      />
    </div>
  );
}
