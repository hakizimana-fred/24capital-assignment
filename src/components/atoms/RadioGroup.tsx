import { cn } from '@/lib/cn';
import { type ReactNode } from 'react';

export interface RadioOption<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
}

interface RadioGroupProps<T extends string> {
  name: string;
  options: RadioOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export function RadioGroup<T extends string>({
  name,
  options,
  value,
  onChange,
  className,
}: RadioGroupProps<T>) {
  return (
    <fieldset className={cn('flex items-center gap-3', className)}>
      {options.map((option) => {
        const isSelected = value === option.value;

        return (
          <label
            key={option.value}
            className={cn(
              'inline-flex items-center gap-2 cursor-pointer rounded-lg border px-4 py-2',
              'text-sm font-medium transition-colors duration-fast',
              'focus-within:ring-2 focus-within:ring-brand-primary focus-within:ring-offset-1',
              isSelected
                ? 'border-brand-primary bg-brand-primary-light text-brand-primary'
                : 'border-border bg-surface text-txt-secondary hover:bg-surface-alt',
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isSelected}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            {option.icon && (
              <span className="flex items-center">{option.icon}</span>
            )}
            <span>{option.label}</span>
            <span
              className={cn(
                'h-4 w-4 rounded-full border-2 flex items-center justify-center',
                'transition-colors duration-fast',
                isSelected
                  ? 'border-brand-primary'
                  : 'border-border',
              )}
            >
              {isSelected && (
                <span className="h-2 w-2 rounded-full bg-brand-primary" />
              )}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
}
