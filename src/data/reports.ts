import type { PieChartDataPoint, BarSeries, SunburstNode } from '@/types';

// ─── Shared Counterparty Palette ────────────────────────────────────────────

const counterpartyPalette = [
  '#1B6CE0', // Counterparty A — deep blue
  '#B8CC2A', // Counterparty B — lime
  '#0D9488', // Counterparty C — teal
  '#94A3B8', // Counterparty D — slate
  '#3B82F6', // Counterparty E — medium blue
  '#67E8F9', // Counterparty F — cyan
  '#5EEAD4', // Counterparty G — light teal
  '#93C5FD', // Counterparty H — light blue
] as const;

// ─── Pie Chart: Company Balance by Counterparty ─────────────────────────────

export const counterpartyPieData: PieChartDataPoint[] = [
  { name: 'Counterparty A', value: 33.3, color: counterpartyPalette[0] },
  { name: 'Counterparty B', value: 21.7, color: counterpartyPalette[1] },
  { name: 'Counterparty C', value: 17.9, color: counterpartyPalette[2] },
  { name: 'Counterparty D', value: 10.3, color: counterpartyPalette[3] },
  { name: 'Counterparty E', value: 6.0, color: counterpartyPalette[4] },
  { name: 'Counterparty F', value: 4.2, color: counterpartyPalette[5] },
  { name: 'Counterparty G', value: 4.1, color: counterpartyPalette[6] },
  { name: 'Counterparty H', value: 2.5, color: counterpartyPalette[7] },
];

// ─── Bar Chart: Symbol-Level Returns ────────────────────────────────────────

export const symbolReturnsData: Record<string, string | number>[] = [
  { symbol: 'US100', jan: -0.3, feb: 0.2 },
  { symbol: 'USDZAR', jan: -0.5, feb: 2.0 },
  { symbol: 'USDCAD', jan: 0.8, feb: -0.8 },
  { symbol: 'USDCHF', jan: -0.3, feb: 0.5 },
  { symbol: 'USDJPY', jan: -0.8, feb: 1.5 },
  { symbol: 'TRYUSD', jan: -2.5, feb: 0.8 },
  { symbol: 'GBPUSD', jan: -1.0, feb: 2.8 },
  { symbol: 'XAGUSD', jan: -3.5, feb: 0.2 },
  { symbol: 'EURUSD', jan: -1.5, feb: 1.5 },
  { symbol: 'XAUUSD', jan: 2.5, feb: 3.0 },
];

export const symbolReturnsSeries: BarSeries[] = [
  { dataKey: 'jan', name: 'Jan 26', color: '#1E3A5F' },
  { dataKey: 'feb', name: 'Feb 26', color: '#60A5FA' },
];

// ─── Sunburst: Counterparty & Asset Breakdown ───────────────────────────────

export const counterpartySunburstData: SunburstNode = {
  name: 'Portfolio',
  children: [
    {
      name: 'Counterparty A',
      color: counterpartyPalette[0],
      children: [
        { name: 'Asset 1', value: 40 },
        { name: 'Asset 2', value: 25 },
        { name: 'Asset 3', value: 20 },
      ],
    },
    {
      name: 'Counterparty B',
      color: counterpartyPalette[1],
      children: [
        { name: 'Asset 1', value: 30 },
        { name: 'Asset 2', value: 25 },
        { name: 'Asset 3', value: 20 },
      ],
    },
    {
      name: 'Counterparty C',
      color: counterpartyPalette[2],
      children: [
        { name: 'Asset 1', value: 35 },
        { name: 'Asset 2', value: 20 },
        { name: 'Asset 3', value: 15 },
        { name: 'Asset 4', value: 10 },
      ],
    },
    {
      name: 'Counterparty D',
      color: counterpartyPalette[3],
      children: [
        { name: 'Asset 1', value: 20 },
        { name: 'Asset 2', value: 15 },
        { name: 'Asset 4', value: 10 },
      ],
    },
    {
      name: 'Counterparty E',
      color: counterpartyPalette[4],
      children: [
        { name: 'Asset 1', value: 15 },
        { name: 'Asset 4', value: 12 },
      ],
    },
    {
      name: 'Counterparty F',
      color: counterpartyPalette[5],
      children: [
        { name: 'Asset 1', value: 10 },
        { name: 'Asset 2', value: 8 },
      ],
    },
    {
      name: 'Counterparty G',
      color: counterpartyPalette[6],
      children: [
        { name: 'Asset 1', value: 12 },
        { name: 'Asset 4', value: 8 },
      ],
    },
    {
      name: 'Counterparty H',
      color: counterpartyPalette[7],
      children: [
        { name: 'Asset 1', value: 10 },
        { name: 'Asset 3', value: 5 },
      ],
    },
  ],
};
