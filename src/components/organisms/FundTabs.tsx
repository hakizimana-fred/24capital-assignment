'use client';

import { FundTab } from '@/components/molecules/FundTab';
import type { Fund } from '@/types';

interface FundTabsProps {
  funds: Fund[];
  activeFundId: string;
  onFundChange: (fundId: string) => void;
}

export function FundTabs({ funds, activeFundId, onFundChange }: FundTabsProps) {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {funds.map((fund) => (
        <div
          key={fund.id}
          className="shrink-0 rounded-2xl bg-surface-soft p-1.5 sm:shrink sm:flex-1"
        >
          <FundTab
            fund={fund}
            isActive={fund.id === activeFundId}
            onClick={() => onFundChange(fund.id)}
          />
        </div>
      ))}
    </div>
  );
}
