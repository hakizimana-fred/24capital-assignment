import { Badge, warningToBadgeVariant } from '@/components/atoms';
import { cn } from '@/lib/cn';
import type { Fund } from '@/types';

interface FundTabProps {
  fund: Fund;
  isActive: boolean;
  onClick: () => void;
}

export function FundTab({ fund, isActive, onClick }: FundTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative flex w-full flex-col gap-1.5 rounded-xl border px-5 py-4 text-left transition-all duration-base',
        isActive
          ? 'border-brand-primary border-6 border-r-8 bg-surface'
          : 'border-border bg-surface hover:border-border-light cursor-pointer',
      )}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold text-txt-primary">{fund.name}</span>
        <Badge variant={warningToBadgeVariant(fund.warningLevel)} />
      </div>
      <span className="text-sm text-txt-tertiary capitalize">{fund.status}</span>
      {isActive && (
        <span className="absolute right-4 top-4 h-3 w-3 rounded-full border-[3px] border-brand-primary bg-surface" />
      )}
    </button>
  );
}
