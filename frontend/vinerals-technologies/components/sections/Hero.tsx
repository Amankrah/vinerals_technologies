'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import { heroVariants, heroItemVariants } from '@/hooks/useScrollAnimation';
import { SITE_CONFIG, TRUST_INDICATORS } from '@/lib/constants';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30">

      {/* ============================================
          BACKGROUND LAYER - Subtle grid & gradient
          ============================================ */}
      <div className="absolute inset-0">
        {/* Soft gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/30" />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #1e3a8a 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* ============================================
          ABSTRACT SHAPES - Right Side Composition
          ============================================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* ---------- LARGE GRADIENT ORB ---------- */}
        {/* This creates the ambient glow - the foundation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[700px] h-[700px] hidden lg:block"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-br from-primary-400/25 via-primary-300/20 to-secondary-400/25 rounded-full blur-3xl"
          />
        </motion.div>

        {/* ---------- PRIMARY CARD - The "Hero" Shape ---------- */}
        {/* Large, prominent, sets the visual anchor */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 12 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute right-[8%] top-[15%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [12, 14, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Card with glassmorphism */}
            <div className="w-48 h-56 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 shadow-[0_8px_32px_rgba(30,58,138,0.12)]">
              {/* Inner content - simulated UI */}
              <div className="p-4 h-full flex flex-col">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="h-2 bg-primary-200/60 rounded-full w-3/4" />
                  <div className="h-2 bg-primary-200/40 rounded-full w-full" />
                  <div className="h-2 bg-primary-200/40 rounded-full w-5/6" />
                </div>
                <div className="mt-auto pt-3 border-t border-primary-100/50">
                  <div className="h-6 bg-gradient-to-r from-primary-400/40 to-secondary-400/40 rounded-md" />
                </div>
              </div>
            </div>

            {/* Floating badge on card */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-xl shadow-lg flex items-center justify-center"
            >
              <Check className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ---------- SECONDARY CARD - Layered behind ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute right-[18%] top-[28%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [-6, -4, -6] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="w-36 h-44 bg-gradient-to-br from-primary-100/80 to-primary-50/80 backdrop-blur-sm rounded-2xl border border-primary-200/50 shadow-[0_4px_24px_rgba(30,58,138,0.08)]"
          >
            <div className="p-3 h-full flex flex-col">
              <div className="w-8 h-8 bg-primary-300/50 rounded-lg mb-3" />
              <div className="space-y-1.5">
                <div className="h-1.5 bg-primary-300/40 rounded-full w-full" />
                <div className="h-1.5 bg-primary-300/30 rounded-full w-4/5" />
                <div className="h-1.5 bg-primary-300/30 rounded-full w-3/5" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------- CODE BRACKET - Tech identifier ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute right-[5%] top-[55%] hidden xl:block"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl font-mono font-bold text-primary-300/60 select-none"
          >
            {'</>'}
          </motion.div>
        </motion.div>

        {/* ---------- ACCENT SHAPES - Visual rhythm ---------- */}

        {/* Teal circle - bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute right-[12%] bottom-[18%] hidden lg:block"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], y: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 bg-gradient-to-br from-secondary-400/50 to-secondary-500/50 rounded-full shadow-lg shadow-secondary-400/20"
          />
        </motion.div>

        {/* Amber accent - small pop of color */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute right-[28%] bottom-[25%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 bg-gradient-to-br from-accent-400 to-accent-500 rounded-lg shadow-md shadow-accent-400/30"
          />
        </motion.div>

        {/* Outlined square - geometric contrast */}
        <motion.div
          initial={{ opacity: 0, rotate: 30 }}
          animate={{ opacity: 1, rotate: 45 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute right-[32%] top-[18%] hidden xl:block"
        >
          <motion.div
            animate={{ rotate: [45, 50, 45], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 border-[3px] border-primary-300/50 rounded-xl"
          />
        </motion.div>

        {/* ---------- FLOATING DOTS - Add depth ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden lg:block"
        >
          {/* Dot 1 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[22%] top-[12%] w-3 h-3 bg-primary-400 rounded-full shadow-sm"
          />
          {/* Dot 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-[6%] top-[40%] w-2 h-2 bg-secondary-400 rounded-full"
          />
          {/* Dot 3 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-[35%] bottom-[35%] w-2.5 h-2.5 bg-primary-300 rounded-full"
          />
          {/* Dot 4 */}
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[15%] top-[70%] w-2 h-2 bg-accent-400 rounded-full"
          />
        </motion.div>

        {/* ---------- CONNECTING LINES - Subtle tech feel ---------- */}
        <svg
          className="absolute right-0 top-0 w-1/2 h-full hidden xl:block opacity-20"
          viewBox="0 0 400 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
            d="M 350 150 Q 300 200 280 280"
            stroke="url(#line-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.8, ease: "easeInOut" }}
            d="M 280 280 Q 250 350 200 380"
            stroke="url(#line-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>

      </div>

      {/* ============================================
          CONTENT - Left-aligned for balance
          ============================================ */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl lg:max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={heroItemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-700 border border-primary-200/50 shadow-sm">
              <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse" />
              {SITE_CONFIG.location.split(',')[0]}&apos;s Social Enterprise Tech Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-gray-900">AI & Software for </span>
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={heroItemVariants}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed"
          >
            Custom software and AI for SMEs — enterprise quality, accessible prices.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              className="shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-shadow"
            >
              Start Your Project
            </Button>
            <Button
              href="/work"
              size="lg"
              variant="secondary"
              className="hover:bg-gray-50 transition-colors"
            >
              See Our Work
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 text-sm text-gray-600"
          >
            {TRUST_INDICATORS.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-secondary-600" />
                </div>
                <span>{indicator.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ============================================
          BOTTOM FADE - Smooth transition to next section
          ============================================ */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
