import { cn } from '@/lib/cn';
import { type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        hover ? 'card-hover' : 'card',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
