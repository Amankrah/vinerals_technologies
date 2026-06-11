import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  href: string;
  badge?: string;
  index?: number;
  className?: string;
}

/**
 * ServiceCard — magazine article tile. Numbered, hairline-divided,
 * with an italic display title and a clay shadow on hover.
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  href,
  badge,
  index,
  className,
}) => {
  const numeral = index !== undefined
    ? String(index + 1).padStart(2, '0')
    : null;

  return (
    <article
      className={cn(
        'group relative bg-[var(--paper)] p-8 md:p-10',
        'border border-[var(--ink-hairline)]/40',
        'shadow-paper',
        'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'hover:shadow-deckle hover:border-[var(--secondary-500)]',
        'hover:-translate-y-1',
        className
      )}
    >
      {/* Top row — numeral + badge */}
      <div className="flex items-start justify-between mb-6">
        {numeral ? (
          <span className="numeral text-3xl md:text-4xl">{numeral}.</span>
        ) : (
          <span className="text-primary-700 [&_svg]:w-8 [&_svg]:h-8">{icon}</span>
        )}
        {badge && (
          <span className="badge badge-accent">{badge}</span>
        )}
      </div>

      {/* If we have a numeral, show icon as a small mark beside the heading */}
      {numeral && (
        <div className="mb-4 text-primary-700 [&_svg]:w-7 [&_svg]:h-7 opacity-80">
          {icon}
        </div>
      )}

      <h3 className="font-display text-2xl md:text-[1.75rem] leading-tight text-[var(--ink)] mb-4">
        {title}
      </h3>

      <hr className="rule-soft my-5" />

      <p className="text-[var(--ink-muted)] leading-relaxed mb-6">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-7">
          {features.map((feature, i) => (
            <li
              key={i}
              className="text-sm text-[var(--ink-muted)] flex items-start gap-3"
            >
              <span aria-hidden className="text-secondary-500 mt-[0.35em] w-2 shrink-0 leading-none text-base">·</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href={href}
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary-700 hover:text-secondary-500 transition-colors"
        title={`Learn more about ${title}`}
      >
        <span className="squiggle">Read the dossier</span>
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </article>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  index?: number;
  className?: string;
}

/**
 * StatCard — oversized oldstyle numeral, label small-caps mono below.
 * Optional N°XX eyebrow matches AnimatedStatCard so static and animated
 * stat blocks read as siblings.
 */
export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  icon,
  index,
  className,
}) => {
  return (
    <div className={cn('text-left', className)}>
      {index !== undefined && (
        <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-secondary-500 mb-4">
          N°{String(index + 1).padStart(2, '0')}
        </div>
      )}
      {icon && (
        <div className="mb-3 text-secondary-500 [&_svg]:w-6 [&_svg]:h-6">{icon}</div>
      )}
      <div className="font-display italic text-6xl md:text-7xl leading-none text-primary-700 mb-3 tracking-tight">
        {value}
      </div>
      <hr className="rule-soft mb-3 w-12" />
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink-muted)] mb-2">
        {label}
      </div>
      {description && (
        <p className="text-sm text-[var(--ink-faint)] leading-relaxed max-w-[28ch]">
          {description}
        </p>
      )}
    </div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
  rating?: number;
  className?: string;
}

/**
 * TestimonialCard — pullquote with byline. Opens with a clay fleuron
 * mark (❦) instead of a typographic quote, matching the section breaks
 * elsewhere on the site.
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  rating,
  className,
}) => {
  return (
    <figure
      className={cn(
        'bg-[var(--paper)] p-10 md:p-12',
        'border border-[var(--ink-hairline)]/40',
        'shadow-paper relative',
        className
      )}
    >
      {/* Opening fleuron ornament — clay, sits on the top edge as a section mark. */}
      <span
        aria-hidden
        className="absolute -top-4 left-8 px-3 bg-[var(--paper)] font-display italic text-3xl leading-none text-secondary-500 select-none"
      >
        &#10086;
      </span>

      <blockquote className="pullquote mb-8 mt-4">{quote}</blockquote>

      {rating && (
        <div className="flex gap-1.5 mb-6 font-mono text-xs tracking-[0.22em] text-accent-500">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} aria-hidden>
              {String(i + 1).padStart(2, '0')}
            </span>
          ))}
          <span className="sr-only">Rated {rating} out of 5</span>
        </div>
      )}

      <figcaption className="flex items-center gap-4 pt-6 border-t border-[var(--ink-hairline)]/40">
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={author.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover grayscale"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center font-display italic text-xl text-primary-700">
            {author.name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-display text-lg text-[var(--ink)] leading-tight">
            {author.name}
          </div>
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ink-faint)] mt-1">
            {author.title} · {author.company}
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

/**
 * FeatureCard — left-aligned, no card chrome. Pure typesetting:
 * numeral · italic title · body. Generous spacing.
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index,
  className,
}) => {
  const numeral = index !== undefined ? String(index + 1).padStart(2, '0') : null;

  return (
    <div className={cn('text-left', className)}>
      <div className="flex items-baseline gap-4 mb-5">
        {numeral && (
          <span className="numeral text-3xl">{numeral}</span>
        )}
        <span className="text-primary-700 [&_svg]:w-8 [&_svg]:h-8">{icon}</span>
      </div>
      <h3 className="font-display text-2xl md:text-[1.625rem] leading-tight text-[var(--ink)] mb-3">
        {title}
      </h3>
      <p className="text-[var(--ink-muted)] leading-relaxed max-w-[38ch]">
        {description}
      </p>
    </div>
  );
};
