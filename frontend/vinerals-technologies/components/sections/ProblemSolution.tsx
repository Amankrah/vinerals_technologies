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
            Closing Canada&apos;s Digital Divide
          </span>
        </motion.div> 

        {/* Headline */}
        <motion.h2 variants={fadeInUp} className="section-headline text-center mb-6">
          Technology Is Transforming Every Industry.{' '}
          <br className="hidden md:block" />
          Most Businesses Are Being Left Behind.
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          {/* Problem */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Three Barriers Stand in Your Way</h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-semibold">
                    1
                  </span>
                  <h4 className="font-semibold text-gray-900">You don&apos;t know what&apos;s possible</h4>
                </div>
                <p className="text-gray-600 text-sm ml-9">
                  AI is everywhere—but what works for <em>your</em> business? Most agencies assume you know. We start by helping you understand.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-semibold">
                    2
                  </span>
                  <h4 className="font-semibold text-gray-900">Quality development costs real money</h4>
                </div>
                <p className="text-gray-600 text-sm ml-9">
                  Custom software runs $50K-150K+ CAD. For most growing businesses, that investment is simply out of reach.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-semibold">
                    3
                  </span>
                  <h4 className="font-semibold text-gray-900">The best talent is hard to access</h4>
                </div>
                <p className="text-gray-600 text-sm ml-9">
                  Experienced developers work at funded companies. SMEs struggle to access the expertise larger organizations take for granted.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">How We&apos;re Different</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technology translation, not just development</h4>
                <p className="text-gray-600 text-sm">
                  We help you understand what&apos;s possible before writing any code. No jargon, no pressure—we&apos;ll even advise against building when appropriate.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Backed by mission-aligned funding</h4>
                <p className="text-gray-600 text-sm">
                  As a solidarity cooperative supported by government programs and impact funders, we can offer subsidized programs for qualifying businesses.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Enterprise quality, real partnership</h4>
                <p className="text-gray-600 text-sm">
                  You get senior developers, strategic guidance, and code you own completely. No vendor lock-in. No investor pressure. Just mission-driven work.
                </p>
              </div>
            </div>
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
