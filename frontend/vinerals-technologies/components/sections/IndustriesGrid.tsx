'use client';

import { motion } from 'framer-motion';
import { Heart, Wheat, Leaf, Users } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { INDUSTRIES } from '@/lib/constants';

const iconMap = {
  Heart: Heart,
  Wheat: Wheat,
  Leaf: Leaf,
  Users: Users,
};

const IndustriesGrid = () => {
  return (
    <Section background="white" paddingY="lg" id="industries-grid">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="section-headline mb-4">Industries We Serve</h2>
          <p className="lead-text max-w-2xl mx-auto">
            Real-world experience in the sectors that need it most
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {INDUSTRIES.map((industry, index) => {
            const IconComponent = iconMap[industry.icon as keyof typeof iconMap] || Heart;
            
            return (
              <motion.div key={industry.id} variants={fadeInUp}>
                <Link href={`/industries/${industry.slug}`}>
                  <div className="bg-white rounded-xl p-8 h-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary-200 group cursor-pointer">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-secondary-50 text-secondary-600 group-hover:bg-secondary-100 transition-colors">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-secondary-700 transition-colors">
                      {industry.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="mt-6 text-secondary-600 font-semibold group-hover:text-secondary-700 flex items-center gap-2">
                      Learn more 
                      <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
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

export default IndustriesGrid;
