import { cn } from '@/lib/utils';
import { MONOGRAM_PX, type MonogramProps } from './types';

/**
 * Concept A — Ink V
 * Calligraphic V with uneven weight: heavier left stem, thinner right stroke,
 * slight italic lean, clay ink drop at the base.
 */
export default function MonogramInkV({
  className,
  size = 'md',
  accent = true,
}: MonogramProps) {
  const px = MONOGRAM_PX[size];

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden
    >
      {/* Filled calligraphic V — left arm thicker, right arm tapering */}
      <path
        d="M5.2 4.8
           C 7.5 4.2, 9.2 5.5, 10.1 8.2
           L 14.8 24.6
           C 15.1 25.5, 15.5 26.1, 16.05 26.1
           C 16.55 26.1, 16.85 25.6, 17.0 24.9
           L 24.6 6.4
           C 25.1 5.2, 26.4 4.4, 27.6 4.9
           C 28.4 5.25, 28.7 6.1, 28.3 6.95
           L 18.2 27.1
           C 17.4 28.7, 16.55 29.4, 15.55 29.4
           C 14.2 29.4, 13.15 28.2, 12.55 26.5
           L 4.35 8.0
           C 3.7 6.4, 3.9 5.2, 5.2 4.8 Z"
        fill="currentColor"
      />
      {accent && (
        <circle cx="16" cy="29.2" r="1.35" className="fill-secondary-500" />
      )}
    </svg>
  );
}
