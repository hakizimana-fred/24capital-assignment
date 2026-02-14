import { cn } from '@/lib/cn';
import { ChevronDown } from 'lucide-react';
import { type SelectHTMLAttributes } from 'react';
import type { SelectOption } from '@/types';

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  options: SelectOption[];
  icon?: React.ReactNode;
}

export function Select({ options, icon, className, ...props }: SelectProps) {
  return (
    <div className="relative inline-flex items-center">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-txt-tertiary">
          {icon}
        </span>
      )}
      <select
        className={cn(
          'h-9 appearance-none rounded-lg border border-border bg-surface pr-8 text-sm text-txt-primary',
          'focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary',
          'transition-colors duration-fast cursor-pointer',
          icon ? 'pl-9' : 'pl-3',
          className,
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-txt-tertiary" />
    </div>
  );
}
