'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/organisms/PageHeader';
import { FundTabs } from '@/components/organisms/FundTabs';
import { FundTable } from '@/components/organisms/FundTable';
import { FilterBar } from '@/components/molecules/FilterBar';
import { funds, fundSections } from '@/data/funds';
import type { FilterTab, SelectOption } from '@/types';

export function FundProgressionTemplate() {
  const [activeFundId, setActiveFundId] = useState(funds[0].id);
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');

  const sections = useMemo(
    () => fundSections[activeFundId] ?? [],
    [activeFundId],
  );

  const sectionOptions: SelectOption[] = useMemo(
    () => [
      { value: 'all', label: 'All sections' },
      ...sections.map((s) => ({
        value: String(s.id),
        label: s.title,
      })),
    ],
    [sections],
  );

  const handleFundChange = (fundId: string) => {
    setActiveFundId(fundId);
    setActiveFilter('all');
    setSearchQuery('');
    setSelectedSection('all');
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <PageHeader
        title="Fund Progression"
        subtitle="Review client responses for each funds."
      />

      <FundTabs
        funds={funds}
        activeFundId={activeFundId}
        onFundChange={handleFundChange}
      />

      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sectionOptions={sectionOptions}
        selectedSection={selectedSection}
        onSectionChange={setSelectedSection}
      />

      <FundTable
        sections={sections}
        activeFilter={activeFilter}
        searchQuery={searchQuery}
        selectedSection={selectedSection}
      />
    </div>
  );
}
