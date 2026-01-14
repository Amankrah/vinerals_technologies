'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const CTA = () => {
  return (
    <Section background="dark" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Build{' '}
          <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
            Something Great?
          </span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-xl text-primary-100 mb-8"
        >
          Free consultation. No pressure. Let's talk about what technology can do
          for your business.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <Button
            href="/contact"
            variant="accent"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Book a Free Consultation
          </Button>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <a
            href="mailto:contact@vinerals.ca"
            className="inline-flex items-center gap-2 text-white hover:text-accent-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Or email us at contact@vinerals.ca
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default CTA;
