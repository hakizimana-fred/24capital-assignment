import type {
  LineChartDataPoint,
  PieChartDataPoint,
  BarChartDataPoint,
  SunburstNode,
} from '@/types';
import { colors } from '@/design-system/tokens';

export const lineChartData: LineChartDataPoint[] = [
  { month: 'Jan', company1: 4200, company2: 3800 },
  { month: 'Feb', company1: 4500, company2: 3600 },
  { month: 'Mar', company1: 4100, company2: 4000 },
  { month: 'Apr', company1: 4800, company2: 4200 },
  { month: 'May', company1: 5200, company2: 4100 },
  { month: 'Jun', company1: 5000, company2: 4500 },
  { month: 'Jul', company1: 5400, company2: 4800 },
  { month: 'Aug', company1: 5800, company2: 5000 },
  { month: 'Sep', company1: 5600, company2: 5200 },
  { month: 'Oct', company1: 6000, company2: 5400 },
  { month: 'Nov', company1: 6200, company2: 5100 },
  { month: 'Dec', company1: 6500, company2: 5600 },
];

export const pieChartData: PieChartDataPoint[] = [
  { name: 'Goldman Sachs', value: 28, color: colors.chart.blue },
  { name: 'JP Morgan', value: 22, color: colors.chart.teal },
  { name: 'Morgan Stanley', value: 18, color: colors.chart.orange },
  { name: 'Citadel', value: 14, color: colors.chart.purple },
  { name: 'Blackrock', value: 10, color: colors.chart.pink },
  { name: 'Bridgewater', value: 5, color: colors.chart.indigo },
  { name: 'Others', value: 3, color: colors.chart.slate },
];

export const barChartData: BarChartDataPoint[] = [
  { symbol: 'AAPL', month1: 12400, month2: 14200 },
  { symbol: 'MSFT', month1: 10800, month2: 11500 },
  { symbol: 'GOOGL', month1: 9200, month2: 8800 },
  { symbol: 'AMZN', month1: 8500, month2: 9800 },
  { symbol: 'NVDA', month1: 7200, month2: 10200 },
  { symbol: 'TSLA', month1: 6800, month2: 5900 },
  { symbol: 'META', month1: 5400, month2: 6100 },
  { symbol: 'JPM', month1: 4200, month2: 4800 },
];

export const sunburstData: SunburstNode = {
  name: 'Portfolio',
  children: [
    {
      name: 'Goldman Sachs',
      color: colors.chart.blue,
      children: [
        { name: 'Equities', value: 45 },
        { name: 'Fixed Income', value: 30 },
        { name: 'Derivatives', value: 25 },
      ],
    },
    {
      name: 'JP Morgan',
      color: colors.chart.teal,
      children: [
        { name: 'Equities', value: 35 },
        { name: 'Fixed Income', value: 40 },
        { name: 'Commodities', value: 15 },
      ],
    },
    {
      name: 'Morgan Stanley',
      color: colors.chart.orange,
      children: [
        { name: 'Equities', value: 50 },
        { name: 'Derivatives', value: 20 },
        { name: 'FX', value: 10 },
      ],
    },
    {
      name: 'Citadel',
      color: colors.chart.purple,
      children: [
        { name: 'Equities', value: 30 },
        { name: 'Options', value: 25 },
        { name: 'Futures', value: 20 },
      ],
    },
    {
      name: 'Blackrock',
      color: colors.chart.pink,
      children: [
        { name: 'ETFs', value: 40 },
        { name: 'Fixed Income', value: 25 },
        { name: 'Real Assets', value: 15 },
      ],
    },
  ],
};
