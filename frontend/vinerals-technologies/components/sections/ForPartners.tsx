'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const partnerTypes = [
  {
    title: 'Funders',
    kicker: 'Patient capital · foundations',
    description:
      'Back software made by hand for SMEs — social return with financial discipline, not a pitch-deck fantasy.',
    href: '/partners/funders',
  },
  {
    title: 'Government',
    kicker: 'Digital economy & SME mandates',
    description:
      'Implementation capacity that lines up with Québec and Canadian priorities — craft delivery, clear reporting.',
    href: '/partners/government',
  },
  {
    title: 'Consortiums',
    kicker: 'Shared platforms for networks',
    description:
      'Technical partner for associations and sector networks — systems no single member could fund alone.',
    href: '/partners/consortiums',
  },
];

/**
 * ForPartners — dispatch to funders, government and consortiums.
 * Deep forest panel with cream text — a deliberate dark spread
 * between lighter cream sections.
 */
const ForPartners = () => {
  return (
    <Section background="primary" paddingY="lg" id="for-partners">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-6xl"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-secondary-300 flex items-center gap-3">
            <span className="w-7 h-px bg-secondary-300" />
            V · Pour nos partenaires
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="font-display text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.05] md:leading-[1] tracking-tight text-[var(--cream)] mb-6 md:mb-8 max-w-[22ch]"
        >
          Craft partners for
          <br />
          <em className="text-secondary-300">public-interest</em> work.
        </motion.h2>

        <motion.p variants={fadeInUp} className="lead-text text-white/80 max-w-[58ch] mb-10 md:mb-16">
          Funders, agencies, and networks that need senior engineering with
          cooperative governance — not a discount agency, not a VC pitch.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/20"
        >
          {partnerTypes.map((partner, idx) => {
            const isLast = idx === partnerTypes.length - 1;

            return (
              <motion.div key={partner.title} variants={fadeInUp}>
                <Link
                  href={partner.href}
                  className={`group block py-10 md:py-12 md:px-8 first:pl-0 last:pr-0 h-full border-b md:border-b-0 border-white/20 ${
                    !isLast ? 'md:border-r' : ''
                  } hover:bg-[var(--primary-800)] transition-colors duration-500 -mx-5 px-5 md:mx-0`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="numeral text-2xl text-secondary-300">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl text-[var(--cream)] mb-3 leading-tight">
                    {partner.title}
                  </h3>

                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-secondary-300 mb-5">
                    {partner.kicker}
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-8">
                    {partner.description}
                  </p>

                  <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--cream)] group-hover:text-secondary-300 transition-colors">
                    <span className="squiggle">Read brief</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <Link
            href="/partners"
            className="group inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.22em] text-[var(--cream)] hover:text-secondary-300 transition-colors"
          >
            <span className="squiggle-forest">Read the full partnership dossier</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ForPartners;
