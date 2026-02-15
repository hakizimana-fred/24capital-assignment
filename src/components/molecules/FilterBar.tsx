'use client';

import { Input, Select } from '@/components/atoms';
import { cn } from '@/lib/cn';
import type { FilterTab, SelectOption } from '@/types';
import { ListFilter, Search } from 'lucide-react';

const filterTabs: { value: FilterTab; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
];

interface FilterBarProps {
  activeFilter: FilterTab;
  onFilterChange: (filter: FilterTab) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sectionOptions: SelectOption[];
  selectedSection: string;
  onSectionChange: (section: string) => void;
}

export function FilterBar({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  sectionOptions,
  selectedSection,
  onSectionChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="inline-flex rounded-lg border border-border bg-surface-soft ">
        {filterTabs.map((tab, index) => (
          <button
            key={tab.value}
            onClick={() => onFilterChange(tab.value)}
            className={cn(
              'rounded-md px-5 py-2 text-sm font-medium transition-colors duration-fast',
              index === 0 && 'flex-1', // 👈 first item stretches
              activeFilter === tab.value
                ? 'bg-brand-primary text-txt-inverse'
                : 'text-txt-secondary hover:text-txt-primary',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Input
          placeholder="Search question..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          icon={<Search className="h-4 w-4" />}
          className="w-full sm:w-52"
        />
        <Select
          options={sectionOptions}
          value={selectedSection}
          onChange={(e) => onSectionChange(e.target.value)}
          icon={<ListFilter className="h-4 w-4" />}
        />
      </div>
    </div>
  );
}
