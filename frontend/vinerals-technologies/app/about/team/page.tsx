'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import TeamHero from '@/components/sections/TeamHero';
import CTA from '@/components/sections/CTA';
import Link from 'next/link';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { TEAM_MEMBERS } from '@/content/team';

const CAPACITY = [
  {
    title: 'Food systems specialism.',
    body: 'Traceability, nutrition platforms, processor and field realities — not software that learns your sector on your dime.',
  },
  {
    title: 'Research to production.',
    body: 'McGill Bioresource Engineering depth, shipped systems across Canada, Europe, and Africa.',
  },
  {
    title: 'Compliance in the build.',
    body: 'DPIA, federated storage, NDPA / DPA / GDPR alignment — data protection as craft, not a bolt-on.',
  },
  {
    title: 'Cloud-native stack.',
    body: 'Next.js, TypeScript, Python, Rust, ML/AI — on Vercel, AWS, and Azure. Software and data only.',
  },
] as const;

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <TeamHero
          badge="Meet the Team"
          title="Named people. Hand-made work."
          highlightedWord="Hand-made"
          description="The worker members on our board — project direction, engineering, and data protection. A Québec solidarity cooperative: you talk to the people who ship, not an account manager in between."
          stats={[
            { value: 'Board', label: 'Worker members' },
            { value: '1 = 1', label: 'Member votes' },
          ]}
          primaryCTA={{ label: 'Book a consultation', href: '/contact' }}
          secondaryCTA={{ label: 'See our work', href: '/work' }}
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
              <span className="eyebrow">Le métier · Capacity</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              Custom software and AI
              <br />
              <em>for SMEs.</em>
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="space-y-5 leading-relaxed text-[var(--ink-muted)]"
            >
              <motion.p variants={fadeInUp}>
                Vinerals Technologies is a Québec-registered solidarity cooperative. We build
                custom software and AI integrations for growing businesses, with{' '}
                <strong className="text-[var(--ink)]">food-systems traceability</strong> as a
                specialism — and the same craft across healthcare, sustainability, and social
                enterprise.
              </motion.p>
              <motion.blockquote variants={fadeInUp} className="pullquote my-6">
                The team that starts your project is the team that finishes it.
              </motion.blockquote>
              <motion.p variants={fadeInUp}>
                Below are the <strong className="text-[var(--ink)]">worker members on the board</strong> —
                the people leading delivery. The cooperative itself is broader: user and supporting
                members sit in the same democratic structure. Software made by hand means you meet
                the people writing the code and shaping the compliance — not a sales floor.
              </motion.p>
            </motion.div>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg" id="team">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-10 md:mb-14">
              <span className="eyebrow mb-6 block">Board · Worker members</span>
              <h2 className="section-headline max-w-[18ch]">
                Who you&apos;ll
                <br />
                <em>actually meet.</em>
              </h2>
              <p className="lead-text mt-6 max-w-[42ch]">
                Project direction, AI &amp; software engineering, and data protection — the
                worker seats on the board.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-8">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.article
                  key={member.name}
                  variants={fadeInUp}
                  className="border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 md:flex md:gap-10 md:p-10"
                >
                  <div className="mb-6 flex-shrink-0 md:mb-0">
                    <div className="flex h-28 w-28 flex-col items-center justify-center border border-[var(--ink-hairline)]/50 bg-primary-900 text-[var(--cream)]">
                      <span className="font-display text-3xl">{member.initials}</span>
                      <span className="mt-2 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-white/55">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-3xl text-[var(--ink)]">{member.name}</h3>
                    <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-secondary-600">
                      {member.role}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                      {member.expertise.map((skill) => (
                        <li
                          key={skill}
                          className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>

                    {member.languages && member.languages.length > 0 && (
                      <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                        Languages · {member.languages.join(' · ')}
                      </p>
                    )}

                    <p className="mt-6 max-w-[62ch] leading-relaxed text-[var(--ink-muted)]">
                      {member.bio}
                    </p>

                    <aside className="mt-6 border-l-2 border-secondary-500 pl-5">
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-secondary-600">
                        On the work
                      </p>
                      <p className="mt-2 max-w-[54ch] leading-relaxed text-[var(--ink)]">
                        {member.note}
                      </p>
                    </aside>

                    {(member.site ||
                      member.email ||
                      member.linkedin ||
                      member.github) && (
                      <div className="mt-8 flex flex-wrap gap-6">
                        {member.site && (
                          <a
                            href={member.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-700 hover:text-secondary-600"
                          >
                            Site <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-700 hover:text-secondary-600"
                          >
                            <Mail className="h-3.5 w-3.5" /> Email
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-700 hover:text-secondary-600"
                          >
                            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-700 hover:text-secondary-600"
                          >
                            <Github className="h-3.5 w-3.5" /> GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.article>
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
              <span className="eyebrow mb-6 block">Atelier</span>
              <h2 className="section-headline max-w-[12ch]">
                How the
                <br />
                <em>shop runs.</em>
              </h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="space-y-8 md:col-span-7 md:col-start-6"
            >
              {CAPACITY.map((item, i) => (
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

        <Section background="white" paddingY="lg" id="join">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">Growing slowly</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-6">
              Join the workshop.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mb-10 max-w-[48ch] leading-relaxed text-[var(--ink-muted)]"
            >
              We grow on purpose. If you&apos;re a senior practitioner who wants meaningful
              projects, fair wages, and cooperative governance — write us.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="border border-[var(--ink-hairline)]/45 bg-[var(--cream-deep)] p-8 md:p-10"
            >
              <h3 className="mb-6 font-display text-2xl text-[var(--ink)]">What we look for</h3>
              <ul className="mb-8 space-y-3 text-[var(--ink-muted)]">
                {[
                  'Deep production experience in software, data, or food-systems delivery',
                  'Track record of shipping real systems — not slide decks',
                  'Interest in mission-driven work and cooperative governance',
                  'Based in or willing to work with Montréal',
                  'Clear communication (English / French a plus)',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-1 text-secondary-600" aria-hidden>
                      —
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="mailto:contact@vineralstechnologies.com?subject=Joining%20Vinerals"
                className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700 transition-colors hover:text-secondary-600"
              >
                <Mail className="h-4 w-4" />
                contact@vineralstechnologies.com
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
