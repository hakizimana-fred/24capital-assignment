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
    <div className="flex gap-4">
      {funds.map((fund) => (
        <FundTab
          key={fund.id}
          fund={fund}
          isActive={fund.id === activeFundId}
          onClick={() => onFundChange(fund.id)}
        />
      ))}
    </div>
  );
}
