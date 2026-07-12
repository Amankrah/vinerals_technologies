'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import AboutHero from '@/components/sections/AboutHero';
import CTA from '@/components/sections/CTA';
import Link from 'next/link';
import { Heart, Users, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

export default function AboutPage() {
  const aboutSections = [
    {
      title: 'Our Mission',
      description: 'Why we exist, who we’re building for, and what we won’t do to grow.',
      href: '/about/mission',
      icon: Heart,
      color: 'from-primary-100 to-primary-200',
    },
    {
      title: 'Our Team',
      description: 'Meet the people writing the code. Senior, named, reachable. No account managers in the way.',
      href: '/about/team',
      icon: Users,
      color: 'from-secondary-100 to-secondary-200',
    },
    {
      title: 'Our Cooperative Model',
      description: 'How a solidarity cooperative actually changes the work: governance, ownership, profit, and why it matters to you.',
      href: '/about/cooperative',
      icon: Building2,
      color: 'from-accent-100 to-accent-200',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        <AboutHero
          badge="About Vinerals Technologies"
          title="Software, made by hand."
          highlightedWord="made by hand"
          description="A Montréal solidarity cooperative. Senior engineering shaped around how SMEs actually work — craft you can feel, code you own, at terms you can plan around."
          icon={<Heart className="w-8 h-8" />}
          primaryCTA={{ label: 'Read on', href: '#who-we-are' }}
          secondaryCTA={{ label: 'Book a consultation', href: '/contact' }}
        />

        {/* Introduction */}
        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              Who we are
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p variants={fadeInUp}>
                Vinerals Technologies isn&apos;t your typical agency. We&apos;re a{' '}
                <strong>solidarity cooperative</strong> — owned by the people doing the
                work and the community we serve. What we sell is quality:{' '}
                <strong>software made by hand</strong>, senior engineering, and systems
                that fit how your business already runs.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Founded in Montréal in 2025, we exist because growing businesses deserve
                craft without the enterprise theatre. Professional builds cost real money —
                that&apos;s honest. What isn&apos;t honest is bending your operations around
                someone else&apos;s product, or getting juniors learning on your dime.
              </motion.p>
              <motion.blockquote variants={fadeInUp} className="pullquote my-4">
                Premium work. Owned code. Terms you can plan around.
              </motion.blockquote>
              <motion.p variants={fadeInUp}>
                We start by explaining what AI and modern software can (and can&apos;t)
                realistically do. Then we build — carefully, by hand — and structure
                engagements so a growing business can say yes, including mission-aligned
                funding when you qualify.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We work with organisations in healthcare, food systems, sustainability, and
                social enterprise — the same calibre larger firms pay full freight for,
                without diluting the craft.
              </motion.p>
            </motion.div>
          </motion.div>
        </Section>

        {/* About Sections */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-12 text-center">
              Learn More About Us
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
              {aboutSections.map((section, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link
                    href={section.href}
                    className="block h-full bg-white rounded-xl border-2 border-gray-200 hover:border-primary-400 transition-all hover:shadow-lg p-8 group"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${section.color}`}>
                      <section.icon className="w-8 h-8 text-primary-700" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                      {section.title}
                    </h3>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {section.description}
                    </p>

                    <div className="flex items-center text-primary-700 font-semibold group-hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* Quick Facts */}
        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-12 text-center">
              Quick facts
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Structure</h3>
                <p className="text-gray-700 text-sm">
                  Solidarity cooperative (<em>coopérative de solidarité</em>). A Québec social enterprise model
                  that brings worker, user, and supporting members into the same democratic governance.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Approach</h3>
                <p className="text-gray-700 text-sm">
                  <strong>Good engineering costs what it costs.</strong> We&apos;ve gone after the funding so
                  cost doesn&apos;t have to be the wall. And we start by walking you through what&apos;s actually
                  possible before any code gets written.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Location</h3>
                <p className="text-gray-700 text-sm">
                  Based in Montréal, Québec. We work with clients across Canada and internationally through
                  remote collaboration.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Focus</h3>
                <p className="text-gray-700 text-sm">
                  Healthcare, food systems, sustainability, and social enterprise. We work with SMEs, non-profits,
                  and the mission-driven organisations sitting between them.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        {/* What Makes Us Different */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              Why we’re positioned the way we are for Québec SMEs
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700 leading-relaxed mb-6">
              <motion.p variants={fadeInUp}>
                Compared with the typical Montréal agency at $100 to $200 per hour blended, we&apos;re not competing
                on price. We&apos;re solving a different problem: <strong>the knowledge gap and the accessibility
                gap</strong> that keep SMEs locked out of the software they need.
              </motion.p>
            </motion.div>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700">
              <motion.ul variants={staggerContainer} className="space-y-3">
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Translation first.</strong> Before any code, we sit down and explain what AI and
                  modern software can actually do for your business, and what they can&apos;t. That conversation alone
                  is worth thousands in avoided mistakes.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Mission-aligned funding.</strong> Government programmes, impact investors, and donor
                  support cover part of qualifying engagements. We&apos;re not cutting corners. We&apos;re supplementing
                  the project budget so the math works.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>No investor pressure.</strong> The cooperative model means profits get reinvested in the
                  mission, not extracted for shareholders. That&apos;s what makes sustainable pricing and long-term client
                  relationships possible in the first place.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Senior developers only.</strong> Every person you work with has at least five years
                  in production. Same calibre of work you&apos;d get from Spiria, Stradigi AI, or Konverge, made accessible.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Full ownership.</strong> You own 100% of the code, the designs, and the IP we create.
                  No vendor lock-in, no proprietary stack, no escape clause when you want to move on.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Plugged into the social economy.</strong> Part of Québec&apos;s 11,000-plus social
                  economy enterprises, with working ties to CDRQ, PME MTL, CESIM, and the Chantier de l&apos;économie sociale.</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
