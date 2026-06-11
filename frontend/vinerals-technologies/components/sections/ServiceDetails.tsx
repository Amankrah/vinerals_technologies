'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface ServiceDetailsProps {
  whatWeOffer:  { title: string; items: string[] };
  technologies: { title: string; items: string[] };
  deliverables: { title: string; items: string[] };
}

/**
 * ServiceDetails — three-column manuscript spread. What we offer ·
 * Technologies · Deliverables. Each list item is a numbered
 * line set in a hanging indent.
 */
const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  whatWeOffer,
  technologies,
  deliverables,
}) => {
  const columns = [
    { kicker: 'I · Le métier',     ...whatWeOffer },
    { kicker: 'II · Les outils',   ...technologies },
    { kicker: 'III · La livraison', ...deliverables },
  ];

  return (
    <Section background="white" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="grid md:grid-cols-3 gap-x-10 gap-y-12"
      >
        {columns.map((col, colIdx) => (
          <motion.div
            key={colIdx}
            variants={fadeInUp}
            className="md:pl-6 md:border-l border-[var(--ink-hairline)]/40 first:border-0 first:pl-0"
          >
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-secondary-500 mb-5">
              {col.kicker}
            </div>
            <h3 className="font-display text-2xl text-[var(--ink)] mb-6 leading-tight">
              {col.title}
            </h3>
            <ul className="space-y-4">
              {col.items.map((item, index) => (
                <li key={index} className="grid grid-cols-[2.25rem_1fr] gap-x-3 items-baseline">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-secondary-500 pt-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[var(--ink-soft)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ServiceDetails;
