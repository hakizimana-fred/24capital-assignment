'use client';

import { FilterBar } from '@/components/molecules/FilterBar';
import { FundTable } from '@/components/organisms/FundTable';
import { FundTabs } from '@/components/organisms/FundTabs';
import { PageHeader } from '@/components/organisms/PageHeader';
import { QuestionDetailModal } from '@/components/organisms/QuestionDetailModal';
import { funds, fundSections } from '@/data/funds';
import { getQuestionDetail } from '@/data/questionDetails';
import { useModal } from '@/hooks/useModal';
import type { FilterTab, QuestionDetail, QuestionItem, SelectOption } from '@/types';
import { useCallback, useMemo, useState } from 'react';

export function FundProgressionTemplate() {
  const [activeFundId, setActiveFundId] = useState(funds[0].id);
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');

  const detailModal = useModal<QuestionDetail>();

  const sections = useMemo(() => fundSections[activeFundId] ?? [], [activeFundId]);

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

  const handleViewDetails = useCallback(
    (question: QuestionItem) => {
      const detail = getQuestionDetail(
        question.id,
        question.question,
        question.number,
        question.warningLevel,
      );
      detailModal.open(detail);
    },
    [detailModal],
  );

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <PageHeader title="Fund Progression" subtitle="Review client responses for each funds." />

      <FundTabs funds={funds} activeFundId={activeFundId} onFundChange={handleFundChange} />

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
        onViewDetails={handleViewDetails}
      />

      {detailModal.data && (
        <QuestionDetailModal
          open={detailModal.isOpen}
          onClose={detailModal.close}
          detail={detailModal.data}
        />
      )}
    </div>
  );
}
