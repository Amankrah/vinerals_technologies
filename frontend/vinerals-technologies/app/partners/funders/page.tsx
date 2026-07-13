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

const THESIS = [
  {
    title: 'The gap.',
    body: 'Serious custom software costs real money. Growing businesses often face quotes they cannot justify, or settle for thin builds that become expensive to maintain.',
  },
  {
    title: 'The craft.',
    body: 'Senior engineering, code the client owns, and honest counsel. Quality structured so a growing business can say yes.',
  },
  {
    title: 'Your capital.',
    body: 'Patient capital, grants, and programme funding extend reach without diluting craft. Surpluses stay in the cooperative mission.',
  },
] as const;

const MODEL = [
  {
    title: 'Earned revenue first.',
    body: 'Client work anchors the shop. Partner capital expands capacity and qualifying engagements. It does not replace a real delivery business.',
  },
  {
    title: 'Hybrid by design.',
    body: 'Market-rate projects fund the house. Mission-aligned tracks keep craft in reach for clinics, co-ops, climate startups, and charities when programmes apply.',
  },
  {
    title: 'Transparent use of funds.',
    body: 'Engineering capacity, delivery, and cooperative infrastructure, with milestones and reporting agreed before money moves.',
  },
] as const;

const TARGETS = [
  {
    value: '50+',
    title: 'SMEs unlocked',
    body: 'Target by 2027: growing businesses with serious, owned software. This is a goal, not a claim of past results.',
  },
  {
    value: 'Craft',
    title: 'Without dilution',
    body: 'The same calibre larger shops ship, with terms structured so quality survives the budget conversation.',
  },
  {
    value: '10+',
    title: 'Quality jobs',
    body: 'Target: well-paid roles inside Montréal’s social economy by 2027.',
  },
  {
    value: 'Open',
    title: 'Books & governance',
    body: 'Solidarity cooperative: one member, one vote; surpluses to mission, workers, and community.',
  },
] as const;

const IDEAL = [
  'Foundations focused on digital inclusion, social innovation, or sector capacity',
  'Patient / solidarity capital comfortable with cooperative governance',
  'Programme funders who need credible technical delivery partners',
  'Sector funders in healthcare, food systems, sustainability, or social enterprise',
] as const;

const FUNDERS_FAQS = [
  {
    question: 'Are you raising venture capital?',
    answer:
      'No. We seek patient capital, grants, and programme partnerships that fit a solidarity cooperative. We are not looking for extractive equity with an exit clock.',
  },
  {
    question: 'Which programmes do you work with?',
    answer:
      'We pursue and deliver under programmes that fit craft work for SMEs, including health, innovation, cleantech, agtech, and social-enterprise streams (for example CIHR, ISED, SDTC, MAPAQ, Community Futures, foundations). Fit depends on the project. We do not claim a blanket list of active awards.',
  },
  {
    question: 'How do you measure impact?',
    answer:
      'Agreed KPIs per engagement: delivery milestones, clients served, jobs supported, and qualitative outcomes. Reports match your evaluation framework.',
  },
  {
    question: 'How do we engage?',
    answer:
      'Project grants, multi-year capacity support, or co-funded client programmes. Email contact@vineralstechnologies.com with your mandate and constraints.',
  },
];

export default function FundersPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Partners', url: 'https://vineralstechnologies.com/partners' },
    { name: 'Funders', url: 'https://vineralstechnologies.com/partners/funders' },
  ]);
  const faqSchema = createFAQSchema(FUNDERS_FAQS);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main className="pt-16">
        <PartnersHero
          badge="For Funders & Foundations"
          title="Patient capital for hand-made software."
          highlightedWord="hand-made"
          description="Social return with financial discipline. Back a Montréal solidarity cooperative that builds serious software for Québec SMEs, with transparent books and clear reporting."
          image="/partners-atelier.jpg"
          imageAlt="Hands collaborating over a laptop at a workshop table"
          stats={[
            { value: 'Patient', label: 'Capital preferred' },
            { value: 'Co-op', label: 'Governance' },
          ]}
          primaryCTA={{ label: 'Read the thesis', href: '#thesis' }}
          secondaryCTA={{ label: 'Contact us', href: '/contact' }}
        />

        <Section background="gray" paddingY="lg" id="thesis">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid items-start gap-x-10 gap-y-10 md:grid-cols-12"
          >
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <span className="eyebrow mb-6 block">Thesis</span>
              <h2 className="section-headline max-w-[14ch]">
                Why back
                <br />
                <em>this shop.</em>
              </h2>
            </motion.div>
            <motion.ol
              variants={staggerContainer}
              className="space-y-8 md:col-span-7 md:col-start-6"
            >
              {THESIS.map((item, i) => (
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

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">Model</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              How the money
              <br />
              <em>works.</em>
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="space-y-8 border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 md:p-10"
            >
              {MODEL.map((item) => (
                <motion.div key={item.title} variants={fadeInUp}>
                  <h3 className="mb-2 font-display text-xl text-[var(--ink)]">{item.title}</h3>
                  <p className="leading-relaxed text-[var(--ink-muted)]">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-10 md:mb-14">
              <span className="eyebrow mb-6 block">Horizon</span>
              <h2 className="section-headline max-w-[18ch]">
                Goals we are
                <br />
                <em>aiming for.</em>
              </h2>
              <p className="lead-text mt-6 max-w-[42ch]">
                These are targets, not audited past results. We will not dress ambition as
                achievement.
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="grid gap-x-10 gap-y-12 border-t border-[var(--ink-hairline)]/40 pt-10 md:grid-cols-2"
            >
              {TARGETS.map((goal) => (
                <motion.div key={goal.title} variants={fadeInUp}>
                  <div className="mb-3 font-display text-4xl italic leading-none text-primary-700 md:text-5xl">
                    {goal.value}
                  </div>
                  <h3 className="mb-2 font-display text-xl text-[var(--ink)]">{goal.title}</h3>
                  <p className="max-w-[40ch] leading-relaxed text-[var(--ink-muted)]">
                    {goal.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg">
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
            <motion.ul variants={staggerContainer} className="mb-10 space-y-4">
              {IDEAL.map((line) => (
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
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700 hover:text-secondary-600"
              >
                Start a funding conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </Section>

        <FaqAccordion
          title="Questions funders ask."
          description="VC vs patient capital, programmes, measurement, and how to engage."
          faqs={FUNDERS_FAQS}
        />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
