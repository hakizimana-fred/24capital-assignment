'use client';

import { PageHeader } from '@/components/organisms/PageHeader';
import { ReusablePieChart } from '@/components/organisms/charts/ReusablePieChart';
import { HorizontalBarChart } from '@/components/organisms/charts/HorizontalBarChart';
import { ReusableSunburstChart } from '@/components/organisms/charts/ReusableSunburstChart';
import {
  counterpartyPieData,
  symbolReturnsData,
  symbolReturnsSeries,
  counterpartySunburstData,
} from '@/data/reports';

export function ReportsTemplate() {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <PageHeader
        title="Pie Chart – Company Balance by Counterparty"
        subtitle="Review the size of company by selected period"
        showPeriod={false}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ReusablePieChart
          title="Company Balance by Counterparty"
          data={counterpartyPieData}
          height={380}
        />
        <HorizontalBarChart
          title="Symbol-Level Returns: Jan 26 vs Feb-26"
          data={symbolReturnsData}
          categoryKey="symbol"
          series={symbolReturnsSeries}
          xAxisLabel="Returns (%)"
          yAxisLabel="Symbols"
          xAxisDomain={[-4, 3]}
        />
        <ReusableSunburstChart
          title="Sunburst Chart"
          data={counterpartySunburstData}
        />
      </div>
    </div>
  );
}
