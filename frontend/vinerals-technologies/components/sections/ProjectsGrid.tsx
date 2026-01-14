'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
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

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  title = "Featured Projects",
  description = "Our most impactful work - transformative technology solutions for mission-driven organizations.",
  projects
}) => {
  return (
    <Section background="white" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="section-headline mb-4">{title}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <div className={`relative h-64 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <project.icon className="w-16 h-16 text-primary-700 mb-4" />
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-700 text-sm">{project.industry}</p>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-lg font-semibold">
                    Coming Soon
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    Case study details will be available soon.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProjectsGrid;
