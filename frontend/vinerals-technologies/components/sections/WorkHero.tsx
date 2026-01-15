'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { heroVariants, heroItemVariants } from '@/hooks/useScrollAnimation';

interface WorkHeroProps {
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

const WorkHero: React.FC<WorkHeroProps> = ({
  badge = "Portfolio & Case Studies",
  title,
  highlightedWord,
  description,
  icon,
  stats,
  primaryCTA = { label: 'Start Your Project', href: '/contact' },
  secondaryCTA = { label: 'View All Projects', href: '#projects' }
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
        <span className="bg-gradient-to-r from-accent-500 via-accent-400 to-secondary-500 bg-clip-text text-transparent">
          {highlightedWord}
        </span>
        <span className="text-gray-900">{parts[1] || ''}</span>
      </>
    );
  };

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-accent-50/40 via-white to-slate-50">

      {/* ============================================
          BACKGROUND ELEMENTS - Amber/accent tinted for work/portfolio
          ============================================ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 via-transparent to-secondary-50/15" />

        {/* Dot grid pattern - amber */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #d97706 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Large gradient orb - top right (amber tinted) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -right-48 -top-48 w-[500px] h-[500px] hidden md:block"
        >
          <div className="w-full h-full bg-gradient-to-br from-accent-300/20 via-accent-200/15 to-secondary-300/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Secondary orb - bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute -left-32 -bottom-32 w-[400px] h-[400px] hidden md:block"
        >
          <div className="w-full h-full bg-gradient-to-tr from-secondary-200/15 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* ============================================
          DECORATIVE SHAPES - Right Side (Portfolio feel with stacked elements)
          ============================================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Icon in container with layered portfolio cards */}
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
            {/* Main icon container - portfolio card style */}
            <div className="w-60 h-60 bg-gradient-to-br from-white/90 to-accent-50/80 backdrop-blur-sm rounded-2xl border border-accent-100/60 shadow-[0_8px_32px_rgba(217,119,6,0.12)] flex items-center justify-center">
              <div className="text-accent-500/80 transform scale-[2.8]">
                {icon}
              </div>
            </div>

            {/* Stacked cards behind - suggesting portfolio */}
            <motion.div
              animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute -bottom-4 -right-6 w-52 h-52 bg-gradient-to-br from-accent-100/70 to-secondary-100/70 backdrop-blur-sm rounded-2xl border border-accent-100/40 shadow-lg -z-10"
            />
            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -bottom-8 -right-12 w-44 h-44 bg-gradient-to-br from-secondary-100/60 to-primary-100/60 backdrop-blur-sm rounded-2xl border border-secondary-100/30 shadow-md -z-20"
            />

            {/* Badge with number (project count feel) */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full shadow-lg shadow-accent-400/40 flex items-center justify-center"
            >
              <span className="text-white text-sm font-bold">12+</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating shapes - portfolio themed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block"
        >
          {/* Diamond/star shape */}
          <motion.div
            animate={{ rotate: [0, 90, 0], y: [0, -10, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[32%] top-[15%] w-12 h-12 bg-gradient-to-br from-accent-300/50 to-accent-400/50 rounded-sm"
            style={{ transform: 'rotate(45deg)' }}
          />

          {/* Overlapping circles - collaboration feel */}
          <div className="absolute right-[6%] bottom-[20%]">
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 bg-gradient-to-br from-accent-300/50 to-accent-400/50 rounded-full"
            />
            <motion.div
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-4 left-8 w-14 h-14 bg-gradient-to-br from-secondary-300/40 to-secondary-400/40 rounded-full"
            />
          </div>

          {/* Small accent squares */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[24%] bottom-[28%] w-6 h-6 bg-accent-400/60 rounded-md"
          />

          {/* Floating dots */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[38%] top-[32%] w-2.5 h-2.5 bg-accent-500 rounded-full"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-[8%] top-[38%] w-2 h-2 bg-secondary-400 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[20%] bottom-[38%] w-2 h-2 bg-primary-400 rounded-full"
          />
        </motion.div>

        {/* Connecting lines - portfolio grid feel */}
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
            stroke="url(#work-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
            d="M 260 280 L 300 360 M 300 360 L 240 420"
            stroke="url(#work-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="work-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#14b8a6" />
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

export default WorkHero;
