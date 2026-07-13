'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import AboutHero from '@/components/sections/AboutHero';
import CTA from '@/components/sections/CTA';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const PAGES = [
  {
    numeral: '01',
    eyebrow: 'Mission',
    title: 'Why we exist.',
    description:
      'Who we build for, what quality means here, and what we will not do to grow.',
    href: '/about/mission',
  },
  {
    numeral: '02',
    eyebrow: 'Team',
    title: 'The people writing the code.',
    description:
      'Worker members on the board: project direction, engineering, and compliance. Senior, named, reachable.',
    href: '/about/team',
  },
  {
    numeral: '03',
    eyebrow: 'Cooperative',
    title: 'How ownership changes the work.',
    description:
      'Governance, surplus, and why a solidarity cooperative shows up in the craft, not only on a letterhead.',
    href: '/about/cooperative',
  },
] as const;

const FACTS = [
  {
    label: 'Structure',
    body: 'Solidarity cooperative (coopérative de solidarité). Worker, user, and supporting members. One vote each.',
  },
  {
    label: 'Craft',
    body: 'Senior engineering, systems shaped around how you already work, code you own.',
  },
  {
    label: 'Location',
    body: 'Montréal, Québec. Clients across Canada and beyond. Remote collaboration with the same workshop standards.',
  },
  {
    label: 'Focus',
    body: 'Healthcare, food systems, sustainability, and social enterprise. SMEs and mission-driven organisations.',
  },
] as const;

const PRINCIPLES = [
  {
    title: 'Craft, not templates.',
    body: 'Senior engineers shape every system around how you operate. Not a rented platform. Not a template with your logo.',
  },
  {
    title: 'Translation before code.',
    body: 'Before anyone opens an editor, we explain what software and AI can and cannot do. Often the honest answer is don’t build that yet.',
  },
  {
    title: 'You own everything we ship.',
    body: 'Code, credentials, docs, infrastructure. No vendor lock-in. No proprietary trap when you want to move on.',
  },
  {
    title: 'The team that starts finishes.',
    body: 'You talk to the developer doing the work. No juniors learning on your dime. No account manager in the middle.',
  },
  {
    title: 'Terms you can plan around.',
    body: 'Mission-aligned funding when you qualify, without diluting the craft. Serious work, structured so a growing business can say yes.',
  },
  {
    title: 'Plugged into the social economy.',
    body: 'Ties to CDRQ, PME MTL, CESIM, and the Chantier. Québec’s social economy as working context, not decoration.',
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <AboutHero
          badge="About Vinerals Technologies"
          title="Software, made by hand."
          highlightedWord="made by hand"
          description="A Montréal solidarity cooperative. Senior engineering shaped around how SMEs actually work. Craft you can feel, code you own, terms you can plan around."
          image="/about-vignette.jpg"
          imageAlt="Hands at a wooden workshop desk with a laptop and notebook"
          primaryCTA={{ label: 'Read on', href: '#who-we-are' }}
          secondaryCTA={{ label: 'Book a consultation', href: '/contact' }}
        />

        <Section background="gray" paddingY="lg" id="who-we-are">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">Who we are</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              Craft without the
              <br />
              <em>enterprise theatre.</em>
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="space-y-5 leading-relaxed text-[var(--ink-muted)]"
            >
              <motion.p variants={fadeInUp}>
                Vinerals Technologies is not a typical agency. We are a{' '}
                <strong className="text-[var(--ink)]">solidarity cooperative</strong>,
                owned by the people doing the work and the community we serve. What we
                sell is quality:{' '}
                <strong className="text-[var(--ink)]">senior engineering</strong>{' '}
                and systems that fit how your business already runs.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Founded in Montréal in 2026, we exist because growing businesses deserve
                serious engineering without the enterprise theatre. Professional builds
                cost real money. That is honest. What is not honest is bending your
                operations around someone else&apos;s product, or getting juniors learning
                on your dime.
              </motion.p>
              <motion.blockquote variants={fadeInUp} className="pullquote my-6">
                Serious work. Owned code. Terms you can plan around.
              </motion.blockquote>
              <motion.p variants={fadeInUp}>
                We start by explaining what AI and modern software can (and cannot)
                realistically do. Then we build carefully, at the bench, and structure
                engagements so a growing business can say yes, including mission-aligned
                funding when you qualify.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We work with organisations in healthcare, food systems, sustainability, and
                social enterprise. Senior craft, clear ownership, and honest counsel on
                whether to build at all.
              </motion.p>
            </motion.div>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="mb-10 grid items-end gap-x-10 gap-y-6 md:mb-14 md:grid-cols-12">
              <motion.div variants={fadeInUp} className="md:col-span-7">
                <span className="eyebrow mb-6 block">Go deeper</span>
                <h2 className="section-headline max-w-[16ch]">
                  Three pages
                  <br />
                  <em>worth opening.</em>
                </h2>
              </motion.div>
              <motion.p
                variants={fadeInUp}
                className="lead-text max-w-[40ch] md:col-span-5 md:ml-auto"
              >
                This page is the overview. Mission, people, and the cooperative model each
                have their own page when you want the detail.
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="border border-[var(--ink-hairline)]/45"
            >
              {PAGES.map((page, index) => (
                <motion.div key={page.href} variants={fadeInUp}>
                  <Link
                    href={page.href}
                    className={`group grid gap-4 p-6 transition-colors hover:bg-[var(--cream-deep)]/60 md:grid-cols-12 md:items-baseline md:gap-x-8 md:p-8 ${
                      index > 0 ? 'border-t border-[var(--ink-hairline)]/40' : ''
                    }`}
                  >
                    <span className="numeral text-2xl md:col-span-1">{page.numeral}</span>
                    <div className="md:col-span-3">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-secondary-600">
                        {page.eyebrow}
                      </span>
                      <h3 className="mt-2 font-display text-2xl text-[var(--ink)] transition-colors group-hover:text-primary-700 md:text-[1.65rem]">
                        {page.title}
                      </h3>
                    </div>
                    <p className="max-w-[42ch] leading-relaxed text-[var(--ink-muted)] md:col-span-6">
                      {page.description}
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

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid items-start gap-x-10 gap-y-10 md:grid-cols-12"
          >
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <span className="eyebrow mb-6 block">At a glance</span>
              <h2 className="section-headline max-w-[12ch]">
                Quick
                <br />
                <em>facts.</em>
              </h2>
            </motion.div>
            <motion.dl
              variants={staggerContainer}
              className="space-y-8 md:col-span-7 md:col-start-6"
            >
              {FACTS.map((fact) => (
                <motion.div
                  key={fact.label}
                  variants={fadeInUp}
                  className="grid grid-cols-[7rem_1fr] gap-x-6 border-b border-[var(--ink-hairline)]/35 pb-8 last:border-0 last:pb-0"
                >
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-secondary-600">
                    {fact.label}
                  </dt>
                  <dd className="leading-relaxed text-[var(--ink-muted)]">{fact.body}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid items-start gap-x-10 gap-y-12 md:grid-cols-12"
          >
            <motion.div variants={fadeInUp} className="md:col-span-4 md:sticky md:top-32 md:self-start">
              <span className="eyebrow mb-6 block">Pourquoi</span>
              <h2 className="section-headline mb-4 max-w-[14ch]">
                Built this way
                <br />
                <em>on purpose.</em>
              </h2>
              <p className="lead-text max-w-[32ch]">
                Craft first. Ownership next. Funding helps when you qualify. It does not
                define the brand.
              </p>
            </motion.div>

            <motion.ol
              variants={staggerContainer}
              className="space-y-10 md:col-span-7 md:col-start-6"
            >
              {PRINCIPLES.map((item, i) => (
                <motion.li
                  key={item.title}
                  variants={fadeInUp}
                  className="grid grid-cols-[3rem_1fr] gap-x-6"
                >
                  <span className="numeral pt-1 text-2xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-xl leading-snug text-[var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="max-w-[48ch] leading-relaxed text-[var(--ink-muted)]">
                      {item.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
