'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CooperativeHero from '@/components/sections/CooperativeHero';
import CTA from '@/components/sections/CTA';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

const PRINCIPLES = [
  {
    n: '01',
    title: 'Voluntary & open membership',
    body: 'Anyone who can use our services and accepts membership responsibilities can join. We do not discriminate.',
  },
  {
    n: '02',
    title: 'Democratic member control',
    body: 'One member, one vote. Major decisions are made collectively through democratic processes.',
  },
  {
    n: '03',
    title: 'Member economic participation',
    body: 'Members contribute equitably and control capital democratically. Surpluses are reinvested or distributed fairly.',
  },
  {
    n: '04',
    title: 'Autonomy & independence',
    body: 'Self-governed by members. No external investors control our direction or extract profits.',
  },
  {
    n: '05',
    title: 'Education, training & information',
    body: 'We invest in member development and educate the public about the cooperative model.',
  },
  {
    n: '06',
    title: 'Cooperation among cooperatives',
    body: 'We work with other co-ops, share resources, and strengthen the cooperative movement.',
  },
  {
    n: '07',
    title: 'Concern for community',
    body: 'Sustainable community development through member-approved policies — including tracks that keep craft in reach for non-profits and social enterprises.',
  },
] as const;

const WHY_STRUCTURE = [
  {
    title: 'Craft over extraction.',
    body: 'Traditional corporations maximise shareholder value. A cooperative is bound to its members and its mission. We put software made by hand ahead of profit extraction — reinvesting in quality and reach, not paying outside shareholders.',
  },
  {
    title: 'Terms without corner-cutting.',
    body: 'Good engineering costs what it costs. Mission-aligned funding can cover part of qualifying budgets so growing businesses can say yes — without wages or quality taking the hit.',
  },
  {
    title: 'Worker ownership.',
    body: 'The people writing the code have a say in how the company is run. Better decisions, higher-quality work, and workloads that don’t burn out the team shipping your project.',
  },
  {
    title: 'A longer time horizon.',
    body: 'No investors demanding a quick exit. We focus on client relationships that last and operations we can sustain.',
  },
] as const;

const CLIENT_BENEFITS = [
  {
    title: 'Software made by hand.',
    body: 'Same senior standards you’d expect from a serious Montréal shop — craft first, with terms a growing business can plan around.',
  },
  {
    title: 'Translation before code.',
    body: 'We walk you through what AI and software can and can’t do before anyone writes a line. Mistakes you don’t make are worth real money.',
  },
  {
    title: 'Aligned incentives.',
    body: 'We win when you win — not when we run up billable hours or stretch the scope.',
  },
  {
    title: 'The team that starts finishes.',
    body: 'Worker ownership means low turnover. No juniors learning mid-project on your dime.',
  },
  {
    title: 'You own everything.',
    body: 'No vendor lock-in, no proprietary trap. 100% of the code, ready to leave with you.',
  },
] as const;

const GOVERNANCE = [
  {
    title: 'General Assembly',
    body: 'Members meet quarterly to review the books, approve big decisions, and elect the board. One member, one vote.',
  },
  {
    title: 'Board of Directors',
    body: 'Elected worker and community representatives provide strategic oversight and keep us honest about the mission.',
  },
  {
    title: 'Day-to-day operations',
    body: 'Worker-members decide by consensus when we can, by vote when we must. Technical calls live with the people closest to the work.',
  },
  {
    title: 'Surplus distribution',
    body: 'After reserves and reinvestment, surpluses follow hours worked (patronage), not capital invested. A portion goes to community development.',
  },
] as const;

const ECOSYSTEM = [
  {
    name: 'Conseil québécois de la coopération et de la mutualité (CQCM)',
    body: 'Québec’s cooperative network — support, advocacy, and connections.',
    href: 'https://www.coopquebec.coop/',
  },
  {
    name: "Chantier de l'économie sociale",
    body: 'Network promoting and supporting Québec’s social economy enterprises.',
    href: 'https://chantier.qc.ca/',
  },
  {
    name: 'PME MTL',
    body: 'Montréal’s network supporting SME and social economy development.',
    href: 'https://pmemtl.com/',
  },
  {
    name: "RISQ (Réseau d'investissement social du Québec)",
    body: 'Social finance network providing patient capital to social enterprises.',
    href: 'https://risq.qc.ca/',
  },
] as const;

export default function CooperativePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <CooperativeHero
          badge="Our Cooperative Model"
          title="Built differently, on purpose."
          highlightedWord="on purpose"
          description="A solidarity cooperative. Craft, ownership, and honest counsel — owned by workers and community, not by investors hunting an exit."
          image="/cooperative-atelier.jpg"
          imageAlt="Hands gathered around a wooden workshop table — cooperative craft"
          stats={[
            { value: '1 = 1', label: 'Member votes' },
            { value: 'Craft', label: 'Before extraction' },
          ]}
          primaryCTA={{ label: 'How it shows up', href: '#in-the-work' }}
          secondaryCTA={{ label: 'Book a consultation', href: '/contact' }}
        />

        {/* Lead with work impact */}
        <Section background="gray" paddingY="lg" id="in-the-work">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid items-start gap-x-10 gap-y-10 md:grid-cols-12"
          >
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <span className="eyebrow mb-6 block">In the work</span>
              <h2 className="section-headline max-w-[14ch]">
                The model
                <br />
                <em>you can feel.</em>
              </h2>
              <p className="lead-text mt-6 max-w-[32ch]">
                Structure isn&apos;t a feel-good story. It changes who you talk to, what you own,
                and whether quality gets sacrificed for an exit.
              </p>
            </motion.div>
            <motion.ol
              variants={staggerContainer}
              className="space-y-8 md:col-span-7 md:col-start-6"
            >
              {CLIENT_BENEFITS.map((item, i) => (
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

        <Section background="white" paddingY="lg" id="what-is-cooperative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">Définition</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              So what is a
              <br />
              <em>solidarity cooperative?</em>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 md:p-10"
            >
              <p className="mb-6 leading-relaxed text-[var(--ink-muted)]">
                A solidarity cooperative (<em>coopérative de solidarité</em>) is a Québec business
                structure that brings three kinds of member into the same room:
              </p>
              <ul className="mb-6 space-y-3 text-[var(--ink-muted)]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-secondary-600" aria-hidden>
                    —
                  </span>
                  <span>
                    <strong className="text-[var(--ink)]">Worker members.</strong> The people
                    doing the work — including the{' '}
                    <Link
                      href="/about/team"
                      className="text-primary-700 underline decoration-[var(--ink-hairline)] underline-offset-4 transition-colors hover:text-secondary-600"
                    >
                      worker seats on our board
                    </Link>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-secondary-600" aria-hidden>
                    —
                  </span>
                  <span>
                    <strong className="text-[var(--ink)]">User members.</strong> Clients who choose
                    to join (optional).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-secondary-600" aria-hidden>
                    —
                  </span>
                  <span>
                    <strong className="text-[var(--ink)]">Supporting members.</strong> Community
                    stakeholders who believe in the mission.
                  </span>
                </li>
              </ul>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                Each member gets one vote, no matter what they put in. Surpluses go back into the
                mission, to worker-members, or to a community fund. Nothing flows out to external
                shareholders — because there are none.
              </p>
              <blockquote className="pullquote mt-8">
                Craft over extraction. Built differently, on purpose.
              </blockquote>
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
            <motion.div variants={fadeInUp} className="mx-auto mb-10 max-w-3xl md:mb-14">
              <span className="eyebrow mb-6 block">Seven principles</span>
              <h2 className="section-headline mb-4">
                How the ICA principles
                <br />
                <em>show up daily.</em>
              </h2>
              <p className="lead-text max-w-[48ch]">
                Cooperatives worldwide share seven principles from the International Cooperative
                Alliance. Here&apos;s what each looks like in our work.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="border border-[var(--ink-hairline)]/45 bg-[var(--paper)]"
            >
              {PRINCIPLES.map((p, index) => (
                <motion.div
                  key={p.n}
                  variants={fadeInUp}
                  className={`grid gap-3 p-6 md:grid-cols-12 md:items-baseline md:gap-x-8 md:p-8 ${
                    index > 0 ? 'border-t border-[var(--ink-hairline)]/40' : ''
                  }`}
                >
                  <span className="numeral text-xl md:col-span-1">{p.n}</span>
                  <h3 className="font-display text-xl text-[var(--ink)] md:col-span-4">
                    {p.title}
                  </h3>
                  <p className="max-w-[48ch] leading-relaxed text-[var(--ink-muted)] md:col-span-7">
                    {p.body}
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
              <span className="eyebrow mb-6 block">Pourquoi</span>
              <h2 className="section-headline max-w-[12ch]">
                Why this
                <br />
                <em>structure.</em>
              </h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="space-y-8 md:col-span-7 md:col-start-6"
            >
              {WHY_STRUCTURE.map((item, i) => (
                <motion.div
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
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">Gouvernance</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              How we&apos;re governed
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 md:p-10"
            >
              <p className="mb-8 leading-relaxed text-[var(--ink-muted)]">
                Democratic, but built to move quickly:
              </p>
              <dl className="space-y-8">
                {GOVERNANCE.map((item) => (
                  <div key={item.title}>
                    <dt className="font-display text-xl text-[var(--ink)]">{item.title}</dt>
                    <dd className="mt-2 leading-relaxed text-[var(--ink-muted)]">{item.body}</dd>
                  </div>
                ))}
              </dl>
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
            <motion.div variants={fadeInUp} className="mx-auto mb-10 max-w-3xl md:mb-14">
              <span className="eyebrow mb-6 block">Écosystème</span>
              <h2 className="section-headline mb-4">
                Part of Québec&apos;s
                <br />
                <em>social economy.</em>
              </h2>
              <p className="lead-text max-w-[48ch]">
                More than 11,000 enterprises that take social and environmental goals as seriously
                as the P&amp;L. Among the organisations we work with and lean on:
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="border border-[var(--ink-hairline)]/45"
            >
              {ECOSYSTEM.map((org, index) => (
                <motion.a
                  key={org.href}
                  variants={fadeInUp}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group grid gap-3 p-6 transition-colors hover:bg-[var(--cream-deep)]/60 md:grid-cols-12 md:items-baseline md:gap-x-8 md:p-8 ${
                    index > 0 ? 'border-t border-[var(--ink-hairline)]/40' : ''
                  }`}
                >
                  <h3 className="font-display text-xl text-[var(--ink)] transition-colors group-hover:text-primary-700 md:col-span-5">
                    {org.name}
                  </h3>
                  <p className="max-w-[40ch] leading-relaxed text-[var(--ink-muted)] md:col-span-5">
                    {org.body}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-700 md:col-span-2 md:justify-end">
                    Visit
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
