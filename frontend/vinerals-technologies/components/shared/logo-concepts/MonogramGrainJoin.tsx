import { cn } from '@/lib/utils';
import { MONOGRAM_PX, type MonogramProps } from './types';

/**
 * Grain join monogram — production mark.
 * Two hand-cut strokes meeting at a carved notch;
 * woodworking / joinery metaphor for “software made by hand.”
 */
export default function MonogramGrainJoin({
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
      {/* Left rail — thick timber with a stepped tenon at the base */}
      <path
        d="M7 5.5
           L 11.2 5.5
           L 14.6 18.8
           L 13.1 18.8
           L 12.35 16.2
           L 10.85 16.2
           L 11.7 19.4
           L 14.9 27.2
           L 12.6 27.2
           L 7 5.5 Z"
        fill="currentColor"
      />
      {/* Right rail — thinner timber locking into the step */}
      <path
        d="M25.2 5.5
           L 21.1 5.5
           L 16.4 19.0
           L 17.9 19.0
           L 18.6 21.4
           L 20.1 21.4
           L 19.0 18.2
           L 17.0 27.2
           L 19.3 27.2
           L 25.2 5.5 Z"
        fill="currentColor"
      />
      {/* Grain ticks — subtle hand-tool texture on left rail */}
      <path
        d="M8.4 8.2 L 10.1 8.0 M8.7 11.0 L 10.5 10.7 M9.1 13.8 L 11.0 13.4"
        stroke="currentColor"
        strokeWidth="0.55"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Clay peg at the join */}
      {accent && (
        <circle cx="16" cy="20.2" r="1.45" className="fill-secondary-500" />
      )}
    </svg>
  );
}
