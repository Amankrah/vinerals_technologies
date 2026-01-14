'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import ServiceHero from '@/components/sections/ServiceHero';
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
      bio: 'Research-to-software engineer converting scientific concepts into functional systems. Currently at SASEL Lab McGill, Emmanuel specializes in building automation solutions, cloud-native applications, and high-performance systems for research and analytics platforms with a focus on sustainable food systems.',
      funFact: 'Built a comprehensive pea protein analysis platform with technical optimization, economic feasibility modeling, and environmental impact assessment.',
      linkedin: 'https://www.linkedin.com/in/eakwofie/',
      github: 'https://github.com/Amankrah',
      email: 'contact@vinerals.ca',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="Meet the Team"
          title="The Developers Behind Vinerals"
          description="We are a small team of experienced developers who care deeply about building technology that solves real problems for mission-driven organizations."
          icon={<Users className="w-16 h-16" />}
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
              Who We Are
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p variants={fadeInUp}>
                We are not your typical agency. There are no account managers, no sales team,
                no junior developers fresh out of bootcamp. Every person you work with is a
                senior engineer with 5+ years of experience.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We came together because we were frustrated with how the tech industry operates.
                We saw talented developers building vanity apps for startups while community health
                clinics struggled with paper records. We saw sustainable food producers unable to
                afford basic traceability systems. We saw non-profits paying consulting fees that
                could have funded their programs.
              </motion.p>
              <motion.p variants={fadeInUp}>
                So we built Vinerals Technologies - a solidarity cooperative where we could work
                on projects we believe in, charge what is fair rather than what the market will bear,
                and prove that quality technology does not have to cost a fortune.
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
              Why Work With Us
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Senior Developers Only</h3>
                <p className="text-gray-700 text-sm">
                  Every person you work with has 5+ years of professional experience. No junior
                  devs learning on your dime.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Direct Access</h3>
                <p className="text-gray-700 text-sm">
                  No account managers or middlemen. You work directly with the developers building
                  your solution.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Domain Expertise</h3>
                <p className="text-gray-700 text-sm">
                  We have real-world experience in healthcare, food systems, sustainability, and
                  social enterprise - not just tech.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Mission-Aligned</h3>
                <p className="text-gray-700 text-sm">
                  We care about the problems you are solving. We turn down projects that do not
                  align with our values.
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
              Join Our Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-700 leading-relaxed mb-8">
              We are growing slowly and deliberately. If you are a senior developer who wants
              to work on meaningful projects, earn fair wages, and help build a more equitable
              tech industry, we would love to hear from you.
            </motion.p>
            <motion.div variants={fadeInUp} className="bg-primary-50 rounded-xl p-8">
              <h3 className="font-bold text-gray-900 mb-4">What We Look For</h3>
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
                href="mailto:contact@vinerals.ca"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@vinerals.ca
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
