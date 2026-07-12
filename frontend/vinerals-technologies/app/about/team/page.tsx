'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import TeamHero from '@/components/sections/TeamHero';
import CTA from '@/components/sections/CTA';
import Link from 'next/link';
import { Users, Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  note: string;
  linkedin?: string;
  github?: string;
  email?: string;
  site?: string;
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Emmanuel Amankrah Kwofie',
      role: 'Founder & CTO',
      expertise: [
        'Full-stack development',
        'Cloud architecture',
        'Machine learning',
        'DevOps',
      ],
      bio: 'Founder of Vinerals Technologies and research-to-software engineer. At SASEL Lab, McGill University, he built the platforms now live across sustainable food systems — from environmental nutrition and protein-process simulation to public-finance intelligence and EU food-fraud risk models — with academic and industry partners in Canada, Europe, and Africa. Focused on turning scientific work into systems organisations can actually run.',
      note: 'Built a pea-protein analysis platform that wove technical optimisation, economic feasibility, and environmental impact into one decision tool — the kind of cross-disciplinary craft SMEs need when the call is real.',
      linkedin: 'https://www.linkedin.com/in/eakwofie/',
      github: 'https://github.com/Amankrah',
      email: 'contact@vineralstechnologies.com',
      site: 'https://www.eakwofie.com/',
    },
  ];

  const whyUs = [
    {
      title: 'Senior developers only.',
      body: 'Everyone you work with has years in production. No juniors learning on your dime.',
    },
    {
      title: 'Direct access.',
      body: 'You talk to the engineer building the thing — not an account manager managing the relationship.',
    },
    {
      title: 'Domain before code.',
      body: 'Working experience across healthcare, food systems, sustainability, and social enterprise — so the craft fits the context.',
    },
    {
      title: 'Mission-aligned. Quality non-negotiable.',
      body: 'We walk away from work that doesn’t fit. The quality bar stays the same either way.',
    },
  ] as const;

  return (
    <>
      <Header />
      <main className="pt-16">
        <TeamHero
          badge="Meet the Team"
          title="Named people. Hand-made work."
          highlightedWord="Hand-made"
          description="Senior engineers you can reach. Software made by hand means the people writing the code are the people you talk to — no theatre in between."
          icon={<Users className="h-8 w-8" />}
          stats={[
            { value: 'Senior', label: 'On every project' },
            { value: '100%', label: 'Named & reachable' },
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
              <span className="eyebrow">Le métier · People</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              Small on purpose.
              <br />
              <em>Senior by design.</em>
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="space-y-5 leading-relaxed text-[var(--ink-muted)]"
            >
              <motion.p variants={fadeInUp}>
                No account managers, no sales floor, no juniors fresh out of bootcamp on your
                project.{' '}
                <strong className="text-[var(--ink)]">
                  Every person you work with is a senior engineer with production experience.
                </strong>{' '}
                Same calibre you&apos;d expect at Spiria, Stradigi AI, or Konverge — without the
                enterprise theatre.
              </motion.p>
              <motion.blockquote variants={fadeInUp} className="pullquote my-6">
                The team that starts your project is the team that finishes it.
              </motion.blockquote>
              <motion.p variants={fadeInUp}>
                We built Vinerals as a solidarity cooperative so we could ship software made by
                hand for organisations that usually get priced out of serious engineering —
                clinics, food co-ops, climate startups, charities — without lowering the craft.
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
              <span className="eyebrow mb-6 block">Dossier</span>
              <h2 className="section-headline max-w-[18ch]">
                Who you&apos;ll
                <br />
                <em>actually meet.</em>
              </h2>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-10">
              {teamMembers.map((member) => (
                <motion.article
                  key={member.name}
                  variants={fadeInUp}
                  className="border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 md:flex md:gap-10 md:p-10"
                >
                  <div className="mb-6 flex-shrink-0 md:mb-0">
                    <div className="flex h-28 w-28 items-center justify-center border border-[var(--ink-hairline)]/50 bg-primary-900 font-display text-3xl text-[var(--cream)]">
                      {member.name
                        .split(' ')
                        .filter((_, i, arr) => i === 0 || i === arr.length - 1)
                        .map((n) => n[0])
                        .join('')}
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

                    <p className="mt-6 max-w-[58ch] leading-relaxed text-[var(--ink-muted)]">
                      {member.bio}
                    </p>

                    <aside className="mt-6 border-l-2 border-secondary-500 pl-5">
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-secondary-600">
                        Field note
                      </p>
                      <p className="mt-2 max-w-[52ch] leading-relaxed text-[var(--ink)]">
                        {member.note}
                      </p>
                    </aside>

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
              <span className="eyebrow mb-6 block">Pourquoi</span>
              <h2 className="section-headline max-w-[12ch]">
                Why work
                <br />
                <em>with us.</em>
              </h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="space-y-8 md:col-span-7 md:col-start-6"
            >
              {whyUs.map((item, i) => (
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
              We grow on purpose. If you&apos;re a senior developer who wants meaningful projects,
              fair wages, and cooperative governance — write us. No careers portal. Just email.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="border border-[var(--ink-hairline)]/45 bg-[var(--cream-deep)] p-8 md:p-10"
            >
              <h3 className="mb-6 font-display text-2xl text-[var(--ink)]">What we look for</h3>
              <ul className="mb-8 space-y-3 text-[var(--ink-muted)]">
                {[
                  '5+ years of professional development experience',
                  'Track record of shipping production applications',
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
