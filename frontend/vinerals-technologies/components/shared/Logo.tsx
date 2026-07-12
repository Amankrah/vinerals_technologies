import Link from 'next/link';
import { cn } from '@/lib/utils';
import MonogramGrainJoin from '@/components/shared/logo-concepts/MonogramGrainJoin';
import type { ConceptSize } from '@/components/shared/logo-concepts/types';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'text-xl md:text-[1.375rem]',
  md: 'text-2xl md:text-[1.75rem]',
  lg: 'text-3xl md:text-[2.25rem]',
};

/**
 * Logo — craft monogram (Grain join) + wordmark.
 * Software made by hand: two rails locking at a carved notch.
 */
export default function Logo({ className, variant = 'default', size = 'md' }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={cn(
        'inline-flex items-center gap-2.5 font-display leading-none transition-opacity hover:opacity-80',
        sizeClasses[size],
        isLight
          ? 'text-white [text-shadow:0_1px_12px_rgba(10,20,16,0.45)]'
          : 'text-[var(--ink)]',
        className
      )}
      aria-label="Vinerals Technologies · accueil"
    >
      <MonogramGrainJoin
        size={size as ConceptSize}
        className={isLight ? 'text-white' : 'text-primary-800'}
      />
      <span className="inline-flex items-baseline gap-2">
        <span className="italic">Vinerals</span>
        <span
          aria-hidden
          className={cn(
            'translate-y-[-0.2em] font-display text-[0.65em] italic',
            isLight ? 'text-secondary-200' : 'text-secondary-500'
          )}
        >
          ·
        </span>
        <span
          className={cn(
            'translate-y-[-0.15em] font-mono text-[0.42em] uppercase tracking-[0.28em]',
            isLight ? 'text-white/85' : 'text-[var(--ink-muted)]'
          )}
        >
          Technologies
        </span>
      </span>
    </Link>
  );
}

export function LogoText({ className, variant = 'default' }: Omit<LogoProps, 'size'>) {
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={cn(
        'inline-flex items-baseline gap-2 font-display text-xl leading-none transition-opacity hover:opacity-80 md:text-[1.375rem]',
        isLight ? 'text-[var(--cream)]' : 'text-[var(--ink)]',
        className
      )}
      aria-label="Vinerals Technologies · accueil"
    >
      <span className="italic">Vinerals</span>
      <span
        aria-hidden
        className="translate-y-[-0.2em] font-display text-[0.65em] italic text-secondary-500"
      >
        ·
      </span>
      <span
        className={cn(
          'translate-y-[-0.15em] font-mono text-[0.42em] uppercase tracking-[0.28em]',
          isLight ? 'text-white/70' : 'text-[var(--ink-muted)]'
        )}
      >
        Technologies
      </span>
    </Link>
  );
}

/**
 * LogoSeal — cooperative stamp / colophon with Grain join monogram.
 */
export function LogoSeal({
  className,
  variant = 'default',
  framed = false,
}: Omit<LogoProps, 'size'> & { framed?: boolean }) {
  const isLight = variant === 'light';
  const colorClasses = {
    default: 'text-[var(--ink)] border-[var(--ink-hairline)]/60',
    light: 'text-[var(--cream)] border-white/30',
    dark: 'text-[var(--ink)] border-[var(--ink-hairline)]/60',
  };
  const mutedTone = isLight ? 'text-white/60' : 'text-[var(--ink-muted)]';

  return (
    <div
      className={cn(
        'inline-flex flex-col items-start gap-2 leading-none',
        framed && 'border px-5 py-4',
        colorClasses[variant],
        className
      )}
      aria-label="Vinerals Technologies · Coopérative de solidarité"
    >
      <div className="inline-flex items-center gap-2.5">
        <MonogramGrainJoin
          size="sm"
          className={isLight ? 'text-[var(--cream)]' : 'text-primary-800'}
        />
        <div className="inline-flex items-baseline gap-2">
          <span className="font-display text-2xl italic md:text-[1.625rem]">Vinerals</span>
          <span
            aria-hidden
            className="translate-y-[-0.15em] font-display text-base italic text-secondary-500"
          >
            ·
          </span>
          <span
            className={cn(
              'translate-y-[-0.1em] font-mono text-[0.6rem] uppercase tracking-[0.28em]',
              mutedTone
            )}
          >
            Technologies
          </span>
        </div>
      </div>
      <div className={cn('font-mono text-[0.6rem] uppercase tracking-[0.24em]', mutedTone)}>
        Coopérative de solidarité · MTL
      </div>
    </div>
  );
}

export function LogoIcon({ className, size = 'md' }: Pick<LogoProps, 'className' | 'size'>) {
  return (
    <Link
      href="/"
      className={cn('inline-flex transition-opacity hover:opacity-80', className)}
      aria-label="Vinerals · accueil"
    >
      <MonogramGrainJoin size={size as ConceptSize} className="text-primary-800" />
    </Link>
  );
}
