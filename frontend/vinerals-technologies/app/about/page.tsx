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
      description: 'Learn about our commitment to making transformative technology accessible to every business, regardless of size or budget.',
      href: '/about/mission',
      icon: Heart,
      color: 'from-primary-100 to-primary-200',
    },
    {
      title: 'Our Team',
      description: 'Meet the experienced developers and engineers behind Vinerals Technologies who are passionate about mission-driven work.',
      href: '/about/team',
      icon: Users,
      color: 'from-secondary-100 to-secondary-200',
    },
    {
      title: 'Our Cooperative Model',
      description: 'Discover how our solidarity cooperative structure enables fair pricing and sustainable, mission-focused development.',
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
          title="A Mission-Driven Cooperative"
          highlightedWord="Mission-Driven"
          description="We are a Montreal-based solidarity cooperative making enterprise-quality software accessible to small and medium businesses through the social economy model."
          icon={<Heart className="w-8 h-8" />}
          primaryCTA={{ label: 'Learn More', href: '#who-we-are' }}
          secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
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
              Who We Are
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p variants={fadeInUp}>
                Vinerals Technologies is not your typical software agency. We are a <strong>solidarity cooperative</strong> -
                a social enterprise owned by workers and community members, not external investors seeking
                maximum returns.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Founded in 2025 in Montreal, we exist to solve a fundamental problem facing Quebec SMEs and businesses
                across Canada: <strong>quality custom software costs what it costs</strong> - typically $30,000-$250,000+
                CAD for professional development. That&apos;s not agencies overcharging; that&apos;s what enterprise-quality
                engineering requires. For most growing businesses, this investment is simply out of reach.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We&apos;re not undercutting anyone or claiming to do it cheaper. Instead, we&apos;ve secured <strong>subsidies,
                grants, and mission-aligned funding</strong> specifically to reduce barriers for SMEs. We&apos;re a bridge
                program - making existing expertise accessible, while helping businesses understand what&apos;s even possible
                with AI and modern technology.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Through our cooperative structure and funded accessibility programs, we deliver the same caliber of work
                that larger organizations receive - at terms designed for growing businesses. We work with mission-driven
                organizations across healthcare, food systems, sustainability, and social enterprise sectors.
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
              Quick Facts
            </motion.h2>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Our Structure</h3>
                <p className="text-gray-700 text-sm">
                  Solidarity cooperative (coopérative de solidarité) - a Quebec social enterprise
                  model that brings together worker, user, and supporting members in democratic governance.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Our Approach</h3>
                <p className="text-gray-700 text-sm">
                  <strong>Quality software engineering costs what it costs.</strong> We&apos;ve secured
                  mission-aligned funding so that cost doesn&apos;t have to be your barrier. And we start
                  by helping you understand what&apos;s actually possible - before a single line of code.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Our Location</h3>
                <p className="text-gray-700 text-sm">
                  Based in Montreal, Quebec, Canada. We work with clients across Canada and internationally
                  through remote collaboration.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Our Focus</h3>
                <p className="text-gray-700 text-sm">
                  Healthcare, food systems, sustainability, and social enterprise sectors. We work with
                  SMEs, non-profits, and mission-driven organizations.
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
              Why Vinerals is Uniquely Positioned for Quebec SMEs
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700 leading-relaxed mb-6">
              <motion.p variants={fadeInUp}>
                Compare us to typical Montreal software agencies charging $100-200/hr CAD blended rates.
                We&apos;re not competing on price - we&apos;re solving a different problem: <strong>the knowledge gap
                and accessibility barrier</strong> that prevents SMEs from leveraging transformative technology.
              </motion.p>
            </motion.div>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700">
              <motion.ul variants={staggerContainer} className="space-y-3">
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Technology translation first:</strong> Before any code, we help you understand
                  what&apos;s possible with AI and modern software - separating hype from practical ROI. This alone
                  is worth thousands in avoided mistakes.</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Mission-aligned funding:</strong> Through government programs, impact investors,
                  and donor support, we&apos;ve secured funding to reduce cost barriers - not by cutting corners,
                  but by supplementing project budgets for qualifying organizations</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>No investor pressure:</strong> As a cooperative, we reinvest in our mission
                  rather than extracting maximum returns for external shareholders - enabling sustainable pricing
                  and long-term client partnerships</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Senior developers only:</strong> Every person you work with has 5+ years
                  of professional experience. Same quality as Spiria, Stradigi AI, or Konverge - made accessible</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Full ownership guaranteed:</strong> You own 100% of the code, designs, and intellectual
                  property we create - no vendor lock-in or proprietary systems</span>
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span><strong>Social economy integration:</strong> Part of Quebec&apos;s 11,000+ social economy
                  enterprises, with deep connections to CDRQ, PME MTL, CESIM, and the Chantier de l&apos;économie sociale</span>
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
