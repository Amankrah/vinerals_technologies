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

const DOORS = [
  {
    numeral: '01',
    eyebrow: 'Funders',
    title: 'Patient capital & foundations.',
    description:
      'Back software made by hand for SMEs — social return with financial discipline, not a pitch deck fantasy.',
    href: '/partners/funders',
  },
  {
    numeral: '02',
    eyebrow: 'Government',
    title: 'Digital economy & SME mandates.',
    description:
      'Implementation capacity that lines up with Québec and Canadian priorities — craft delivery, clear reporting.',
    href: '/partners/government',
  },
  {
    numeral: '03',
    eyebrow: 'Consortiums',
    title: 'Shared platforms for networks.',
    description:
      'Technical partner for associations and sector networks — systems no single member could fund alone.',
    href: '/partners/consortiums',
  },
] as const;

const WHY = [
  {
    title: 'Craft as the quality thesis.',
    body: 'Senior engineering, owned code, honest counsel. Partners fund quality that lasts — not discount theatre.',
  },
  {
    title: 'Cooperative governance.',
    body: 'A solidarity cooperative: mission and surplus stay with workers and community, not outside shareholders.',
  },
  {
    title: 'Measurable delivery.',
    body: 'Milestones, owned IP for clients, and reporting that matches your programme — not vanity metrics.',
  },
  {
    title: 'Sector fluency.',
    body: 'Healthcare, food systems, sustainability, and social enterprise — where regulation and workflows matter.',
  },
] as const;

const PARTNERS_FAQS = [
  {
    question: 'Who are these pages for?',
    answer:
      'Funders and foundations, government agencies, and industry consortiums or networks. If you are an SME looking for software, start with Services or Contact — this cluster is for institutional partners.',
  },
  {
    question: 'How is partnering with a cooperative different from a regular vendor?',
    answer:
      'Social impact sits in governance, not a CSR slide. Transparent books, democratic decision-making, and surpluses that stay in the mission. You get craft delivery with aligned incentives.',
  },
  {
    question: 'What reporting do partners get?',
    answer:
      'Project milestones, financial transparency, and impact metrics agreed up front — jobs, clients served, and programme-specific KPIs. We design reports to fit your evaluation frameworks.',
  },
  {
    question: 'How do we start?',
    answer:
      'Pick the door that matches your mandate, or email contact@vineralstechnologies.com with what you are trying to make happen.',
  },
];

export default function PartnersPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Partners', url: 'https://vineralstechnologies.com/partners' },
  ]);
  const faqSchema = createFAQSchema(PARTNERS_FAQS);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main className="pt-16">
        <PartnersHero
          badge="For Partners"
          title="Partners who keep the craft intact."
          highlightedWord="craft intact"
          description="A Québec solidarity cooperative. We build software made by hand for SMEs — and we partner with funders, government, and consortiums whose mandates line up with that work."
          image="/partners-atelier.jpg"
          imageAlt="Hands reviewing work together at a wooden workshop table"
          stats={[
            { value: '3', label: 'Partner doors' },
            { value: 'Co-op', label: 'Governance' },
          ]}
          primaryCTA={{ label: 'Choose a door', href: '#doors' }}
          secondaryCTA={{ label: 'Contact us', href: '/contact' }}
        />

        <Section background="gray" paddingY="lg" id="doors">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="mb-10 grid items-end gap-x-10 gap-y-6 md:mb-14 md:grid-cols-12">
              <motion.div variants={fadeInUp} className="md:col-span-7">
                <span className="eyebrow mb-6 block">Trois portes</span>
                <h2 className="section-headline max-w-[16ch]">
                  Where a partnership
                  <br />
                  <em>lands.</em>
                </h2>
              </motion.div>
              <motion.p
                variants={fadeInUp}
                className="lead-text max-w-[40ch] md:col-span-5 md:ml-auto"
              >
                Three audiences. Three briefs. Same craft underneath — pick the door that
                matches your mandate.
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="border border-[var(--ink-hairline)]/45"
            >
              {DOORS.map((door, index) => (
                <motion.div key={door.href} variants={fadeInUp}>
                  <Link
                    href={door.href}
                    className={`group grid gap-4 p-6 transition-colors hover:bg-[var(--cream-deep)]/60 md:grid-cols-12 md:items-baseline md:gap-x-8 md:p-8 ${
                      index > 0 ? 'border-t border-[var(--ink-hairline)]/40' : ''
                    }`}
                  >
                    <span className="numeral text-2xl md:col-span-1">{door.numeral}</span>
                    <div className="md:col-span-3">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-secondary-600">
                        {door.eyebrow}
                      </span>
                      <h3 className="mt-2 font-display text-2xl text-[var(--ink)] transition-colors group-hover:text-primary-700 md:text-[1.65rem]">
                        {door.title}
                      </h3>
                    </div>
                    <p className="max-w-[42ch] leading-relaxed text-[var(--ink-muted)] md:col-span-6">
                      {door.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary-700 md:col-span-2 md:justify-end">
                      Open
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
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
            className="grid items-start gap-x-10 gap-y-10 md:grid-cols-12"
          >
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <span className="eyebrow mb-6 block">Pourquoi</span>
              <h2 className="section-headline max-w-[12ch]">
                Why partner
                <br />
                <em>with us.</em>
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

        <FaqAccordion
          title="Quick clarity."
          description="Who this is for, how a cooperative partnership works, and how to start."
          faqs={PARTNERS_FAQS}
        />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
