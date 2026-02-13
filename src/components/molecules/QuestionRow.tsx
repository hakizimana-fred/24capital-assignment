import { Badge, StatusIcon, warningToBadgeVariant } from '@/components/atoms';
import type { QuestionItem } from '@/types';

interface QuestionRowProps {
  question: QuestionItem;
}

export function QuestionRow({ question }: QuestionRowProps) {
  return (
    <tr className="border-b border-border-light transition-colors duration-fast hover:bg-surface-alt">
      <td className="px-4 py-3.5 text-sm text-txt-primary max-w-[320px]">
        <span className="line-clamp-2">
          {question.number} - {question.question}
        </span>
      </td>
      <td className="px-4 py-3.5 text-sm text-txt-secondary max-w-[280px]">
        <span className="line-clamp-2">{question.answer}</span>
      </td>
      <td className="px-4 py-3.5">
        <Badge variant={warningToBadgeVariant(question.warningLevel)} />
      </td>
      <td className="px-4 py-3.5">
        <StatusIcon isReviewed={question.isReviewed} />
      </td>
      <td className="px-4 py-3.5">
        <button className="text-sm font-medium text-txt-link hover:text-brand-primary-hover transition-colors duration-fast">
          View Details
        </button>
      </td>
    </tr>
  );
}
