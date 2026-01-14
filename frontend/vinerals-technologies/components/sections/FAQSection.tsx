'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Section from '@/components/ui/Section';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description?: string;
  faqs: FAQ[];
}

const FAQItem = ({ faq, index }: { faq: FAQ; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary-700 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-800 pr-8">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-6"
        >
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const FAQSection = ({ title, description, faqs }: FAQSectionProps) => {
  return (
    <Section background="white" paddingY="lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 variants={fadeInUp} className="section-headline mb-4">
            {title}
          </motion.h2>
          {description && (
            <motion.p variants={fadeInUp} className="lead-text">
              {description}
            </motion.p>
          )}
        </div>

        {/* FAQ List */}
        <motion.div
          variants={staggerContainer}
          className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default FAQSection;
