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
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    dark: 'bg-primary-900 text-white',
  };

  const paddings = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-16 md:py-24',
  };

  return (
    <section
      id={id}
      className={cn(
        backgrounds[background],
        paddings[paddingY],
        'px-4 md:px-8',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;
