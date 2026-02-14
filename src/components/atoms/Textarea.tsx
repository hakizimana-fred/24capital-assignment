'use client';

import { cn } from '@/lib/cn';
import { type TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxCharacters?: number;
  currentLength?: number;
}

export function Textarea({
  maxCharacters,
  currentLength = 0,
  className,
  ...props
}: TextareaProps) {
  return (
    <div className="relative">
      <textarea
        className={cn(
          'w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-txt-primary',
          'placeholder:text-txt-tertiary',
          'focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary',
          'transition-colors duration-fast resize-none',
          className,
        )}
        maxLength={maxCharacters}
        {...props}
      />
      {maxCharacters !== undefined && (
        <span className="absolute bottom-2 right-3 text-xs text-txt-tertiary">
          {currentLength}/{maxCharacters}
        </span>
      )}
    </div>
  );
}
