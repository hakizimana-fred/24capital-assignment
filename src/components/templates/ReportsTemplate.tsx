'use client';

import { Card, Text } from '@/components/atoms';
import { PageHeader } from '@/components/organisms/PageHeader';
import { HorizontalBarChart } from '@/components/organisms/charts/HorizontalBarChart';
import { ReusablePieChart } from '@/components/organisms/charts/ReusablePieChart';
import { ReusableSunburstChart } from '@/components/organisms/charts/ReusableSunburstChart';
import {
  counterpartyPieData,
  counterpartySunburstData,
  symbolReturnsData,
  symbolReturnsSeries,
} from '@/data/reports';

export function ReportsTemplate() {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <PageHeader
        title="Pie Chart – Company Balance by Counterparty"
        subtitle="Review the size of company by selected period"
        showPeriod={false}
      />

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Card hover className="border-0 bg-surface p-6">
            <Text variant="heading-4">Company Balance by Counterparty</Text>
          </Card>
          <ReusablePieChart data={counterpartyPieData} height={300} />
        </div>
        <div className="flex flex-col gap-2">
          <Card hover className="border-0 bg-surface p-6">
            <Text variant="heading-4">Symbol-Level Returns: Jan 26 vs Feb-26</Text>
          </Card>
          <HorizontalBarChart
            data={symbolReturnsData}
            categoryKey="symbol"
            series={symbolReturnsSeries}
            xAxisLabel="Returns (%)"
            yAxisLabel="Symbols"
            xAxisDomain={[-4, 3]}
            height={380}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Card hover className="border-0 bg-surface p-6">
            <Text variant="heading-4">Sunburst Chart</Text>
          </Card>
          <ReusableSunburstChart data={counterpartySunburstData} />
        </div>
      </div>
    </div>
  );
}
