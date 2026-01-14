'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface ServiceDetailsProps {
  whatWeOffer: {
    title: string;
    items: string[];
  };
  technologies: {
    title: string;
    items: string[];
  };
  deliverables: {
    title: string;
    items: string[];
  };
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  whatWeOffer,
  technologies,
  deliverables,
}) => {
  return (
    <Section background="white" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-3 gap-8"
      >
        {/* What We Offer */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">{whatWeOffer.title}</h3>
          <ul className="space-y-3">
            {whatWeOffer.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Technologies */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">{technologies.title}</h3>
          <ul className="space-y-3">
            {technologies.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Deliverables */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">{deliverables.title}</h3>
          <ul className="space-y-3">
            {deliverables.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ServiceDetails;
