'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { heroVariants, heroItemVariants } from '@/hooks/useScrollAnimation';

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlightedWord?: string;
  description: string;
  icon: React.ReactNode;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  badge,
  title,
  highlightedWord,
  description,
  icon,
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

  return (
    <section className="relative bg-[var(--cream)] overflow-hidden pt-28 md:pt-32 grain">
      <div className="above-grain relative container mx-auto py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 pb-6 mb-10 border-b border-[var(--ink-hairline)]/40 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[var(--ink-muted)]"
        >
          <span className="w-7 h-px bg-secondary-500" />
          <span>{badge}</span>
        </motion.div>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-x-10 gap-y-12 items-start"
        >
          <div className="lg:col-span-8">
            <motion.h1
              variants={heroItemVariants}
              className="font-display font-medium text-[clamp(2.5rem,7vw,5.75rem)] leading-[0.96] tracking-[-0.022em] text-[var(--ink)] mb-8"
            >
              {renderTitle()}
            </motion.h1>

            <motion.p variants={heroItemVariants} className="lead-text max-w-[58ch] mb-10">
              {description}
            </motion.p>

            <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button href={primaryCTA.href} size="lg" variant="primary" icon={<ArrowUpRight className="w-5 h-5" />}>
                {primaryCTA.label}
              </Button>
              <Button href={secondaryCTA.href} size="lg" variant="secondary">
                {secondaryCTA.label}
              </Button>
            </motion.div>
          </div>

          <motion.aside variants={heroItemVariants} className="hidden lg:block lg:col-span-4 lg:pt-4">
            <div className="relative bg-[var(--paper)] border border-[var(--ink-hairline)]/45 p-10 shadow-paper">
              <div className="absolute -top-3 left-6 px-3 bg-[var(--cream)] font-mono text-[0.65rem] uppercase tracking-[0.22em] text-secondary-500">
                Le métier
              </div>
              <div className="text-primary-700 flex items-center justify-center py-8 [&_svg]:w-24 [&_svg]:h-24">
                {icon}
              </div>
              <hr className="rule-soft my-6" />
              <p className="font-display italic text-lg text-[var(--ink-muted)] text-center leading-snug">
                {badge}
              </p>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
