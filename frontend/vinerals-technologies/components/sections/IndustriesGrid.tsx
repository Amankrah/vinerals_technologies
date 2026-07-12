'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { INDUSTRIES } from '@/lib/constants';

/**
 * IndustriesGrid — four photographic dossiers. Each sector is named
 * by a real scene first; title and one line follow. The hairline
 * lattice stays so it still reads as a periodical plate.
 */
const IndustriesGrid = () => {
  return (
    <Section background="white" paddingY="lg" id="industries-grid">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="eyebrow">III · Les secteurs</span>
        </motion.div>

        <div className="mb-10 grid items-end gap-x-10 gap-y-6 md:mb-16 md:grid-cols-12">
          <motion.h2
            variants={fadeInUp}
            className="section-headline max-w-[20ch] md:col-span-7"
          >
            Sectors we know <em>by heart.</em>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="lead-text max-w-[42ch] md:col-span-5 md:ml-auto"
          >
            Four sectors where we&apos;ve already shipped, and learned the
            regulations, the data shapes, and the constraints unique to each
            one.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 border border-[var(--ink-hairline)]/45 md:grid-cols-2"
        >
          {INDUSTRIES.map((industry, index) => {
            const isRight = index % 2 === 1;
            const isBottom = index >= 2;

            return (
              <motion.div key={industry.id} variants={fadeInUp}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className={`group relative flex h-full flex-col bg-[var(--paper)] transition-colors duration-500 hover:bg-[var(--cream-deep)] ${
                    !isRight ? 'md:border-r border-[var(--ink-hairline)]/45' : ''
                  } ${
                    !isBottom ? 'border-b border-[var(--ink-hairline)]/45' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary-950">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
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
                      {industry.name}
                    </h3>

                    <p className="mb-5 max-w-[40ch] leading-relaxed text-[var(--ink-muted)]">
                      {industry.description}
                    </p>

                    {industry.features.length > 0 && (
                      <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                        {industry.features.join(' · ')}
                      </p>
                    )}

                    <div className="mt-auto inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700">
                      <span className="squiggle">Open the file</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default IndustriesGrid;
