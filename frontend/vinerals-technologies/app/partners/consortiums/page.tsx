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

const WHY = [
  {
    title: 'Shared cost, shared craft.',
    body: 'Members get serious platforms without each funding a full build alone — architecture and ownership designed for the network.',
  },
  {
    title: 'One technical partner.',
    body: 'Senior engineering across discovery, build, and handover — so the consortium owns the system, not a pile of vendor lock-in.',
  },
  {
    title: 'Cooperative alignment.',
    body: 'Collaboration over extraction. Transparent books and mission-first incentives match how associations and federations already work.',
  },
] as const;

const MODELS = [
  {
    title: 'Shared platform.',
    body: 'One system for the network — membership tools, data layers, member portals — scoped so every participant benefits.',
  },
  {
    title: 'Member programme.',
    body: 'Craft delivery for members under a consortium agreement: preferred terms, shared playbooks, collective learning.',
  },
  {
    title: 'Sector initiative.',
    body: 'Joint builds for healthcare, food systems, cleantech, or social-economy priorities — funded and governed by the consortium.',
  },
] as const;

const FIT = [
  'Industry associations and sector alliances',
  'Innovation clusters and research networks needing implementation capacity',
  'Cooperative federations and social-economy networks',
  'Consortiums planning shared digital infrastructure for members',
] as const;

const CONSORTIUMS_FAQS = [
  {
    question: 'What kinds of networks do you partner with?',
    answer:
      'Industry associations, innovation clusters, cooperative federations, research networks, and sector alliances — especially where members need shared platforms or craft delivery no single SME could fund alone.',
  },
  {
    question: 'How do members benefit?',
    answer:
      'Shared infrastructure, clearer ownership, and access to senior engineering under consortium terms — plus playbooks and learning that stay with the network.',
  },
  {
    question: 'Can you join research or innovation projects?',
    answer:
      'Yes. We contribute implementation capacity and sector experience — food systems, healthcare, sustainability, social enterprise — alongside academic or industry partners.',
  },
  {
    question: 'How do you handle knowledge sharing?',
    answer:
      'Open by default within the partnership: working groups, documentation, and reusable patterns. We strengthen the ecosystem, not hoard process as IP theatre.',
  },
  {
    question: 'How do we start?',
    answer:
      'Bring a mandate, a member need, or a shared-platform brief. Email contact@vineralstechnologies.com — we will map fit to a shared platform, member programme, or sector initiative.',
  },
];

export default function ConsortiumsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Partners', url: 'https://vineralstechnologies.com/partners' },
    { name: 'Consortiums', url: 'https://vineralstechnologies.com/partners/consortiums' },
  ]);
  const faqSchema = createFAQSchema(CONSORTIUMS_FAQS);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main className="pt-16">
        <PartnersHero
          badge="For Consortiums & Networks"
          title="Shared platforms. Shared craft."
          highlightedWord="craft."
          description="Technical partner for associations and sector networks — systems no single member could fund or staff alone, built to last."
          image="/consortiums-atelier.jpg"
          imageAlt="Hands collaborating over laptops and notebooks at a shared table"
          stats={[
            { value: 'Shared', label: 'Infrastructure' },
            { value: 'Owned', label: 'By the network' },
          ]}
          primaryCTA={{ label: 'See engagement models', href: '#models' }}
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
              <span className="eyebrow mb-6 block">Why us</span>
              <h2 className="section-headline max-w-[14ch]">
                Capacity the
                <br />
                <em>network needs.</em>
              </h2>
            </motion.div>
            <motion.ol
              variants={staggerContainer}
              className="space-y-8 md:col-span-7 md:col-start-6"
            >
              {WHY.map((item, i) => (
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

        <Section background="white" paddingY="lg" id="models">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">Models</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              How engagement
              <br />
              <em>usually looks.</em>
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="space-y-8 border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 md:p-10"
            >
              {MODELS.map((item) => (
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
                Start a consortium conversation
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
              Who we are
              <br />
              <em>looking for.</em>
            </motion.h2>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {FIT.map((line) => (
                <motion.li
                  key={line}
                  variants={fadeInUp}
                  className="flex items-start gap-3 leading-relaxed text-[var(--ink-muted)]"
                >
                  <span className="mt-1 text-secondary-600" aria-hidden>
                    —
                  </span>
                  <span>{line}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </Section>

        <FaqAccordion
          title="Questions networks ask."
          description="Who we partner with, member benefit, research, and how to start."
          faqs={CONSORTIUMS_FAQS}
        />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
