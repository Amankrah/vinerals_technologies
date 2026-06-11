'use client';

import { motion } from 'framer-motion';
import { Heart, Wheat, Leaf, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { INDUSTRIES } from '@/lib/constants';

const iconMap = {
  Heart: Heart,
  Wheat: Wheat,
  Leaf: Leaf,
  Users: Users,
};

/**
 * IndustriesGrid — a "secteurs" plate. Four large tiles arranged in
 * a 2×2 with thick hairline dividers and oversized italic numerals.
 * The aesthetic borrows from a periodical's section dividers.
 */
const IndustriesGrid = () => {
  return (
    <Section background="white" paddingY="lg" id="industries-grid">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="eyebrow">III · Les secteurs</span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-x-10 gap-y-6 mb-10 md:mb-16 items-end">
          <motion.h2
            variants={fadeInUp}
            className="section-headline max-w-[20ch] md:col-span-7"
          >
            Sectors we know <em>by heart.</em>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="md:col-span-5 lead-text max-w-[42ch] md:ml-auto"
          >
            Four sectors where we&apos;ve already shipped, and learned the
            regulations, the data shapes, and the constraints unique to each
            one.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 border border-[var(--ink-hairline)]/45"
        >
          {INDUSTRIES.map((industry, index) => {
            const IconComponent = iconMap[industry.icon as keyof typeof iconMap] || Heart;
            const isRight = index % 2 === 1;
            const isBottom = index >= 2;

            return (
              <motion.div key={industry.id} variants={fadeInUp}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className={`group relative block p-8 md:p-12 bg-[var(--paper)] hover:bg-[var(--cream-deep)] transition-colors duration-500 ${
                    !isRight ? 'md:border-r border-[var(--ink-hairline)]/45' : ''
                  } ${
                    !isBottom ? 'border-b border-[var(--ink-hairline)]/45' : ''
                  }`}
                >
                  {/* Numeral in top-left, oversized */}
                  <div className="absolute top-6 left-8 numeral text-2xl opacity-70">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon — top-right, faded */}
                  <div className="absolute top-8 right-8 text-primary-700/30 group-hover:text-secondary-500 transition-colors duration-500 [&_svg]:w-10 [&_svg]:h-10">
                    <IconComponent />
                  </div>

                  <div className="mt-16">
                    <h3 className="font-display text-3xl md:text-[2.25rem] text-[var(--ink)] leading-tight mb-4 group-hover:text-primary-700 transition-colors">
                      {industry.name}
                    </h3>

                    <p className="text-[var(--ink-muted)] leading-relaxed mb-6 max-w-[42ch]">
                      {industry.description}
                    </p>

                    {industry.features && industry.features.length > 0 && (
                      <ul className="space-y-1.5 mb-8">
                        {industry.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-[var(--ink-muted)] flex items-start gap-3"
                          >
                            <span aria-hidden className="text-secondary-500 mt-[0.35em] w-2 shrink-0 leading-none text-base">·</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700">
                      <span className="squiggle">Open the file</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default IndustriesGrid;
