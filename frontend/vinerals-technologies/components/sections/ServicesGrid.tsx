'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Smartphone, Database } from 'lucide-react';
import Section from '@/components/ui/Section';
import { ServiceCard } from '@/components/ui/Card';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { SERVICES } from '@/lib/constants';

const iconMap = {
  Code: Code2,
  Brain: Brain,
  Smartphone: Smartphone,
  Database: Database,
};

const ServicesGrid = () => {
  const services = SERVICES.map((service) => {
    const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code2;
    return {
      icon: <IconComponent className="w-12 h-12" />,
      title: service.name,
      description: service.description,
      features: [...service.features],
      href: `/services/${service.slug}`,
    };
  });

  return (
    <Section background="white" paddingY="lg" id="services-grid">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ServicesGrid;
