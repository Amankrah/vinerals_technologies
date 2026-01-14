'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { StatCard } from '@/components/ui/Card';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { STATS } from '@/lib/constants';

const ProblemSolution = () => {
  return (
    <Section background="white" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Eyebrow */}
        <motion.div variants={fadeInUp} className="text-center mb-4">
          <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">
            The Challenge
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 variants={fadeInUp} className="section-headline text-center mb-6">
          Great Technology Shouldn't{' '}
          <br className="hidden md:block" />
          Require a Fortune 500 Budget
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
          {/* Problem */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">The Problem</h3>
            <p className="text-gray-600 leading-relaxed">
              Traditional software agencies charge $150-300 per hour. A basic custom
              application costs $50,000-150,000. For most growing businesses,
              transformative technology has been out of reach.
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Our Solution</h3>
            <p className="text-gray-600 leading-relaxed">
              We're a solidarity cooperative—a social enterprise that reinvests in our
              mission, not shareholder returns. That means you get enterprise-quality
              development at rates that work for real businesses.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {STATS.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <StatCard
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProblemSolution;
