'use client';

import { QuestionRow } from '@/components/molecules/QuestionRow';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import type { FilterTab, QuestionItem, Section } from '@/types';
import { useMemo } from 'react';

interface FundTableProps {
  sections: Section[];
  activeFilter: FilterTab;
  searchQuery: string;
  selectedSection: string;
  onViewDetails?: (question: QuestionItem) => void;
}

export function FundTable({
  sections,
  activeFilter,
  searchQuery,
  selectedSection,
  onViewDetails,
}: FundTableProps) {
  const filteredSections = useMemo(() => {
    return sections
      .filter((section) => {
        if (selectedSection === 'all') return true;
        return section.id === Number(selectedSection);
      })
      .map((section) => ({
        ...section,
        questions: section.questions.filter((q) => {
          // Filter by status
          if (activeFilter === 'completed' && !q.isReviewed) return false;
          if (activeFilter === 'pending' && q.isReviewed) return false;

          // Filter by search
          if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return (
              q.question.toLowerCase().includes(query) ||
              q.answer.toLowerCase().includes(query) ||
              q.number.toLowerCase().includes(query)
            );
          }

          return true;
        }),
      }))
      .filter((section) => section.questions.length > 0);
  }, [sections, activeFilter, searchQuery, selectedSection]);

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead className="table-th">
            <tr className="border-b border-border">
              <th className="py-3 pl-6 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-txt-tertiary">
                Question
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-txt-tertiary">
                Answers
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-txt-tertiary">
                Warning
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-txt-tertiary">
                Status
              </th>
              <th className="py-3 pl-4 pr-6 text-left text-xs font-semibold uppercase tracking-wider text-txt-tertiary">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredSections.map((section) => (
              <SectionGroup key={section.id} section={section} onViewDetails={onViewDetails} />
            ))}
            {filteredSections.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-sm text-txt-tertiary">
                  No questions match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SectionGroup({
  section,
  onViewDetails,
}: {
  section: Section;
  onViewDetails?: (question: QuestionItem) => void;
}) {
  return (
    <>
      <SectionHeader title={section.title} />
      {section.questions.map((question) => (
        <QuestionRow key={question.id} question={question} onViewDetails={onViewDetails} />
      ))}
    </>
  );
}
