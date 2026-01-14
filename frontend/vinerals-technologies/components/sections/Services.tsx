'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Smartphone, Database, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import { ServiceCard } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { SERVICES } from '@/lib/constants';

const iconMap = {
  Code: Code2,
  Brain: Brain,
  Smartphone: Smartphone,
  Database: Database,
};

const Services = () => {
  const services = SERVICES.map((service) => {
    const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code2;
    return {
      icon: <IconComponent className="w-12 h-12" />,
      title: service.shortName,
      description: service.description,
      features: [...service.features],
      href: `/services/${service.slug}`,
    };
  });

  return (
    <Section background="gray" paddingY="lg" id="services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">
              What We Build
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-headline mb-6">
            Full-Stack Development for{' '}
            <br className="hidden md:block" />
            Modern Businesses
          </motion.h2>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="text-center">
          <Button
            href="/services"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Explore All Services
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Services;
