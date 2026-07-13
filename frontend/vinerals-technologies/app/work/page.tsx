'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WorkHero from '@/components/sections/WorkHero';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import { CAPABILITIES, PROCESS_STEPS } from '@/lib/constants';
import { projects } from '@/content/projects';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { ArrowUpRight } from 'lucide-react';

const shippedProjects = projects.filter((p) => p.status !== 'in-development');
const inDevelopmentProjects = projects.filter((p) => p.status === 'in-development');

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <WorkHero
          badge="Portfolio & Collaborations"
          title="Work that already ships."
          highlightedWord="ships."
          description="Vinerals is young. Our founder is not. These platforms were built by hand at McGill’s SASEL Lab by Emmanuel Amankrah Kwofie, with academic and industry partners across Canada, Europe, and Africa."
          image="/sector-food.jpg"
          imageAlt="Hands holding freshly harvested greens at a farm packing table"
          primaryCTA={{ label: 'Book a consultation', href: '/contact' }}
          secondaryCTA={{ label: 'See the platforms', href: '#projects' }}
        />

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid items-start gap-x-10 gap-y-8 md:grid-cols-12"
          >
            <motion.div variants={fadeInUp} className="md:col-span-5">
              <span className="eyebrow mb-6 block">Where this work started</span>
              <h2 className="section-headline max-w-[16ch]">
                Built at <em>McGill.</em>
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-6 md:col-start-7">
              <p className="mb-5 max-w-[48ch] leading-relaxed text-[var(--ink-muted)]">
                <a
                  href="https://www.eakwofie.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 underline decoration-[var(--ink-hairline)] underline-offset-4 transition-colors hover:text-secondary-600"
                >
                  Emmanuel Amankrah Kwofie
                </a>{' '}
                is the founder and CTO of Vinerals Technologies. At{' '}
                <a
                  href="https://www.sasellab.com/technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 underline decoration-[var(--ink-hairline)] underline-offset-4 transition-colors hover:text-secondary-600"
                >
                  SASEL Lab, McGill University
                </a>
                , he designed and engineered the platforms below: research software for sustainable
                food systems, public finance, logistics, and environmental assessment.
              </p>
              <p className="mb-8 max-w-[48ch] leading-relaxed text-[var(--ink-muted)]">
                The work sits inside partnerships with universities, research institutes, government
                ministries, and industry across Canada, Europe, and Africa. That depth, and the habit
                of shipping under real constraints, is what Vinerals brings to SME and mission-driven
                projects.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                <a
                  href="https://www.sasellab.com/technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-700 transition-colors hover:text-secondary-600"
                >
                  SASEL technologies
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.eakwofie.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-700 transition-colors hover:text-secondary-600"
                >
                  Founder portfolio
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        <ProjectsGrid
          eyebrow="McGill · SASEL · Partners"
          title={
            <>
              Seven platforms.
              <br />
              <em>Real deployments.</em>
            </>
          }
          description="Each card opens a short brief here, with a link to the full technology page at SASEL Lab."
          projects={shippedProjects}
        />

        {inDevelopmentProjects.length > 0 && (
          <Section background="gray" paddingY="lg" id="in-development">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-12 max-w-3xl">
                <span className="eyebrow mb-6 block">In development · Ateliers en cours</span>
                <h2 className="section-headline mb-6">
                  On the bench
                  <br />
                  <em>right now.</em>
                </h2>
                <p className="lead-text">
                  What Vinerals is building now. Not finished yet, but far enough along that we
                  are already using it with our first early-access clients.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 border border-[var(--ink-hairline)]/45 bg-[var(--paper)]"
              >
                {inDevelopmentProjects.map((project) => {
                  const href = project.externalUrl || `/work/${project.slug}`;
                  const isInternal = href.startsWith('/');
                  const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                    isInternal ? (
                      <Link href={href} className="group flex h-full flex-col p-8 md:p-10">
                        {children}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-full flex-col p-8 md:p-10"
                      >
                        {children}
                      </a>
                    );

                  return (
                    <motion.div key={project.slug} variants={fadeInUp}>
                      <CardWrapper>
                        <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                          <span className="border border-[var(--ink-hairline)]/60 px-2.5 py-1 text-secondary-600">
                            In development
                          </span>
                          <span>{project.year}</span>
                          {project.services?.[0] && <span>{project.services[0]}</span>}
                        </div>
                        <h3 className="mb-4 font-display text-3xl leading-tight text-[var(--ink)] transition-colors group-hover:text-primary-700 md:text-[2.1rem]">
                          {project.title}
                        </h3>
                        <p className="mb-6 max-w-[62ch] leading-relaxed text-[var(--ink-muted)]">
                          {project.description}
                        </p>
                        {project.tags && project.tags.length > 0 && (
                          <p className="mb-6 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                            {project.tags.join(' · ')}
                          </p>
                        )}
                        <div className="mt-auto inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700">
                          <span className="squiggle">Read the blueprint</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </CardWrapper>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </Section>
        )}

        <CapabilitiesSection capabilities={CAPABILITIES} />
        <ProcessSection
          title="How we work"
          description="Four steps from first conversation to handover. You stay in the loop without drowning in status updates."
          steps={PROCESS_STEPS}
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
