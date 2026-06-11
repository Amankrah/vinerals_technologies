'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import TeamHero from '@/components/sections/TeamHero';
import CTA from '@/components/sections/CTA';
import { Users, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  funFact: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Emmanuel Amankrah Kwofie',
      role: 'Lead Engineer & CTO',
      expertise: ['Full-Stack Development', 'Cloud Architecture', 'Machine Learning', 'DevOps'],
      bio: 'A research-to-software engineer. The kind who turns scientific work into systems you can actually run. Past stints at SASEL Lab McGill and a background in automation, cloud-native applications, and high-performance research and analytics platforms. Focused on sustainable food systems, AI integration, and translating heavy technical concepts into practical business decisions. 5+ years shipping enterprise-calibre software.',
      funFact: 'Built a full pea-protein analysis platform that wove together technical optimisation, economic feasibility modelling, and environmental impact assessment. The exact kind of cross-disciplinary problem-solving SMEs need when they’re trying to make a real call on technology.',
      linkedin: 'https://www.linkedin.com/in/eakwofie/',
      github: 'https://github.com/Amankrah',
      email: 'contact@vineralstechnologies.com',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        <TeamHero
          badge="Meet the Team"
          title="The people behind the work."
          highlightedWord="behind the work."
          description="A small team of experienced developers, building software that solves real problems for mission-driven organisations. No account managers, no junior devs being trained on your project."
          icon={<Users className="w-8 h-8" />}
          stats={[
            { value: '5+', label: 'Years Experience' },
            { value: '100%', label: 'Senior Developers' },
          ]}
          primaryCTA={{ label: 'Join us', href: '#join' }}
          secondaryCTA={{ label: 'Book a free consultation', href: '/contact' }}
        />

        {/* Team Intro */}
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
                We’re not the typical agency. No account managers, no sales team, no juniors fresh out
                of bootcamp on your project. <strong>Every person you work with is a senior engineer with
                at least five years of production experience.</strong> Same calibre of talent you’d hire at
                Spiria, Stradigi AI, or Konverge.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We came together because we were tired of how the industry works. Tired of watching
                talented developers build vanity apps for startups while community health clinics ran
                on paper. Tired of sustainable food producers priced out of basic traceability. Tired
                of non-profits handing over consulting fees that could have funded their actual programmes.
                <strong> The knowledge gap and the cost barrier were locking Québec SMEs out of the room.</strong>
              </motion.p>
              <motion.blockquote variants={fadeInUp} className="pullquote my-4">
                The team that starts your project is the team that finishes it.
              </motion.blockquote>
              <motion.p variants={fadeInUp}>
                So we built Vinerals Technologies. A solidarity cooperative where we could work on
                projects we believe in, line up mission-aligned funding to close the accessibility gap,
                and prove that enterprise-calibre software doesn’t have to be out of reach for a growing
                business. We’re not competing on price. We’re solving the actual problem: helping SMEs
                see what’s possible and bringing the professional implementation inside reach.
              </motion.p>
            </motion.div>
          </motion.div>
        </Section>

        {/* Team Members */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-12 text-center">
              Our Team
            </motion.h2>

            <motion.div variants={staggerContainer} className="space-y-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-xl p-8 md:flex md:gap-8"
                >
                  {/* Avatar Placeholder */}
                  <div className="flex-shrink-0 mb-6 md:mb-0">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <div className="text-primary-700 font-semibold mb-4">
                      {member.role}
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="bg-accent-100 border-l-4 border-accent-600 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-900">
                        <strong>Fun Fact:</strong> {member.funFact}
                      </p>
                    </div>

                    {/* Contact Links */}
                    <div className="flex gap-4">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800"
                          title={`Email ${member.name}`}
                        >
                          <Mail className="w-5 h-5" />
                          <span className="text-sm">Email</span>
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800"
                          title={`${member.name} on LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5" />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800"
                          title={`${member.name} on GitHub`}
                        >
                          <Github className="w-5 h-5" />
                          <span className="text-sm">GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        {/* Why Work With Us */}
        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-8 text-center">
              Why work with us
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Senior developers only.</h3>
                <p className="text-gray-700 text-sm">
                  Everyone you work with has at least five years in production. No juniors learning
                  on your dime.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Direct access.</h3>
                <p className="text-gray-700 text-sm">
                  No account managers, no middlemen. You talk to the developer building the thing,
                  not the person managing the relationship.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Domain understanding, not just code.</h3>
                <p className="text-gray-700 text-sm">
                  Real working experience in healthcare, food systems, sustainability, and social enterprise.
                  We understand your context, which means we can translate technology into a decision
                  you can actually act on.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Mission-aligned. Quality non-negotiable.</h3>
                <p className="text-gray-700 text-sm">
                  We care about the problems you’re solving and walk away from work that doesn’t fit
                  our values. But the quality bar stays the same as any larger Montréal shop. We won’t
                  ship code we wouldn’t be proud of either way.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        {/* Join Us */}
        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6">
              Join the team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-700 leading-relaxed mb-8">
              We’re growing slowly, on purpose. If you’re a senior developer who wants to work on
              meaningful projects, earn a fair wage, and help build a more equitable tech industry,
              we’d like to hear from you.
            </motion.p>
            <motion.div variants={fadeInUp} className="bg-primary-50 rounded-xl p-8">
              <h3 className="font-bold text-gray-900 mb-4">What we look for</h3>
              <ul className="text-left space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span>5+ years of professional development experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span>Track record of shipping production applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span>Interest in mission-driven work and cooperative governance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span>Based in or willing to relocate to Montreal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary-600 mt-1">✓</span>
                  <span>Strong communication skills (English/French a plus)</span>
                </li>
              </ul>
              <a
                href="mailto:contact@vineralstechnologies.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@vineralstechnologies.com
              </a>
            </motion.div>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
