'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface Capability {
  readonly title: string;
  readonly description: string;
}

interface CapabilitiesSectionProps {
  title?: string;
  capabilities: readonly Capability[];
}

/**
 * CapabilitiesSection — a feuilleton list. Each capability is a
 * manuscript note: numeral · italic title · body. Set in a 3-column
 * grid with hairline dividers between columns.
 */
const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  title = 'What we build',
  capabilities,
}) => {
  return (
    <Section background="gray" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-12 max-w-3xl">
          <span className="eyebrow mb-6 block">Le métier</span>
          <h2 className="section-headline">{title}</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-x-8 gap-y-12"
        >
          {capabilities.map((capability, index) => (
            <motion.div key={index} variants={fadeInUp} className="md:pl-6 md:border-l border-[var(--ink-hairline)]/40 first:border-0 first:pl-0">
              <div className="numeral text-xl mb-4">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="font-display text-xl text-[var(--ink)] mb-3 leading-snug">
                {capability.title}
              </h3>
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default CapabilitiesSection;
