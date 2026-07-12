import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Book a Consultation',
  description:
    'Book a consultation for custom software made by hand. Montréal cooperative — honest counsel, no deck, no pressure. The first conversation is free.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Section background="white" paddingY="lg">
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow mb-6 justify-center">Contact</p>
            <h1 className="section-headline mb-6">
              Let&apos;s talk about
              <br />
              <em>your project.</em>
            </h1>
            <p className="lead-text mx-auto mb-4 max-w-[40ch]">
              A consultation with the people who&apos;ll do the work — made by
              hand starts with an honest read of the problem.
            </p>
            <p className="mx-auto max-w-[42ch] font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              First conversation free · No deck · No obligation
            </p>
          </div>
        </Section>

        <Section background="gray" paddingY="lg">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-10 text-center shadow-paper md:p-12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center border border-[var(--ink-hairline)]/40 text-primary-700">
                <Mail className="h-8 w-8" />
              </div>

              <h2 className="mb-4 font-display text-3xl text-[var(--ink)]">Email</h2>

              <a
                href={`mailto:contact@vineralstechnologies.com?subject=${encodeURIComponent('Consultation — Vinerals Technologies')}&body=${encodeURIComponent(`Hello,

I'd like to book a consultation about a potential project.

Name:
Company:
Email:

What you're building (or trying to decide):

Timeline / constraints:

Best regards`)}`}
                className="font-display text-2xl text-primary-700 transition-colors hover:text-secondary-600"
              >
                contact@vineralstechnologies.com
              </a>
            </div>

            <div className="border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 shadow-paper md:p-10">
              <h3 className="mb-8 text-center font-display text-2xl text-[var(--ink)]">
                A few quick questions, answered.
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 font-display text-lg text-[var(--ink)]">
                    What happens after I get in touch?
                  </h4>
                  <p className="leading-relaxed text-[var(--ink-muted)]">
                    We reply within 24 hours, ask a few clarifying questions, and
                    book a consultation. The first conversation is free — we sit
                    with the problem and tell you honestly whether software is
                    the right move.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-display text-lg text-[var(--ink)]">
                    Do you work with clients outside Montréal?
                  </h4>
                  <p className="leading-relaxed text-[var(--ink-muted)]">
                    Yes. Most of our work is with clients across Canada and
                    beyond, conducted remotely. We&apos;ve built the rhythms that
                    make that work well.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-display text-lg text-[var(--ink)]">
                    What&apos;s your minimum project size?
                  </h4>
                  <p className="leading-relaxed text-[var(--ink-muted)]">
                    Projects usually start around $10K. We&apos;re flexible with
                    non-profits and social enterprises, and we&apos;ll be straight
                    about whether a smaller scope makes sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
