'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import ResourcesHero from '@/components/sections/ResourcesHero';
import CTA from '@/components/sections/CTA';
import { getPublishedArticles } from '@/content/articles';
import { RESOURCES_SLATE } from '@/content/resources-slate';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/hooks/useScrollAnimation';

const slateById = Object.fromEntries(RESOURCES_SLATE.map((s) => [s.id, s]));

const publishedStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export default function BlogPage() {
  const published = getPublishedArticles();

  return (
    <>
      <Header />
      <main className="pt-16">
        <ResourcesHero
          badge="Blog & Insights"
          title="Workshop notes."
          highlightedWord="notes."
          description="Practical writing from the shop. Costs, ownership, build-versus-buy, and the decisions SMEs actually face."
          image="/resources-atelier.jpg"
          imageAlt="Notebook, pen, and laptop on a wooden workshop desk"
          stats={[
            { value: String(published.length), label: 'Published' },
            { value: 'EN', label: 'Language' },
          ]}
          primaryCTA={{ label: 'Browse notes', href: '#notes' }}
          secondaryCTA={{ label: 'All resources', href: '/resources' }}
        />

        <Section background="gray" paddingY="lg" id="notes">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={publishedStagger}
          >
            {published.length === 0 ? (
              <motion.p variants={fadeInUp} className="lead-text max-w-[42ch]">
                Notes are on the way. Check back soon, or browse the full slate on
                Resources.
              </motion.p>
            ) : (
              <motion.div
                variants={publishedStagger}
                className="grid gap-0 border border-[var(--ink-hairline)]/45 md:grid-cols-2"
              >
                {published.map((article, index) => {
                  const isRight = index % 2 === 1;
                  const slate = article.slateId ? slateById[article.slateId] : undefined;

                  return (
                    <motion.div key={article.slug} variants={fadeInUp}>
                      <Link
                        href={`/resources/${article.slug}`}
                        className={`group flex h-full flex-col bg-[var(--paper)] transition-colors hover:bg-[var(--cream)] ${
                          !isRight
                            ? 'md:border-r md:border-[var(--ink-hairline)]/45'
                            : ''
                        } ${
                          index < published.length - 1
                            ? 'border-b border-[var(--ink-hairline)]/45'
                            : ''
                        }`}
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--cream-deep)]">
                          <Image
                            src={article.image}
                            alt={article.imageAlt}
                            fill
                            priority={index < 10}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                          />
                          {slate && (
                            <span className="absolute left-5 top-5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white [text-shadow:0_1px_12px_rgba(10,20,16,0.55)]">
                              {slate.number}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col p-6 md:p-8">
                          <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-secondary-600">
                            {article.category}
                          </span>
                          <h2 className="mt-3 font-display text-2xl text-[var(--ink)] transition-colors group-hover:text-primary-700">
                            {article.title}
                          </h2>
                          <p className="mt-3 max-w-[48ch] flex-1 leading-relaxed text-[var(--ink-muted)]">
                            {article.excerpt}
                          </p>
                          <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary-700">
                            {article.readTime}
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
