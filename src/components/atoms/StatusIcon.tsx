import { cn } from '@/lib/cn';
import { CheckCheck, Clock } from 'lucide-react';

interface StatusIconProps {
  isReviewed: boolean;
  className?: string;
}

export function StatusIcon({ isReviewed, className }: StatusIconProps) {
  return isReviewed ? (
    <CheckCheck
      className={cn('h-4.5 w-4.5 text-brand-primary', className)}
    />
  ) : (
    <span
      className={cn(
        'inline-flex h-5 w-5 items-center justify-center rounded-full bg-status-warning-bg text-status-warning-text',
        className,
      )}
    >
      <Clock className="h-3 w-3" />
    </span>
  );
}
