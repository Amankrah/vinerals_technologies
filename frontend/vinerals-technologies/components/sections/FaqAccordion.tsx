'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface FAQ {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  title: string;
  description?: string;
  faqs: FAQ[];
}

/**
 * FaqAccordion — Q&A spread. Numbered manuscript notes; clicking opens
 * the answer beneath. Plus/minus glyph rather than chevron — feels
 * more typographic. Hairline rules between items.
 */
const FAQItem = ({ faq, index }: { faq: FAQ; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-[var(--ink-hairline)]/40 last:border-0"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-7 grid grid-cols-[3rem_1fr_2rem] items-baseline gap-4 text-left group"
      >
        <span className="numeral text-xl pt-1">{String(index + 1).padStart(2, '0')}</span>
        <span className="font-display text-xl md:text-2xl text-[var(--ink)] group-hover:text-primary-700 transition-colors leading-tight">
          {faq.question}
        </span>
        <span className="text-[var(--ink-faint)] group-hover:text-secondary-500 transition-colors place-self-end self-start pt-2">
          {isOpen ? <MinusGlyph className="w-4 h-4" /> : <PlusGlyph className="w-4 h-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-[3rem_1fr_2rem] gap-4 pb-7">
              <span />
              <p className="text-[var(--ink-muted)] leading-relaxed max-w-[62ch]">
                {faq.answer}
              </p>
              <span />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqAccordion = ({ title, description, faqs }: FaqAccordionProps) => {
  return (
    <Section background="white" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="grid md:grid-cols-12 gap-x-10 gap-y-10"
      >
        <motion.div variants={fadeInUp} className="md:col-span-4 md:sticky md:top-32 md:self-start">
          <span className="eyebrow mb-6 block">Foire aux questions</span>
          <h2 className="section-headline mb-6">{title}</h2>
          {description && <p className="lead-text max-w-[36ch]">{description}</p>}
        </motion.div>

        <motion.div variants={staggerContainer} className="md:col-span-8 border-t border-[var(--ink-hairline)]/40">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default FaqAccordion;

function PlusGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

function MinusGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  );
}
