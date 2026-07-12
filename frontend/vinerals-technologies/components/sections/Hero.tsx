'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { heroVariants, heroItemVariants } from '@/hooks/useScrollAnimation';

/**
 * Hero — full-bleed visual plane. Workshop photograph carries the
 * "made by hand" idea; brand + one headline + one line + CTAs sit in
 * the calm left gutter. No cards, no sommaire plate, no first-viewport
 * metadata strip — the image does the communicating.
 */
const Hero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-primary-950">
      {/* Full-bleed craft photograph */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/hero-workshop.jpg"
          alt="Hands and a laptop on a wooden workbench, software built by hand"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_42%] md:object-center"
        />
      </motion.div>

      {/* Readability veils — top for nav, left/bottom for copy; photo stays open on the right */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary-950/85 via-primary-950/45 to-transparent md:h-48"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/70 to-transparent md:w-[68%] md:via-primary-950/55"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/35 to-transparent"
      />

      <div className="above-grain relative z-10 container mx-auto flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-24 md:pt-40 lg:pb-28">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative max-w-xl lg:max-w-2xl"
        >
          {/* Soft scrim behind type — contrast without a card */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-8 -inset-y-10 -z-10 bg-[radial-gradient(ellipse_at_left,rgba(10,20,16,0.82)_0%,rgba(10,20,16,0.55)_45%,transparent_75%)] md:-inset-x-14 md:-inset-y-14"
          />

          <motion.p
            variants={heroItemVariants}
            className="mb-4 font-display text-[clamp(1.85rem,4.2vw,2.85rem)] italic leading-none tracking-[-0.02em] text-white [text-shadow:0_1px_18px_rgba(10,20,16,0.55)] md:mb-6"
          >
            Vinerals
            <span className="mx-2 text-secondary-200" aria-hidden>
              ·
            </span>
            <span className="align-middle font-mono text-[0.32em] uppercase not-italic tracking-[0.28em] text-white/80">
              Technologies
            </span>
          </motion.p>

          <motion.h1
            variants={heroItemVariants}
            className="mb-5 font-display text-[clamp(2.5rem,7.2vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.025em] text-white [text-shadow:0_2px_24px_rgba(10,20,16,0.55)] md:mb-6"
          >
            Software,
            <br />
            <em className="font-medium not-italic text-secondary-100 md:italic [text-shadow:0_2px_20px_rgba(10,20,16,0.5)]">
              made by hand,
            </em>
            <br />
            for SMEs.
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
            className="mb-8 max-w-[36ch] font-body text-lg font-medium leading-relaxed text-white [text-shadow:0_1px_16px_rgba(10,20,16,0.7)] md:mb-10 md:text-[1.35rem] md:leading-snug"
          >
            Custom software and AI, made by hand to fit how your business runs.
            Senior work, at terms you can plan around.
          </motion.p>

          <motion.div
            variants={heroItemVariants}
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Button
              href="/contact"
              size="lg"
              variant="accent"
              icon={<ArrowUpRight className="h-5 w-5" />}
            >
              Book a consultation
            </Button>
            <Button
              href="/work"
              size="lg"
              variant="secondary"
              className="border-white/75 bg-primary-950/35 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-primary-900 focus:ring-offset-primary-950"
            >
              See our work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Quiet edge cue — invites the scroll without competing for attention */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="block h-8 w-px bg-[var(--cream)]/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
