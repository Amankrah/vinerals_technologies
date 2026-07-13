import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CTA from '@/components/sections/CTA';
import StructuredData, {
  createArticleSchema,
  createBreadcrumbSchema,
} from '@/components/shared/StructuredData';
import { getArticleBySlug, getPublishedArticles } from '@/content/articles';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getPublishedArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Note not found | Vinerals Technologies',
    };
  }

  return {
    title: `${article.title} | Resources | Vinerals Technologies`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: `https://vineralstechnologies.com/resources/${article.slug}`,
      publishedTime: article.publishedDate,
      images: [
        {
          url: `https://vineralstechnologies.com${article.image}`,
          width: 1200,
          height: 675,
          alt: article.imageAlt,
        },
      ],
    },
    alternates: {
      canonical: `https://vineralstechnologies.com/resources/${article.slug}`,
    },
  };
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const others = getPublishedArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const articleSchema = createArticleSchema({
    title: article.title,
    description: article.description,
    author: article.author.name,
    datePublished: article.publishedDate,
    image: `https://vineralstechnologies.com${article.image}`,
    url: `https://vineralstechnologies.com/resources/${article.slug}`,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://vineralstechnologies.com' },
    { name: 'Resources', url: 'https://vineralstechnologies.com/resources' },
    {
      name: article.title,
      url: `https://vineralstechnologies.com/resources/${article.slug}`,
    },
  ]);

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main className="pt-16">
        <Section background="white" paddingY="lg">
          <article className="mx-auto max-w-3xl">
            <Link
              href="/resources"
              className="mb-10 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700 transition-colors hover:text-secondary-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to resources
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
              <span className="border border-[var(--ink-hairline)]/50 px-2.5 py-1 text-secondary-600">
                {article.category}
              </span>
              <span>{article.readTime}</span>
              <span aria-hidden>·</span>
              <time dateTime={article.publishedDate}>
                {new Date(article.publishedDate).toLocaleDateString('en-CA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <h1 className="mb-6 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.022em] text-[var(--ink)]">
              {article.title}
            </h1>

            <p className="lead-text mb-4 max-w-[52ch]">{article.excerpt}</p>

            <p className="mb-10 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              {article.author.name}
              <span className="mx-2" aria-hidden>
                ·
              </span>
              {article.author.role}
            </p>

            <div className="relative mb-12 aspect-[16/9] overflow-hidden border border-[var(--ink-hairline)]/40 bg-[var(--cream-deep)]">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 border-t border-[var(--ink-hairline)]/40 pt-10 text-[1.05rem] leading-[1.75] text-[var(--ink-muted)]">
              {article.content.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            {article.content.sections.map((section) => (
              <section key={section.heading} className="mt-14">
                <h2 className="mb-6 font-display text-3xl text-[var(--ink)] md:text-[2rem]">
                  {section.heading}
                </h2>
                <div className="space-y-5 text-[1.05rem] leading-[1.75] text-[var(--ink-muted)]">
                  {section.blocks.map((block, i) => {
                    if (block.type === 'p' || block.type === 'lead') {
                      return (
                        <p
                          key={`${section.heading}-p-${i}`}
                          className={
                            block.type === 'lead'
                              ? 'text-[1.15rem] text-[var(--ink)]'
                              : undefined
                          }
                        >
                          {block.text}
                        </p>
                      );
                    }

                    return (
                      <ul
                        key={`${section.heading}-list-${i}`}
                        className="space-y-6 pt-2"
                      >
                        {block.items.map((item) => (
                          <li key={item.title}>
                            <h3 className="mb-2 font-display text-xl text-[var(--ink)]">
                              {item.title}
                            </h3>
                            <p>{item.body}</p>
                          </li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              </section>
            ))}

            <div className="mt-14 space-y-5 border-t border-[var(--ink-hairline)]/40 pt-10 text-[1.05rem] leading-[1.75] text-[var(--ink-muted)]">
              {article.content.closing.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700 hover:text-secondary-600"
              >
                Book a consultation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </Section>

        {others.length > 0 && (
          <Section background="gray" paddingY="lg">
            <div className="mx-auto max-w-3xl">
              <span className="eyebrow mb-6 block">More notes</span>
              <ul className="space-y-0 border border-[var(--ink-hairline)]/40">
                {others.map((other, index) => (
                  <li
                    key={other.slug}
                    className={
                      index > 0 ? 'border-t border-[var(--ink-hairline)]/40' : ''
                    }
                  >
                    <Link
                      href={`/resources/${other.slug}`}
                      className="group grid gap-5 p-5 transition-colors hover:bg-[var(--cream-deep)]/50 sm:grid-cols-[9rem_1fr] sm:items-center md:p-6"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--cream-deep)] sm:aspect-square">
                        <Image
                          src={other.image}
                          alt={other.imageAlt}
                          fill
                          sizes="144px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div>
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-secondary-600">
                          {other.category}
                        </span>
                        <span className="mt-2 block font-display text-xl text-[var(--ink)] transition-colors group-hover:text-primary-700">
                          {other.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        )}

        <CTA />
      </main>
      <Footer />
    </>
  );
}
