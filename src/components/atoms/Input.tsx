import { cn } from '@/lib/cn';
import { type InputHTMLAttributes, type ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export function Input({ icon, className, ...props }: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-txt-tertiary">
          {icon}
        </span>
      )}
      <input
        className={cn(
          'h-9 w-full rounded-lg border border-border bg-surface px-3 text-sm text-txt-primary',
          'placeholder:text-txt-tertiary',
          'focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary',
          'transition-colors duration-fast',
          icon && 'pl-9',
          className,
        )}
        {...props}
      />
    </div>
  );
}
