'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { SERVICES } from '@/lib/constants';

/**
 * Services — four photographic trades under one workshop. Image leads;
 * title, one line, and a mono feature string follow. Matches the
 * industries dossier rhythm further down the page.
 */
const Services = () => {
  return (
    <Section background="gray" paddingY="lg" id="services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <div className="mb-10 grid items-end gap-x-10 gap-y-6 md:mb-16 md:grid-cols-12 md:gap-y-8">
          <motion.div variants={fadeInUp} className="md:col-span-7">
            <span className="eyebrow mb-6 block">II · Le métier</span>
            <h2 className="section-headline max-w-[18ch]">
              Four trades,
              <br />
              <em>one workshop.</em>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="lead-text max-w-[42ch] md:col-span-5 md:ml-auto md:pl-12"
          >
            Four disciplines, made by hand under one roof. Your database, AI
            model, mobile app, and dashboards stay in one workshop instead of
            arriving stitched together from four different vendors.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className="mb-10 grid grid-cols-1 border border-[var(--ink-hairline)]/45 md:mb-14 md:grid-cols-2"
        >
          {SERVICES.map((service, index) => {
            const isRight = index % 2 === 1;
            const isBottom = index >= 2;

            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative flex h-full flex-col bg-[var(--paper)] transition-colors duration-500 hover:bg-[var(--cream)] ${
                    !isRight ? 'border-[var(--ink-hairline)]/45 md:border-r' : ''
                  } ${
                    !isBottom ? 'border-b border-[var(--ink-hairline)]/45' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary-950">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-primary-950/35 via-transparent to-transparent opacity-80"
                    />
                    <span className="absolute left-5 top-5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white [text-shadow:0_1px_12px_rgba(10,20,16,0.55)] md:left-6 md:top-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7 md:p-9 lg:p-10">
                    <h3 className="mb-3 font-display text-3xl leading-tight text-[var(--ink)] transition-colors group-hover:text-primary-700 md:text-[2.1rem]">
                      {service.shortName}
                    </h3>

                    <p className="mb-5 max-w-[42ch] leading-relaxed text-[var(--ink-muted)]">
                      {service.description}
                    </p>

                    <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                      {service.features.join(' · ')}
                    </p>

                    <div className="mt-auto inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700">
                      <span className="squiggle">Read the dossier</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-between gap-6 border-t border-[var(--ink-hairline)]/40 pt-10"
        >
          <p className="max-w-[40ch] font-display text-xl italic text-[var(--ink-muted)]">
            All four disciplines in one cooperative, so the seams between them
            disappear.
          </p>
          <Button
            href="/services"
            variant="primary"
            size="lg"
            icon={<ArrowUpRight className="h-5 w-5" />}
          >
            Explore the catalogue
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Services;
