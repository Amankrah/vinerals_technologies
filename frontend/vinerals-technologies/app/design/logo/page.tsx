import {
  ConceptLogo,
  MonogramInkV,
  MonogramStamp,
  MonogramGrainJoin,
  type ConceptId,
} from '@/components/shared/logo-concepts';

const CONCEPTS: {
  id: ConceptId;
  letter: string;
  name: string;
  feel: string;
  Monogram: typeof MonogramInkV;
}[] = [
  {
    id: 'ink',
    letter: 'A',
    name: 'Ink V',
    feel: 'Calligraphic V — uneven weight, atelier pen, literary craft.',
    Monogram: MonogramInkV,
  },
  {
    id: 'stamp',
    letter: 'B',
    name: 'Workshop stamp',
    feel: 'Press plate with hairline double edge — cooperative imprint / colophon.',
    Monogram: MonogramStamp,
  },
  {
    id: 'grain',
    letter: 'C',
    name: 'Grain join',
    feel: 'Two hand-cut rails locking at a notch — joinery for “made by hand.”',
    Monogram: MonogramGrainJoin,
  },
];

function Surface({
  tone,
  children,
}: {
  tone: 'cream' | 'forest';
  children: React.ReactNode;
}) {
  const isForest = tone === 'forest';
  return (
    <div
      className={
        isForest
          ? 'border border-primary-800 bg-primary-900 p-6 md:p-8'
          : 'border border-[var(--ink-hairline)]/45 bg-[var(--cream)] p-6 md:p-8'
      }
    >
      <div
        className={
          isForest
            ? 'mb-4 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-white/55'
            : 'mb-4 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--ink-muted)]'
        }
      >
        {isForest ? 'Forest / photo' : 'Cream paper'}
      </div>
      {children}
    </div>
  );
}

export default function DesignLogoPage() {
  return (
    <main className="min-h-screen bg-[var(--cream-deep)] text-[var(--ink)]">
      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-12 max-w-2xl border-b border-[var(--ink-hairline)]/40 pb-8">
          <p className="eyebrow mb-4">Design · Internal · noindex</p>
          <h1 className="section-headline mb-4">
            Logo concepts —
            <br />
            <em>craft monogram.</em>
          </h1>
          <p className="lead-text max-w-[48ch]">
            Three monograms, one wordmark spine. Compare on cream and forest at
            header and footer scale, then reply with A, B, C, or a hybrid.
            Header/Footer now use Concept C. Favicons updated. Keep this page
            as a reference archive.
          </p>
        </header>

        {/* Side-by-side comparison strip */}
        <section className="mb-16">
          <h2 className="mb-6 font-display text-2xl text-[var(--ink)]">
            Comparison strip
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {CONCEPTS.map(({ id, letter, name, Monogram }) => (
              <div
                key={id}
                className="flex flex-col items-start gap-4 border border-[var(--ink-hairline)]/45 bg-[var(--paper)] p-5"
              >
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                  {letter} · {name}
                </div>
                <div className="flex items-end gap-4">
                  <Monogram size="sm" className="text-primary-800" />
                  <Monogram size="md" className="text-primary-800" />
                  <Monogram size="lg" className="text-primary-800" />
                </div>
                <div className="flex w-full items-center justify-center gap-6 border-t border-[var(--ink-hairline)]/35 bg-primary-900 px-4 py-5">
                  <Monogram size="sm" className="text-white" />
                  <Monogram size="md" className="text-white" />
                  <Monogram size="lg" className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full lockups */}
        <section className="space-y-14">
          {CONCEPTS.map(({ id, letter, name, feel }) => (
            <article key={id}>
              <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h2 className="font-display text-3xl text-[var(--ink)]">
                  <span className="text-secondary-600">{letter}</span>
                  {' — '}
                  {name}
                </h2>
                <p className="max-w-[48ch] text-[var(--ink-muted)]">{feel}</p>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <Surface tone="cream">
                  <div className="space-y-8">
                    <div>
                      <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                        Size sm · header-ish
                      </p>
                      <ConceptLogo concept={id} size="sm" variant="default" />
                    </div>
                    <div>
                      <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                        Size md
                      </p>
                      <ConceptLogo concept={id} size="md" variant="default" />
                    </div>
                    <div>
                      <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                        Size lg · footer-ish
                      </p>
                      <ConceptLogo concept={id} size="lg" variant="default" />
                    </div>
                  </div>
                </Surface>

                <Surface tone="forest">
                  <div className="space-y-8">
                    <div>
                      <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/55">
                        Size sm · header-ish
                      </p>
                      <ConceptLogo concept={id} size="sm" variant="light" />
                    </div>
                    <div>
                      <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/55">
                        Size md
                      </p>
                      <ConceptLogo concept={id} size="md" variant="light" />
                    </div>
                    <div>
                      <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/55">
                        Size lg · footer-ish
                      </p>
                      <ConceptLogo concept={id} size="lg" variant="light" />
                    </div>
                  </div>
                </Surface>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-16 border-t border-[var(--ink-hairline)]/40 pt-8">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
            Shipped · Concept C (Grain join) is live in Logo, Header, Footer, and
            favicons.
          </p>
        </footer>
      </div>
    </main>
  );
}
