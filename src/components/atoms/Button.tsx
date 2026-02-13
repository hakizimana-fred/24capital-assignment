import { cn } from '@/lib/cn';
import { type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-txt-inverse hover:bg-brand-primary-hover shadow-sm',
  secondary:
    'bg-surface border border-border text-txt-primary hover:bg-surface-alt',
  ghost:
    'text-txt-secondary hover:bg-surface-alt hover:text-txt-primary',
  link:
    'text-txt-link hover:text-brand-primary-hover underline-offset-4 hover:underline p-0',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs rounded-md',
  md: 'h-9 px-4 text-sm rounded-lg',
  lg: 'h-10 px-5 text-base rounded-lg',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-fast',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        variant !== 'link' && sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
