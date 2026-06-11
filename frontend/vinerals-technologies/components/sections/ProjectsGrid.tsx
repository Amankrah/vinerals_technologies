'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowUpRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface Project {
  readonly id: number;
  readonly title: string;
  readonly industry: string;
  readonly icon: LucideIcon;
  readonly color: string;
}

interface ProjectsGridProps {
  title?: string;
  description?: string;
  projects: readonly Project[];
}

/**
 * ProjectsGrid — featured dossiers. Each project is a paper tile
 * with an industry kicker and a "coming soon" stamp until the case
 * study is published.
 */
const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  title = 'Featured projects',
  description = 'A look at the work we’re proudest of. Software for organisations doing something that matters.',
  projects,
}) => {
  return (
    <Section background="white" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="max-w-3xl mb-14">
          <span className="eyebrow mb-6 block">Dossiers à venir</span>
          <h2 className="section-headline mb-6">{title}</h2>
          <p className="lead-text">{description}</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[var(--paper)] border border-[var(--ink-hairline)]/45 overflow-hidden hover:shadow-deckle hover:border-secondary-500 transition-all duration-500"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 border-b border-[var(--ink-hairline)]/40 overflow-hidden grain">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center above-grain px-6">
                  <span className="numeral text-xl mb-4 text-secondary-500">
                    N°{String(index + 1).padStart(2, '0')}
                  </span>
                  <project.icon className="w-12 h-12 text-primary-700 mb-3" />
                  <h3 className="font-display text-2xl text-primary-900 mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary-800">
                    {project.industry}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] px-3 py-1.5 border border-accent-300 bg-accent-50 text-accent-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
                  In press
                </span>
                <p className="text-sm text-[var(--ink-muted)] mt-4 leading-relaxed">
                  Case study details to follow in the next édition.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                  <span>Coming soon</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProjectsGrid;
