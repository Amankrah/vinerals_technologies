'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/sections/ServiceHero';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ServiceDetails from '@/components/sections/ServiceDetails';
import ProcessSection from '@/components/sections/ProcessSection';
import FaqAccordion from '@/components/sections/FaqAccordion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const capabilities = [
  {
    title: 'Plan.',
    description:
      'Demand and inventory views built from your own history and seasonality, so you can show a lender or a board where working capital is going and why.',
  },
  {
    title: 'Source.',
    description:
      'A supplier map with origin, risk level, and Bill S-211 forced-labour information already filled in. Answers ready before the buyer asks.',
  },
  {
    title: 'Deliver.',
    description:
      'A log of every batch from receiving to shipping, with the fields FSMA 204 asks for already lined up. A twenty-four hour recall request stops being a twenty-four hour scramble.',
  },
  {
    title: 'Return.',
    description:
      'Rework, relabel, quarantine, and recall recorded at the moment the work happens. A recall resolves in an afternoon instead of a week of chasing sheets.',
  },
  {
    title: 'Own.',
    description:
      'You own the records. Documented, portable, with your own credentials. No vendor sitting between you and your data on the day a contract ends.',
  },
  {
    title: 'Emissions.',
    description:
      'CBAM-ready emissions per batch and ISO 14040/14044 life-cycle numbers on the same records that run your operations. Not a separate sustainability system to keep in sync.',
  },
];

const blueprintDetails = {
  whatWeOffer: {
    title: 'What Cahier Includes',
    items: [
      'Records shaped around how work actually happens: receiving, processing, and shipping',
      'One set of records that can be exported in the format each regulator asks for',
      'Three build sizes: starter, shared with a group, and export-ready',
      'A rollout schedule with milestones at 90 days, 180 days, and 12 months',
      'Québec and federal funding programmes mapped to eligible line items',
      'A shared version so groups of SMEs can split the cost of the same records',
    ],
  },
  technologies: {
    title: 'Reference Stack',
    items: [
      'Offline-first mobile capture for the loading dock and the packing line',
      'Postgres ledger with append-only movement events',
      'Regulator-shaped exports (JSON, EDI 856, CSV) generated from one source',
      'Optional blockchain anchoring when a buyer requires it',
      'ISO 14044 LCA engine tied to lot-level emissions',
      'Integrations with Odoo, Cin7, QuickBooks, and Shopify',
    ],
  },
  deliverables: {
    title: 'What You Get',
    items: [
      'Your records, your code, your credentials, from day one',
      'A Bill S-211 annual report you can assemble from records you already keep',
      'FSMA 204 batch records ready to send on twenty-four hour buyer notice',
      'EUDR field-location packs for regulated commodities',
      'CBAM emissions statements ready for quarterly reporting',
      'Documentation a future team can pick up without you in the room',
    ],
  },
};

const rolloutSteps = [
  {
    number: 1,
    title: 'Discovery',
    subtitle: 'Weeks 1 to 2',
    description:
      'We walk the floor with you. Receiving to shipping, one lot from last month traced end to end. You leave with an honest gap analysis, whether you build with us or not.',
  },
  {
    number: 2,
    title: 'Data Capture',
    subtitle: 'Weeks 3 to 6',
    description:
      'Capture at the bench, not in a portal after the fact. Mobile, paper, or barcode: we connect what your team already touches.',
  },
  {
    number: 3,
    title: 'The Records',
    subtitle: 'Weeks 7 to 12',
    description:
      'One set of records covering suppliers, batches, movements, processing, and emissions. Reports tested against a real regulator format, not a slide deck.',
  },
  {
    number: 4,
    title: 'Buyer Channels',
    subtitle: 'Months 4 to 6',
    description:
      'Orders and invoices to retailers by EDI. Batch records to the FDA. Field-location packs to EU customs. S-211 report to Public Safety. Once, from the same records, in the format each one expects.',
  },
];

const blueprintFaqs = [
  {
    question: 'Who is Cahier for?',
    answer:
      'Growing Canadian SMEs and startups moving into new buyers, regulators, or borders. Food processors, agri-food producers, cleantech manufacturers, wholesale distributors, and cross-border e-commerce. Any operation where product moves through hands and paperwork, and buyers are starting to ask harder questions.',
  },
  {
    question: 'What will it cost?',
    answer:
      'Cahier is a framework, not a software licence. Builds are scoped in tiers (starter, consortium, export-ready). Qualifying costs can often be partly covered by programmes such as MAPAQ, Investissement Québec, SCAP, or CanExport when we structure the engagement together. We do not publish a public price list while the framework is still in development.',
  },
  {
    question: 'Which subsidies apply?',
    answer:
      'Rollout is mapped to MAPAQ Transformation Alimentaire (Components 2 to 4), Investissement Québec ESSOR, Sustainable Canadian Agricultural Partnership co-delivery, CanExport SME, and INNOV-R for carbon-reduction line items where they fit. Fit varies by sector and stage. We tell you within a week which programmes are realistic for your situation.',
  },
  {
    question: 'Who owns the data?',
    answer:
      'You own everything: the records, the code, the credentials, the documentation. No vendor sitting between you and your data. If you outgrow Cahier or decide to move on, a future team can pick it up because the whole thing is portable by design.',
  },
  {
    question: 'We already use Odoo, Cin7, or QuickBooks. Do we throw that out?',
    answer:
      'No. Cahier sits alongside the inventory and accounting tools you already run. It connects with them and adds the regulator-facing records they do not keep. Most SMEs already have most of the raw information. The work is usually collecting and linking it, not inventing it from nothing.',
  },
  {
    question: 'Is this blockchain?',
    answer:
      'Not by default. Some EU buyers require it, so Cahier supports it as an option. For most Canadian SMEs, a well-designed record-keeping system gives buyers everything they actually check, without the extra operational cost. We match the tool to the buyer requirement, not to the trend.',
  },
  {
    question: 'When can we start?',
    answer:
      'Cahier is in development through mid-2026, with early-access engagements running in parallel. If a buyer, regulator, or auditor calendar is already applying pressure, book a first conversation and we will tell you whether starting now with the current draft fits your timeline.',
  },
];

const quebecUnlocks = [
  {
    title: 'EU buyer contracts under CBAM and EUDR.',
    body: 'Québec producers with low-carbon inputs and clean sourcing get to prove it. Cahier produces the emissions statement and the field-location pack in the format customs asks for.',
  },
  {
    title: 'Aliments du Québec and institutional procurement.',
    body: 'Provincial buyers, hospitals, and school boards increasingly ask for traceability and origin. Cahier answers those questions the same way it answers export ones: once, from the same records.',
  },
  {
    title: 'MAPAQ and Investissement Québec funded rollout.',
    body: 'Transformation Alimentaire and ESSOR both cover digitisation and automation line items Cahier is designed to fit. Structured together, year-one cash outlay is often lower than building the same stack without programme support.',
  },
  {
    title: 'A Québec social economy fit.',
    body: 'Cooperative purchasing across a group of SMEs is a native lane here, not an afterthought. Aligned with CDRQ, PME MTL, and the Chantier de l’économie sociale.',
  },
];

const canadaUnlocks = [
  {
    title: 'FSMA 204 for US buyers.',
    body: 'A twenty-four hour batch record export is table stakes for large US retailers under FSMA 204. Canadian exporters ready before the July 2028 deadline are in a stronger position on shelf and in onboarding conversations.',
  },
  {
    title: 'Bill S-211 reporting without a two-week scramble.',
    body: 'Supplier attestations, sourcing evidence, and remediation notes live in one place all year. The annual forced-labour report becomes an export from records you already keep.',
  },
  {
    title: 'UFLPA-ready origin evidence for cross-border.',
    body: 'Rebuttable-presumption detentions at the US border are expensive and slow. Cahier captures the origin evidence a Canadian exporter needs to keep goods moving.',
  },
  {
    title: 'Working capital tied up in inventory.',
    body: 'Better item-level visibility and demand sensing often free cash that was sitting in stock. For a growing SME, that is frequently the capital that funds the next hire or the next buyer onboarding.',
  },
];

export default function CahierBlueprintPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ServiceHero
          badge="Cahier · The Supply Chain Blueprint · In Development"
          title="Cahier."
          highlightedWord="Cahier."
          description="The supply chain records app from Vinerals Technologies. One place to write down what you buy, make, and ship, so you can answer a buyer, an inspector, or an export customer without hunting through spreadsheets."
          image="/work-supply-chain.jpg"
          imageAlt="Wooden packing table with a paper shipping notebook, clipboard, and laptop in a food warehouse loading bay"
          primaryCTA={{ label: 'Join early access', href: '/contact?topic=cahier' }}
          secondaryCTA={{
            label: 'Read the traceability article',
            href: '/resources/food-systems-traceability-software-sme',
          }}
        />

        <Section background="white" paddingY="sm">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl border border-[var(--ink-hairline)]/45 bg-[var(--cream)] p-6 md:p-8"
          >
            <div className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-secondary-500">
              Status
            </div>
            <p className="font-display text-lg leading-relaxed text-[var(--ink)] md:text-xl">
              Cahier is in development at Vinerals through mid-2026. Early-access engagements
              run in parallel. What follows is a working draft of the finished framework.
            </p>
          </motion.div>
        </Section>

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">Why this exists</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              Three walls that keep
              <br />
              <em>growing SMEs stuck.</em>
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="space-y-6 leading-relaxed text-[var(--ink-muted)]"
            >
              <motion.p variants={fadeInUp}>
                <strong className="text-[var(--ink)]">Everything lives in spreadsheets.</strong>{' '}
                Most Canadian SMEs run their supply chain across a few spreadsheets, a shared
                inbox, and a chat thread. It works until a buyer asks where a batch came from,
                an inspector asks for records you cannot produce in one afternoon, or a recall
                forces you to rebuild the story from memory.
              </motion.p>
              <motion.p variants={fadeInUp}>
                <strong className="text-[var(--ink)]">The paperwork keeps stacking up.</strong>{' '}
                FSMA 204 in the US. Bill S-211 in Canada. EUDR and CBAM in Europe. CFIA rules at
                home. UFLPA at the US border. Six different sets of rules, six different formats,
                six deadlines. No affordable tool covers them together. So growing businesses
                either hire a consultant per regulation, or hope the buyer forgets to ask.
              </motion.p>
              <motion.p variants={fadeInUp}>
                <strong className="text-[var(--ink)]">The good tools price you out.</strong>{' '}
                Serious supply chain software is priced for large procurement teams. Cheaper
                inventory tools stop at inventory. Growing Canadian SMEs need the same records
                the big companies keep, in a form and at a price a growing business can plan
                around.
              </motion.p>
            </motion.div>
          </motion.div>
        </Section>

        <CapabilitiesSection title="What Cahier does" capabilities={capabilities} />

        <ServiceDetails {...blueprintDetails} />

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-12 max-w-3xl">
              <span className="eyebrow mb-6 block">One set of records. Six sets of paperwork.</span>
              <h2 className="section-headline mb-6">
                Write it down once.
                <br />
                <em>Send it out in whatever format each one asks for.</em>
              </h2>
              <p className="lead-text">
                The rules Canadian SMEs face in 2026 are not one problem. They are six. But
                underneath, they mostly ask for the same information. Record it once where the
                work actually happens, and every buyer, inspector, or regulator gets the version
                they want.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 border border-[var(--ink-hairline)]/45 bg-[var(--paper)] md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  code: 'FSMA 204',
                  jurisdiction: 'United States FDA',
                  body: 'Key Data Elements on twenty-four hour notice, covering critical tracking events from harvest to distribution.',
                },
                {
                  code: 'EUDR',
                  jurisdiction: 'European Union',
                  body: 'Plot-level geolocation for regulated commodities (cocoa, coffee, soy, timber, cattle, rubber, palm).',
                },
                {
                  code: 'CBAM',
                  jurisdiction: 'European Union',
                  body: 'Embedded emissions per lot for cement, iron, steel, aluminium, fertilisers, hydrogen. Quarterly reporting.',
                },
                {
                  code: 'Bill S-211',
                  jurisdiction: 'Canada',
                  body: 'Annual forced-labour risk report by May 31. Supplier attestations, sourcing evidence, remediation notes.',
                },
                {
                  code: 'CFIA SFCR',
                  jurisdiction: 'Canada',
                  body: 'Safe Food for Canadians Regulations. Domestic traceability, one step forward and one step back.',
                },
                {
                  code: 'UFLPA',
                  jurisdiction: 'US border (impacts Canadian exporters)',
                  body: 'Rebuttable-presumption verification. Origin evidence that keeps cross-border shipments moving.',
                },
              ].map((reg, i) => (
                <motion.div
                  key={reg.code}
                  variants={fadeInUp}
                  className={`p-8 md:p-10 ${i < 5 ? 'border-b border-[var(--ink-hairline)]/45' : ''} ${
                    i % 3 !== 2 ? 'lg:border-r' : ''
                  } ${i % 2 !== 1 ? 'md:border-r' : ''} lg:[&:nth-child(4)]:border-r lg:[&:nth-child(4)]:border-[var(--ink-hairline)]/45`}
                >
                  <div className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-secondary-500">
                    {reg.jurisdiction}
                  </div>
                  <h3 className="mb-3 font-display text-2xl leading-tight text-[var(--ink)]">
                    {reg.code}
                  </h3>
                  <hr className="rule-soft mb-4 w-10" />
                  <p className="text-sm leading-relaxed text-[var(--ink-muted)]">{reg.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-12 max-w-3xl">
              <span className="eyebrow mb-6 block">Pour le Québec</span>
              <h2 className="section-headline mb-6">
                What it unlocks
                <br />
                <em>for Québec businesses.</em>
              </h2>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid gap-x-10 gap-y-10 md:grid-cols-2">
              {quebecUnlocks.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="border-t border-[var(--ink-hairline)]/45 pt-6"
                >
                  <div className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-secondary-500">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mb-3 font-display text-2xl leading-tight text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--ink-muted)]">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-12 max-w-3xl">
              <span className="eyebrow mb-6 block">Across Canada</span>
              <h2 className="section-headline mb-6">
                What it unlocks
                <br />
                <em>from coast to coast.</em>
              </h2>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid gap-x-10 gap-y-10 md:grid-cols-2">
              {canadaUnlocks.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="border-t border-[var(--ink-hairline)]/45 pt-6"
                >
                  <div className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-secondary-500">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mb-3 font-display text-2xl leading-tight text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--ink-muted)]">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="eyebrow">The cooperative lane</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              One set of records,
              <br />
              <em>shared across several SMEs.</em>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="border border-[var(--ink-hairline)]/45 bg-[var(--cream)] p-8 md:p-10"
            >
              <p className="mb-6 font-display text-xl leading-relaxed text-[var(--ink)] md:text-[1.35rem]">
                A serious traceability system is often out of reach for one growing SME on its
                own. Split across a co-op or a group of similar businesses, the same setup lands
                somewhere a growing business can plan for.
              </p>
              <p className="mb-6 leading-relaxed text-[var(--ink-muted)]">
                Cahier has a shared version built in. The compliance information sits in
                one place for everyone in the group. Each member's competitive information stays
                private to them. Cost-sharing and governance shaped for a Québec solidarity
                cooperative, a farmer co-op, or a sector association.
              </p>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                We know this shape because we are a solidarity cooperative ourselves. Aligned with
                CDRQ, PME MTL, and the Chantier de l’économie sociale.
              </p>
            </motion.div>
          </motion.div>
        </Section>

        <ProcessSection
          title="Rollout"
          description="From walking the floor with you to sending your first buyer-ready report. Four phases, each with a milestone you can show a board or a bank."
          steps={rolloutSteps}
        />

        <FaqAccordion
          title="Questions we hear early."
          description="What growing SMEs ask before joining early access."
          faqs={blueprintFaqs}
        />

        <Section background="gray" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">Start here</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-8">
              If your supply chain runs on
              <br />
              <em>spreadsheets and a chat thread.</em>
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="space-y-5 leading-relaxed text-[var(--ink-muted)]"
            >
              <motion.p variants={fadeInUp}>
                Bring us one lot you shipped last month, and how you traced it. What paper touched
                it. Who logged what into which sheet. Which buyer asked which question, and how
                you answered.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We will walk it with you before anyone talks about software. If Cahier
                fits, we say so. If a lighter fix is closer to what you need, we say that too.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button
                  href="/contact?topic=cahier"
                  size="lg"
                  variant="primary"
                  icon={<ArrowUpRight className="h-5 w-5" />}
                >
                  Join early access
                </Button>
                <Button
                  href="/resources/food-systems-traceability-software-sme"
                  size="lg"
                  variant="secondary"
                >
                  Read the article first
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
