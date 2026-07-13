'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { StatCard } from '@/components/ui/Card';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { STATS } from '@/lib/constants';

/**
 * ProblemSolution — feature spread. Left column lists three barriers
 * as numbered manuscript notes. Right column gives the cooperative's
 * response, set as a pulled-aside answer. Stats appear below as a
 * three-column dateline of oversized italic numerals.
 */
const ProblemSolution = () => {
  return (
    <Section background="white" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="eyebrow">Le dossier · Canada&apos;s digital divide</span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="section-headline max-w-[20ch] mb-8 md:mb-12"
        >
          Software is rewriting every industry.
          <br />
          <em>Most SMEs</em> are still locked out.
        </motion.h2>

        <div className="grid md:grid-cols-12 gap-x-10 gap-y-10 md:gap-y-14 mb-16 md:mb-24 items-start">
          {/* Barriers — left column, 7/12. md:pt-6 keeps the eyebrow roughly aligned with the panel's eyebrow without opening a void. */}
          <motion.div variants={fadeInUp} className="md:col-span-7 md:pt-4 lg:pt-6">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-secondary-500 mb-6 flex items-center gap-3">
              <span className="w-7 h-px bg-secondary-500" />
              Trois obstacles
            </div>

            <h3 className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-8 md:mb-10 leading-tight">
              Three barriers stand in the way.
            </h3>

            <ol className="space-y-8 md:space-y-10">
              {barriers.map((b, i) => (
                <li key={b.title} className="grid grid-cols-[3rem_1fr] gap-x-6">
                  <span className="numeral text-3xl pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-display text-xl text-[var(--ink)] mb-2 leading-snug">
                      {b.title}
                    </h4>
                    <p className="text-[var(--ink-muted)] leading-relaxed max-w-[52ch]">
                      {b.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Response — right column, 5/12, pulled aside on cream-deep panel */}
          <motion.aside
            variants={fadeInUp}
            className="md:col-span-5 bg-[var(--cream-deep)] p-8 md:p-10 border border-[var(--ink-hairline)]/40 relative grain"
          >
            <div className="above-grain">
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700 mb-6 flex items-center gap-3">
                <span className="w-7 h-px bg-primary-700" />
                La réponse
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-[var(--ink)] mb-8 leading-tight">
                How we&apos;re <em className="text-primary-700">different</em>.
              </h3>

              <div className="space-y-8">
                {responses.map((r) => (
                  <div key={r.title}>
                    <h4 className="font-display italic text-xl text-primary-700 mb-2 leading-snug">
                      {r.title}
                    </h4>
                    <p className="text-[var(--ink-muted)] leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        <hr className="rule mb-10 md:mb-16" />

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14"
        >
          {STATS.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <StatCard
                value={stat.value}
                label={stat.label}
                description={stat.description}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

const barriers = [
  {
    title: "You can’t tell hype from signal.",
    body: "AI is everywhere. What actually fits your business is a much shorter list. Most agencies assume you already know which is which. We start by walking through it with you.",
  },
  {
    title: 'Good engineering costs real money.',
    body: 'Custom software runs $50K to $150K CAD, often higher. For most growing businesses, that cheque simply isn’t in the chequebook.',
  },
  {
    title: 'Senior developers are gated behind funded payrolls.',
    body: 'The experienced people are at funded startups and big enterprise shops. SMEs end up with juniors learning on their dime, or offshore teams who never quite get the business.',
  },
];

const responses = [
  {
    title: 'Shaped to fit.',
    body: 'Senior engineers shape software around how your business runs. Craft in the details. Ownership in the contract. The system fits you, rather than asking you to fit a product.',
  },
  {
    title: 'Translation before development.',
    body: "We explain what’s possible before any code happens. No jargon, no pressure. When the honest answer is “don’t build it,” that is the answer you will get.",
  },
  {
    title: 'Premium work, terms you can plan around.',
    body: 'The same calibre larger firms pay full freight for, structured so a growing business can say yes. Mission-aligned funding when you qualify. Code you own outright.',
  },
];

export default ProblemSolution;
