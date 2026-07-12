export type ConceptVariant = 'default' | 'light';
export type ConceptSize = 'sm' | 'md' | 'lg';

export interface MonogramProps {
  className?: string;
  size?: ConceptSize;
  /** When true, clay accent (ink drop / stamp edge) uses secondary tones. */
  accent?: boolean;
}

export interface ConceptLogoProps {
  className?: string;
  variant?: ConceptVariant;
  size?: ConceptSize;
  /** Skip the link — used on the review page so marks aren’t clickable traps. */
  linked?: boolean;
}

export const MONOGRAM_PX: Record<ConceptSize, number> = {
  sm: 28,
  md: 36,
  lg: 48,
};
