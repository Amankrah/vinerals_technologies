import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import CTA from '@/components/sections/CTA';
import { projects, getProjectBySlug } from '@/content/projects';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Vinerals Technologies',
    };
  }

  return {
    title: `${project.title} | Work | Vinerals Technologies`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-16">
        <Section background="white" paddingY="lg">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/work"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700 transition-colors hover:text-secondary-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to work
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
              {project.status && (
                <span className="border border-[var(--ink-hairline)]/50 px-2.5 py-1 text-secondary-600">
                  {project.status}
                </span>
              )}
              <span>{project.partner || project.client}</span>
              <span aria-hidden>·</span>
              <span>Édition {project.year}</span>
            </div>

            <h1 className="mb-6 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[0.96] tracking-[-0.022em] text-[var(--ink)]">
              {project.title}
            </h1>

            <p className="lead-text mb-8 max-w-[58ch]">{project.description}</p>

            <div className="mb-10 flex flex-wrap gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              {project.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>

            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-2 inline-flex items-center justify-center gap-2.5 border border-primary-800 bg-primary-700 px-8 py-4 font-mono text-[0.95rem] uppercase tracking-[0.18em] text-[var(--cream)] transition-all duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-primary-800 hover:shadow-[4px_4px_0_var(--secondary-500)]"
              >
                View on SASEL Lab
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )}
          </div>
        </Section>

        {project.image && (
          <section className="relative h-[42vh] min-h-[280px] overflow-hidden bg-primary-950 md:h-[52vh]">
            <Image
              src={project.image}
              alt={project.imageAlt || project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-primary-950/20"
            />
          </section>
        )}

        {(project.challenge || project.solution) && (
          <Section background="gray" paddingY="lg">
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
              {project.challenge && (
                <div>
                  <span className="eyebrow mb-4 block">The brief</span>
                  <h2 className="mb-4 font-display text-3xl text-[var(--ink)]">Challenge</h2>
                  <p className="leading-relaxed text-[var(--ink-muted)]">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <span className="eyebrow mb-4 block">The build</span>
                  <h2 className="mb-4 font-display text-3xl text-[var(--ink)]">Approach</h2>
                  <p className="leading-relaxed text-[var(--ink-muted)]">{project.solution}</p>
                </div>
              )}
            </div>
          </Section>
        )}

        {project.features && project.features.length > 0 && (
          <Section background="white" paddingY="lg">
            <div className="mx-auto max-w-5xl">
              <span className="eyebrow mb-6 block">Capacités</span>
              <h2 className="section-headline mb-10">What it does</h2>
              <ul className="grid gap-4 md:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 border-b border-[var(--ink-hairline)]/30 pb-4 text-[var(--ink-muted)]"
                  >
                    <span aria-hidden className="mt-2 text-secondary-500">
                      ·
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        )}

        {project.tags && project.tags.length > 0 && (
          <Section background="gray" paddingY="md">
            <div className="mx-auto max-w-5xl">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                {project.tags.join(' · ')}
              </p>
            </div>
          </Section>
        )}

        <Section background="white" paddingY="lg">
          <div className="mx-auto max-w-5xl">
            <span className="eyebrow mb-6 block">Attribution</span>
            <h2 className="mb-4 font-display text-3xl text-[var(--ink)]">
              Built by the founder
            </h2>
            <p className="mb-6 max-w-[54ch] leading-relaxed text-[var(--ink-muted)]">
              Engineered by{' '}
              <a
                href="https://www.eakwofie.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline decoration-[var(--ink-hairline)] underline-offset-4 hover:text-secondary-600"
              >
                Emmanuel Amankrah Kwofie
              </a>
              , founder and CTO of Vinerals Technologies, at{' '}
              <a
                href={project.partnerUrl || 'https://www.sasellab.com/technologies'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline decoration-[var(--ink-hairline)] underline-offset-4 hover:text-secondary-600"
              >
                SASEL Lab, McGill University
              </a>
              , with academic and industry partners across Canada, Europe, and Africa.
            </p>
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-700 hover:text-secondary-600"
              >
                Full technology page at SASEL
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </Section>

        {related.length > 0 && (
          <Section background="gray" paddingY="lg">
            <div className="mx-auto max-w-5xl">
              <h2 className="section-headline mb-8">More dossiers</h2>
              <ul className="divide-y divide-[var(--ink-hairline)]/35 border-y border-[var(--ink-hairline)]/35">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/work/${item.slug}`}
                      className="group flex items-baseline justify-between gap-6 py-5"
                    >
                      <span className="font-display text-xl text-[var(--ink)] transition-colors group-hover:text-primary-700">
                        {item.title}
                      </span>
                      <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                        {item.status || item.year}
                      </span>
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
