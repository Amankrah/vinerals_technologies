'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface PricingTier {
  readonly name: string;
  readonly rate: string;
  readonly description: string;
}

interface PricingSectionProps {
  title: string;
  description: string;
  tiers: readonly PricingTier[];
}

const PricingSection = ({ title, description, tiers }: PricingSectionProps) => {
  return (
    <Section background="gray" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 variants={fadeInUp} className="section-headline mb-4">
            {title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="lead-text">
            {description}
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-primary-700 mb-2">{tier.rate}</div>
                <p className="text-sm text-gray-600">{tier.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div variants={fadeInUp} className="text-center mt-8">
          <p className="text-gray-600 max-w-2xl mx-auto">
            All rates are per hour. We offer fixed-price quotes for defined scopes and can work with monthly retainers for ongoing work.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default PricingSection;
