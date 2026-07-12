'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import MissionHero from '@/components/sections/MissionHero';
import CTA from '@/components/sections/CTA';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const WALLS = [
  {
    title: 'The knowledge gap.',
    body: 'AI is everywhere. What actually fits your business is a much shorter list. Without someone technical in your corner — with no quota — sorting real from hype is nearly impossible.',
  },
  {
    title: 'The cost reality.',
    body: 'Quality custom software runs real money. Agencies aren’t overcharging; that’s what good engineering takes. For most growing businesses, the cheque just isn’t there.',
  },
  {
    title: 'The expertise gap.',
    body: 'Senior developers work at funded startups and enterprise shops. SMEs end up with juniors learning on their dime, or offshore teams who never quite get the context. Both leave scar tissue.',
  },
] as const;

const VALUES = [
  {
    title: 'Craft first.',
    body: 'Software made by hand. Senior engineering shaped around how you work — not a rented platform, not a template with your logo.',
  },
  {
    title: 'Radical transparency.',
    body: 'No hidden fees, no scope-creep surprises, no vendor lock-in. Plain-language trade-offs. You own everything we ship.',
  },
  {
    title: 'A real partnership.',
    body: 'Honest counsel even when it costs us revenue. We walk away from bad fits and build relationships, not just tickets.',
  },
  {
    title: 'Always learning.',
    body: 'We refine the process between projects and bring better tools to the next engagement — without consultant theatre.',
  },
  {
    title: 'Impact over invoice.',
    body: 'Success is time saved, costs cut, and communities better served. If a project won’t move that needle, we say so before you sign.',
  },
  {
    title: 'Social economy, for real.',
    body: 'As a solidarity cooperative we prioritise mission-driven clients and contribute back to the ecosystem that makes the craft possible.',
  },
] as const;

const GOALS = [
  {
    value: '50+',
    title: 'SMEs unlocked',
    body: 'Small and mid-sized businesses with serious software in their hands by 2027.',
  },
  {
    value: 'Craft',
    title: 'Without dilution',
    body: 'Same calibre larger firms pay full freight for — structured so growing businesses can say yes.',
  },
  {
    value: '10+',
    title: 'Quality jobs',
    body: 'Well-paid technology roles inside Montréal’s social economy by 2027.',
  },
  {
    value: '20+',
    title: 'Mission-driven ships',
    body: 'Completed projects across healthcare, food systems, sustainability, and social enterprise.',
  },
] as const;

const MEASURES = [
  {
    title: 'Client impact.',
    body: 'Time saved, costs cut, revenue lifted, communities better served by the software we shipped.',
  },
  {
    title: 'Reach with quality.',
    body: 'How many SMEs and mission-driven organisations got real, owned software — not a compromise stack.',
  },
  {
    title: 'Terms that hold.',
    body: 'Engagements structured so craft stays intact when funding helps close the gap.',
  },
  {
    title: 'Worker wellbeing.',
    body: 'Fair wages, sustainable workload, room to learn, and democratic governance that shows up in decisions.',
  },
  {
    title: 'Ecosystem contribution.',
    body: 'Partnerships with other co-ops, support for local social economy work, knowledge passed forward.',
  },
] as const;

export default function MissionPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <MissionHero
          badge="Our Mission & Values"
          title="Craft without compromise."
          highlightedWord="without compromise"
          description="Senior engineering for growing businesses. Owned code, honest counsel, terms you can plan around — quality intact."
          image="/mission-atelier.jpg"
          imageAlt="Hands typing on a laptop at a wooden workshop desk — software made by hand"
          primaryCTA={{ label: 'Our values', href: '#core-values' }}
          secondaryCTA={{ label: 'Book a consultation', href: '/contact' }}
        />

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">Le manifeste</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              Closing the gap
              <br />
              <em>without cutting corners.</em>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 md:p-10"
            >
              <p className="mb-6 font-display text-xl leading-relaxed text-[var(--ink)] md:text-[1.35rem]">
                We exist to put senior engineering — software made by hand — in reach of small and
                mid-sized businesses across Canada, with particular weight in Québec&apos;s social
                economy.
              </p>
              <p className="mb-6 leading-relaxed text-[var(--ink-muted)]">
                <strong className="text-[var(--ink)]">The honest part.</strong> Good software
                engineering costs what it costs. That isn&apos;t a markup story; it&apos;s skilled
                people, proper architecture, security, and testing. What isn&apos;t honest is
                pretending juniors or templates deliver the same thing.
              </p>
              <blockquote className="pullquote my-8">
                We&apos;re not undercutting professionals. We&apos;re keeping the craft intact.
              </blockquote>
              <p className="mb-6 leading-relaxed text-[var(--ink-muted)]">
                As a solidarity cooperative, we structure engagements — and mission-aligned funding
                when you qualify — so growing businesses can say yes without diluting quality or
                undercutting the people doing the work.
              </p>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                The piece that often matters more than the budget?{' '}
                <strong className="text-[var(--ink)]">
                  We start by helping you understand what&apos;s actually possible
                </strong>{' '}
                with AI and modern software, before any code is written.
              </p>
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
              <span className="eyebrow">Vision</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-6">
              The size of your business
              <br />
              <em>isn&apos;t the size of your software.</em>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-[52ch] leading-relaxed text-[var(--ink-muted)]"
            >
              A community clinic runs a patient portal worthy of the hospital network. A family farm
              gets the traceability agribusiness takes for granted. A non-profit ships the impact
              tool its mandate has been asking for — made by hand, owned outright.
            </motion.p>
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
              <span className="eyebrow mb-6 block">Pourquoi</span>
              <h2 className="section-headline max-w-[14ch]">
                Why we
                <br />
                <em>exist.</em>
              </h2>
              <p className="lead-text mt-6 max-w-[32ch]">
                Three walls SMEs keep hitting — and why off-the-shelf and offshore rarely clear them.
              </p>
            </motion.div>
            <motion.ol
              variants={staggerContainer}
              className="space-y-8 md:col-span-7 md:col-start-6"
            >
              {WALLS.map((wall, i) => (
                <motion.li
                  key={wall.title}
                  variants={fadeInUp}
                  className="grid grid-cols-[3rem_1fr] gap-x-6 border-b border-[var(--ink-hairline)]/35 pb-8 last:border-0 last:pb-0"
                >
                  <span className="numeral text-xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-xl text-[var(--ink)]">{wall.title}</h3>
                    <p className="max-w-[48ch] leading-relaxed text-[var(--ink-muted)]">
                      {wall.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto mt-14 max-w-3xl border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 md:p-10"
          >
            <motion.h3
              variants={fadeInUp}
              className="mb-4 font-display text-2xl text-[var(--ink)]"
            >
              Our model isn&apos;t a discount shop.
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="mb-6 leading-relaxed text-[var(--ink-muted)]"
            >
              Established Montréal shops do excellent work at mid-market rates. Offshore trades
              quality and context for a lower invoice. SaaS forces compromises that rarely fit the
              actual work. We sit in a different place: a solidarity cooperative that keeps craft
              intact and structures terms — including mission-aligned funding when you qualify —
              so growing businesses can still say yes.
            </motion.p>
            <motion.blockquote variants={fadeInUp} className="pullquote">
              The organisations that need custom software the most can afford it the least.
            </motion.blockquote>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg" id="core-values">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mx-auto mb-10 max-w-3xl md:mb-14">
              <span className="eyebrow mb-6 block">Valeurs</span>
              <h2 className="section-headline">
                What we won&apos;t
                <br />
                <em>compromise.</em>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="border border-[var(--ink-hairline)]/45"
            >
              {VALUES.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className={`grid gap-3 p-6 md:grid-cols-12 md:items-baseline md:gap-x-8 md:p-8 ${
                    index > 0 ? 'border-t border-[var(--ink-hairline)]/40' : ''
                  }`}
                >
                  <span className="numeral text-xl md:col-span-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl text-[var(--ink)] md:col-span-4">
                    {value.title}
                  </h3>
                  <p className="max-w-[48ch] leading-relaxed text-[var(--ink-muted)] md:col-span-7">
                    {value.body}
                  </p>
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
              <h2 className="section-headline max-w-[16ch]">
                Impact
                <br />
                <em>we&apos;re aiming for.</em>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-x-10 gap-y-12 border-t border-[var(--ink-hairline)]/40 pt-10 md:grid-cols-2"
            >
              {GOALS.map((goal) => (
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
            className="grid items-start gap-x-10 gap-y-10 md:grid-cols-12"
          >
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <span className="eyebrow mb-6 block">Mesure</span>
              <h2 className="section-headline max-w-[12ch]">
                How we
                <br />
                <em>measure.</em>
              </h2>
            </motion.div>
            <motion.ul
              variants={staggerContainer}
              className="space-y-8 md:col-span-7 md:col-start-6"
            >
              {MEASURES.map((item, i) => (
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
            </motion.ul>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
