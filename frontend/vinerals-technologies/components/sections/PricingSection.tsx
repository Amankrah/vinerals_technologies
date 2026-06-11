'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface EngagementModel {
  readonly name: string;
  readonly eligibility: string;
  readonly description: string;
  readonly icon: string;
}

interface PricingSectionProps {
  title: string;
  description: string;
  tiers: readonly EngagementModel[];
}

/**
 * PricingSection — engagement plates. Each tier is a paper card with
 * an oversized numeral, italic name, and mono eligibility line.
 */
const PricingSection = ({ title, description, tiers }: PricingSectionProps) => {
  return (
    <Section background="gray" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="max-w-3xl mb-14">
          <span className="eyebrow mb-6 block">Modèles d&apos;engagement</span>
          <h2 className="section-headline mb-6">{title}</h2>
          <p className="lead-text">{description}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tiers.map((tier, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              className="bg-[var(--paper)] p-8 md:p-10 border border-[var(--ink-hairline)]/45 shadow-paper hover:shadow-deckle hover:border-secondary-500 hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="numeral text-3xl">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-secondary-500">
                  Track {String.fromCharCode(65 + index)}
                </span>
              </div>
              <h3 className="font-display text-2xl text-[var(--ink)] mb-3 leading-tight">
                {tier.name}
              </h3>
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary-700 mb-5">
                {tier.eligibility}
              </div>
              <hr className="rule-soft mb-5" />
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                {tier.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-[var(--ink-hairline)]/40">
          <p className="font-display italic text-lg md:text-xl text-[var(--ink-muted)] max-w-[58ch]">
            We&apos;ll help you find the right track. Fixed-price commissions,
            monthly retainers, and hybrid engagements all on the table.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default PricingSection;
