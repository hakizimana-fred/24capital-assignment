import { Select } from '@/components/atoms';
import { Calendar } from 'lucide-react';
import type { SelectOption } from '@/types';

const periodOptions: SelectOption[] = [
  { value: '2025-08', label: 'Period: August 2025' },
  { value: '2025-07', label: 'Period: July 2025' },
  { value: '2025-06', label: 'Period: June 2025' },
  { value: '2025-05', label: 'Period: May 2025' },
];

interface PeriodSelectorProps {
  value?: string;
  onChange?: (value: string) => void;
}

export function PeriodSelector({ value = '2025-08', onChange }: PeriodSelectorProps) {
  return (
    <Select
      options={periodOptions}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      icon={<Calendar className="h-4 w-4" />}
    />
  );
}
