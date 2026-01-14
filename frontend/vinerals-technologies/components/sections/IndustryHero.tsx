'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { heroVariants, heroItemVariants } from '@/hooks/useScrollAnimation';

interface IndustryHeroProps {
  badge?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const IndustryHero: React.FC<IndustryHeroProps> = ({
  badge = "Industries We Serve",
  title = "Deep Industry Expertise That Makes a Difference",
  description = "We don't just build software—we understand your industry's challenges, regulations, and workflows.",
  icon
}) => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-secondary-100 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {icon && (
            <motion.div variants={heroItemVariants} className="mb-6 flex justify-center text-secondary-600">
              {icon}
            </motion.div>
          )}

          <motion.div variants={heroItemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-secondary-700 shadow-md border border-secondary-100">
              {badge}
            </span>
          </motion.div>

          <motion.h1 variants={heroItemVariants} className="hero-headline mb-6">
            {title}
          </motion.h1>

          <motion.p variants={heroItemVariants} className="lead-text max-w-3xl mx-auto">
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryHero;
