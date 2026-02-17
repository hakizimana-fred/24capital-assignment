import type { BarSeries, PieChartDataPoint, SunburstNode } from '@/types';

// ─── Shared Counterparty Palette ────────────────────────────────────────────

const counterpartyPalette = [
  '#D3F169', // Counterparty A — deep blue
  '#6BC1F0', // Counterparty B — lime
  '#BDC3C9', // Counterparty C — teal
  '#77E1AD', // Counterparty D — slate
  '#F9F196', // Counterparty E — medium blue
  '#7BA5FF', // Counterparty F — cyan
  '#F0A7FF', // Counterparty G — light teal
  '#6EEDF2', // Counterparty H — light blue
] as const;

const counterpartyBalancePalette = [
  '#6BC1F0', // Counterparty A — deep blue
  '#D3F169', // Counterparty B — lime
  '#FFECC0', // Counterparty C — teal
  '#BDC3C9', // Counterparty D — slate
  '#6EEDF2', // Counterparty E — medium blue
  '#75A9B7', // Counterparty F — cyan
  '#77E1AD', // Counterparty G — light teal
  '#7BA5FF', // Counterparty H — light blue
] as const;

// ─── Pie Chart: Company Balance by Counterparty ─────────────────────────────

export const counterpartyPieData: PieChartDataPoint[] = [
  { name: 'Counterparty A', value: 33.3, color: counterpartyBalancePalette[0] },
  { name: 'Counterparty B', value: 21.7, color: counterpartyBalancePalette[1] },
  { name: 'Counterparty C', value: 17.9, color: counterpartyBalancePalette[2] },
  { name: 'Counterparty D', value: 10.3, color: counterpartyBalancePalette[3] },
  { name: 'Counterparty E', value: 6.0, color: counterpartyBalancePalette[4] },
  { name: 'Counterparty F', value: 4.2, color: counterpartyBalancePalette[5] },
  { name: 'Counterparty G', value: 4.1, color: counterpartyBalancePalette[6] },
  { name: 'Counterparty H', value: 2.5, color: counterpartyBalancePalette[7] },
];

// ─── Bar Chart: Symbol-Level Returns ────────────────────────────────────────

export const symbolReturnsData: Record<string, string | number>[] = [
  { symbol: 'US100', jan: -0.0, feb: 0.0 },
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
  { dataKey: 'jan', name: 'Jan 26', color: '#36BFFA' },
  { dataKey: 'feb', name: 'Feb 26', color: '#0086C9' },
];

// ─── Sunburst: Counterparty & Asset Breakdown ───────────────────────────────

export const counterpartySunburstData: SunburstNode = {
  name: 'Portfolio',
  children: [
    {
      name: 'Counterparty A',
      color: counterpartyPalette[0],
      children: [
        { name: 'Asset 1', value: 20 },

        { name: 'Asset 3', value: 20 },
      ],
    },
    {
      name: 'Counterparty B',
      color: counterpartyPalette[1],
      children: [
        { name: 'Asset 1', value: 10 },
        { name: 'Asset 2', value: 10 },
        { name: 'Asset 3', value: 10, color: '#DDF2FF' },
      ],
    },
    {
      name: 'Counterparty C',
      color: counterpartyPalette[2],
      children: [
        { name: 'Asset 1', value: 12, color: '#A7A7A7' },
        { name: 'Asset 2', value: 12 },
        { name: 'Asset 3', value: 12 },
        { name: 'Asset 4', value: 12, color: '#F2F2F2' },
      ],
    },
    {
      name: 'Counterparty D',
      color: counterpartyPalette[3],
      children: [
        { name: 'Asset 1', value: 12 },
        { name: 'Asset 2', value: 16 },
        { name: 'Asset 4', value: 25 },
      ],
    },
    {
      name: 'Counterparty E',
      color: counterpartyPalette[4],
      children: [
        { name: 'Asset 1', value: 12 },
        { name: 'Asset 4', value: 20 },
      ],
    },
    {
      name: 'Counterparty F',
      color: counterpartyPalette[5],
      children: [
        { name: 'Asset 1', value: 20 },
        { name: 'Asset 2', value: 25 },
      ],
    },
    {
      name: 'Counterparty G',
      color: counterpartyPalette[6],
      children: [{ name: 'Asset 1', value: 50 }],
    },
    {
      name: 'Counterparty H',
      color: counterpartyPalette[7],
      children: [{ name: 'Asset 1', value: 40 }],
    },
  ],
};
