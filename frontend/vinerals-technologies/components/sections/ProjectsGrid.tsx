'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import type { Project } from '@/types/project';

interface ProjectsGridProps {
  title?: ReactNode;
  description?: string;
  eyebrow?: string;
  projects: readonly Project[];
}

/**
 * ProjectsGrid: platforms built at McGill’s SASEL Lab
 * by Vinerals’ founder. Cards open an internal brief; each links out.
 */
const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  title = 'Featured work',
  description = 'Platforms built at McGill’s SASEL Lab by our founder. Food systems, sustainability, and research software that ships, with partners across Canada, Europe, and Africa.',
  eyebrow = 'Platforms',
  projects,
}) => {
  return (
    <Section background="white" paddingY="lg" id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-14 max-w-3xl">
          <span className="eyebrow mb-6 block">{eyebrow}</span>
          <h2 className="section-headline mb-6">{title}</h2>
          <p className="lead-text">{description}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 border border-[var(--ink-hairline)]/45 md:grid-cols-2"
        >
          {projects.map((project, index) => {
            const isRight = index % 2 === 1;
            const isLastRow =
              index >= projects.length - (projects.length % 2 === 0 ? 2 : 1);

            return (
              <motion.div key={project.slug} variants={fadeInUp}>
                <Link
                  href={`/work/${project.slug}`}
                  className={`group relative flex h-full flex-col bg-[var(--paper)] transition-colors duration-500 hover:bg-[var(--cream-deep)] ${
                    !isRight ? 'border-[var(--ink-hairline)]/45 md:border-r' : ''
                  } ${
                    !isLastRow ? 'border-b border-[var(--ink-hairline)]/45' : ''
                  } ${
                    projects.length % 2 === 1 && index === projects.length - 1
                      ? 'md:col-span-2'
                      : ''
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-primary-950">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    )}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent"
                    />
                    <div className="absolute left-5 top-5 flex items-center gap-3 md:left-6 md:top-6">
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white [text-shadow:0_1px_12px_rgba(10,20,16,0.55)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {project.status && (
                        <span className="border border-white/35 bg-primary-950/40 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7 md:p-9">
                    <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-secondary-600">
                      {project.partner || project.client}
                    </p>
                    <h3 className="mb-3 font-display text-3xl leading-tight text-[var(--ink)] transition-colors group-hover:text-primary-700 md:text-[2.1rem]">
                      {project.title}
                    </h3>
                    <p className="mb-5 max-w-[46ch] leading-relaxed text-[var(--ink-muted)]">
                      {project.description}
                    </p>
                    {project.tags && project.tags.length > 0 && (
                      <p className="mb-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                        {project.tags.join(' · ')}
                      </p>
                    )}
                    <div className="mt-auto inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700">
                      <span className="squiggle">Read the brief</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProjectsGrid;
