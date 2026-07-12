import { cn } from '@/lib/utils';
import { MONOGRAM_PX, type MonogramProps } from './types';

/**
 * Concept B — Workshop stamp
 * Soft rounded plate with a hairline “press” double edge;
 * compact ink V inside. Cooperative imprint / colophon feel.
 */
export default function MonogramStamp({
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
      {/* Outer press plate */}
      <rect
        x="1.5"
        y="1.5"
        width="29"
        height="29"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="1.35"
        fill="none"
      />
      {/* Inner hairline — the “second press” */}
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="2"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.55"
        fill="none"
      />
      {/* Compact V */}
      <path
        d="M10.2 8.2
           L 15.35 22.4
           C 15.55 22.95, 15.85 23.15, 16.15 23.15
           C 16.45 23.15, 16.7 22.95, 16.85 22.45
           L 22.4 8.4
           C 22.65 7.75, 23.35 7.45, 23.95 7.7
           C 24.5 7.95, 24.75 8.55, 24.5 9.1
           L 17.85 23.9
           C 17.25 25.25, 16.55 25.85, 15.75 25.85
           C 14.85 25.85, 14.1 25.1, 13.55 23.85
           L 7.35 9.15
           C 7.05 8.45, 7.35 7.75, 8.0 7.5
           C 8.7 7.25, 9.45 7.55, 9.8 8.2
           L 10.2 8.2 Z"
        fill="currentColor"
      />
      {accent && (
        <circle cx="16" cy="27.4" r="1.1" className="fill-secondary-500" />
      )}
    </svg>
  );
}
