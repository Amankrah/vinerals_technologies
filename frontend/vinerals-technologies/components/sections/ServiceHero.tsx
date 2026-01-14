'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { heroVariants, heroItemVariants } from '@/hooks/useScrollAnimation';

interface ServiceHeroProps {
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ badge, title, description, icon }) => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-100 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={heroItemVariants} className="mb-6 flex justify-center text-primary-600">
            {icon}
          </motion.div>

          <motion.div variants={heroItemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-primary-700 shadow-md border border-primary-100">
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

export default ServiceHero;
