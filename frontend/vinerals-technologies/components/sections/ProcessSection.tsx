'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface ProcessStep {
  readonly number: number;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
}

interface ProcessSectionProps {
  title?: string;
  description?: string;
  steps: readonly ProcessStep[];
}

/**
 * ProcessSection — a process serial. Steps run as numbered chapters
 * with hairline connectors. Borrows the layout of a magazine's
 * how-it's-made spread.
 */
const ProcessSection: React.FC<ProcessSectionProps> = ({
  title = 'How we work',
  description = 'A transparent, collaborative process. Built like an editorial calendar, not a Gantt chart.',
  steps,
}) => {
  return (
    <Section background="gray" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="max-w-3xl mb-16">
          <span className="eyebrow mb-6 block">Le procédé</span>
          <h2 className="section-headline mb-6">{title}</h2>
          <p className="lead-text">{description}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[var(--ink-hairline)]/45 bg-[var(--paper)]"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`relative p-8 md:p-10 ${
                index < steps.length - 1 ? 'lg:border-r border-b lg:border-b-0 border-[var(--ink-hairline)]/45' : ''
              } ${
                index < steps.length - 2 ? 'md:border-b lg:border-b-0' : ''
              }`}
            >
              <div className="numeral text-4xl md:text-5xl mb-6">
                {String(step.number).padStart(2, '0')}
              </div>
              <h3 className="font-display text-xl text-[var(--ink)] mb-2 leading-tight">
                {step.title}
              </h3>
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary-700 mb-4">
                {step.subtitle}
              </div>
              <hr className="rule-soft mb-4 w-10" />
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProcessSection;
