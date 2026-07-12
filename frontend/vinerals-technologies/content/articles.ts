export type ArticleStatus = 'published' | 'draft';

export interface Article {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readTime: string;
  featured: boolean;
  status: ArticleStatus;
  image: string;
  imageAlt: string;
  /** Shorter label for footer / compact nav */
  navTitle?: string;
  /** Matches resources-slate id when applicable */
  slateId?: string;
  content: {
    intro: string[];
    sections: {
      heading: string;
      blocks: (
        | { type: 'p'; text: string }
        | { type: 'lead'; text: string }
        | { type: 'list'; items: { title: string; body: string }[] }
      )[];
    }[];
    closing: string[];
  };
}

/**
 * Published resources notes. Planned titles live in resources-slate.ts.
 * Old placeholder drafts in blog-posts.ts are not published.
 *
 * Voice: senior shop notes. No em-dashes. Avoid slogan-y "X, not Y" contrasts.
 */
export const articles: Article[] = [
  {
    slug: 'what-custom-software-actually-costs-sme',
    title: 'What custom software actually costs for an SME',
    description:
      'A plain-spoken guide to what custom software costs an SME in 2026, with CAD ranges, cost drivers, and how to read a quote.',
    excerpt:
      'Custom software pricing is mostly scope, risk, and ownership added up. Here is a working budget frame with 2026 CAD ranges, and the parts of a quote worth ignoring.',
    category: 'Decisions',
    tags: [
      'custom software',
      'pricing',
      'budgeting',
      'SME',
      'software quotes',
      'project scope',
      'Québec',
    ],
    author: {
      name: 'Vinerals Technologies',
      role: 'Workshop notes',
    },
    publishedDate: '2026-07-12',
    readTime: '7 min read',
    featured: true,
    status: 'published',
    image: '/article-custom-software-cost.jpg',
    imageAlt: 'Quote papers, calculator, and laptop on a wooden desk',
    navTitle: 'What custom software costs',
    slateId: 'custom-software-cost',
    content: {
      intro: [
        'Most people come to us already flinching. They have gotten one quote for $40,000 and another for $300,000 for what sounds like the same thing, and now they do not trust either number. That reaction is fair. The problem is usually that “custom software” can mean a garden shed or an apartment building. Same two words. Very different builds.',
        'Price is not a formula we keep in a drawer. It is mostly three things: how much you are asking the software to do, how much can go wrong if it breaks, and who owns the result when the dust settles. Everything below unpacks those three ideas.',
        'A note on the numbers: the ranges here are directional. They reflect what Canadian and North American SMEs typically paid for custom builds in 2025 and 2026, across agencies, boutique studios, and senior freelancers. Your project will land somewhere on the band. It will not land on a magic exact figure.',
      ],
      sections: [
        {
          heading: 'What actually moves the price',
          blocks: [
            {
              type: 'p',
              text: 'Five things do most of the work. When a quote swings by a factor of five, it is almost always one of these.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Scope.',
                  body: 'How many distinct jobs the software has to do. Logging and approving expense reports is small. That same tool with budgeting, forecasting, multi-currency, and a manager dashboard is four tools wearing one name. Scope is the biggest lever, and the one people underestimate most, because features feel free when you describe them out loud.',
                },
                {
                  title: 'Integrations.',
                  body: 'Software rarely lives alone. The moment it has to talk to your accounting system, your CRM, a payment processor, or a supplier’s ancient API, cost climbs. On a good day the connection is simple to write. On a normal day, someone else’s system behaves in ways nobody documented, and someone has to sit with that. Every integration is a small negotiation with a system you do not control.',
                },
                {
                  title: 'Compliance and data sensitivity.',
                  body: 'Names and emails are one kind of work. Health records, payment data, or anything under Québec’s Law 25 is another. Compliance shapes how the whole thing is built: where data lives, who can see it, how it is logged. That work is real, and it is invisible in a demo, which is why thin quotes tend to skip it.',
                },
                {
                  title: 'Data.',
                  body: 'Starting clean is great. Migrating fifteen years of records out of a spreadsheet graveyard, or out of a system nobody has admin access to anymore, is a project of its own. Messy data is one of the most reliably underquoted line items in this business.',
                },
                {
                  title: 'Polish.',
                  body: 'Empty states, error messages that make sense, the thing that still works on a phone at 11pm: that last stretch often takes more effort than people expect. You can decide how much polish you are buying. Decide it on purpose, before you discover it missing later.',
                },
              ],
            },
          ],
        },
        {
          heading: 'What it typically costs, by shape of project',
          blocks: [
            {
              type: 'p',
              text: 'Think in shapes, not feature lists. Here is roughly where things land in 2026, in CAD, for a genuinely custom build done by senior people.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'An internal tool or focused MVP: roughly $15,000 to $50,000.',
                  body: 'One clear job, a handful of users, light or no integrations. A booking system, an inventory tracker, a proof-of-concept before you commit. Often four to ten weeks of work. A lot of good SME software lives here, and it is fine to start here on purpose.',
                },
                {
                  title: 'A real business application: roughly $50,000 to $150,000.',
                  body: 'Multiple user types, a few integrations, dashboards, workflows, some reporting. The system a part of your operation genuinely runs on. This is the most common band for SMEs, and it is wide because “a few integrations” hides a lot.',
                },
                {
                  title: 'A larger or multi-part platform: roughly $150,000 to $330,000+.',
                  body: 'Several connected modules, deeper integrations, more users, real reliability expectations. You are no longer building a tool. You are building the thing the tool plugs into.',
                },
                {
                  title: 'A regulated or high-stakes system: $330,000 and up, sometimes well past it.',
                  body: 'Financial data, health data, strict audit and security requirements, or heavy integration with legacy systems. Cost here is often driven more by risk and rules than by feature count.',
                },
              ],
            },
            {
              type: 'p',
              text: 'For reference on the inputs: senior Canadian developers typically bill around $100 to $160 per hour. Local agencies commonly land around $125 to $250. Experienced freelancers roughly $50 to $120. Offshore rates often look like $25 to $80 on paper. You usually pay some of that gap back in coordination, timezone drag, and the question of who owns the code and still understands it a year later.',
            },
          ],
        },
        {
          heading: 'The cost after launch that nobody quotes you',
          blocks: [
            {
              type: 'p',
              text: 'The build is the down payment. Software you use keeps costing money. A quote that pretends otherwise is doing you no favours.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Maintenance.',
                  body: 'Libraries get security patches. Browsers change. Integrations shift under you. A common rule of thumb is 15 to 20 percent of the build cost per year to keep things healthy. It is directional, and it is still a better planning number than zero, which is what most people budget.',
                },
                {
                  title: 'Hosting and services.',
                  body: 'Servers, databases, email delivery, monitoring, backups. For a typical SME application this is often modest: tens to a few hundred dollars a month. It scales with usage, and it never goes to zero.',
                },
                {
                  title: 'Change.',
                  body: 'Your business will change, and good software should change with it. The team that built it can usually make that change in a day. A team learning it from scratch needs a week. That is the quiet argument for owning your code and keeping a relationship with people who understand it.',
                },
              ],
            },
          ],
        },
        {
          heading: 'How to read a quote, and when a low bid is a warning',
          blocks: [
            {
              type: 'p',
              text: 'A quote is a document about how someone thinks. Read it that way, alongside the price.',
            },
            {
              type: 'p',
              text: 'A good quote names assumptions. It says what is in, what is out, what happens when scope changes, and who owns the code and the accounts at the end. It talks about testing, handoff, and what maintenance looks like. It is specific about integrations, because that is where the surprises live.',
            },
            {
              type: 'p',
              text: 'A worrying quote is a single number, a short feature list, and a confident tone. Specificity takes work to fake. Confidence does not.',
            },
            {
              type: 'p',
              text: 'When one number sits dramatically below the others, it usually means one of a few things. They have quietly cut the scope you will actually need. They are planning to make it up in change requests later. They do not yet understand the integrations. Or you do not own what they build. In our experience, the cheapest quote often gets expensive once the corners start showing. You can find cheap work that is also good. Finding cheap work that is also complete, for genuinely custom builds, is rare.',
            },
            {
              type: 'p',
              text: 'Ask for a few quotes. Then spend more time comparing what they understood about your problem than comparing their prices.',
            },
          ],
        },
        {
          heading: 'How to spend less without gutting the craft',
          blocks: [
            {
              type: 'p',
              text: 'You have real levers here. They do not require cutting quality. They require cutting ambition for a while.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Shrink the first version.',
                  body: 'The single most effective move. Build the one workflow that hurts most today, ship it, use it, then decide what is next with real information. Half the features on most first specs turn out not to matter once the core is in your hands.',
                },
                {
                  title: 'Use boring, proven tools.',
                  body: 'You do not need a novel architecture. Standard, well-understood technology is cheaper to build, cheaper to hire for, and cheaper to maintain. Save the clever stuff for the part of your business that is actually unique.',
                },
                {
                  title: 'Bring clean inputs.',
                  body: 'Sorting out your own data, deciding your own rules, and being available for quick answers cuts more cost than any technical trick. Ambiguity is a lot of what you are paying to resolve.',
                },
                {
                  title: 'Defer the integrations you do not need yet.',
                  body: 'A manual export on day one. An automated sync in month six. That is often the right sequence, and it moves real money out of the initial build.',
                },
                {
                  title: 'Own the code.',
                  body: 'This will not cut cost on day one. It keeps every future change affordable. Owned code means you are never held hostage on the second project by whoever did the first.',
                },
              ],
            },
          ],
        },
      ],
      closing: [
        'If you take one thing from this: the number on a quote is downstream of decisions you can influence. Scope, risk, and ownership are the dials. Turn them on purpose and the price stops feeling arbitrary.',
        'We build software by hand for SMEs: senior people, code you own, and counsel that includes telling you when a smaller build is the smarter move. If you are staring at two quotes that do not agree and you would like a plain read on what you are looking at, that is a conversation we are glad to have. No pressure to build anything at the end of it.',
      ],
    },
  },
  {
    slug: 'build-buy-or-hybrid-software-decision',
    title: 'Build, buy, or hybrid: a decision framework that holds',
    description:
      'A practical build, buy, or hybrid framework for SMEs, with a five-year TCO sketch in CAD and a short checklist so custom stops being the default answer.',
    excerpt:
      'Custom software is the right call less often than founders think. Here is a simple way to decide where to buy off the shelf, where to build, and how to stitch the two together without regret.',
    category: 'Decisions',
    tags: [
      'build vs buy',
      'SaaS',
      'custom software',
      'TCO',
      'SME strategy',
      'software decisions',
      'hybrid',
    ],
    author: {
      name: 'Vinerals Technologies',
      role: 'Workshop notes',
    },
    publishedDate: '2026-07-12',
    readTime: '8 min read',
    featured: true,
    status: 'published',
    image: '/article-build-buy-hybrid.jpg',
    imageAlt: 'Tablet and notebook sketches on a workshop table for a build-or-buy decision',
    navTitle: 'Build, buy, or hybrid',
    slateId: 'build-vs-buy',
    content: {
      intro: [
        'Every few months a founder tells us they want to build custom software. Usually the reason is real. Sometimes a demo went badly, or a competitor mentioned their in-house tool at a conference, and “we need our own system” became the plan overnight. The first useful move is to slow down and ask what the software is actually for.',
        'Most of the time, some of the work should live in tools you rent, and a small slice deserves something you own. The trick is knowing which slice. This framework will not hand you a single number that ends the debate. It will give you better questions, and a clearer picture of what you are signing up for over five years.',
      ],
      sections: [
        {
          heading: 'Start by naming what the software actually does',
          blocks: [
            {
              type: 'p',
              text: 'Before build or buy, write down the job in one plain sentence. Skip labels like “a CRM.” Try something like: “We need to track which restaurants have reordered in the last 60 days and nudge the ones who have not.”',
            },
            {
              type: 'p',
              text: 'Once the job is on paper, most of them sort into two piles. There is work that thousands of companies do in nearly the same way: payroll, email, accounting, scheduling a call, storing files. Then there is the work that is specific to how your business wins: the way you price a job, route a delivery, qualify a lead, or run the process your customers actually pay you for.',
            },
            {
              type: 'p',
              text: 'Keep that sentence handy. You will use it in every section below.',
            },
          ],
        },
        {
          heading: 'When renting off the shelf is the right answer',
          blocks: [
            {
              type: 'p',
              text: 'SaaS wins more often than founders expect, and that is fine. If a category has ten mature products and a crowd of happy users, that problem is largely solved. Someone has already spent years on the edge cases you have not thought of yet.',
            },
            {
              type: 'p',
              text: 'Rent it when:',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'The work is common across companies.',
                  body: 'Bookkeeping does not become a competitive edge because you wrote it yourself.',
                },
                {
                  title: 'Your process fits the tool around 80 percent or more.',
                  body: 'If you can adapt your habits to the software without real pain, do that.',
                },
                {
                  title: 'You are under about 20 people.',
                  body: 'At that size a custom build rarely pays for itself before your needs change again.',
                },
                {
                  title: 'You need it working in weeks, and being wrong is cheap.',
                  body: 'A month-to-month subscription you can cancel is a small bet.',
                },
              ],
            },
            {
              type: 'p',
              text: 'The quiet benefit of SaaS is that maintenance is somebody else’s job. Security patches, uptime, a support line at 2 a.m.: you pay a monthly fee and stop thinking about it. For most of what a growing company touches, that is exactly the deal you want.',
            },
            {
              type: 'p',
              text: 'Where SaaS starts to hurt is subtler. Per-seat pricing compounds as you hire. A tool that costs a little at eight people costs real money at sixty. You bolt on connectors to make three products talk to each other, and those connectors become their own fragile system that breaks on a Tuesday. When the vendor ships a feature you did not ask for, or retires one you relied on, you adjust. That does not make SaaS the wrong choice. It means you should watch the meter.',
            },
          ],
        },
        {
          heading: 'When custom software earns its keep',
          blocks: [
            {
              type: 'p',
              text: 'Custom becomes worth it when the process is the thing customers pay you for, and no product on the market runs that process the way you do.',
            },
            {
              type: 'p',
              text: 'Picture a logistics company whose margin lives in how they sequence pickups. An off-the-shelf routing tool gets them most of the way, and quietly caps their advantage at “as good as everyone else who bought the same tool.” The last stretch, the part that is genuinely theirs, is where a custom build can pay back. You are paying to keep the thing that makes you money out of a template.',
            },
            {
              type: 'p',
              text: 'Build when:',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'The process is your actual advantage.',
                  body: 'Matching a competitor’s tooling would flatten what makes you different.',
                },
                {
                  title: 'You have tried to buy it.',
                  body: 'The good options force you to work in ways that break how you serve customers.',
                },
                {
                  title: 'Data ownership, residency, or compliance leaves little room to negotiate.',
                  body: 'The rented product cannot meet the constraint without painful workarounds.',
                },
                {
                  title: 'The five-year cost of the SaaS stack for this job keeps climbing.',
                  body: 'As a rough signal, that often means you have crossed about CAD $80,000 to $100,000 a year and the curve is still up.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Two honest cautions. First, custom keeps costing after launch. Plan on annual maintenance somewhere around 15 to 25 percent of the build cost, plus hosting and the internal time to decide what gets built next. Software you own needs tending. Second, “we could build it” is almost always true. The real question is whether building it is the best use of the money and attention you have this year.',
            },
          ],
        },
        {
          heading: 'The hybrid pattern most SMEs should use',
          blocks: [
            {
              type: 'p',
              text: 'Here is where most companies land once the emotion drains out of the decision. You buy the commodity layer. You build the thin, specific piece that is yours. Then you connect them cleanly.',
            },
            {
              type: 'p',
              text: 'In practice that looks like keeping accounting, email, payroll, and calendars in mature products you would never want to maintain. Around them, you build a small system that owns the one workflow that defines you, and you let it read from and write to the rented tools through their APIs.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Keep the custom surface small on purpose.',
                  body: 'The more of it you build, the more of it you maintain. Build the part that is genuinely yours and rent the rest without guilt.',
                },
                {
                  title: 'Own your data model.',
                  body: 'Even when the tools are rented, the record of who your customers are and what they did should live somewhere you control and can export.',
                },
                {
                  title: 'Treat the connectors as real software.',
                  body: 'The integration layer is where hybrid systems rot. Give it the same care as the rest.',
                },
                {
                  title: 'Write down why each piece is build or buy.',
                  body: 'In two years someone will ask. The reasoning is worth more than the decision.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Done well, the custom part is the smallest thing that captures your advantage, and everything else is a subscription you can reconsider each year.',
            },
          ],
        },
        {
          heading: 'A five-year cost sketch, without pretending it is precise',
          blocks: [
            {
              type: 'p',
              text: 'People often compare the monthly SaaS bill to the upfront build price and conclude custom is absurd. Look at both over five years, with every real cost included. The numbers below are directional. Your real spread depends on scale, complexity, and how much your process bends.',
            },
            {
              type: 'p',
              text: 'A fair five-year SaaS total is more than the sticker. Count the subscription with a yearly increase of roughly 5 to 8 percent, the adjacent tools you buy to fill gaps, the connectors wiring them together, onboarding and training, and the eventual cost of migrating off when you leave. For a mid-sized team, the visible license is often a third to a half of what the stack actually costs once you add it all up.',
            },
            {
              type: 'p',
              text: 'A fair five-year custom total is also more than the build. Count the initial build, then annual maintenance in that 15 to 25 percent range, hosting, and the internal time to steer it.',
            },
            {
              type: 'p',
              text: 'To make it concrete with round CAD figures, imagine a team of about 50 people running one core workflow.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'SaaS path.',
                  body: 'A core platform plus the tools and connectors around it might land somewhere near CAD $90,000 to $140,000 per year once everything is counted. Over five years, call it roughly CAD $450,000 to $700,000, and it grows with headcount.',
                },
                {
                  title: 'Custom path.',
                  body: 'A CAD $150,000 build amortizes to about CAD $30,000 a year, plus CAD $20,000 to $40,000 a year in maintenance and hosting. Over five years, roughly CAD $250,000 to $350,000, and it does not scale up every time you hire.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Do not treat those as promises. Treat them as a shape. SaaS is usually cheaper in years one through three, and for commodity work at moderate scale it often stays cheaper. Custom tends to look better over five years at higher seat counts, or where the process is genuinely your advantage and the SaaS bill keeps climbing. Below about 20 staff, the build rarely amortizes before your needs move. The interesting range is 50 seats and up, where the gap at year five is often much smaller than it looked at year one.',
            },
            {
              type: 'p',
              text: 'Build the spreadsheet before you build the software. If a rough five-year model does not clearly favour custom, that is usually your answer, and it is a good one.',
            },
          ],
        },
        {
          heading: 'A short checklist you can run in an afternoon',
          blocks: [
            {
              type: 'p',
              text: 'Run each candidate system through these. If you cannot answer yes to at least the first three for a build, rent it.',
            },
            {
              type: 'list',
              items: [
                {
                  title: '1. Is this process one of the few things customers actually pay us for?',
                  body: 'If it is background work, buy it.',
                },
                {
                  title: '2. Did we honestly try to buy it?',
                  body: 'Do the good options force us to work in ways that hurt how we serve customers?',
                },
                {
                  title: '3. Is our five-year SaaS cost for this job real money and still climbing?',
                  body: 'As a rough signal: past about CAD $80,000 to $100,000 a year.',
                },
                {
                  title: '4. Can we fund the ongoing attention a custom system needs after launch?',
                  body: 'If not, rent it and revisit later.',
                },
                {
                  title: '5. Have we drawn the smallest possible custom surface?',
                  body: 'Confirm the rest can stay rented and connected.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Most companies that run this end up hybrid, with a short list of build items and a longer list of things they were relieved not to build.',
            },
          ],
        },
      ],
      closing: [
        'We build software by hand for small and mid-sized companies. A fair amount of our first conversations end with us telling someone to buy the SaaS product and save their money for the piece that actually matters. That keeps the work honest, and it is usually the right call.',
        'If you are staring at this decision and want someone senior to sketch the five-year picture with you, without a sales pitch attached, we are happy to sit down and work through it. Bring the one-sentence description of the job. We will start there.',
      ],
    },
  },
];

export function getPublishedArticles(): Article[] {
  return articles
    .filter((a) => a.status === 'published')
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.status === 'published');
}

export function getFeaturedArticles(): Article[] {
  return getPublishedArticles().filter((a) => a.featured);
}
