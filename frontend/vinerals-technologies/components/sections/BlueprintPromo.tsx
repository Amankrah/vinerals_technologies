'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

/**
 * Homepage promo for Cahier (the supply chain records app).
 * Mid-page announcement: one job, one visual, early-access CTAs.
 * Background Image mounts only when near viewport so it cannot steal LCP from the hero.
 */
const BlueprintPromo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const nearViewport = useInView(sectionRef, { once: true, margin: '200px 0px' });

  return (
    <section
      ref={sectionRef}
      id="blueprint-promo"
      aria-labelledby="blueprint-promo-heading"
      className="relative overflow-hidden bg-primary-950"
    >
      {nearViewport ? (
        <div className="absolute inset-0">
          <Image
            src="/work-supply-chain.jpg"
            alt="Wooden packing table with a shipping ledger and laptop in a food warehouse loading bay"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover object-[62%_45%] md:object-center"
          />
        </div>
      ) : null}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/78 to-primary-950/35 md:via-primary-950/70 md:to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-transparent to-primary-950/40"
      />

      <div className="relative z-10 container mx-auto px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-xl lg:max-w-2xl"
        >
          <motion.div variants={fadeInUp} className="mb-5">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-secondary-200">
              Cahier · Supply chain blueprint · In development
            </span>
          </motion.div>

          <motion.h2
            id="blueprint-promo-heading"
            variants={fadeInUp}
            className="mb-6 font-display text-[clamp(2.1rem,5vw,3.75rem)] font-medium leading-[0.98] tracking-[-0.02em] text-white"
          >
            When a buyer, inspector,
            <br />
            <em className="font-medium not-italic text-secondary-100 md:italic">
              or border asks where a batch came from.
            </em>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mb-8 max-w-[44ch] font-body text-lg leading-relaxed text-white/90 md:text-[1.2rem]"
          >
            Meet <span className="font-display italic text-white">Cahier</span>. One place to
            write down what you buy, make, and ship, so any of them can be answered without
            hunting through spreadsheets. Built for SMEs across Québec and Canada. Early access
            is open while we finish it.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Button
              href="/blueprints/cahier"
              size="lg"
              variant="accent"
              icon={<ArrowUpRight className="h-5 w-5" />}
            >
              Meet Cahier
            </Button>
            <Button
              href="/contact?topic=cahier"
              size="lg"
              variant="secondary"
              className="border-white/75 bg-primary-950/35 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-primary-900 focus:ring-offset-primary-950"
            >
              Join early access
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlueprintPromo;
