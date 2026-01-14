'use client';

import { motion } from 'framer-motion';
import { Building2, DollarSign, Handshake, Zap, Heart, Shield } from 'lucide-react';
import Section from '@/components/ui/Section';
import { FeatureCard } from '@/components/ui/Card';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { WHY_US_FEATURES } from '@/lib/constants';

const iconMap = {
  Building: Building2,
  DollarSign: DollarSign,
  Handshake: Handshake,
  Zap: Zap,
  Heart: Heart,
  Shield: Shield,
};

const WhyUs = () => {
  const features = WHY_US_FEATURES.map((feature) => {
    const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Building2;
    return {
      icon: <IconComponent className="w-10 h-10" />,
      title: feature.title,
      description: feature.description,
    };
  });

  return (
    <Section background="white" paddingY="lg">
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
              Why Vinerals
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="section-headline mb-6">
            Built Different,{' '}
            <span className="text-primary-700">On Purpose</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default WhyUs;
