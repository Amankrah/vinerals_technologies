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

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(30, 58, 138) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Abstract 3D Floating Elements - Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block pointer-events-none overflow-hidden">

        {/* Main gradient blob - MORE VISIBLE */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-primary-400/30 to-secondary-400/40 rounded-full blur-3xl"
        />

        {/* Floating card/dashboard mockup - STRONGER BORDER */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-24 w-40 h-40 bg-white/50 backdrop-blur-sm border-2 border-primary-300 rounded-2xl shadow-lg"
        >
          {/* Mini dashboard elements inside */}
          <div className="p-4 space-y-2">
            <div className="h-2 w-16 bg-primary-400/60 rounded"></div>
            <div className="h-2 w-12 bg-secondary-400/60 rounded"></div>
            <div className="h-2 w-20 bg-primary-300/60 rounded"></div>
          </div>
        </motion.div>

        {/* Code brackets </> */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-56 right-56 text-5xl font-bold text-secondary-400/70"
        >
          {'</>'}
        </motion.div>

        {/* Layered cards suggesting "building" */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-40 right-40"
        >
          <div className="relative">
            <div className="absolute w-32 h-24 bg-gradient-to-br from-primary-400/40 to-primary-500/40 rounded-lg shadow-md transform -rotate-6"></div>
            <div className="absolute w-32 h-24 bg-gradient-to-br from-secondary-400/50 to-secondary-500/50 rounded-lg shadow-lg transform rotate-3 translate-x-2 translate-y-2"></div>
            <div className="w-32 h-24 bg-white/60 backdrop-blur-sm border border-primary-300 rounded-lg shadow-xl transform translate-x-4 translate-y-4"></div>
          </div>
        </motion.div>

        {/* Accent circle - MORE VISIBLE */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-32 w-24 h-24 bg-accent-400/40 rounded-full"
        />

        {/* Small floating dots - connection nodes */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[45%] w-3 h-3 bg-primary-500 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-48 right-20 w-2 h-2 bg-secondary-500 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/2 right-36 w-2 h-2 bg-accent-500 rounded-full"
        />
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
            <span className="text-gray-900">AI & Software for </span>
            <span className="gradient-text">Growing Businesses</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={heroItemVariants}
            className="lead-text mb-8 max-w-3xl mx-auto text-gray-600"
          >
            Custom software and AI for SMEs — enterprise quality, accessible prices.
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
