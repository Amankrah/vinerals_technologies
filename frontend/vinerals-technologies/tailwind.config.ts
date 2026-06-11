import type { Config } from 'tailwindcss';

/**
 * Vinerals Atelier — Warm Québécois design system.
 *
 * Token names are preserved (primary/secondary/accent/gray/slate/white) so
 * existing utility classes across the codebase re-skin without find-and-replace.
 * Values map to a forest + clay + ochre palette on a cream paper substrate.
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paper surface — what was "white" is now warm paper, not sterile #fff.
        white: '#FCF8F0',
        black: '#0E0C08',

        // Primary — Forêt: deep Laurentian green. Brand anchor.
        primary: {
          50:  '#EBF0EC',
          100: '#D2DDD4',
          200: '#A4BAA8',
          300: '#71977A',
          400: '#4A7355',
          500: '#2F5639',
          600: '#234029',
          700: '#1F3A2E', // anchor
          800: '#15281F',
          900: '#0E1C16',
          950: '#0A1410',
        },

        // Secondary — Argile: clay terracotta. Warmth.
        secondary: {
          50:  '#FBEDE6',
          100: '#F4D4C2',
          200: '#E8B197',
          300: '#DA8C6E',
          400: '#C97050',
          500: '#B8634A', // anchor
          600: '#9D4B33',
          700: '#7F3925',
        },

        // Accent — Ocre: aged gold / mustard. Sharp call-to-action.
        accent: {
          50:  '#FBF6E0',
          100: '#F4E8B0',
          200: '#E9D375',
          300: '#D8B845',
          400: '#C9A227',
          500: '#B08C18', // anchor
          600: '#8C700E',
          700: '#6A5408',
        },

        // Gray scale — warm parchment grays, not cool neutrals.
        gray: {
          50:  '#F5EFE6', // cream-base (body)
          100: '#EBE4D6', // cream-deep
          200: '#E5DCC8', // parchment
          300: '#D2C3A6',
          400: '#A89A7C',
          500: '#6D6049', // bumped for AA legibility on cream-deep
          600: '#4D4533', // bumped for AA headroom on cream-deep
          700: '#3F3829',
          800: '#2A251A',
          900: '#1B1810',
          950: '#110F09',
        },

        // Slate — used in the dark footer/CTA. Re-skinned to deep ink browns.
        slate: {
          50:  '#F5EFE6',
          100: '#E5DCC8',
          200: '#C7B89A',
          300: '#A89A7C',
          400: '#7E715A',
          500: '#5C5240',
          600: '#3F3829',
          700: '#2A251A',
          800: '#1B1810',
          900: '#0E0C08',
          950: '#070604',
        },
      },
      fontFamily: {
        // sans/serif intentionally swapped — body and display are both serif here.
        sans:    ['var(--font-body)', 'Spectral', 'Georgia', 'serif'],
        serif:   ['var(--font-body)', 'Spectral', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        mono:    ['var(--font-mono)', 'DM Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'editorial': '-0.02em',
        'label': '0.18em',
      },
      borderRadius: {
        // Magazine aesthetic — softer organic radii than slick app rounding.
        'none': '0',
        'sm':   '2px',
        DEFAULT:'3px',
        'md':   '4px',
        'lg':   '6px',
        'xl':   '10px',
        '2xl':  '16px',
        '3xl':  '24px',
        'full': '9999px',
      },
      boxShadow: {
        // Paper-on-paper shadows: warm, low, characterful.
        'paper': '0 1px 0 rgba(63, 56, 41, 0.04), 0 2px 8px rgba(63, 56, 41, 0.06)',
        'card':  '0 1px 0 rgba(63, 56, 41, 0.05), 0 8px 24px -8px rgba(31, 58, 46, 0.12)',
        'lift':  '0 2px 0 rgba(63, 56, 41, 0.06), 0 18px 36px -12px rgba(31, 58, 46, 0.18)',
        'inset-rule': 'inset 0 -1px 0 rgba(31, 58, 46, 0.18)',
        'deckle': '4px 4px 0 rgba(184, 99, 74, 0.18)',
      },
      backgroundImage: {
        // Paper grain — subtle SVG noise, applied via class.
        'grain': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.247 0 0 0 0 0.219 0 0 0 0 0.161 0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>\")",
        // Hand-drawn squiggle underline.
        'squiggle': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='6' viewBox='0 0 14 6'><path d='M0 3 Q 3.5 0, 7 3 T 14 3' fill='none' stroke='%23B8634A' stroke-width='1.4' stroke-linecap='round'/></svg>\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-down': 'fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1.2s linear infinite',
        'ink-bleed': 'inkBleed 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'paper-drift': 'paperDrift 14s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        inkBleed: {
          '0%':   { opacity: '0', filter: 'blur(6px)', transform: 'translateY(6px)' },
          '100%': { opacity: '1', filter: 'blur(0px)', transform: 'translateY(0)' },
        },
        paperDrift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%':      { transform: 'translate3d(0, -6px, 0) rotate(0.3deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
