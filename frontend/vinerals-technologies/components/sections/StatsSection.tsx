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

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <Section background="gray" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="text-4xl font-bold text-primary-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default StatsSection;
