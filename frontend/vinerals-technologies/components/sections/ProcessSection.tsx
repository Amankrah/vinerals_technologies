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

const ProcessSection: React.FC<ProcessSectionProps> = ({
  title = "How We Work",
  description = "A transparent, collaborative process designed for your success",
  steps
}) => {
  return (
    <Section background="gray" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="section-headline mb-4">{title}</h2>
          <p className="lead-text max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="relative">
              <div className="bg-white rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-xl">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-primary-600 font-semibold mb-3">{step.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200 -translate-y-1/2 z-10" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProcessSection;
