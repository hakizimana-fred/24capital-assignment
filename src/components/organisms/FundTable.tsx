'use client';

import { useMemo } from 'react';
import { QuestionRow } from '@/components/molecules/QuestionRow';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import type { Section, FilterTab } from '@/types';

interface FundTableProps {
  sections: Section[];
  activeFilter: FilterTab;
  searchQuery: string;
  selectedSection: string;
}

export function FundTable({
  sections,
  activeFilter,
  searchQuery,
  selectedSection,
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
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-txt-tertiary">
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
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-txt-tertiary">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredSections.map((section) => (
            <SectionGroup key={section.id} section={section} />
          ))}
          {filteredSections.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="px-4 py-12 text-center text-sm text-txt-tertiary"
              >
                No questions match your filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function SectionGroup({ section }: { section: Section }) {
  return (
    <>
      <SectionHeader title={section.title} />
      {section.questions.map((question) => (
        <QuestionRow key={question.id} question={question} />
      ))}
    </>
  );
}
