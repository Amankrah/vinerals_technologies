'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { SERVICES } from '@/lib/constants';

/**
 * ServicesGrid — photographic dossier plate for /services.
 * Matches the landing-page catalogue so visitors aren’t bounced
 * between two different visual languages.
 */
const ServicesGrid = () => {
  return (
    <Section background="white" paddingY="lg" id="services-grid">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <div className="mb-10 grid items-end gap-x-10 gap-y-6 md:mb-14 md:grid-cols-12">
          <motion.div variants={fadeInUp} className="md:col-span-7">
            <span className="eyebrow mb-6 block">Le catalogue</span>
            <h2 className="section-headline max-w-[16ch]">
              Four trades,
              <br />
              <em>pick a door.</em>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="lead-text max-w-[40ch] md:col-span-5 md:ml-auto"
          >
            Open any dossier. Each practice is made by hand under the same roof —
            not a vendor handoff waiting to happen.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 border border-[var(--ink-hairline)]/45 md:grid-cols-2"
        >
          {SERVICES.map((service, index) => {
            const isRight = index % 2 === 1;
            const isBottom = index >= 2;

            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative flex h-full flex-col bg-[var(--paper)] transition-colors duration-500 hover:bg-[var(--cream-deep)] ${
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

                  <div className="flex flex-1 flex-col p-7 md:p-9">
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
      </motion.div>
    </Section>
  );
};

export default ServicesGrid;
