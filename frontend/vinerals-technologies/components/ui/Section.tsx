import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'primary' | 'dark';
  paddingY?: 'sm' | 'md' | 'lg';
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  background = 'white',
  paddingY = 'lg',
  id,
  className,
}) => {
  // Cream paper substrate alternating with deeper bands and forest blocks.
  const backgrounds = {
    white:   'bg-[var(--cream)] text-[var(--ink-soft)]',
    gray:    'bg-[var(--cream-deep)] text-[var(--ink-soft)]',
    primary: 'bg-[var(--primary-700)] text-[var(--cream)]',
    dark:    'bg-[var(--ink)] text-[var(--cream)]',
  };

  const paddings = {
    sm: 'py-10 md:py-16',
    md: 'py-14 md:py-20',
    lg: 'py-16 md:py-24',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative',
        backgrounds[background],
        paddings[paddingY],
        'px-5 md:px-10 lg:px-14',
        className
      )}
    >
      {/* Hairline rule at the top — magazine section separator. */}
      <div
        aria-hidden
        className={cn(
          'absolute left-5 right-5 md:left-10 md:right-10 lg:left-14 lg:right-14 top-0 h-px',
          background === 'primary' || background === 'dark'
            ? 'bg-white/15'
            : 'bg-[var(--ink-hairline)]/45'
        )}
      />
      <div className="relative max-w-[1320px] mx-auto">{children}</div>
    </section>
  );
};

export default Section;
