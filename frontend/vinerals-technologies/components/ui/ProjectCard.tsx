'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <article className="border border-[var(--ink-hairline)]/40 bg-[var(--paper)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-secondary-500 hover:shadow-deckle">
          <div className="relative h-64 overflow-hidden border-b border-[var(--ink-hairline)]/40 bg-primary-950">
            {project.image && (
              <Image
                src={project.image}
                alt={project.imageAlt || project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            )}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-transparent to-transparent"
            />
            <div className="absolute left-5 top-5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white">
              N°{String(index + 1).padStart(2, '0')}
            </div>
            {project.status && (
              <div className="absolute right-4 top-4 border border-white/35 bg-primary-950/40 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                {project.status}
              </div>
            )}
          </div>

          <div className="p-8">
            <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-secondary-600">
              {project.partner || project.client}
            </p>
            <h3 className="mb-3 font-display text-3xl leading-tight text-[var(--ink)]">
              {project.title}
            </h3>
            <p className="mb-6 line-clamp-3 leading-relaxed text-[var(--ink-muted)]">
              {project.description}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink-faint)]">
                Édition {project.year}
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700 transition-colors group-hover:text-secondary-500">
                <span className="squiggle">Open dossier</span>
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
