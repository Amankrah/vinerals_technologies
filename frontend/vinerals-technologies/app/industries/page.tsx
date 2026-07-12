'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CTA from '@/components/sections/CTA';
import IndustryHero from '@/components/sections/IndustryHero';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import FaqAccordion from '@/components/sections/FaqAccordion';
import StructuredData, {
  createFAQSchema,
  createBreadcrumbSchema,
} from '@/components/shared/StructuredData';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const INDUSTRIES_FAQS = [
  {
    question: 'Why does industry expertise matter for software development?',
    answer:
      'Because we know your regulations, your workflows, and your edge cases from day one. That means less ramp-up, fewer revisions, and software that solves the problem you actually have. A generic shop learns your industry on your dime. We come in with real working experience from clinics, food production sites, environmental research labs, and cooperative organisations.',
  },
  {
    question: 'Do you only work with the industries listed on this site?',
    answer:
      'We specialise in healthcare, food systems, sustainability, and non-profits, but we also work with other mission-driven organisations. If your sector has heavy compliance, complex workflows, or social impact goals, our experience usually carries over. Talk to us about your specifics.',
  },
  {
    question: 'Can you handle industry-specific compliance and regulations?',
    answer:
      'Yes. Compliance gets built in on day one, not bolted on the week before audit. HIPAA and PHIPA for healthcare. HACCP and food safety for agriculture. Environmental reporting for cleantech. Grant reporting for non-profits. It’s foundational to the way we work in these sectors.',
  },
  {
    question: 'What makes your team qualified for these industries?',
    answer:
      'Our developers have worked inside these industries, not just on software for them. We have team members with healthcare experience, food systems background, sustainability research credentials, and cooperative governance under their belt. That working knowledge shapes every technical call we make.',
  },
  {
    question: 'Are there subsidised tracks for industry-specific projects?',
    answer:
      'Yes. Through government programmes (CIHR, ISED, SDTC, MAPAQ), foundation funding, and social innovation grants, we offer subsidised builds for qualifying organisations in our focus sectors. The track depends on your stage, mission alignment, and project scope.',
  },
];

const CROSS_SECTOR = [
  {
    title: 'Compliance & security',
    body: 'HIPAA, PHIPA, GDPR, SOC 2, food safety, and environmental reporting — built in from day one.',
  },
  {
    title: 'Data integration',
    body: 'EMRs, ERPs, IoT sensors, supply-chain APIs, and the environmental databases nobody else wants to touch.',
  },
  {
    title: 'Mobile & field work',
    body: 'Offline-first apps for clinicians, field technicians, and any team that doesn’t live at a desk.',
  },
] as const;

export default function IndustriesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Industries', url: 'https://vineralstechnologies.com/industries' },
  ]);
  const faqSchema = createFAQSchema(INDUSTRIES_FAQS);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <Header />
      <main className="pt-16">
        <IndustryHero
          badge="Industries We Serve"
          title="Sector experience that makes the work land."
          highlightedWord="land."
          description="We know your regulations, the shape of your data, and the workflows your team actually runs — then we make software by hand for that reality."
          image="/sector-nonprofits.jpg"
          imageAlt="Hands gathered around a wooden table in a cooperative meeting"
          primaryCTA={{ label: 'Find your sector', href: '#industries-grid' }}
          secondaryCTA={{ label: 'See case studies', href: '/work' }}
        />

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid items-start gap-x-10 gap-y-8 md:grid-cols-12"
          >
            <motion.div variants={fadeInUp} className="md:col-span-4">
              <span className="eyebrow mb-6 block">Pourquoi</span>
              <h2 className="section-headline max-w-[14ch]">
                Why sector experience <em>matters.</em>
              </h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="space-y-5 md:col-span-7 md:col-start-6"
            >
              <motion.p
                variants={fadeInUp}
                className="max-w-[52ch] leading-relaxed text-[var(--ink-muted)]"
              >
                A generic shop treats every project the same. They learn your
                industry on your dime, make assumptions that don’t fit, and hand
                over software that misses the point.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="max-w-[52ch] leading-relaxed text-[var(--ink-muted)]"
              >
                Our team has worked inside clinics, food production sites,
                environmental research labs, and cooperative organisations. We
                know the vocabulary, the regulations, and the edge cases before
                they bite.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="max-w-[52ch] font-display text-xl italic leading-snug text-[var(--ink)]"
              >
                Less ramp-up. Fewer revisions. Software that solves the problem
                you face every day.
              </motion.p>
            </motion.div>
          </motion.div>
        </Section>

        <IndustriesGrid
          eyebrow="Le catalogue"
          title={
            <>
              Four sectors.
              <br />
              <em>Open a file.</em>
            </>
          }
          description="Each dossier is a sector we’ve already shipped in — regulations, data shapes, and constraints included."
        />

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-12 max-w-3xl md:mb-14">
              <span className="eyebrow mb-6 block">Muscles transversaux</span>
              <h2 className="section-headline mb-4">
                The cross-sector <em>muscles.</em>
              </h2>
              <p className="lead-text max-w-[46ch]">
                Capabilities that travel with us from one sector to the next.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 border border-[var(--ink-hairline)]/45 md:grid-cols-3"
            >
              {CROSS_SECTOR.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={fadeInUp}
                  className={`bg-[var(--paper)] p-8 md:p-10 ${
                    index < CROSS_SECTOR.length - 1
                      ? 'border-b border-[var(--ink-hairline)]/45 md:border-b-0 md:border-r'
                      : ''
                  }`}
                >
                  <span className="numeral mb-5 block text-2xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mb-3 font-display text-2xl leading-tight text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
                    {item.body}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        <FaqAccordion
          title="Questions you’re probably already asking."
          description="The ones that come up when someone is weighing whether sector fit matters."
          faqs={INDUSTRIES_FAQS}
        />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
