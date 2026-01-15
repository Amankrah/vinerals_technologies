'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { heroVariants, heroItemVariants } from '@/hooks/useScrollAnimation';

interface MissionHeroProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description: string;
  icon: React.ReactNode;
  stats?: {
    value: string;
    label: string;
  }[];
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

const MissionHero: React.FC<MissionHeroProps> = ({
  badge = "Our Mission & Values",
  title,
  highlightedWord,
  description,
  icon,
  stats,
  primaryCTA = { label: 'Our Values', href: '#values' },
  secondaryCTA = { label: 'Contact Us', href: '/contact' }
}) => {

  // Split title to highlight a word if provided
  const renderTitle = () => {
    if (!highlightedWord) {
      return <span className="text-gray-900">{title}</span>;
    }

    const parts = title.split(highlightedWord);
    return (
      <>
        <span className="text-gray-900">{parts[0]}</span>
        <span className="bg-gradient-to-r from-accent-500 via-primary-400 to-primary-500 bg-clip-text text-transparent">
          {highlightedWord}
        </span>
        <span className="text-gray-900">{parts[1] || ''}</span>
      </>
    );
  };

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-accent-50/40 via-white to-primary-50/30">

      {/* ============================================
          BACKGROUND ELEMENTS - Amber/Blue for mission
          ============================================ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 via-transparent to-primary-50/20" />

        {/* Dot grid pattern - amber */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #d97706 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Large gradient orb - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -right-48 -top-48 w-[500px] h-[500px] hidden md:block"
        >
          <div className="w-full h-full bg-gradient-to-br from-accent-300/20 via-primary-200/15 to-primary-300/15 rounded-full blur-3xl" />
        </motion.div>

        {/* Secondary orb - bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute -left-32 -bottom-32 w-[400px] h-[400px] hidden md:block"
        >
          <div className="w-full h-full bg-gradient-to-tr from-primary-200/15 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* ============================================
          DECORATIVE SHAPES - Right Side (Mission/Purpose themed)
          ============================================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Icon in container with radiating effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Main icon container */}
            <div className="w-60 h-60 bg-gradient-to-br from-white/90 to-accent-50/80 backdrop-blur-sm rounded-2xl border border-accent-100/60 shadow-[0_8px_32px_rgba(217,119,6,0.12)] flex items-center justify-center">
              <div className="text-accent-500/80 transform scale-[2.8]">
                {icon}
              </div>
            </div>

            {/* Pulsing badge - mission pulse */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full shadow-lg shadow-primary-400/40 flex items-center justify-center"
            >
              <span className="text-white text-lg">★</span>
            </motion.div>

            {/* Radiating rings - purpose */}
            <motion.div
              animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 border-2 border-accent-400/50 rounded-2xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
              className="absolute inset-0 border-2 border-primary-400/50 rounded-2xl"
            />

            {/* Secondary card */}
            <motion.div
              animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute -bottom-4 -right-6 w-52 h-52 bg-gradient-to-br from-primary-100/70 to-accent-100/70 backdrop-blur-sm rounded-2xl border border-primary-100/40 shadow-lg -z-10"
            />
          </motion.div>
        </motion.div>

        {/* Floating shapes - mission/values themed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block"
        >
          {/* Star/compass shape */}
          <motion.div
            animate={{ rotate: [0, 180, 0], y: [0, -10, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[28%] top-[18%] w-12 h-12 bg-gradient-to-br from-accent-300/50 to-accent-400/50 rounded-sm"
            style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
          />

          {/* Circle */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[8%] bottom-[25%] w-14 h-14 bg-gradient-to-br from-primary-300/40 to-primary-400/40 rounded-full"
          />

          {/* Diamond */}
          <motion.div
            animate={{ rotate: [45, 50, 45], y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[22%] bottom-[30%] w-8 h-8 bg-accent-400/50 rounded-sm"
            style={{ transform: 'rotate(45deg)' }}
          />

          {/* Floating dots */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[32%] top-[32%] w-2.5 h-2.5 bg-accent-400 rounded-full"
          />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-[6%] top-[35%] w-2 h-2 bg-primary-400 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[18%] bottom-[38%] w-2 h-2 bg-secondary-400 rounded-full"
          />
        </motion.div>

        {/* Connecting lines - purpose pathways */}
        <svg
          className="absolute right-0 top-0 w-1/2 h-full hidden xl:block opacity-8"
          viewBox="0 0 400 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
            d="M 280 140 L 320 200 M 320 200 L 260 280"
            stroke="url(#mission-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
            d="M 260 280 L 300 360 M 300 360 L 240 420"
            stroke="url(#mission-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="mission-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ============================================
          CONTENT
          ============================================ */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl lg:max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={heroItemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm text-accent-700 border border-accent-100 shadow-sm">
              <span className="w-2 h-2 bg-accent-400 rounded-full mr-2" />
              {badge}
            </span>
          </motion.div>

          {/* Mobile icon */}
          <motion.div
            variants={heroItemVariants}
            className="mb-6 lg:hidden"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-50 rounded-2xl text-accent-600">
              {icon}
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={heroItemVariants}
            className="hero-headline mb-6"
          >
            {renderTitle()}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={heroItemVariants}
            className="lead-text mb-8 max-w-3xl text-gray-600"
          >
            {description}
          </motion.p>

          {/* Stats Row - optional */}
          {stats && stats.length > 0 && (
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap gap-8 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold text-accent-600">{stat.value}</span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              href={primaryCTA.href}
              size="lg"
              variant="primary"
              icon={<ArrowRight className="w-5 h-5" />}
              className="shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-shadow"
            >
              {primaryCTA.label}
            </Button>
            <Button
              href={secondaryCTA.href}
              size="lg"
              variant="secondary"
              className="hover:bg-gray-50 transition-colors"
            >
              {secondaryCTA.label}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ============================================
          BOTTOM FADE
          ============================================ */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default MissionHero;
