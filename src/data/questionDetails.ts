import type { QuestionDetail } from '@/types';

/**
 * Mock question detail data keyed by question ID.
 * In production this would come from an API.
 */
export const questionDetails: Record<string, QuestionDetail> = {
  'gaf-1-1': {
    sectionLabel: 'SECTION 1 - 1.1',
    warningLevel: 'minor',
    question:
      'Did you provide detailed performance reports to 24 Capital Management during the reporting period?',
    rmpReference: 'RMP Section 8.1 & 8.2',
    currentAnswer: 'yes',
    evidence:
      'However, growth going forward is expected to be fueled by "capex tailwinds" as the heavy lifting of fiber rollouts concludes, easing the pressure on balance sheets, the analysts suggested.',
    attachments: [
      { name: 'apex-report.pdf', size: '4mb' },
      { name: 'report.pdf', size: '4mb' },
    ],
    status: 'pending',
    notes: [
      {
        date: '21 May 2025',
        content:
          'There was an issue with the portal while uploading the documents.',
        author: 'Ozgun',
      },
    ],
  },
  'gaf-1-2': {
    sectionLabel: 'SECTION 1 - 1.2',
    warningLevel: 'minor',
    question:
      'Did you provide detailed performance reports to 24 Capital Management during the reporting period?',
    rmpReference: 'RMP Section 4.2',
    currentAnswer: 'no',
    evidence:
      'Reports were delayed due to system migration. A revised timeline was communicated to stakeholders.',
    attachments: [{ name: 'migration-notice.pdf', size: '2mb' }],
    status: 'pending',
    notes: [],
  },
  'gaf-1-3': {
    sectionLabel: 'SECTION 1 - 1.3',
    warningLevel: 'major',
    question:
      'Did you provide detailed performance reports to 24 Capital Management during the reporting period?',
    rmpReference: 'RMP Section 8.1',
    currentAnswer: 'na',
    evidence:
      'Not applicable for this reporting period due to fund restructuring.',
    attachments: [],
    status: 'pending',
    notes: [
      {
        date: '15 Jun 2025',
        content: 'Restructuring expected to complete by Q3.',
        author: 'Admin',
      },
    ],
  },
};

/**
 * Returns a QuestionDetail for any question ID. Falls back to generated detail
 * for IDs not in the mock map.
 */
export function getQuestionDetail(
  questionId: string,
  questionText: string,
  sectionNumber: string,
  warningLevel: 'minor' | 'major' | 'none',
): QuestionDetail {
  if (questionDetails[questionId]) {
    return questionDetails[questionId];
  }

  return {
    sectionLabel: `SECTION ${sectionNumber}`,
    warningLevel,
    question: questionText,
    currentAnswer: 'yes',
    evidence: 'No additional evidence provided.',
    attachments: [],
    status: 'pending',
    notes: [],
  };
}
