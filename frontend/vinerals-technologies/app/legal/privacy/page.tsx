import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

const LAST_UPDATED = 'July 12, 2026';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Section background="white" paddingY="lg">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow mb-6 block">Legal</span>
            <h1 className="section-headline mb-4">Privacy Policy</h1>
            <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              Last updated: {LAST_UPDATED}
            </p>
            <p className="lead-text max-w-[48ch]">
              This policy explains what personal information we collect on this website, why we
              collect it, and how you can exercise your rights. It applies to{' '}
              {SITE_CONFIG.url.replace('https://', '')} and related contact channels.
            </p>
          </div>
        </Section>

        <Section background="gray" paddingY="lg">
          <article className="mx-auto max-w-3xl space-y-12 border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 md:p-10">
            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                1. Who we are
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                Vinerals Technologies is a Québec solidarity cooperative based in Montréal. We
                build custom software, practical AI integrations, mobile apps, and data systems
                for growing businesses and mission-driven organisations. For privacy requests,
                write to{' '}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-primary-700 underline decoration-[var(--ink-hairline)] underline-offset-4 hover:text-secondary-600"
                >
                  {SITE_CONFIG.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                2. Scope
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                This policy covers personal information collected through our public website,
                contact forms, email, and phone. Client project work is also governed by the
                written service agreement for that engagement. Where a service agreement sets
                stricter rules, those rules apply to that project.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                3. Information we collect
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                We collect information you give us when you:
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-6 text-[var(--ink-muted)]">
                <li>Submit a contact or consultation request</li>
                <li>Email or call us</li>
                <li>Subscribe to updates, if we offer a mailing list and you opt in</li>
                <li>Browse the site (technical and analytics data, described below)</li>
              </ul>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                That information may include:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-[var(--ink-muted)]">
                <li>Name, email address, and phone number</li>
                <li>Organisation name and role</li>
                <li>Project details you choose to share (including budget ranges, if provided)</li>
                <li>
                  Technical data such as IP address, browser type, device type, pages viewed, and
                  approximate location derived from IP
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                4. How we use information
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                We use personal information to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-[var(--ink-muted)]">
                <li>Respond to inquiries and book consultations</li>
                <li>Deliver services you have asked for under a service agreement</li>
                <li>Send operational messages about your request or project</li>
                <li>Send marketing updates only when you have consented</li>
                <li>Improve the website and understand how it is used</li>
                <li>Meet legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                5. Legal bases and Québec Law 25
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                We handle personal information in line with:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-[var(--ink-muted)]">
                <li>
                  PIPEDA (Personal Information Protection and Electronic Documents Act), where it
                  applies
                </li>
                <li>
                  Québec&apos;s Act respecting the protection of personal information in the
                  private sector (commonly called Law 25), including rules on consent, purpose
                  limitation, retention, and individual rights
                </li>
              </ul>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                We collect information for identified purposes. Where consent is required, we ask
                for it in clear language. You may withdraw consent for optional uses (such as
                marketing) without affecting services that still need your information to operate.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                6. Sharing
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                We do not sell personal information. We share it only when needed:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-[var(--ink-muted)]">
                <li>With your direction or consent</li>
                <li>
                  With service providers who help us operate (for example hosting, email delivery,
                  and analytics), under obligations to protect the information
                </li>
                <li>When required by law, or to protect rights, safety, or security</li>
                <li>
                  In a transfer of cooperative assets or restructuring, if one occurs, with notice
                  where the law requires it
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                7. Cookies and analytics
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                The site may use cookies and similar technologies for basic operation and to
                understand traffic. We use Google Analytics to measure visits, pages viewed, and
                related usage statistics. Google may process this data under its own terms.
              </p>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                You can control cookies in your browser. Blocking some cookies may affect how
                parts of the site work. Where required by law, we will adjust cookie practices to
                match consent requirements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                8. Service providers and transfers
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                We rely on providers for hosting, email, and analytics. Some of those providers
                may process data outside Québec or Canada (including the United States). When that
                happens, we take contractual and practical steps appropriate to the risk, and we
                remain responsible for the information we entrust to them.
              </p>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                Typical categories: website hosting, email delivery, and Google Analytics.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                9. Security
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                We use reasonable administrative, technical, and physical safeguards for the
                sensitivity of the information we hold. That includes encrypted transport (HTTPS),
                access limited to people who need it, and secure storage of contact records.
              </p>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                No internet transmission or storage system is perfectly secure. If we become aware
                of a breach that creates a risk of serious injury, we will notify affected people
                and the Commission d&apos;accès à l&apos;information du Québec when Law 25
                requires it.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                10. Retention
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                We keep personal information only as long as needed for the purposes above, or
                longer when the law requires it. Contact form submissions and related
                correspondence are typically kept for up to three years after the last meaningful
                contact, then deleted or anonymised, unless a longer period is needed for a live
                project, dispute, or legal obligation.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                11. Your rights
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                Subject to limits in applicable law, you may ask us to:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-[var(--ink-muted)]">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Withdraw consent for optional uses</li>
                <li>Request deletion, where the law allows</li>
                <li>Learn how your information has been used and to whom it has been disclosed</li>
                <li>File a complaint with us, and if needed with the Commission d&apos;accès à
                  l&apos;information du Québec or the Office of the Privacy Commissioner of Canada
                </li>
              </ul>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                Send privacy requests to{' '}
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Privacy%20request`}
                  className="text-primary-700 underline decoration-[var(--ink-hairline)] underline-offset-4 hover:text-secondary-600"
                >
                  {SITE_CONFIG.email}
                </a>
                . We will respond within the timelines set by applicable law.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                12. Children
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                This site and our services are aimed at adults and organisations. We do not
                knowingly collect personal information from children under 14. If you believe we
                have collected such information, contact us and we will delete it.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                13. Changes
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                We may update this policy when our practices or the law change. The &quot;Last
                updated&quot; date at the top shows the latest revision. For material changes, we
                will post a notice on this page or contact you when we have your email and the
                change affects you directly.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                14. Contact
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                Privacy questions and requests:
              </p>
              <div className="border border-[var(--ink-hairline)]/40 bg-[var(--cream)]/50 p-6">
                <p className="mb-2 font-display text-xl text-[var(--ink)]">
                  {SITE_CONFIG.name}
                </p>
                <p className="mb-1 text-[var(--ink-muted)]">
                  Email:{' '}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-primary-700 underline decoration-[var(--ink-hairline)] underline-offset-4 hover:text-secondary-600"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p className="mb-1 text-[var(--ink-muted)]">Phone: {SITE_CONFIG.phone}</p>
                <p className="text-[var(--ink-muted)]">{SITE_CONFIG.location}</p>
              </div>
            </section>
          </article>
        </Section>

        <Section background="white" paddingY="sm">
          <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary-700 hover:text-secondary-600"
            >
              ← Home
            </Link>
            <Link
              href="/legal/terms"
              className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary-700 hover:text-secondary-600"
            >
              Terms of Service →
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
