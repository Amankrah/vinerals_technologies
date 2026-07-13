import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

const LAST_UPDATED = 'July 12, 2026';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Section background="white" paddingY="lg">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow mb-6 block">Legal</span>
            <h1 className="section-headline mb-4">Terms of Service</h1>
            <p className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              Last updated: {LAST_UPDATED}
            </p>
            <p className="lead-text max-w-[48ch]">
              These terms cover use of this website and how professional work is framed. Paid
              projects are governed by a separate written agreement, which takes priority for that
              work.
            </p>
          </div>
        </Section>

        <Section background="gray" paddingY="lg">
          <article className="mx-auto max-w-3xl space-y-12 border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-8 md:p-10">
            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                1. Acceptance
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                By using {SITE_CONFIG.url.replace('https://', '')} or submitting a contact
                request, you agree to these Terms of Service and our{' '}
                <Link
                  href="/legal/privacy"
                  className="text-primary-700 underline decoration-[var(--ink-hairline)] underline-offset-4 hover:text-secondary-600"
                >
                  Privacy Policy
                </Link>
                . If you do not agree, do not use the site.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                2. Who we are
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                Vinerals Technologies is a solidarity cooperative organised under the laws of
                Québec, Canada, based in Montréal. We provide custom software development, AI
                integration, mobile applications, data systems, and related technology counsel.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                3. What these terms cover
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                These terms govern:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-[var(--ink-muted)]">
                <li>Use of this public website and its content</li>
                <li>General expectations before a paid engagement starts</li>
              </ul>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                They do not replace a signed proposal, statement of work, or master services
                agreement. Where a written project agreement conflicts with these terms, the
                project agreement controls for that engagement.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                4. Services overview
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                We offer, among other work:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-[var(--ink-muted)]">
                <li>Custom software development</li>
                <li>AI and machine learning integration</li>
                <li>Mobile application development</li>
                <li>Data systems and analytics</li>
                <li>Technology consulting and advisory work</li>
              </ul>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                Descriptions on this site are informational. Scope, fees, timelines, and
                deliverables are set only in a written agreement you and we both accept.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                5. Website use
              </h2>
              <h3 className="mb-3 font-display text-xl text-[var(--ink)]">
                5.1 Permitted use
              </h3>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                You may browse the site, read our resources, and contact us about potential work.
              </p>
              <h3 className="mb-3 font-display text-xl text-[var(--ink)]">
                5.2 Prohibited use
              </h3>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">You may not:</p>
              <ul className="list-disc space-y-2 pl-6 text-[var(--ink-muted)]">
                <li>Use the site for unlawful purposes</li>
                <li>Attempt unauthorised access to our systems or data</li>
                <li>Interfere with or disrupt the site</li>
                <li>Scrape or harvest data at scale without our written permission</li>
                <li>Impersonate a person or organisation</li>
                <li>Transmit malware or other harmful code</li>
                <li>Use the site to send spam or unsolicited bulk messages</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                6. Intellectual property
              </h2>
              <h3 className="mb-3 font-display text-xl text-[var(--ink)]">
                6.1 Website content
              </h3>
              <p className="mb-6 leading-relaxed text-[var(--ink-muted)]">
                Text, graphics, logos, images, and other materials on this site belong to Vinerals
                Technologies or our licensors and are protected by Canadian and applicable
                international intellectual property laws. You may not copy or reuse them for
                commercial purposes without written permission, except for fair dealing or other
                rights the law already gives you.
              </p>
              <h3 className="mb-3 font-display text-xl text-[var(--ink)]">
                6.2 Client work product
              </h3>
              <p className="mb-6 leading-relaxed text-[var(--ink-muted)]">
                Unless a written agreement says otherwise, upon full payment of amounts due for a
                deliverable, the client owns the custom software, code, and other work product we
                create specifically for that engagement. That ownership is a core part of how we
                work.
              </p>
              <h3 className="mb-3 font-display text-xl text-[var(--ink)]">
                6.3 Pre-existing materials
              </h3>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                We keep ownership of our pre-existing tools, libraries, frameworks, templates, and
                methods. Where those materials are embedded in a client deliverable, the client
                receives a licence to use them as part of that deliverable, as set out in the
                project agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                7. Professional engagements
              </h2>
              <h3 className="mb-3 font-display text-xl text-[var(--ink)]">
                7.1 Agreements
              </h3>
              <p className="mb-6 leading-relaxed text-[var(--ink-muted)]">
                Paid work proceeds under a written proposal, statement of work, or similar
                agreement covering scope, timeline, fees, and deliverables.
              </p>
              <h3 className="mb-3 font-display text-xl text-[var(--ink)]">
                7.2 Pricing and payment
              </h3>
              <p className="mb-6 leading-relaxed text-[var(--ink-muted)]">
                Fees and payment schedules are set in the project agreement. Unless that agreement
                says otherwise, invoices are typically due within 15 to 30 days. Late amounts may
                accrue interest at 1.5% per month or the maximum rate allowed by law, whichever is
                lower.
              </p>
              <h3 className="mb-3 font-display text-xl text-[var(--ink)]">
                7.3 Scope changes
              </h3>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                Changes to scope require written agreement (including email confirmation where the
                project agreement allows it). Work outside the agreed scope may be billed
                separately.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                8. Warranties and disclaimers
              </h2>
              <h3 className="mb-3 font-display text-xl text-[var(--ink)]">
                8.1 Professional work
              </h3>
              <p className="mb-6 leading-relaxed text-[var(--ink-muted)]">
                We will perform services in a professional manner consistent with industry
                practice for comparable work. Specific warranties for deliverables, if any, appear
                in the project agreement.
              </p>
              <h3 className="mb-3 font-display text-xl text-[var(--ink)]">
                8.2 Website
              </h3>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                This website and its content are provided &quot;as is.&quot; We do not warrant
                that the site will be uninterrupted, error-free, or free of harmful components.
                Website content (including articles and examples) is general information, not
                legal, financial, or technical advice for your specific situation.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                9. Limitation of liability
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                To the fullest extent permitted by Québec and Canadian law, Vinerals Technologies
                is not liable for indirect, incidental, special, consequential, or punitive
                damages arising from use of this website or from services, except where the law
                does not allow that limit. For paid services, our total liability related to a
                claim is limited to the fees you paid us for the services giving rise to the claim,
                unless a project agreement sets a different cap or the law requires otherwise.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                10. Indemnity
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                You agree to indemnify Vinerals Technologies and its members, workers, and
                contractors against claims, losses, and reasonable legal costs arising from your
                misuse of the website or your breach of these terms, except to the extent caused by
                our negligence or wilful misconduct.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                11. Confidentiality
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                We treat non-public information you share in a sales or project conversation as
                confidential and use it only to evaluate or deliver the work. Detailed
                confidentiality terms, if needed, appear in a non-disclosure agreement or the
                project agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                12. Termination
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                We may suspend or block access to the website for conduct that violates these
                terms or harms the site, other users, or us.
              </p>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                Project agreements end under the termination clauses in those agreements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                13. Third-party links
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                The site may link to external sites. We do not control those sites and are not
                responsible for their content, policies, or practices.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                14. Changes to these terms
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                We may update these terms by posting a revised version on this page. The &quot;Last
                updated&quot; date shows the current version. Continued use of the website after
                changes are posted means you accept the revised terms for website use. Changes do
                not alter signed project agreements unless both parties agree in writing.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                15. Governing law
              </h2>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                These terms are governed by the laws of Québec and the federal laws of Canada that
                apply there. Courts of Québec have exclusive jurisdiction over disputes arising
                from these terms or use of the website, subject to any different forum chosen in a
                project agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                16. Severability and entire agreement
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                If a provision is unenforceable, it will be limited to the minimum extent needed,
                and the rest remains in effect.
              </p>
              <p className="leading-relaxed text-[var(--ink-muted)]">
                These terms, the Privacy Policy, and any applicable project agreements are the
                full agreement between you and Vinerals Technologies for the subjects they cover.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-[var(--ink)]">
                17. Contact
              </h2>
              <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
                Questions about these terms:
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
              href="/legal/privacy"
              className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary-700 hover:text-secondary-600"
            >
              Privacy Policy →
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
