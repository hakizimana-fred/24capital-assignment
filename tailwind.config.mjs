/**
 * Tailwind CSS Configuration
 * ==========================
 * Values mirror src/design-system/tokens/*.ts (the TypeScript tokens are the
 * source of truth for charts/JS usage; this config is the source of truth
 * for utility classes). Keep them in sync.
 */

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1F8BCA',
          'primary-hover': '#1559B8',
          'primary-light': '#E8F1FD',
          secondary: '#0D9488',
          'secondary-light': '#E6F7F5',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F9FAFB',
          page: '#EBF8FE',
          soft: '#F7F7F7',
        },
        border: {
          DEFAULT: '#E5E9F0',
          light: '#EEF2F7',
          divider: '#E2E8F0',
        },
        txt: {
          primary: '#1A202C',
          secondary: '#4A5568',
          tertiary: '#718096',
          inverse: '#FFFFFF',
          link: '#1B6CE0',
        },
        status: {
          success: '#22C55E',
          'success-bg': '#ECFDF5',
          warning: '#F59E0B',
          'warning-bg': '#FFFBEB',
          'warning-text': '#FA7319',
          danger: '#EF4444',
          'danger-bg': '#FEF2F2',
          'danger-text': '#DC2626',
          info: '#3B82F6',
          'info-bg': '#EFF6FF',
        },
        sidebar: {
          bg: '#F0FAFF',
          icon: '#94A3B8',
          'icon-active': '#1B6CE0',
          label: '#94A3B8',
        },
        chart: {
          blue: '#1B6CE0',
          teal: '#0D9488',
          orange: '#F59E0B',
          red: '#EF4444',
          purple: '#8B5CF6',
          pink: '#EC4899',
          indigo: '#6366F1',
          emerald: '#10B981',
          cyan: '#06B6D4',
          slate: '#64748B',
          lime: '#84CC16',
        },
      },

      fontFamily: {
        sans: [
          'var(--font-montserrat)',
          '"Montserrat"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.8125rem', { lineHeight: '1.25rem' }],
        base: ['0.875rem', { lineHeight: '1.375rem' }],
        md: ['0.9375rem', { lineHeight: '1.5rem' }],
        lg: ['1rem', { lineHeight: '1.5rem' }],
        xl: ['1.125rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '3xl': ['1.5rem', { lineHeight: '2rem' }],
        '4xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },

      borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        pill: '9999px',
      },

      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.03)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
        card: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08)',
        tab: '0 2px 8px rgba(27, 108, 224, 0.1)',
        'tab-active': '0 2px 12px rgba(27, 108, 224, 0.18)',
        dropdown: '0 10px 40px rgba(0, 0, 0, 0.08)',
      },

      spacing: {
        4.5: '1.125rem',
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        30: '7.5rem',
        60: '15rem',
      },

      width: {
        sidebar: '72px',
        'sidebar-expanded': '240px',
      },
      height: {
        header: '64px',
        'table-row': '56px',
      },
      maxWidth: {
        content: '1400px',
      },

      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
        spring: '500ms',
        chart: '800ms',
        'chart-slow': '1200ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pie-fill': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        'bar-grow': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in-up': 'fade-in-up 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slide-in-right 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 200ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'pie-fill': 'pie-fill 1200ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'bar-grow': 'bar-grow 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
