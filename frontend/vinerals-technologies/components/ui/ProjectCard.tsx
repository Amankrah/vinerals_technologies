'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  // Industry chip palette — restrained, warm, on-brand.
  const industryColors: Record<string, string> = {
    healthcare:      'text-primary-700 border-primary-300 bg-primary-50',
    'food-systems':  'text-secondary-600 border-secondary-300 bg-secondary-50',
    sustainability:  'text-primary-700 border-primary-300 bg-primary-50',
    'non-profit':    'text-accent-700 border-accent-300 bg-accent-50',
    other:           'text-gray-700 border-gray-300 bg-gray-50',
  };

  const industryLabel =
    project.industry.charAt(0).toUpperCase() +
    project.industry.slice(1).replace('-', ' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <article className="bg-[var(--paper)] border border-[var(--ink-hairline)]/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-deckle hover:border-secondary-500 hover:-translate-y-1">
          {/* Plate — title block in lieu of a photograph */}
          <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden border-b border-[var(--ink-hairline)]/40 grain">
            <div className="absolute inset-0 flex items-center justify-center px-8 above-grain">
              <div className="text-center">
                <span className="numeral text-2xl block mb-3 text-secondary-500">
                  N°{String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-3xl md:text-4xl leading-tight text-primary-900 mb-2">
                  {project.title}
                </h3>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-800">
                  {project.client}
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 above-grain">
              <span
                className={`px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] border ${industryColors[project.industry] ?? industryColors.other}`}
              >
                {industryLabel}
              </span>
            </div>
          </div>

          <div className="p-8">
            {project.services.length > 0 && (
              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                {project.services.map((service, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span aria-hidden>·</span>}
                    <span>{service}</span>
                  </React.Fragment>
                ))}
              </div>
            )}

            <p className="text-[var(--ink-muted)] mb-6 line-clamp-3 leading-relaxed">
              {project.description}
            </p>

            {project.results && project.results.length > 0 && (
              <div className="grid grid-cols-3 gap-5 mb-6 pt-6 border-t border-[var(--ink-hairline)]/40">
                {project.results.slice(0, 3).map((result, idx) => (
                  <div key={idx}>
                    <div className="font-display italic text-3xl text-primary-700 leading-none">
                      {result.metric}
                    </div>
                    <div className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                      {result.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                Édition {project.year}
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700 group-hover:text-secondary-500 transition-colors">
                <span className="squiggle">Read case</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
