'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { heroVariants, heroItemVariants } from '@/hooks/useScrollAnimation';
import { TRUST_INDICATORS } from '@/lib/constants';

/**
 * Hero — magazine cover. Asymmetric: oversized italic headline on the
 * left bleeds toward the gutter; an editorial "Sommaire" plate sits
 * on the right cataloguing the issue. Mono dateline at top, mono
 * trust indicators at the foot. Cream paper substrate.
 */
const Hero = () => {
  return (
    <section className="relative bg-[var(--cream)] overflow-hidden pt-24 md:pt-28 grain">
      {/* Hand-drawn arc — sits within the sommaire column area, lower & fainter */}
      <svg
        aria-hidden
        className="hidden md:block absolute top-[28rem] right-6 w-[360px] h-[360px] opacity-[0.12] animate-paper-drift pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M 30 100 Q 80 30, 100 100 Q 120 170, 170 100"
          stroke="var(--secondary-500)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 40 110 Q 100 0, 160 110"
          stroke="var(--primary-700)"
          strokeWidth="0.7"
          fill="none"
        />
        <circle cx="100" cy="100" r="64" stroke="var(--ink-hairline)" strokeWidth="0.5" fill="none" />
      </svg>

      <div className="above-grain relative container mx-auto py-12 md:py-24 lg:py-32">

        {/* ============================================================
            DATELINE — small-caps masthead row
            ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 md:pb-8 mb-8 md:mb-16 border-b border-[var(--ink-hairline)]/40 font-mono text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.28em] text-[var(--ink-muted)]"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse" />
            <span>N°01 · Dispatch from Tio&apos;tia:ke / Montréal</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>Une coopérative de solidarité</span>
            <span aria-hidden>·</span>
            <span suppressHydrationWarning>Édition {new Date().getFullYear()}</span>
          </div>
        </motion.div>

        {/* ============================================================
            HEADLINE — asymmetric grid: oversized title + sommaire
            ============================================================ */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12 lg:gap-y-16"
        >
          {/* Left — headline & lede (8 columns) */}
          <div className="lg:col-span-8 xl:col-span-7">
            <motion.h1
              variants={heroItemVariants}
              className="font-display font-medium text-[clamp(2.5rem,9vw,7.5rem)] leading-[0.94] md:leading-[0.92] tracking-[-0.025em] text-[var(--ink)] mb-8 md:mb-10"
            >
              Software,
              <br />
              <em className="text-primary-700 not-italic md:italic font-medium">made by hand,</em>
              <br />
              for SMEs.
            </motion.h1>

            <motion.div
              variants={heroItemVariants}
              className="max-w-[60ch] mb-8 md:mb-10 lg:mb-14"
            >
              <p className="text-lg md:text-2xl text-[var(--ink-soft)] leading-[1.55] md:leading-[1.5] font-body">
                Software should fit how your business runs, not the other way
                round. We&apos;re a Montréal cooperative building custom
                software and AI at terms you can plan around. Funding partners
                cover the rest.
              </p>
            </motion.div>

            <motion.div
              variants={heroItemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-start"
            >
              <Button
                href="/contact"
                size="lg"
                variant="accent"
                icon={<ArrowUpRight className="w-5 h-5" />}
              >
                Book a free consultation
              </Button>
              <Button
                href="/work"
                size="lg"
                variant="secondary"
              >
                See our work
              </Button>
            </motion.div>
          </div>

          {/* Right — sommaire plate. Paper background + hairline border so it reads as a distinct dispatch */}
          <motion.aside
            variants={heroItemVariants}
            className="lg:col-span-4 xl:col-span-5 relative bg-[var(--paper)] border border-[var(--ink-hairline)]/45 p-8 md:p-10 shadow-paper"
          >
            <div className="absolute -top-3 left-6 px-3 bg-[var(--cream)] font-mono text-[0.7rem] uppercase tracking-[0.22em] text-secondary-500 flex items-center gap-2">
              <span aria-hidden className="w-5 h-px bg-secondary-500" />
              Sommaire
            </div>

            <h2 className="font-display italic text-[1.25rem] text-[var(--ink-muted)] mb-8 leading-snug">
              What we build in this house
            </h2>

            <ul className="space-y-1">
              {sommaire.map((item, idx) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline gap-4 py-4 border-b border-[var(--ink-hairline)]/30 last:border-b-0 -mx-2 px-2 hover:bg-[var(--cream)]/60 transition-colors"
                  >
                    <span className="numeral text-xl shrink-0 w-10">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <div className="font-display text-lg text-[var(--ink)] leading-tight mb-1 group-hover:text-primary-700 transition-colors">
                        {item.title}
                      </div>
                      <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                        {item.kicker}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--ink-faint)] group-hover:text-secondary-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.aside>
        </motion.div>

        {/* ============================================================
            COLOPHON STRIP — trust indicators as a quiet dateline
            ============================================================ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 pt-6 border-t border-[var(--ink-hairline)]/40 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink-soft)]"
        >
          {TRUST_INDICATORS.map((indicator, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <span className="text-secondary-500">{String(idx + 1).padStart(2, '0')}</span>
              <span className="text-[var(--ink)]">{indicator.value}</span>
              <span aria-hidden className="text-[var(--ink-faint)]">·</span>
              <span className="text-[var(--ink-muted)]">{indicator.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const sommaire = [
  { title: 'Custom software, hand-built',     kicker: 'No vendor lock-in',                  href: '/services/custom-software' },
  { title: 'AI & ML, integrated honestly',    kicker: 'Practical, not novelty',             href: '/services/ai-integration' },
  { title: 'Mobile apps with shelf life',     kicker: 'iOS · Android · web',                href: '/services/mobile-apps' },
  { title: 'Data systems that compound',      kicker: 'Pipelines · dashboards · reporting', href: '/services/data-systems' },
];

export default Hero;
