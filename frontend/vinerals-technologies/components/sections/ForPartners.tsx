'use client';

import { motion } from 'framer-motion';
import { Building2, DollarSign, Users2 } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const partnerTypes = [
  {
    title: 'For Government',
    description: 'Digital economy alignment, job creation, SME support',
    icon: Building2,
    href: '/partners/government',
  },
  {
    title: 'For Funders',
    description: 'Patient capital opportunity, social ROI metrics',
    icon: DollarSign,
    href: '/partners/funders',
  },
  {
    title: 'For Consortiums',
    description: 'Industry-wide technology initiatives',
    icon: Users2,
    href: '/partners/consortiums',
  },
];

const ForPartners = () => {
  return (
    <Section background="gray" paddingY="lg" id="for-partners">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <span className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
            For Partners & Funders
          </span>
          <h2 className="section-headline mb-4">
            Building Quebec's
            <br />
            Accessible Tech Infrastructure
          </h2>
          <p className="lead-text max-w-2xl mx-auto">
            Vinerals Technologies is a solidarity cooperative contributing to Quebec's
            social economy and digital transformation objectives. We welcome partnerships
            with government, funders, and industry consortiums.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {partnerTypes.map((partner) => {
            const IconComponent = partner.icon;

            return (
              <motion.div key={partner.title} variants={fadeInUp}>
                <Link href={partner.href}>
                  <div className="bg-white rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200 group cursor-pointer">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 text-primary-700 group-hover:bg-primary-100 transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {partner.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {partner.description}
                    </p>

                    <div className="mt-4 text-primary-700 font-semibold text-sm flex items-center gap-2">
                      Learn more
                      <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold transition-colors"
          >
            Partner With Us →
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ForPartners;
