'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface Stat {
  readonly value: string;
  readonly label: string;
}

interface StatsSectionProps {
  stats: readonly Stat[];
}

/**
 * StatsSection — colophon strip. Stats set as oversized italic
 * numerals with small-caps labels beneath, separated by hairlines.
 */
const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <Section background="gray" paddingY="md">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div
          variants={staggerContainer}
          className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} divide-y md:divide-y-0 md:divide-x divide-[var(--ink-hairline)]/40`}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="px-6 py-8 first:pl-0 last:pr-0"
            >
              <div className="numeral text-xs mb-3 text-secondary-500">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="font-display italic text-5xl md:text-6xl text-primary-700 leading-none mb-3 tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default StatsSection;
