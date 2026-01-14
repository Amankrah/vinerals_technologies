'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import { heroVariants, heroItemVariants } from '@/hooks/useScrollAnimation';
import { SITE_CONFIG, TRUST_INDICATORS } from '@/lib/constants';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-100 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-secondary-100 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto py-20 md:py-32">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={heroItemVariants} className="mb-6">
            <span className="badge badge-primary text-sm md:text-base shadow-lg">
              {SITE_CONFIG.location.split(',')[0]}&apos;s Social Enterprise Tech Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={heroItemVariants}
            className="hero-headline mb-6"
          >
            {SITE_CONFIG.tagline.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="gradient-text">
              {SITE_CONFIG.tagline.split(' ').slice(2).join(' ')}
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={heroItemVariants}
            className="lead-text mb-8 max-w-3xl mx-auto text-gray-600"
          >
            We build custom software and AI solutions for SMEs who deserve the same
            technology as the big players—at prices that actually make sense.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button href="/contact" size="lg" variant="primary" icon={<ArrowRight className="w-5 h-5" />}>
              Start Your Project
            </Button>
            <Button href="/work" size="lg" variant="secondary">
              See Our Work
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 text-sm md:text-base text-gray-700"
          >
            {TRUST_INDICATORS.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary-600 flex-shrink-0" />
                <span>{indicator.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
