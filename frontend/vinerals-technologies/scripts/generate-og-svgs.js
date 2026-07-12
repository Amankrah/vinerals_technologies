/**
 * Generate the full set of og-*.svg files from a single template + per-page data.
 *
 * Run after editing the brand colors, template, or per-page copy:
 *   node scripts/generate-og-svgs.js
 *
 * Then convert the SVGs to JPGs for social platforms:
 *   node scripts/generate-og-images.js
 *
 * Note: the OG image renders server-side via librsvg (during the JPG step) and
 * client-side by social platforms. Both fall back through the font stack — we
 * use Georgia + Courier instead of Cormorant + DM Mono so the output is
 * consistent across environments without requiring bundled fonts.
 */

const fs = require('fs');
const path = require('path');

// ---------- BRAND ----------
const BRAND = {
  forest:   '#1F3A2E',
  forestSoft: '#15281F',
  cream:    '#F5EFE6',
  paper:    '#FCF8F0',
  clay:     '#B8634A',
  clayLight:'#DA8C6E',
  hairline: 'rgba(245, 239, 230, 0.22)',
  cream70:  'rgba(245, 239, 230, 0.75)',
  cream50:  'rgba(245, 239, 230, 0.55)',
};

const FONT = {
  serif: '"Cormorant Garamond", "Cormorant", Georgia, "Times New Roman", serif',
  mono:  '"DM Mono", "Courier New", Courier, monospace',
};

// ---------- TEMPLATE ----------
// All inputs already HTML-escaped where needed by the caller.
function buildSvg({ eyebrow, headlineMain, headlineAccent, supporting }) {
  const supportingLines = Array.isArray(supporting) ? supporting : [supporting];
  const supportingTspans = supportingLines
    .map((line, i) => `<tspan x="80" dy="${i === 0 ? 0 : 38}">${escape(line)}</tspan>`)
    .join('\n      ');

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <!-- Forest paper substrate -->
  <rect width="1200" height="630" fill="${BRAND.forest}"/>

  <!-- Subtle paper grain — keeps the surface from reading as flat digital -->
  <defs>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix values="0 0 0 0 0.247 0 0 0 0 0.219 0 0 0 0 0.161 0 0 0 0.35 0"/>
      <feComposite in2="SourceGraphic" operator="in"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="${BRAND.forest}" filter="url(#grain)" opacity="0.5"/>

  <!-- Top dateline strip -->
  <text x="80" y="74" font-family='${FONT.mono}' font-size="14" letter-spacing="3.5" fill="${BRAND.cream50}">VINERALS · TECHNOLOGIES · ÉDITION 2026</text>
  <line x1="80" y1="100" x2="1120" y2="100" stroke="${BRAND.hairline}" stroke-width="1"/>

  <!-- Hand-traced V monogram, top-right -->
  <g transform="translate(1040, 30)">
    <path
      d="M12 16 Q 20 14, 32 70 Q 44 14, 52 16"
      stroke="${BRAND.cream}"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <circle cx="32" cy="70" r="3.2" fill="${BRAND.clay}"/>
  </g>

  <!-- Eyebrow -->
  <text x="80" y="195" font-family='${FONT.mono}' font-size="16" letter-spacing="4" fill="${BRAND.clayLight}">— ${escape(eyebrow.toUpperCase())}</text>

  <!-- Headline, two lines: first cream, second clay-italic accent -->
  <text x="80" y="310" font-family='${FONT.serif}' font-style="italic" font-size="82" font-weight="500" fill="${BRAND.cream}">${escape(headlineMain)}</text>
  <text x="80" y="400" font-family='${FONT.serif}' font-style="italic" font-size="82" font-weight="500" fill="${BRAND.clayLight}">${escape(headlineAccent)}</text>

  <!-- Supporting line(s) -->
  <text x="80" y="490" font-family='${FONT.serif}' font-size="26" font-weight="400" fill="${BRAND.cream70}">
      ${supportingTspans}
  </text>

  <!-- Bottom hairline + imprint -->
  <line x1="80" y1="550" x2="1120" y2="550" stroke="${BRAND.hairline}" stroke-width="1"/>
  <text x="80" y="582" font-family='${FONT.mono}' font-size="13" letter-spacing="3" fill="${BRAND.cream50}">COOPÉRATIVE DE SOLIDARITÉ · TIO'TIA:KE / MONTRÉAL · BILINGUE EN / FR</text>
  <text x="1120" y="582" text-anchor="end" font-family='${FONT.mono}' font-size="13" letter-spacing="3" fill="${BRAND.cream50}">VINERALSTECHNOLOGIES.COM</text>
</svg>
`;
}

function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ---------- PER-PAGE DATA ----------
// Headlines split into [main, accent]. The accent line renders clay-italic.
// Supporting is a string or an array of strings (one per visual line).
const PAGES = [
  {
    filename: 'og-image',
    eyebrow: 'L’édition · N°01',
    headlineMain: 'Software, made by hand,',
    headlineAccent: 'for SMEs.',
    supporting: [
      'A Montréal solidarity cooperative building custom software and AI',
      'for the businesses priced out of it.',
    ],
  },
  {
    filename: 'og-about',
    eyebrow: 'À propos',
    headlineMain: 'A mission-driven',
    headlineAccent: 'cooperative.',
    supporting: [
      'Worker-owned. Mission-aligned funding. Same calibre of work as',
      'larger firms, brought into reach for SMEs.',
    ],
  },
  {
    filename: 'og-mission',
    eyebrow: 'La mission',
    headlineMain: 'Closing the digital',
    headlineAccent: 'divide for SMEs.',
    supporting: [
      'Enterprise-calibre software, brought inside reach through',
      'government programmes and impact funding.',
    ],
  },
  {
    filename: 'og-cooperative',
    eyebrow: 'Le modèle',
    headlineMain: 'Built differently,',
    headlineAccent: 'on purpose.',
    supporting: [
      'A solidarity cooperative. Worker-owned, democratically governed,',
      'mission-bound. Not a discount agency, a bridge programme.',
    ],
  },
  {
    filename: 'og-team',
    eyebrow: 'L’équipe',
    headlineMain: 'The people',
    headlineAccent: 'behind the work.',
    supporting: [
      'Senior developers, named and reachable. No account managers',
      'between you and the code.',
    ],
  },
  {
    filename: 'og-industries',
    eyebrow: 'Les secteurs',
    headlineMain: 'Sectors we know',
    headlineAccent: 'by heart.',
    supporting: [
      'Healthcare, food systems, sustainability, social enterprise.',
      'The regulations, the constraints, the data shapes — already learned.',
    ],
  },
  {
    filename: 'og-healthcare',
    eyebrow: 'Healthcare · Santé',
    headlineMain: 'Software that improves',
    headlineAccent: 'patient care.',
    supporting: [
      'HIPAA and PHIPA compliant from day one.',
      'Built by people who’ve worked inside clinics.',
    ],
  },
  {
    filename: 'og-food-systems',
    eyebrow: 'Food & Agriculture · Agroalimentaire',
    headlineMain: 'Farm-to-fork visibility,',
    headlineAccent: 'end to end.',
    supporting: [
      'Traceability, farm management, and the systems that let small',
      'producers stand on the same ground as the industrial players.',
    ],
  },
  {
    filename: 'og-sustainability',
    eyebrow: 'Sustainability · Cleantech',
    headlineMain: 'Measure, reduce,',
    headlineAccent: 'report. For real.',
    supporting: [
      'Real-time carbon tracking, ESG reporting, and the systems behind',
      'a circular economy.',
    ],
  },
  {
    filename: 'og-non-profits',
    eyebrow: 'Non-profits · Économie sociale',
    headlineMain: 'Software for',
    headlineAccent: 'mission-driven work.',
    supporting: [
      'Built by a cooperative, for cooperatives. Member portals,',
      'impact measurement, donor and volunteer CRMs.',
    ],
  },
  {
    filename: 'og-partners',
    eyebrow: 'Partenariats',
    headlineMain: 'Building Québec’s',
    headlineAccent: 'accessible tech infrastructure.',
    supporting: [
      'Mission-aligned partnerships with government, funders,',
      'and consortiums inside the social economy.',
    ],
  },
  {
    filename: 'og-partners-government',
    eyebrow: 'For government',
    headlineMain: 'A capacity partner for',
    headlineAccent: 'digital transformation.',
    supporting: [
      'Aligned with Québec’s digital economy strategy',
      'and SME support priorities.',
    ],
  },
  {
    filename: 'og-partners-funders',
    eyebrow: 'For funders',
    headlineMain: 'Patient capital,',
    headlineAccent: 'social returns.',
    supporting: [
      'Back accessible technology infrastructure with measurable',
      'social return alongside real financial discipline.',
    ],
  },
  {
    filename: 'og-partners-consortiums',
    eyebrow: 'For consortiums',
    headlineMain: 'Technology for',
    headlineAccent: 'collective impact.',
    supporting: [
      'Shared technical capacity for industry associations, networks,',
      'and social economy organisations.',
    ],
  },
];

// ---------- WRITE ----------
const publicDir = path.join(__dirname, '..', 'public');
console.log('Generating editorial OG SVGs (forest paper, hand-traced V, italic headlines)...\n');

for (const page of PAGES) {
  const svg = buildSvg(page);
  const dest = path.join(publicDir, `${page.filename}.svg`);
  fs.writeFileSync(dest, svg);
  console.log(`✓ ${page.filename}.svg`);
}

console.log(`\nDone. ${PAGES.length} OG SVGs written to public/.`);
console.log('Next: node scripts/generate-og-images.js (to produce the JPG variants).');
