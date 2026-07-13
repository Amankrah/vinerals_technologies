'use client';

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
          projects={projects}
        />

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
