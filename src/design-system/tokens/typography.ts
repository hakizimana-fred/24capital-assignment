export const fontFamily = {
  sans: ['var(--font-montserrat)', '"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
} as const;

export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }] as [string, { lineHeight: string }],
  sm: ['0.8125rem', { lineHeight: '1.25rem' }] as [string, { lineHeight: string }],
  base: ['0.875rem', { lineHeight: '1.375rem' }] as [string, { lineHeight: string }],
  md: ['0.9375rem', { lineHeight: '1.5rem' }] as [string, { lineHeight: string }],
  lg: ['1rem', { lineHeight: '1.5rem' }] as [string, { lineHeight: string }],
  xl: ['1.125rem', { lineHeight: '1.75rem' }] as [string, { lineHeight: string }],
  '2xl': ['1.25rem', { lineHeight: '1.75rem' }] as [string, { lineHeight: string }],
  '3xl': ['1.5rem', { lineHeight: '2rem' }] as [string, { lineHeight: string }],
  '4xl': ['1.875rem', { lineHeight: '2.25rem' }] as [string, { lineHeight: string }],
} as const;
