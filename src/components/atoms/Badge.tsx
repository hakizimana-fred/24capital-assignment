import { cn } from '@/lib/cn';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import type { WarningLevel } from '@/types';

type BadgeVariant = 'minor-warning' | 'major-warning' | 'no-warning' | 'completed' | 'pending';

const variantClasses: Record<BadgeVariant, string> = {
  'minor-warning':
    'bg-status-warning-bg text-status-warning-text',
  'major-warning':
    'bg-status-danger-bg text-status-danger-text',
  'no-warning':
    'bg-status-success-bg text-green-700',
  completed:
    'bg-status-success-bg text-green-700',
  pending:
    'bg-status-warning-bg text-status-warning-text',
};

const variantIcons: Record<BadgeVariant, React.ReactNode> = {
  'minor-warning': <AlertTriangle className="h-3 w-3" />,
  'major-warning': <XCircle className="h-3 w-3" />,
  'no-warning': <CheckCircle2 className="h-3 w-3" />,
  completed: <CheckCircle2 className="h-3 w-3" />,
  pending: <AlertTriangle className="h-3 w-3" />,
};

const variantLabels: Record<BadgeVariant, string> = {
  'minor-warning': 'Minor Warning',
  'major-warning': 'Major Warning',
  'no-warning': 'No Warning',
  completed: 'Completed',
  pending: 'Pending',
};

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
  className?: string;
}

export function Badge({ variant, label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {variantIcons[variant]}
      {label ?? variantLabels[variant]}
    </span>
  );
}

/** Map from WarningLevel type to BadgeVariant */
export function warningToBadgeVariant(level: WarningLevel): BadgeVariant {
  switch (level) {
    case 'minor':
      return 'minor-warning';
    case 'major':
      return 'major-warning';
    case 'none':
      return 'no-warning';
  }
}
