'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import TeamHero from '@/components/sections/TeamHero';
import CTA from '@/components/sections/CTA';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { TEAM_MEMBERS } from '@/content/team';

const CAPACITY = [
  {
    title: 'Food systems depth.',
    body: 'Traceability, nutrition platforms, processor and field realities. Sector knowledge in the room from day one.',
  },
  {
    title: 'Research that ships.',
    body: 'McGill Bioresource Engineering background, with platforms already live across Canada, Europe, and Africa.',
  },
  {
    title: 'Compliance in the build.',
    body: 'DPIA, storage architecture, and NDPA / DPA / GDPR alignment designed in, not bolted on the week before launch.',
  },
  {
    title: 'A stack we run in production.',
    body: 'Next.js, TypeScript, Python, Rust, and ML on Vercel, AWS, and Azure. Software and data systems, end to end.',
  },
] as const;

const WORKING_WITH_US = [
  {
    title: 'The team that starts finishes.',
    body: 'You are not handed off mid-project. The people named on this page stay on the work through handover.',
  },
  {
    title: 'You talk to who builds.',
    body: 'No account manager between you and the engineering. Questions go to the person who can answer them.',
  },
  {
    title: 'Reachable after launch.',
    body: 'Ownership includes docs and credentials. Support stays available when real use raises real questions.',
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
          description="Three co-founders on the board: project direction, engineering, and data protection. You meet the people who ship. Book a consultation and talk to them directly."
          stats={[
            { value: '3', label: 'Co-founders on the board' },
            { value: 'Direct', label: 'Access to who ships' },
          ]}
          primaryCTA={{ label: 'Book a consultation', href: '/contact' }}
          secondaryCTA={{ label: 'Email us', href: 'mailto:contact@vineralstechnologies.com' }}
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
              <span className="eyebrow">Why this page matters</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              Credibility is
              <br />
              <em>named people.</em>
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="space-y-5 leading-relaxed text-[var(--ink-muted)]"
            >
              <motion.p variants={fadeInUp}>
                Vinerals Technologies is a Québec solidarity cooperative. We build custom software
                and practical AI for growing businesses, with deep experience in food systems and
                the same craft across healthcare, sustainability, and social enterprise.
              </motion.p>
              <motion.blockquote variants={fadeInUp} className="pullquote my-6">
                The team that starts your project is the team that finishes it.
              </motion.blockquote>
              <motion.p variants={fadeInUp}>
                Below are the{' '}
                <strong className="text-[var(--ink)]">co-founders and worker members on the board</strong>
                : the people who lead delivery. The cooperative also includes user and supporting
                members in the same democratic structure. When you hire us, you are hiring these
                people, not a rotating bench.
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
                Who you will
                <br />
                <em>actually meet.</em>
              </h2>
              <p className="lead-text mt-6 max-w-[44ch]">
                Project direction, engineering, and data protection. Open a LinkedIn profile, read
                the brief, then book a call.
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
                        On your project
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
              <span className="eyebrow mb-6 block">How we work with you</span>
              <h2 className="section-headline max-w-[14ch]">
                Continuity
                <br />
                <em>you can feel.</em>
              </h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="space-y-8 md:col-span-7 md:col-start-6"
            >
              {WORKING_WITH_US.map((item, i) => (
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

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid items-start gap-x-10 gap-y-10 md:grid-cols-12"
          >
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <span className="eyebrow mb-6 block">What we bring</span>
              <h2 className="section-headline max-w-[12ch]">
                Depth
                <br />
                <em>in the room.</em>
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

        <Section background="gray" paddingY="lg" id="talk">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow justify-center">Next step</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-6">
              Ready to talk
              <br />
              <em>to the people above?</em>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-10 max-w-[44ch] leading-relaxed text-[var(--ink-muted)]"
            >
              No fee for the first conversation. Bring the job you are trying to solve. We will tell
              you honestly whether custom software is the right move, and who on this page would lead
              it.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button href="/contact" size="lg" variant="primary" icon={<ArrowUpRight className="h-5 w-5" />}>
                Book a consultation
              </Button>
              <a
                href="mailto:contact@vineralstechnologies.com?subject=Consultation%20-%20Vinerals%20Technologies"
                className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-primary-700 transition-colors hover:text-secondary-600"
              >
                <Mail className="h-4 w-4" />
                contact@vineralstechnologies.com
              </a>
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
              We grow on purpose. If you are a senior practitioner who wants meaningful projects,
              fair wages, and cooperative governance, write us.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="border border-[var(--ink-hairline)]/45 bg-[var(--cream-deep)] p-8 md:p-10"
            >
              <h3 className="mb-6 font-display text-2xl text-[var(--ink)]">What we look for</h3>
              <ul className="mb-8 space-y-3 text-[var(--ink-muted)]">
                {[
                  'Deep production experience in software, data, or food-systems delivery',
                  'A track record of shipping real systems, not slide decks',
                  'Interest in mission-driven work and cooperative governance',
                  'Based in or willing to work with Montréal',
                  'Clear communication (English / French a plus)',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-1 text-secondary-600" aria-hidden>
                      ·
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
