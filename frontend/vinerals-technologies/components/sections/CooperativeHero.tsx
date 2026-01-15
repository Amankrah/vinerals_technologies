'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { heroVariants, heroItemVariants } from '@/hooks/useScrollAnimation';

interface CooperativeHeroProps {
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

const CooperativeHero: React.FC<CooperativeHeroProps> = ({
  badge = "Our Cooperative Model",
  title,
  highlightedWord,
  description,
  icon,
  stats,
  primaryCTA = { label: 'Learn More', href: '#cooperative' },
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
        <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent">
          {highlightedWord}
        </span>
        <span className="text-gray-900">{parts[1] || ''}</span>
      </>
    );
  };

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30">

      {/* ============================================
          BACKGROUND ELEMENTS - Blue for cooperative
          ============================================ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-transparent to-secondary-50/20" />

        {/* Dot grid pattern - blue */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #1e3a8a 1.5px, transparent 1.5px)`,
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
          <div className="w-full h-full bg-gradient-to-br from-primary-300/20 via-primary-200/15 to-secondary-300/20 rounded-full blur-3xl" />
        </motion.div>

        {/* Secondary orb - bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute -left-32 -bottom-32 w-[400px] h-[400px] hidden md:block"
        >
          <div className="w-full h-full bg-gradient-to-tr from-secondary-300/15 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* ============================================
          DECORATIVE SHAPES - Right Side (Cooperative/Democratic themed)
          ============================================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Icon in container with cooperative circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Main icon container */}
            <div className="w-64 h-64 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/80 shadow-[0_8px_32px_rgba(30,58,138,0.08)] flex items-center justify-center">
              <div className="text-primary-400/80 transform scale-[3]">
                {icon}
              </div>
            </div>

            {/* Cooperative principle badges - 7 dots around */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
              style={{ transformOrigin: 'center center' }}
            >
              {[...Array(7)].map((_, i) => {
                const angle = (i * 360) / 7;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                return (
                  <div
                    key={i}
                    className="absolute w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full shadow-lg flex items-center justify-center"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                  >
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* Accent dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Floating shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block"
        >
          {/* Outlined square */}
          <motion.div
            animate={{ rotate: [45, 50, 45], y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[30%] top-[20%] w-12 h-12 border-2 border-primary-200/50 rounded-lg"
            style={{ transform: 'rotate(45deg)' }}
          />

          {/* Small teal circle */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[8%] bottom-[25%] w-16 h-16 bg-gradient-to-br from-secondary-300/40 to-secondary-400/40 rounded-full"
          />

          {/* Tiny accent square */}
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[25%] bottom-[30%] w-6 h-6 bg-accent-400/50 rounded-md"
          />

          {/* Floating dots */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[35%] top-[30%] w-2 h-2 bg-primary-400 rounded-full"
          />
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-[5%] top-[40%] w-2 h-2 bg-secondary-400 rounded-full"
          />
        </motion.div>
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
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm text-primary-700 border border-primary-100 shadow-sm">
              <span className="w-2 h-2 bg-primary-400 rounded-full mr-2" />
              {badge}
            </span>
          </motion.div>

          {/* Mobile icon */}
          <motion.div
            variants={heroItemVariants}
            className="mb-6 lg:hidden"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl text-primary-600">
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
                  <span className="text-3xl font-bold text-primary-600">{stat.value}</span>
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

export default CooperativeHero;
