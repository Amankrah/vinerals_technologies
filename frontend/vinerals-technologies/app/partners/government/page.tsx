'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import PartnersHero from '@/components/sections/PartnersHero';
import CTA from '@/components/sections/CTA';
import FaqAccordion from '@/components/sections/FaqAccordion';
import StructuredData, {
  createFAQSchema,
  createBreadcrumbSchema,
} from '@/components/shared/StructuredData';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const ALIGNMENT = [
  {
    title: 'SME competitiveness.',
    body: 'Custom software and practical AI that growing businesses can ship and run, with systems shaped around how they already work.',
  },
  {
    title: 'Quality employment.',
    body: 'Well-paid engineering roles inside Montréal’s social economy, with cooperative governance and transparent books.',
  },
  {
    title: 'Digital adoption that sticks.',
    body: 'Owned code, documentation, and handover. Adoption measured by systems in use, not by workshops alone.',
  },
  {
    title: 'Sector priorities.',
    body: 'Healthcare, food systems, sustainability, and social enterprise, where regulation and real workflows matter.',
  },
] as const;

const ASK = [
  {
    title: 'Approved implementation partner.',
    body: 'List us for grant recipients who need credible technical delivery with clear milestones and owned IP.',
  },
  {
    title: 'Social procurement pathways.',
    body: 'Engage a Québec solidarity cooperative under social-procurement and cooperative vendor programmes where they apply.',
  },
  {
    title: 'Referral & programme fit.',
    body: 'Point qualifying SMEs our way when your mandate needs senior delivery with reporting that fits your evaluation framework.',
  },
] as const;

const FIT = [
  'Federal, provincial, and municipal agencies with digital-economy or SME mandates',
  'Programme officers who need a delivery partner for software that ships',
  'Social procurement and cooperative vendor pathways',
  'Sector initiatives in health, food systems, cleantech, or social enterprise',
] as const;

const GOVERNMENT_FAQS = [
  {
    question: 'How do you support digital-economy and SME mandates?',
    answer:
      'We deliver senior engineering, owned code, and honest scope on software SMEs rarely get from template shops. That advances competitiveness and adoption with systems that stay in use.',
  },
  {
    question: 'Why partner with a solidarity cooperative?',
    answer:
      'Impact sits in governance: transparent books, democratic decision-making, surpluses to mission and workers. You get senior delivery with incentives that match social-economy and social-procurement goals.',
  },
  {
    question: 'Can agencies procure from you?',
    answer:
      'Yes. As a Québec-registered solidarity cooperative we pursue social procurement, cooperative vendor status, and standard technology contracts where eligible at the federal, provincial, and municipal levels.',
  },
  {
    question: 'What reporting do you provide?',
    answer:
      'Milestones, financial transparency, and KPIs agreed up front: clients served, jobs supported, and programme-specific outcomes. Reports are designed to fit your evaluation framework.',
  },
  {
    question: 'How should programmes refer SMEs?',
    answer:
      'List us as an approved implementation partner for grant recipients, refer businesses that need senior delivery, or include us in social-procurement directories. Start with contact@vineralstechnologies.com.',
  },
];

export default function GovernmentPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Partners', url: 'https://vineralstechnologies.com/partners' },
    { name: 'Government', url: 'https://vineralstechnologies.com/partners/government' },
  ]);
  const faqSchema = createFAQSchema(GOVERNMENT_FAQS);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main className="pt-16">
        <PartnersHero
          badge="For Government"
          title="Delivery capacity for public mandates."
          highlightedWord="Delivery"
          description="Implementation partner for Québec and Canadian digital-economy and SME programmes. Senior engineering, owned code, and reporting you can stand behind."
          image="/government-atelier.jpg"
          imageAlt="Desk with documents and a laptop in soft natural light"
          stats={[
            { value: 'Delivery', label: 'Systems that ship' },
            { value: 'Co-op', label: 'Social procurement fit' },
          ]}
          primaryCTA={{ label: 'See the ask', href: '#ask' }}
          secondaryCTA={{ label: 'Contact us', href: '/contact' }}
        />

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid items-start gap-x-10 gap-y-10 md:grid-cols-12"
          >
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <span className="eyebrow mb-6 block">Alignment</span>
              <h2 className="section-headline max-w-[14ch]">
                Where we
                <br />
                <em>line up.</em>
              </h2>
            </motion.div>
            <motion.ol
              variants={staggerContainer}
              className="space-y-8 md:col-span-7 md:col-start-6"
            >
              {ALIGNMENT.map((item, i) => (
                <motion.li
                  key={item.title}
                  variants={fadeInUp}
                  className="grid grid-cols-[3rem_1fr] gap-x-6 border-b border-[var(--ink-hairline)]/35 pb-8 last:border-0 last:pb-0"
                >
                  <span className="numeral text-xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-xl text-[var(--ink)]">{item.title}</h3>
                    <p className="max-w-[48ch] leading-relaxed text-[var(--ink-muted)]">
                      {item.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg" id="ask">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">The ask</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-4">
              One partnership,
              <br />
              <em>three ways in.</em>
            </motion.h2>
            <motion.p variants={fadeInUp} className="lead-text mb-10 max-w-[48ch]">
              We are not asking for an open-ended budget. We are asking to be the delivery partner
              when your programme needs software that ships.
            </motion.p>
            <motion.div
              variants={staggerContainer}
              className="space-y-8 border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 md:p-10"
            >
              {ASK.map((item) => (
                <motion.div key={item.title} variants={fadeInUp}>
                  <h3 className="mb-2 font-display text-xl text-[var(--ink)]">{item.title}</h3>
                  <p className="leading-relaxed text-[var(--ink-muted)]">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700 hover:text-secondary-600"
              >
                Start a government conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </Section>

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">Fit</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              Who this page
              <br />
              <em>is for.</em>
            </motion.h2>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {FIT.map((line) => (
                <motion.li
                  key={line}
                  variants={fadeInUp}
                  className="flex items-start gap-3 leading-relaxed text-[var(--ink-muted)]"
                >
                  <span className="mt-1 text-secondary-600" aria-hidden>
                    ·
                  </span>
                  <span>{line}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </Section>

        <FaqAccordion
          title="Questions agencies ask."
          description="Mandates, procurement, reporting, and how to refer SMEs."
          faqs={GOVERNMENT_FAQS}
        />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
