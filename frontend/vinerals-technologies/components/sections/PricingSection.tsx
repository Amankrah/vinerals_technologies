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

        {/* Engagement Models Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{tier.name}</h3>
                <div className="text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wide">
                  {tier.eligibility}
                </div>
                <p className="text-sm text-gray-600">{tier.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div variants={fadeInUp} className="text-center mt-8">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contact us to discuss your project and determine which program track best fits your needs. We offer flexible engagement models including fixed-price projects and monthly retainers.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default PricingSection;
