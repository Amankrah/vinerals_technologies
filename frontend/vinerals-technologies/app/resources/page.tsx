'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import ResourcesHero from '@/components/sections/ResourcesHero';
import CTA from '@/components/sections/CTA';
import { RESOURCES_SLATE, type ArticleCluster } from '@/content/resources-slate';
import { getPublishedArticles } from '@/content/articles';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

const CLUSTER_ORDER: ArticleCluster[] = [
  'Decisions',
  'Craft & ownership',
  'AI honesty',
  'Québec & Canada',
  'Sector',
  'Working together',
];

export default function ResourcesPage() {
  const published = getPublishedArticles();
  const planned = [...RESOURCES_SLATE]
    .filter((a) => a.status === 'planned')
    .sort((a, b) => a.priority - b.priority);

  const byCluster = CLUSTER_ORDER.map((cluster) => ({
    cluster,
    articles: RESOURCES_SLATE.filter((a) => a.cluster === cluster).sort(
      (a, b) => a.priority - b.priority
    ),
  })).filter((g) => g.articles.length > 0);

  return (
    <>
      <Header />
      <main className="pt-16">
        <ResourcesHero
          badge="Resources & Learning"
          title="Notes from the shop floor."
          highlightedWord="shop floor."
          description="Practical writing for SMEs and social enterprises. Costs, ownership, AI without the theatre, and how craft software actually gets decided. We publish one note at a time."
          image="/resources-atelier.jpg"
          imageAlt="Notebook, pen, and laptop on a wooden workshop desk"
          stats={[
            { value: String(published.length), label: 'Published' },
            { value: String(planned.length), label: 'Still in the queue' },
          ]}
          primaryCTA={{
            label: published.length ? 'Read the latest' : 'See the slate',
            href: published.length ? '#published' : '#slate',
          }}
          secondaryCTA={{ label: 'Book a consultation', href: '/contact' }}
        />

        {published.length > 0 && (
          <Section background="gray" paddingY="lg" id="published">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <div className="mb-10 grid items-end gap-x-10 gap-y-6 md:mb-14 md:grid-cols-12">
                <motion.div variants={fadeInUp} className="md:col-span-7">
                  <span className="eyebrow mb-6 block">Published</span>
                  <h2 className="section-headline max-w-[14ch]">
                    On the
                    <br />
                    <em>desk now.</em>
                  </h2>
                </motion.div>
                <motion.p
                  variants={fadeInUp}
                  className="lead-text max-w-[40ch] md:col-span-5 md:ml-auto"
                >
                  Workshop notes. Researched, written in craft voice, no invented
                  case studies.
                </motion.p>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid gap-0 border border-[var(--ink-hairline)]/45 md:grid-cols-2"
              >
                {published.map((article, index) => {
                  const isRight = index % 2 === 1;

                  return (
                  <motion.div key={article.slug} variants={fadeInUp}>
                    <Link
                      href={`/resources/${article.slug}`}
                      className={`group flex h-full flex-col bg-[var(--paper)] transition-colors hover:bg-[var(--cream)] ${
                        !isRight ? 'md:border-r md:border-[var(--ink-hairline)]/45' : ''
                      } ${
                        index < published.length - 1
                          ? 'border-b border-[var(--ink-hairline)]/45'
                          : ''
                      }`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-primary-950">
                        <Image
                          src={article.image}
                          alt={article.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6 md:p-8">
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-secondary-600">
                          {article.category}
                        </span>
                        <h3 className="mt-3 font-display text-2xl text-[var(--ink)] transition-colors group-hover:text-primary-700 md:text-[1.65rem]">
                          {article.title}
                        </h3>
                        <p className="mt-3 max-w-[48ch] flex-1 leading-relaxed text-[var(--ink-muted)]">
                          {article.excerpt}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary-700">
                          {article.readTime}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </Section>
        )}

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="eyebrow">Editorial stance</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="section-headline mb-6">
              Written like the work:
              <br />
              <em>honest and specific.</em>
            </motion.h2>
            <motion.p variants={fadeInUp} className="lead-text mb-6 max-w-[48ch]">
              No fake case studies, no invented authors, no brochure voice. Each
              note should help you decide — including when the answer is not to
              build with us.
            </motion.p>
            <motion.ul
              variants={staggerContainer}
              className="space-y-3 text-[var(--ink-muted)]"
            >
              {[
                'Decision frameworks over thought leadership.',
                'Ranges and trade-offs over false precision.',
                'Québec / Canadian context where it matters.',
                'Craft and ownership as the through-line.',
              ].map((line) => (
                <motion.li
                  key={line}
                  variants={fadeInUp}
                  className="flex items-start gap-3 leading-relaxed"
                >
                  <span className="mt-1 text-secondary-600" aria-hidden>
                    —
                  </span>
                  <span>{line}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </Section>

        <Section background="gray" paddingY="lg" id="slate">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <div className="mb-10 grid items-end gap-x-10 gap-y-6 md:mb-14 md:grid-cols-12">
              <motion.div variants={fadeInUp} className="md:col-span-7">
                <span className="eyebrow mb-6 block">Slate</span>
                <h2 className="section-headline max-w-[16ch]">
                  Still in
                  <br />
                  <em>the queue.</em>
                </h2>
              </motion.div>
              <motion.p
                variants={fadeInUp}
                className="lead-text max-w-[40ch] md:col-span-5 md:ml-auto"
              >
                Working titles and jobs-to-be-done. Next up: AI honesty
                (do you need AI, or better software?).
              </motion.p>
            </div>

            <motion.ol
              variants={staggerContainer}
              className="border border-[var(--ink-hairline)]/45"
            >
              {planned.map((article, index) => (
                <motion.li
                  key={article.id}
                  variants={fadeInUp}
                  className={`grid gap-3 p-6 md:grid-cols-12 md:items-baseline md:gap-x-8 md:p-8 ${
                    index > 0 ? 'border-t border-[var(--ink-hairline)]/40' : ''
                  }`}
                >
                  <span className="numeral text-2xl md:col-span-1">
                    {article.number}
                  </span>
                  <div className="md:col-span-3">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-secondary-600">
                      {article.cluster}
                    </span>
                    <h3 className="mt-2 font-display text-xl text-[var(--ink)] md:text-[1.35rem]">
                      {article.title}
                    </h3>
                  </div>
                  <p className="max-w-[44ch] leading-relaxed text-[var(--ink-muted)] md:col-span-6">
                    {article.job}
                  </p>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ink-faint)] md:col-span-2 md:text-right">
                    Planned
                  </span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>
        </Section>

        <Section background="white" paddingY="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-10 md:mb-14">
              <span className="eyebrow mb-6 block">By cluster</span>
              <h2 className="section-headline max-w-[18ch]">
                Same shop,
                <br />
                <em>six lanes.</em>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-x-10 gap-y-12 md:grid-cols-2"
            >
              {byCluster.map((group) => (
                <motion.div
                  key={group.cluster}
                  variants={fadeInUp}
                  className="border-t border-[var(--ink-hairline)]/40 pt-6"
                >
                  <h3 className="mb-4 font-display text-2xl text-[var(--ink)]">
                    {group.cluster}
                  </h3>
                  <ul className="space-y-3">
                    {group.articles.map((a) => {
                      const live = published.find(
                        (p) => p.slateId === a.id || p.slug === a.workingSlug
                      );
                      return (
                        <li
                          key={a.id}
                          className="flex gap-3 text-[var(--ink-muted)]"
                        >
                          <span className="numeral shrink-0 text-sm">
                            {a.number}
                          </span>
                          {live ? (
                            <Link
                              href={`/resources/${live.slug}`}
                              className="leading-snug text-primary-700 underline-offset-4 hover:underline"
                            >
                              {a.title}
                            </Link>
                          ) : (
                            <span className="leading-snug">{a.title}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
