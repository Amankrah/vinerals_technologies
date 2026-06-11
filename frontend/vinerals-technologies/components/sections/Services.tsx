'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Smartphone, Database, ArrowUpRight } from 'lucide-react';
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

/**
 * Services — feature catalogue. Numbered, set in a two-column grid
 * with hairline gutters. Each card carries a numeral, italic title,
 * and a "Read the dossier" cue.
 */
const Services = () => {
  const services = SERVICES.map((service) => {
    const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code2;
    return {
      icon: <IconComponent />,
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
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <div className="grid md:grid-cols-12 gap-x-10 gap-y-6 md:gap-y-8 mb-10 md:mb-16 items-end">
          <motion.div variants={fadeInUp} className="md:col-span-7">
            <span className="eyebrow mb-6 block">II · Le métier</span>
            <h2 className="section-headline max-w-[18ch]">
              Four trades,
              <br />
              <em>one workshop.</em>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="md:col-span-5 lead-text md:pl-12 max-w-[42ch] md:ml-auto"
          >
            Four disciplines under one roof, so your database, AI model, mobile
            app, and dashboards don&apos;t show up stitched together from four
            different vendors.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 mb-10 md:mb-14"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ServiceCard {...service} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="flex items-center justify-between gap-6 flex-wrap pt-10 border-t border-[var(--ink-hairline)]/40">
          <p className="font-display italic text-xl text-[var(--ink-muted)] max-w-[40ch]">
            All four disciplines in one cooperative, so the seams between them
            disappear.
          </p>
          <Button
            href="/services"
            variant="primary"
            size="lg"
            icon={<ArrowUpRight className="w-5 h-5" />}
          >
            Explore the catalogue
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Services;
