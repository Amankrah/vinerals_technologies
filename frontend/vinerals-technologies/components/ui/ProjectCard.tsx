'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const industryColors = {
    healthcare: 'text-blue-700 bg-blue-100',
    'food-systems': 'text-green-700 bg-green-100',
    sustainability: 'text-emerald-700 bg-emerald-100',
    'non-profit': 'text-purple-700 bg-purple-100',
    other: 'text-gray-700 bg-gray-100',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
          {/* Thumbnail - placeholder since we don't have real images */}
          <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-700">{project.client}</p>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${industryColors[project.industry]}`}>
                {project.industry.charAt(0).toUpperCase() + project.industry.slice(1).replace('-', ' ')}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.services.map((service, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                >
                  {service}
                </span>
              ))}
            </div>

            <p className="text-gray-700 mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Results Preview */}
            {project.results && project.results.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mb-4 pt-4 border-t border-gray-200">
                {project.results.slice(0, 3).map((result, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl font-bold text-primary-900">
                      {result.metric}
                    </div>
                    <div className="text-xs text-gray-600">{result.value}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{project.year}</span>
              <span className="text-primary-700 font-semibold group-hover:text-primary-800 inline-flex items-center gap-1">
                View Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
