/* ═══════════════════════════════════════════════════════════════════════════
   Application Types
   ═══════════════════════════════════════════════════════════════════════════ */

// ─── Fund Progression ────────────────────────────────────────────────────────

export type WarningLevel = 'minor' | 'major' | 'none';
export type FundStatus = 'completed' | 'pending';

export interface Fund {
  id: string;
  name: string;
  shortName: string;
  warningLevel: WarningLevel;
  status: FundStatus;
}

export interface QuestionItem {
  id: string;
  section: number;
  number: string;
  question: string;
  answer: string;
  warningLevel: WarningLevel;
  isReviewed: boolean;
}

export interface Section {
  id: number;
  title: string;
  questions: QuestionItem[];
}

// ─── Charts ──────────────────────────────────────────────────────────────────

export interface LineChartDataPoint {
  month: string;
  company1: number;
  company2: number;
}

export interface LineChartSeries {
  dataKey: string;
  name: string;
  color: string;
}

export interface MultiLineChartProps {
  title: string;
  subtitle?: string;
  data: Record<string, string | number>[];
  xAxisKey: string;
  series: LineChartSeries[];
  xAxisLabel?: string;
  yAxisLabel?: string;
  height?: number;
  showDots?: boolean;
  yAxisDomain?: [number | string, number | string];
  tooltipFormatter?: (value: number, name: string) => string;
  yAxisFormatter?: (value: number) => string;
  periodOptions?: SelectOption[];
  periodValue?: string;
  onPeriodChange?: (value: string) => void;
  className?: string;
}

export interface PieChartDataPoint {
  name: string;
  value: number;
  color: string;
}

export interface BarChartDataPoint {
  symbol: string;
  month1: number;
  month2: number;
}

export interface SunburstNode {
  name: string;
  value?: number;
  color?: string;
  children?: SunburstNode[];
}

// ─── Reusable Charts ────────────────────────────────────────────────────────

export interface ReusablePieChartProps {
  title: string;
  data: PieChartDataPoint[];
  innerRadius?: number;
  outerRadius?: number;
  showLabels?: boolean;
  height?: number;
  className?: string;
}

export interface BarSeries {
  dataKey: string;
  name: string;
  color: string;
}

export interface HorizontalBarChartProps {
  title: string;
  data: Record<string, string | number>[];
  categoryKey: string;
  series: BarSeries[];
  xAxisLabel?: string;
  yAxisLabel?: string;
  height?: number;
  xAxisDomain?: [number | string, number | string];
  tooltipFormatter?: (value: number, name: string) => string;
  className?: string;
}

export interface ReusableSunburstChartProps {
  title: string;
  data: SunburstNode;
  showLabels?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  group: 'main' | 'others';
}

// ─── Question Detail Modal ───────────────────────────────────────────────────

export type QuestionAnswer = 'yes' | 'no' | 'na';

export interface Attachment {
  name: string;
  size: string;
}

export interface Note {
  date: string;
  content: string;
  author: string;
}

export interface QuestionDetail {
  sectionLabel: string;
  warningLevel: WarningLevel;
  question: string;
  rmpReference?: string;
  currentAnswer: QuestionAnswer;
  evidence: string;
  attachments: Attachment[];
  status: FundStatus;
  notes: Note[];
}

// ─── General ─────────────────────────────────────────────────────────────────

export type FilterTab = 'all' | 'pending' | 'completed';

export interface SelectOption {
  value: string;
  label: string;
}
