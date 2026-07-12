import { cn } from '@/lib/utils';
import type { ConceptSize, ConceptVariant } from './types';

interface WordmarkProps {
  className?: string;
  variant?: ConceptVariant;
  size?: ConceptSize;
}

const sizeClasses: Record<ConceptSize, string> = {
  sm: 'text-xl md:text-[1.375rem]',
  md: 'text-2xl md:text-[1.75rem]',
  lg: 'text-3xl md:text-[2.25rem]',
};

/**
 * Shared wordmark spine for all three concepts —
 * italic Vinerals · mono TECHNOLOGIES.
 */
export default function Wordmark({
  className,
  variant = 'default',
  size = 'md',
}: WordmarkProps) {
  const isLight = variant === 'light';

  return (
    <span
      className={cn(
        'inline-flex items-baseline gap-2 font-display leading-none',
        sizeClasses[size],
        isLight ? 'text-white' : 'text-[var(--ink)]',
        className
      )}
    >
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
  );
}
