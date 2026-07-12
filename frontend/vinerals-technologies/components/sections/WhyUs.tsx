'use client';

import { motion } from 'framer-motion';
import { Building2, DollarSign, Handshake, Zap, Heart, Shield } from 'lucide-react';
import Section from '@/components/ui/Section';
import { FeatureCard } from '@/components/ui/Card';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { WHY_US_FEATURES } from '@/lib/constants';

const iconMap = {
  Building:   Building2,
  DollarSign: DollarSign,
  Landmark:   Building2,
  Handshake:  Handshake,
  Zap:        Zap,
  Heart:      Heart,
  Shield:     Shield,
};

/**
 * WhyUs — set as an essayistic spread. Title sits left, body grid
 * right. Each principle is a numbered manuscript note, no card.
 */
const WhyUs = () => {
  const features = WHY_US_FEATURES.map((feature) => {
    const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Building2;
    return {
      icon: <IconComponent />,
      title: feature.title,
      description: feature.description,
    };
  });

  return (
    <Section background="white" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="grid md:grid-cols-12 gap-x-10 gap-y-12"
      >
        {/* Title block — sticky in essayistic gutter */}
        <motion.div variants={fadeInUp} className="md:col-span-4 md:sticky md:top-32 md:self-start">
          <span className="eyebrow mb-4 md:mb-6 block">IV · Pourquoi</span>
          <h2 className="section-headline mb-4 md:mb-6">
            Built differently,
            <br />
            <em>on purpose.</em>
          </h2>
          <p className="lead-text max-w-[36ch]">
            Craft, ownership, and honest counsel — how the cooperative shows up
            in the work itself, not just on the About page.
          </p>
        </motion.div>

        {/* Principles list */}
        <motion.div
          variants={staggerContainer}
          className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-14"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <FeatureCard {...feature} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default WhyUs;
