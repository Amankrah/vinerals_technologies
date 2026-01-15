'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IndustryHero from '@/components/sections/IndustryHero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import ProcessSection from '@/components/sections/ProcessSection';
import CTA from '@/components/sections/CTA';
import Section from '@/components/ui/Section';
import StructuredData, { createFAQSchema, createBreadcrumbSchema } from '@/components/shared/StructuredData';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const HEALTHCARE_FAQS = [
  {
    question: 'Are your healthcare solutions HIPAA and PHIPA compliant?',
    answer: 'Yes. All our healthcare systems are designed from day one with HIPAA (US) and PHIPA (Canada) compliance requirements, including encryption at rest and in transit, role-based access controls, comprehensive audit logging, and automated breach notification systems.',
  },
  {
    question: 'Can you integrate with existing EMR/EHR systems?',
    answer: 'Absolutely. We have experience integrating with major EMR/EHR systems using FHIR and HL7 standards. We can connect to your existing healthcare IT infrastructure to ensure seamless data flow and interoperability.',
  },
  {
    question: 'Do you work with small clinics or only large healthcare organizations?',
    answer: 'We work with healthcare organizations of all sizes, from independent clinics to multi-site healthcare networks. Through subsidized programs and mission-aligned funding, we make enterprise-quality healthcare technology accessible to smaller providers.',
  },
  {
    question: 'What is your experience with telehealth platforms?',
    answer: 'Our team has built telehealth platforms including video consultations, e-prescriptions, remote monitoring, and virtual triage systems. We understand both the technical requirements (WebRTC, secure video) and the clinical workflows needed for effective virtual care.',
  },
  {
    question: 'How do you ensure patient data security?',
    answer: 'We implement multiple layers of security: TLS 1.3 and AES-256 encryption, multi-factor authentication, role-based permissions, complete audit trails, automated security monitoring, and regular security audits. Patient data security is our highest priority.',
  },
];

export default function HealthcarePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Industries', url: 'https://vineralstechnologies.com/industries' },
    { name: 'Healthcare', url: 'https://vineralstechnologies.com/industries/healthcare' },
  ]);
  const faqSchema = createFAQSchema(HEALTHCARE_FAQS);
  const serviceDetails = {
    whatWeOffer: {
      title: 'Healthcare Solutions',
      items: [
        'Patient portals and management systems',
        'Telehealth and virtual care platforms',
        'Clinical workflow automation',
        'Health data analytics and reporting',
        'EMR/EHR integrations',
        'Appointment scheduling systems',
      ],
    },
    technologies: {
      title: 'Healthcare Technologies',
      items: [
        'FHIR (Fast Healthcare Interoperability Resources)',
        'HL7 messaging standards',
        'HIPAA/PHIPA compliant infrastructure',
        'Secure video conferencing (WebRTC)',
        'PostgreSQL with encryption at rest',
        'AWS HIPAA-eligible services',
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        'Compliance documentation',
        'Security audit reports',
        'Data privacy controls',
        'User access management',
        'Clinical staff training',
        'Ongoing compliance support',
      ],
    },
  };

  const processSteps = [
    {
      number: 1,
      title: 'Compliance Assessment',
      subtitle: 'Week 1',
      description: 'We review your data handling requirements, patient privacy needs, and regulatory obligations (HIPAA, PHIPA, provincial health regulations).',
    },
    {
      number: 2,
      title: 'Clinical Workflow Mapping',
      subtitle: 'Week 2',
      description: 'We spend time with your clinical staff to understand current workflows, pain points, and how technology can improve patient care.',
    },
    {
      number: 3,
      title: 'Secure Development',
      subtitle: 'Weeks 3-8',
      description: 'Build with security-first architecture: encryption, access controls, audit logging, and regular security testing.',
    },
    {
      number: 4,
      title: 'Training & Handoff',
      subtitle: 'Final Week',
      description: 'Comprehensive training for clinical and administrative staff, with documentation tailored to different user roles.',
    },
  ] as const;

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main className="pt-16">
        <IndustryHero
          badge="Healthcare Technology"
          title="Software That Improves Patient Care"
          description="Build healthcare technology that clinicians actually want to use - and patients trust. HIPAA/PHIPA compliant from day one."
          icon={<Heart className="w-16 h-16" />}
        />

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              The Healthcare Technology Problem
            </motion.h2>
            <div className="space-y-4 text-gray-700">
              <motion.p variants={fadeInUp} className="leading-relaxed">
                Most healthcare software is built by people who have never worked in a clinic.
                The result? Clunky interfaces that slow down clinicians, compliance features
                that feel like checkbox exercises, and systems that do not integrate with existing workflows.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                We are different. Our team includes developers with healthcare experience - we understand
                the difference between inpatient and outpatient care, why clinical notes matter, and how
                patient privacy regulations actually work in practice.
              </motion.p>
              <motion.p variants={fadeInUp} className="leading-relaxed">
                <strong>We build healthcare technology that solves real problems</strong> - not just
                software that meets a spec sheet.
              </motion.p>
            </div>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-8 text-center">
              Real-World Healthcare Use Cases
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Patient Portals</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Secure patient access to health records, test results, appointment booking,
                  and secure messaging with providers.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Community clinic portal with 5,000+ patients
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Telehealth Platforms</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Video consultations, e-prescriptions, remote monitoring, and virtual triage
                  systems for primary and specialty care.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Rural health network virtual care system
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Clinical Workflow Tools</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Automated patient intake, clinical decision support, referral management,
                  and care coordination dashboards.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Multi-site clinic operations dashboard
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Health Data Analytics</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Population health dashboards, clinical outcomes tracking, quality improvement
                  metrics, and public health reporting.
                </p>
                <p className="text-xs text-secondary-700 font-medium">
                  Example: Provincial health data aggregation system
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        <ServiceDetails {...serviceDetails} />

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">
              Compliance & Security
            </motion.h2>
            <motion.div variants={fadeInUp} className="bg-accent-100 border-l-4 border-accent-600 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-2">Built-In Compliance</h3>
              <p className="text-sm text-gray-700">
                We do not bolt on compliance as an afterthought. Our healthcare systems are designed
                from day one with HIPAA (US) and PHIPA (Canada) requirements, including:
              </p>
            </motion.div>
            <motion.ul variants={staggerContainer} className="space-y-3 text-gray-700">
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Encryption:</strong> Data encrypted at rest and in transit (TLS 1.3, AES-256)</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Access Controls:</strong> Role-based permissions, multi-factor authentication, session management</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Audit Logging:</strong> Complete audit trails of all PHI access and modifications</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Data Retention:</strong> Configurable retention policies compliant with provincial regulations</span>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start">
                <span className="text-secondary-600 mr-3 mt-1">✓</span>
                <span><strong>Breach Notification:</strong> Automated alerting systems for potential security incidents</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </Section>

        <ProcessSection steps={processSteps} />

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="section-headline mb-6 text-center">Engagement Models</motion.h2>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-md">
              <div className="mb-6">
                <div className="text-2xl font-bold text-primary-900 mb-2">Subsidized Programs Available</div>
                <div className="text-gray-600">Mission-aligned funding for healthcare innovation</div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We offer different program tracks based on your organization&apos;s stage and eligibility. Through government programs and impact funding, we can provide subsidized healthcare technology development for qualifying organizations.
                </p>
                <p>
                  <strong>Common healthcare projects:</strong> Patient portals, telehealth platforms, clinical workflow systems, and EMR integrations—all with HIPAA/PHIPA compliance built-in.
                </p>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  All projects include compliance documentation, security audits, and staff training. Contact us to discuss your healthcare project and determine program eligibility.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
