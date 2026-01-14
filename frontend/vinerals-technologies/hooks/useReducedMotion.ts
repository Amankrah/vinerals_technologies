'use client';

import { useMediaQuery } from './useMediaQuery';

/**
 * Hook to detect if user prefers reduced motion
 * Respects the prefers-reduced-motion media query for accessibility
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

/**
 * Hook to get animation configuration based on reduced motion preference
 * Returns modified animation settings if user prefers reduced motion
 */
export function useAnimationConfig() {
  const shouldReduceMotion = useReducedMotion();

  return {
    initial: shouldReduceMotion ? false : 'hidden',
    animate: 'visible',
    transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.5 },
  };
}
