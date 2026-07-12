import Link from 'next/link';
import { cn } from '@/lib/utils';
import Wordmark from './Wordmark';
import MonogramInkV from './MonogramInkV';
import MonogramStamp from './MonogramStamp';
import MonogramGrainJoin from './MonogramGrainJoin';
import type { ConceptLogoProps } from './types';

export type ConceptId = 'ink' | 'stamp' | 'grain';

const monograms = {
  ink: MonogramInkV,
  stamp: MonogramStamp,
  grain: MonogramGrainJoin,
} as const;

interface ConceptLogoFullProps extends ConceptLogoProps {
  concept: ConceptId;
}

/**
 * Monogram + shared wordmark. Used on the concept review page;
 * winner will later replace the production Logo.
 */
export default function ConceptLogo({
  concept,
  className,
  variant = 'default',
  size = 'md',
  linked = false,
}: ConceptLogoFullProps) {
  const Monogram = monograms[concept];
  const isLight = variant === 'light';

  const inner = (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 leading-none',
        isLight ? 'text-white' : 'text-[var(--ink)]',
        className
      )}
    >
      <Monogram
        size={size}
        className={isLight ? 'text-white' : 'text-primary-800'}
      />
      <Wordmark variant={variant} size={size} />
    </span>
  );

  if (!linked) {
    return (
      <span aria-label={`Vinerals Technologies · concept ${concept}`}>
        {inner}
      </span>
    );
  }

  return (
    <Link
      href="/"
      className="inline-flex transition-opacity hover:opacity-80"
      aria-label="Vinerals Technologies · accueil"
    >
      {inner}
    </Link>
  );
}

export { MonogramInkV, MonogramStamp, MonogramGrainJoin, Wordmark };
