'use client';

import { useState } from 'react';
import { Badge, Button, Modal, RadioGroup, Textarea } from '@/components/atoms';
import { warningToBadgeVariant } from '@/components/atoms';
import { cn } from '@/lib/cn';
import { CheckCircle2, Clock, Copy, ExternalLink, FileText } from 'lucide-react';
import type {
  Attachment,
  FundStatus,
  QuestionAnswer,
  QuestionDetail,
} from '@/types';

interface QuestionDetailModalProps {
  open: boolean;
  onClose: () => void;
  detail: QuestionDetail;
  onSave?: (updated: QuestionDetail) => void;
}

const answerOptions = [
  { value: 'yes' as const, label: 'Yes' },
  { value: 'no' as const, label: 'No' },
  { value: 'na' as const, label: 'N/A' },
];

const statusOptions = [
  {
    value: 'completed' as const,
    label: 'Completed',
    icon: <CheckCircle2 className="h-3.5 w-3.5" />,
  },
  {
    value: 'pending' as const,
    label: 'Pending',
    icon: <Clock className="h-3.5 w-3.5" />,
  },
];

function AttachmentChip({ attachment }: { attachment: Attachment }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-lg border border-border bg-surface-alt',
        'px-3 py-1.5 text-sm text-txt-secondary',
      )}
    >
      <FileText className="h-4 w-4 text-txt-tertiary" />
      <span className="font-medium text-txt-primary">{attachment.name}</span>
      <span className="text-xs text-txt-tertiary">({attachment.size})</span>
      <button
        type="button"
        className="ml-1 text-txt-tertiary hover:text-txt-primary transition-colors duration-fast"
        aria-label={`Copy ${attachment.name}`}
      >
        <Copy className="h-3.5 w-3.5" />
      </button>
    </span>
  );
}

export function QuestionDetailModal({
  open,
  onClose,
  detail,
  onSave,
}: QuestionDetailModalProps) {
  const [answer, setAnswer] = useState<QuestionAnswer>(detail.currentAnswer);
  const [status, setStatus] = useState<FundStatus>(detail.status);
  const [internalNote, setInternalNote] = useState('');

  const handleSave = () => {
    onSave?.({
      ...detail,
      currentAnswer: answer,
      status,
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Details" size="xl">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border-light">
        {/* Left column — Question details */}
        <div className="flex-1 p-6 space-y-5">
          {/* Section label + Warning */}
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-txt-tertiary">
              {detail.sectionLabel}
            </span>
            <Badge variant={warningToBadgeVariant(detail.warningLevel)} />
          </div>

          {/* Question */}
          <p className="text-sm font-medium text-txt-primary leading-relaxed">
            {detail.question}
          </p>

          {/* RMP Reference */}
          {detail.rmpReference && (
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-txt-link hover:text-brand-primary-hover transition-colors duration-fast"
            >
              {detail.rmpReference}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}

          {/* Answer selection */}
          <RadioGroup<QuestionAnswer>
            name="answer"
            options={answerOptions}
            value={answer}
            onChange={setAnswer}
          />

          {/* Evidence */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-txt-primary">
              Details / Evidence
            </h4>
            <p className="text-sm text-txt-secondary leading-relaxed">
              {detail.evidence}
            </p>
          </div>

          {/* Attachments */}
          {detail.attachments.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {detail.attachments.map((file) => (
                <AttachmentChip key={file.name} attachment={file} />
              ))}
            </div>
          )}

          {/* Status selection */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-txt-primary">
              Mark status as
            </h4>
            <RadioGroup<FundStatus>
              name="status"
              options={statusOptions}
              value={status}
              onChange={setStatus}
            />
          </div>
        </div>

        {/* Right column — Notes */}
        <div className="w-full md:w-72 p-6 space-y-4">
          <h4 className="text-sm font-semibold text-txt-primary">Notes</h4>

          {detail.notes.length > 0 ? (
            <div className="space-y-3">
              {detail.notes.map((note, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-xs text-txt-tertiary">
                    {note.date}
                  </span>
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    {note.content}
                    {note.author && (
                      <span className="text-txt-tertiary">
                        {' '}
                        - {note.author}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-txt-tertiary">No notes yet.</p>
          )}

          {/* Internal notes */}
          <div className="space-y-2 pt-2">
            <h4 className="text-sm font-semibold text-txt-primary">
              Internal notes
            </h4>
            <Textarea
              placeholder="Enter your notes here"
              rows={4}
              maxCharacters={200}
              currentLength={internalNote.length}
              value={internalNote}
              onChange={(e) => setInternalNote(e.target.value)}
            />
          </div>

          <Button variant="secondary" size="sm" className="w-full">
            Add note
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border-light">
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </Modal>
  );
}
