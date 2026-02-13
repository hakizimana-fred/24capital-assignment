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

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  group: 'main' | 'others';
}

// ─── General ─────────────────────────────────────────────────────────────────

export type FilterTab = 'all' | 'pending' | 'completed';

export interface SelectOption {
  value: string;
  label: string;
}
