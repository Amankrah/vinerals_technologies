'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { heroVariants, heroItemVariants } from '@/hooks/useScrollAnimation';

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlightedWord?: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

/**
 * ServiceHero — page masthead. Prefer a photograph when one is passed;
 * otherwise fall back to the editorial icon plate for older pages.
 */
const ServiceHero: React.FC<ServiceHeroProps> = ({
  badge,
  title,
  highlightedWord,
  description,
  icon,
  image,
  imageAlt,
  primaryCTA = { label: 'Begin a project', href: '/contact' },
  secondaryCTA = { label: 'Read past dossiers', href: '/work' },
}) => {
  const renderTitle = () => {
    if (!highlightedWord) return <span>{title}</span>;
    const parts = title.split(highlightedWord);
    return (
      <>
        <span>{parts[0]}</span>
        <em className="text-primary-700">{highlightedWord}</em>
        <span>{parts[1] || ''}</span>
      </>
    );
  };

  const showVisual = Boolean(image || icon);

  return (
    <section className="relative overflow-hidden bg-[var(--cream)] pt-28 md:pt-32 grain">
      <div className="above-grain relative container mx-auto py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-wrap items-center gap-3 border-b border-[var(--ink-hairline)]/40 pb-6 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--ink-soft)]"
        >
          <span className="h-px w-7 bg-secondary-500" />
          <span>{badge}</span>
        </motion.div>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="grid items-start gap-x-10 gap-y-12 lg:grid-cols-12"
        >
          <div className={showVisual ? 'lg:col-span-7' : 'lg:col-span-10'}>
            <motion.h1
              variants={heroItemVariants}
              className="mb-8 font-display text-[clamp(2.5rem,7vw,5.75rem)] font-medium leading-[0.96] tracking-[-0.022em] text-[var(--ink)]"
            >
              {renderTitle()}
            </motion.h1>

            <motion.p variants={heroItemVariants} className="lead-text mb-10 max-w-[52ch]">
              {description}
            </motion.p>

            <motion.div variants={heroItemVariants} className="flex flex-col gap-4 sm:flex-row">
              <Button
                href={primaryCTA.href}
                size="lg"
                variant="primary"
                icon={<ArrowUpRight className="h-5 w-5" />}
              >
                {primaryCTA.label}
              </Button>
              <Button href={secondaryCTA.href} size="lg" variant="secondary">
                {secondaryCTA.label}
              </Button>
            </motion.div>
          </div>

          {image ? (
            <motion.aside
              variants={heroItemVariants}
              className="relative hidden aspect-[4/5] overflow-hidden border border-[var(--ink-hairline)]/45 bg-primary-950 lg:col-span-5 lg:block"
            >
              <Image
                src={image}
                alt={imageAlt || ''}
                fill
                sizes="(max-width: 1024px) 0vw, 40vw"
                className="object-cover"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent"
              />
            </motion.aside>
          ) : icon ? (
            <motion.aside
              variants={heroItemVariants}
              className="relative hidden bg-[var(--paper)] p-10 shadow-paper border border-[var(--ink-hairline)]/45 lg:col-span-5 lg:block lg:pt-4"
            >
              <div className="absolute -top-3 left-6 bg-[var(--cream)] px-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-secondary-500">
                Le métier
              </div>
              <div className="flex items-center justify-center py-8 text-primary-700 [&_svg]:h-24 [&_svg]:w-24">
                {icon}
              </div>
              <hr className="rule-soft my-6" />
              <p className="text-center font-display text-lg italic leading-snug text-[var(--ink-muted)]">
                {badge}
              </p>
            </motion.aside>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
