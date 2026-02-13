import { cn } from '@/lib/cn';
import { type ElementType, type HTMLAttributes } from 'react';

type TextVariant =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'label'
  | 'overline';

const variantClasses: Record<TextVariant, string> = {
  'heading-1': 'text-3xl font-bold tracking-tight text-txt-primary',
  'heading-2': 'text-2xl font-semibold tracking-tight text-txt-primary',
  'heading-3': 'text-xl font-semibold text-txt-primary',
  'heading-4': 'text-lg font-semibold text-txt-primary',
  body: 'text-base text-txt-secondary',
  'body-sm': 'text-sm text-txt-secondary',
  caption: 'text-xs text-txt-tertiary',
  label: 'text-xs font-semibold uppercase tracking-wider text-txt-tertiary',
  overline: 'text-xs font-bold uppercase tracking-widest text-txt-tertiary',
};

const defaultTagMap: Record<TextVariant, ElementType> = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'heading-4': 'h4',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  label: 'span',
  overline: 'span',
};

interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: ElementType;
  color?: string;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const weightClasses: Record<string, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export function Text({
  variant = 'body',
  as,
  color,
  weight,
  className,
  children,
  ...props
}: TextProps) {
  const Component = as ?? defaultTagMap[variant];

  return (
    <Component
      className={cn(
        variantClasses[variant],
        weight && weightClasses[weight],
        color,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
