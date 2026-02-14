'use client';

import { cn } from '@/lib/cn';
import { X } from 'lucide-react';
import {
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  size?: ModalSize;
  children: ReactNode;
}

export function Modal({
  open,
  onClose,
  title,
  size = 'md',
  className,
  children,
  ...props
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose],
  );

  // Manage focus and scroll lock
  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    // Focus the first focusable element inside the panel
    requestAnimationFrame(() => {
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusable?.length) {
        focusable[0].focus();
      }
    });

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === 'string' ? title : undefined}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={cn(
          'relative z-10 w-full bg-surface rounded-xl shadow-xl animate-scale-in',
          'max-h-[90vh] flex flex-col',
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-border-light">
            <div className="text-lg font-semibold text-txt-primary">
              {title}
            </div>
            <button
              onClick={onClose}
              className={cn(
                'flex items-center justify-center h-8 w-8 rounded-lg',
                'text-txt-tertiary hover:text-txt-primary hover:bg-surface-alt',
                'transition-colors duration-fast',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary',
              )}
              aria-label="Close modal"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
