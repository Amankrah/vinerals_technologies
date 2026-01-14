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

const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  title = "What We Build",
  capabilities
}) => {
  return (
    <Section background="gray" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="section-headline mb-8 text-center">
          {title}
        </motion.h2>
        <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <h3 className="font-bold text-gray-900 mb-2">{capability.title}</h3>
              <p className="text-sm text-gray-700">
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
