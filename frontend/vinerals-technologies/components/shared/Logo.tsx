import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Logo — editorial wordmark. Display serif italic, with a small
 * hand-traced V monogram. No technical iconography; this is a
 * masthead, not a SaaS logo.
 */
export default function Logo({ className, variant = 'default', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl md:text-[1.375rem]',
    md: 'text-2xl md:text-[1.75rem]',
    lg: 'text-3xl md:text-[2.25rem]',
  };

  const colorClasses = {
    default: 'text-[var(--ink)]',
    light:   'text-[var(--cream)]',
    dark:    'text-[var(--ink)]',
  };

  return (
    <Link
      href="/"
      className={cn(
        'font-display leading-none transition-opacity hover:opacity-80 inline-flex items-baseline gap-2.5',
        sizeClasses[size],
        colorClasses[variant],
        className
      )}
      aria-label="Vinerals Technologies · accueil"
    >
      <span className="italic">Vinerals</span>
      <span aria-hidden className="text-secondary-500 font-display italic text-[0.65em] translate-y-[-0.2em]">
        ·
      </span>
      <span
        className={cn(
          'font-mono text-[0.42em] uppercase tracking-[0.28em] translate-y-[-0.15em]',
          variant === 'light' ? 'text-white/70' : 'text-[var(--ink-muted)]'
        )}
      >
        Technologies
      </span>
    </Link>
  );
}

export function LogoText({ className, variant = 'default' }: Omit<LogoProps, 'size'>) {
  const colorClasses = {
    default: 'text-[var(--ink)]',
    light:   'text-[var(--cream)]',
    dark:    'text-[var(--ink)]',
  };

  return (
    <Link
      href="/"
      className={cn(
        'font-display leading-none transition-opacity hover:opacity-80 inline-flex items-baseline gap-2',
        'text-xl md:text-[1.375rem]',
        colorClasses[variant],
        className
      )}
      aria-label="Vinerals Technologies · accueil"
    >
      <span className="italic">Vinerals</span>
      <span aria-hidden className="text-secondary-500 font-display italic text-[0.65em] translate-y-[-0.2em]">
        ·
      </span>
      <span
        className={cn(
          'font-mono text-[0.42em] uppercase tracking-[0.28em] translate-y-[-0.15em]',
          variant === 'light' ? 'text-white/70' : 'text-[var(--ink-muted)]'
        )}
      >
        Technologies
      </span>
    </Link>
  );
}

/**
 * LogoSeal — cooperative stamp / colophon mark. Italic Vinerals
 * over a mono-caps eyebrow, optionally framed by a hairline rectangle.
 * Use as a press-kit mark, business-card stamp, or footer signature.
 */
export function LogoSeal({
  className,
  variant = 'default',
  framed = false,
}: Omit<LogoProps, 'size'> & { framed?: boolean }) {
  const colorClasses = {
    default: 'text-[var(--ink)] border-[var(--ink-hairline)]/60',
    light:   'text-[var(--cream)] border-white/30',
    dark:    'text-[var(--ink)] border-[var(--ink-hairline)]/60',
  };
  const mutedTone =
    variant === 'light' ? 'text-white/60' : 'text-[var(--ink-muted)]';

  return (
    <div
      className={cn(
        'inline-flex flex-col items-start gap-1.5 leading-none',
        framed && 'border px-5 py-4',
        colorClasses[variant],
        className
      )}
      aria-label="Vinerals Technologies · Coopérative de solidarité"
    >
      <div className="inline-flex items-baseline gap-2">
        <span className="font-display italic text-2xl md:text-[1.625rem]">Vinerals</span>
        <span
          aria-hidden
          className="text-secondary-500 font-display italic text-base translate-y-[-0.15em]"
        >
          ·
        </span>
        <span
          className={cn(
            'font-mono text-[0.6rem] uppercase tracking-[0.28em] translate-y-[-0.1em]',
            mutedTone
          )}
        >
          Technologies
        </span>
      </div>
      <div className={cn('font-mono text-[0.6rem] uppercase tracking-[0.24em]', mutedTone)}>
        Coopérative de solidarité · MTL
      </div>
    </div>
  );
}

export function LogoIcon({ className, size = 'md' }: Pick<LogoProps, 'className' | 'size'>) {
  const sizeMap = { sm: 24, md: 32, lg: 40 };
  const dimension = sizeMap[size];

  return (
    <Link href="/" className={cn('transition-opacity hover:opacity-80', className)} aria-label="Vinerals · accueil">
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* Hand-traced V — uneven stroke, slight bow, italic lean. */}
        <path
          d="M6 5 Q 10 4, 16 27 Q 22 4, 26 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Single ink drop for character */}
        <circle cx="16" cy="27" r="1.6" fill="currentColor" />
      </svg>
    </Link>
  );
}
