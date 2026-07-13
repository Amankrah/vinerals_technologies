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
  {
    slug: 'do-you-need-ai-or-better-software',
    title: 'Do you need AI, or better software?',
    description:
      'How SMEs can tell real AI opportunities from workflow, data, and clarity problems in disguise, plus a calm one-quarter plan to start.',
    excerpt:
      'A lot of “we need AI” turns out to be a workflow that never got fixed, data scattered across six places, or a product nobody has defined yet. Here is how to tell the difference before you spend anything.',
    category: 'AI honesty',
    tags: [
      'AI',
      'SME',
      'workflow',
      'data quality',
      'automation',
      'pilot project',
      'Québec',
    ],
    author: {
      name: 'Vinerals Technologies',
      role: 'Workshop notes',
    },
    publishedDate: '2026-07-12',
    readTime: '8 min read',
    featured: true,
    status: 'published',
    image: '/article-ai-or-better-software.jpg',
    imageAlt: 'Workflow sketch and laptop on a wooden desk',
    navTitle: 'AI or better software?',
    slateId: 'ai-or-better-software',
    content: {
      intro: [
        'Right now a lot of owners are getting the same message from a board member, a competitor’s LinkedIn post, or a nephew who is very online: you need AI. The pressure is real, and it is not stupid. Some of it will matter. The trouble is that “we need AI” is a wish with a budget attached, arriving before anyone has said what the AI is actually for.',
        'We have sat through enough of these conversations to notice a pattern. A good share of the time, the thing being described as an AI problem is a workflow that never got fixed, data that lives in six places, or a product nobody has defined clearly. AI does not fix those. It usually just runs them faster, and charges you more for the privilege.',
        'So this is a piece about slowing down for one afternoon. Where AI genuinely helps a small or mid-sized company today, where it quietly does not, and how to spend a first quarter finding out without lighting money on fire.',
      ],
      sections: [
        {
          heading: 'The gap between the hype and what actually helps',
          blocks: [
            {
              type: 'p',
              text: 'The demos are built to look like magic. A system that reads any document, answers any question, runs the business while you sleep. In a controlled demo, with clean inputs and a friendly question, it works. In your office, with a supplier PDF that someone scanned crooked in 2019, it is a different afternoon.',
            },
            {
              type: 'p',
              text: 'Here is the frame we find useful. Broad, do-everything AI is still unreliable for anything you would stake real money on. Narrow AI, pointed at one well-defined task, is quietly good and getting better every few months. The wins we actually see at SMEs are almost always narrow.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Pulling structured fields out of messy documents.',
                  body: 'Invoices, receipts, intake forms. A person still checks the uncertain ones.',
                },
                {
                  title: 'Drafting first versions.',
                  body: 'Replies, summaries, product descriptions. Someone edits before anything ships.',
                },
                {
                  title: 'Sorting and routing.',
                  body: 'Triaging support tickets, tagging leads, flagging the one email that needs a human today.',
                },
                {
                  title: 'Search over your own material.',
                  body: 'Asking a question across your contracts, manuals, or past projects and getting pointed to the right page.',
                },
              ],
            },
            {
              type: 'p',
              text: 'None of that replaces a department. All of it saves a few hours a week on work people already resent doing. That is a genuine return, and it is the return worth chasing first.',
            },
          ],
        },
        {
          heading: 'When “we need AI” is really something else',
          blocks: [
            {
              type: 'p',
              text: 'A fair chunk of AI requests are another problem in costume. Nobody is being dishonest. AI is the word in the air, so every ache gets that name. A few we hear often.',
            },
            {
              type: 'list',
              items: [
                {
                  title: '“We want AI to answer customer questions.”',
                  body: 'Usually the answers live in one person’s head and a Slack channel from 2022. Write them down first. A search tool over a good knowledge base beats a chatbot over a bad one.',
                },
                {
                  title: '“We need AI to predict demand.”',
                  body: 'Sometimes you do. Often you have never plotted last year’s sales in a single view. A clear dashboard answers the question you actually have this week, for far less.',
                },
                {
                  title: '“AI should automate our intake.”',
                  body: 'Frequently the intake is three forms, two inboxes, and a spreadsheet that four people edit at once. Get that into one path first. Then decide whether a model needs to sit anywhere in it.',
                },
                {
                  title: '“We want AI to understand our data.”',
                  body: 'That one is usually a data problem wearing an AI hat. If your records are scattered and inconsistent, no model saves you. It just gives you confident answers that happen to be wrong.',
                },
              ],
            },
            {
              type: 'p',
              text: 'The tell is simple. If a mid-level employee with a clear process and a decent tool could do the job, you have a software or workflow problem. Reach for AI when the task genuinely needs judgment over language or images, at a volume a person cannot keep up with.',
            },
          ],
        },
        {
          heading: 'The first projects that tend to pay back',
          blocks: [
            {
              type: 'p',
              text: 'When AI does earn its place at an SME, the first project tends to share a shape. Small, measurable, low stakes if it goes wrong, and sitting on top of data you already have.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Document extraction with a human check.',
                  body: 'Invoices, purchase orders, forms. High volume, repetitive format, a person reviewing the ones the system is unsure about. You can measure the hours saved inside a month.',
                },
                {
                  title: 'Drafting inside a tool people already use.',
                  body: 'First-draft replies in the support inbox, first-draft summaries of long threads. The person stays in the loop, so a bad draft costs a delete, not a customer.',
                },
                {
                  title: 'Internal search over your own documents.',
                  body: 'Staff stop asking the same colleague the same question. Low stakes, because the tool points to a source they can open and verify.',
                },
              ],
            },
            {
              type: 'p',
              text: 'And a few that usually do not pay yet.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Customer-facing automation with no human in the loop, early on.',
                  body: 'The failure is public, and it is your brand wearing it.',
                },
                {
                  title: 'Predictions that move real money.',
                  body: 'Dispatch, pricing, inventory. Not before you have clean history and someone who can sanity-check the output.',
                },
                {
                  title: 'A big internal platform with AI wired through every screen as version one.',
                  body: 'You will spend a year learning what a two-week pilot would have told you.',
                },
              ],
            },
            {
              type: 'p',
              text: 'A pattern worth stealing: keep a person in the loop for the first version of anything. It is cheaper, it is safer, and it teaches you where the model actually breaks before you trust it on its own.',
            },
          ],
        },
        {
          heading: 'The data question, asked before you spend',
          blocks: [
            {
              type: 'p',
              text: 'Most AI projects that stall do not stall on the model. They stall on the data underneath. The models are close to a commodity now. Your data is the part that is yours, and the part that decides whether any of this works.',
            },
            {
              type: 'p',
              text: 'Before you start, you want honest answers to a few plain questions.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Where does it live?',
                  body: 'If the answer is “spread across email, a shared drive, and three SaaS tools,” then collecting it is the first project, and it is not a small one.',
                },
                {
                  title: 'Is it consistent?',
                  body: 'The same customer spelled four ways, dates in three formats, fields people fill in when they feel like it. A model grounded on that will be confidently inconsistent.',
                },
                {
                  title: 'Do you have enough of it?',
                  body: 'For pulling fields out of documents, you need a real pile of examples, including the ugly ones. For anything predictive, you usually need more than a year of genuine history.',
                },
                {
                  title: 'Are you allowed to use it?',
                  body: 'Customer data under Québec’s Law 25, anything sensitive, anything a contract restricts. Decide where the data can go, and whether it can leave your walls, before you hand it to anyone’s model.',
                },
              ],
            },
            {
              type: 'p',
              text: 'You do not need perfect data. You need to know the shape of what you have. Half of what looks like an AI project turns out to be a month of quietly cleaning up records, and that month is often worth more than the model that sits on top of it.',
            },
          ],
        },
        {
          heading: 'A calm plan for the first quarter',
          blocks: [
            {
              type: 'p',
              text: 'If you want to start without betting the year, here is a shape that has worked. Thirteen weeks, roughly, in three moves. Bend the weeks to your reality.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Weeks 1 to 3: pick one task and measure it.',
                  body: 'Choose a single annoying, repetitive job. Write down how long it takes today and how often it goes wrong. Without that baseline, you will never know whether the project helped.',
                },
                {
                  title: 'Weeks 4 to 6: get the data honest.',
                  body: 'Pull the relevant records into one place. Clean the obvious mess. Settle the rules and the privacy constraints. This is the unglamorous part, and it is where most of the value hides.',
                },
                {
                  title: 'Weeks 7 to 11: build a small pilot with a person in the loop.',
                  body: 'One task, one team, a human checking the output. Keep it off the critical path so a bad day is a nuisance instead of an incident.',
                },
                {
                  title: 'Weeks 12 to 13: compare against the baseline and decide.',
                  body: 'Did it save the time you hoped? Where did it fail? Now you can expand it, narrow it, or stop, with evidence instead of a feeling.',
                },
              ],
            },
            {
              type: 'p',
              text: 'A quarter is enough to learn whether AI helps this specific corner of your business. It is short enough that being wrong stays cheap. And it usually surfaces the workflow and data fixes that were the real work all along.',
            },
          ],
        },
      ],
      closing: [
        'If the honest answer at the end of the quarter is “the workflow was the problem, and now it is fixed,” that is a win, even when no model ships. Plenty of our AI conversations end right there, with a company that spent a little to avoid spending a lot on the wrong thing.',
        'We build software by hand for SMEs, and part of that work is saying so when the thing you need is better software, cleaner data, or a clearer process before any AI enters the picture. If you are under pressure to do AI and you would like a plain read on which parts are real for you, we are glad to sit down and work through it. Bring the task that annoys you most. We will start there.',
      ],
    },
  },
  {
    slug: 'what-you-own-the-code-actually-means',
    title: 'What "you own the code" actually means',
    description:
      'What software ownership really includes for SMEs: source code, credentials, documentation, contracts, and a clean handover path without hostage fees.',
    excerpt:
      '“You own the code” is easy to say in a proposal and hard to cash in when you want to leave. Ownership is a package. Here is what should be in it, and what to watch for in the fine print.',
    category: 'Craft & ownership',
    tags: [
      'code ownership',
      'intellectual property',
      'vendor lock-in',
      'software contracts',
      'handover',
      'SME',
      'Québec',
    ],
    author: {
      name: 'Vinerals Technologies',
      role: 'Workshop notes',
    },
    publishedDate: '2026-07-12',
    readTime: '8 min read',
    featured: true,
    status: 'published',
    image: '/article-you-own-the-code.jpg',
    imageAlt: 'Source code pages, handover envelope, and contract folder on a wooden desk',
    navTitle: 'What code ownership means',
    slateId: 'you-own-the-code',
    content: {
      intro: [
        '“You own the code” shows up in almost every custom software proposal. It sounds reassuring. It is also vague enough to mean almost nothing until you try to use it.',
        'We have watched companies discover, two years in, that they own a zip file they cannot deploy, or a GitHub repo they cannot log into, or a system that only runs on a server whose credentials live with the agency. The words were there. The package was not.',
        'Ownership is not a single checkbox. It is a bundle: the source, the accounts, the documentation, and a contract that lets you walk away without paying a ransom to keep your own business running. This piece unpacks that bundle so you know what to ask for before you sign, and what to insist on before you pay the final invoice.',
      ],
      sections: [
        {
          heading: 'Three different things people call “ownership”',
          blocks: [
            {
              type: 'p',
              text: 'When a vendor says you own the software, they might mean any of three quite different arrangements. They are not interchangeable.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Source code ownership.',
                  body: 'You hold the intellectual property in the custom code written for you. You can hire someone else to maintain it, fork it, or stop paying the original shop without losing the right to the work product. This is what most SMEs think they are buying when they choose custom.',
                },
                {
                  title: 'A hosted product you rent.',
                  body: 'You pay monthly for access. The vendor runs it, updates it, and holds the code. You get an account, not an asset. Fine for commodity tools. A poor fit if the software is supposed to be your competitive edge.',
                },
                {
                  title: 'A license to use.',
                  body: 'You can run the software, sometimes on your own servers, but you cannot see the source, cannot modify it freely, and cannot take it elsewhere. Common with white-label platforms and some “custom” builds that are really configured instances of the vendor’s core product.',
                },
              ],
            },
            {
              type: 'p',
              text: 'The confusion usually lives in the third bucket. A system can feel bespoke while the underlying platform stays the vendor’s property. Ask plainly: if we stop paying you, what still works, and what stops? The answer tells you which bucket you are in.',
            },
          ],
        },
        {
          heading: 'The accounts matter as much as the repository',
          blocks: [
            {
              type: 'p',
              text: 'Source code in a repo you cannot access is a souvenir. For ownership to be real, you need control of the infrastructure around it.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Source control.',
                  body: 'GitHub, GitLab, Bitbucket, or equivalent. The repository should live in an organization you own, with your admins, not buried inside the vendor’s account with you as a guest.',
                },
                {
                  title: 'Hosting and cloud.',
                  body: 'AWS, Azure, Google Cloud, or your own servers. Root or admin access to the environments where production runs. Billing in your name, not theirs.',
                },
                {
                  title: 'Domains and DNS.',
                  body: 'Registered to you. Pointing where you decide. We have seen companies lose a domain because it was registered under an agency email that nobody monitors anymore.',
                },
                {
                  title: 'Third-party services.',
                  body: 'Payment processors, email providers, maps APIs, auth services. Each should have an account you control, or a clear sub-account structure with export rights. API keys should not be secrets only the vendor can rotate.',
                },
                {
                  title: 'Databases and backups.',
                  body: 'You should be able to pull a backup without filing a ticket. If the only copy of your data lives on a server you cannot SSH into, you do not own the system. You rent it.',
                },
              ],
            },
            {
              type: 'p',
              text: 'A practical test: could a competent developer you hire next month deploy the application from scratch using only what you hold? If the honest answer is no, close the gap before the project ends, not after a dispute starts.',
            },
          ],
        },
        {
          heading: 'Documentation that makes ownership usable',
          blocks: [
            {
              type: 'p',
              text: 'Code without context is a puzzle box. The documentation is what turns a repository into something your next team can actually run.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'How to build and deploy.',
                  body: 'Step-by-step setup for local development and production deployment. Which commands, which environment variables, which branches map to which environments. Not a novel. Enough that someone new is not guessing.',
                },
                {
                  title: 'Architecture in plain language.',
                  body: 'What the main pieces are, how data flows, where the fragile parts live. A diagram helps. A one-page narrative helps more than a diagram nobody updates.',
                },
                {
                  title: 'Integration map.',
                  body: 'Every external system, what it is for, which credentials it uses, who owns the account, and what breaks if it goes down.',
                },
                {
                  title: 'Operational runbook.',
                  body: 'How backups run, how to restore, where logs live, who gets paged when something fails at 2am. Boring until you need it.',
                },
                {
                  title: 'Known debt and shortcuts.',
                  body: 'Every project has them. The part that was rushed for launch, the integration that needs replacing. Honest notes here save the next team months of archaeology.',
                },
              ],
            },
            {
              type: 'p',
              text: 'You do not need encyclopedic docs on day one. You need enough that leaving the vendor is a project, not a crisis. If handover documentation is not in the statement of work, add it.',
            },
          ],
        },
        {
          heading: 'Red flags in contracts and statements of work',
          blocks: [
            {
              type: 'p',
              text: 'The friendly sales conversation and the contract are sometimes written by different people. Read the contract. A few patterns we treat as warnings.',
            },
            {
              type: 'list',
              items: [
                {
                  title: '“License to use” instead of assignment.',
                  body: 'If the IP clause grants you a license rather than ownership of the custom work, you are renting your own build. For genuinely custom code, you want assignment of copyright in the work product you paid to create, with a carve-out for the vendor’s pre-existing tools and open-source components.',
                },
                {
                  title: 'Hosting bundled with no export clause.',
                  body: '“We host it for you” is convenient until it is the only way the system runs. Insist on deployment docs and a tested handover before final payment.',
                },
                {
                  title: 'Escrow that never triggers.',
                  body: 'Source code escrow sounds safe. In practice it often requires a dispute, costs money to access, and holds a snapshot that may not match production. Prefer living access in your repo throughout the project.',
                },
                {
                  title: 'Transfer fees on exit.',
                  body: 'Some contracts charge to “migrate” you off their platform, or withhold credentials until a fee is paid. That is lock-in with paperwork. Walk away from those terms.',
                },
                {
                  title: 'Vague definitions of “custom.”',
                  body: 'If the SOW does not separate custom code from the vendor’s reusable framework, you may own the paint job while they keep the engine. Ask which files are yours outright and which are licensed.',
                },
                {
                  title: 'No milestone tied to handover.',
                  body: 'Final payment should not be due until you have repo access, credentials, and a walkthrough you understand. Tie money to the package, not just to a demo.',
                },
              ],
            },
            {
              type: 'p',
              text: 'None of this means the vendor is acting in bad faith. Often it is just their default template, written for their convenience. Your job is to make the template match what you are actually buying.',
            },
          ],
        },
        {
          heading: 'How we structure handover',
          blocks: [
            {
              type: 'p',
              text: 'We are a solidarity cooperative that builds software by hand for SMEs. Ownership is not a footnote in our proposals. It is how we think the work should end.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Your repo from the start.',
                  body: 'We work in a repository inside your organization. You see progress as it happens. There is no big reveal at the end.',
                },
                {
                  title: 'Your cloud accounts.',
                  body: 'Production runs on infrastructure billed to you. We get access to build. You keep access when we step back.',
                },
                {
                  title: 'IP assignment in writing.',
                  body: 'Custom code we write for you is yours, with standard exclusions for our internal tooling and open-source libraries everyone uses.',
                },
                {
                  title: 'Handover as a deliverable.',
                  body: 'Deployment guide, architecture notes, credential inventory, and a recorded walkthrough. Final invoice ties to that package, not just to a feature list.',
                },
                {
                  title: 'No hostage maintenance.',
                  body: 'We want ongoing work because the system is worth improving, not because you cannot log in without us. If you hire another shop, they should be able to pick it up.',
                },
              ],
            },
            {
              type: 'p',
              text: 'That structure is not generosity. It is what custom software is supposed to mean. You paid for the craft. You should leave with the thing.',
            },
          ],
        },
        {
          heading: 'A short checklist before you sign or pay',
          blocks: [
            {
              type: 'p',
              text: 'Run through this with your lawyer if the deal is large. For most SME builds, it is enough to get the questions on the table.',
            },
            {
              type: 'list',
              items: [
                {
                  title: '1. Who holds the copyright in the custom work?',
                  body: 'You want assignment, not a license, for code written specifically for you.',
                },
                {
                  title: '2. Where does the repo live, and who is admin?',
                  body: 'Your organization, your admins.',
                },
                {
                  title: '3. Who pays the cloud bill and holds root access?',
                  body: 'You, with documented credentials in your vault.',
                },
                {
                  title: '4. What happens on day one after the vendor leaves?',
                  body: 'Can you deploy, restore a backup, and rotate an API key without them?',
                },
                {
                  title: '5. Is handover documentation a named deliverable?',
                  body: 'With acceptance criteria you can check.',
                },
                {
                  title: '6. Is final payment tied to that handover?',
                  body: 'Not just to a demo on the vendor’s laptop.',
                },
              ],
            },
            {
              type: 'p',
              text: 'If you get clear answers to all six, “you own the code” is probably true in the way you mean it. If several answers are fuzzy, fix the contract before you fix the software.',
            },
          ],
        },
      ],
      closing: [
        'Custom software is worth the premium when it becomes an asset your company holds, not a subscription you cannot escape. The phrase “you own the code” is only as good as the repo, the credentials, the docs, and the contract behind it.',
        'We build software by hand for SMEs, and we treat handover as part of the craft, not an afterthought. If you are comparing proposals and want a second pair of eyes on what “ownership” actually means in each one, we are glad to read them with you. Bring the SOW. We will start there.',
      ],
    },
  },
  {
    slug: 'how-to-brief-a-software-shop',
    title: 'How to brief a software shop so quotes mean something',
    description:
      'How SMEs can write a one-page software brief that produces comparable, honest quotes: users, jobs, constraints, integrations, and success metrics that matter.',
    excerpt:
      'Vague briefs get vague quotes. A clear one-page brief gives a shop enough to estimate honestly, and gives you a way to compare proposals that are actually talking about the same job.',
    category: 'Working together',
    tags: [
      'project brief',
      'software quotes',
      'scoping',
      'SME',
      'custom software',
      'requirements',
      'Québec',
    ],
    author: {
      name: 'Vinerals Technologies',
      role: 'Workshop notes',
    },
    publishedDate: '2026-07-12',
    readTime: '8 min read',
    featured: true,
    status: 'published',
    image: '/article-brief-software-shop.jpg',
    imageAlt: 'One-page brief template, pencil, and sticky notes on a wooden desk',
    navTitle: 'How to brief a shop',
    slateId: 'brief-a-shop',
    content: {
      intro: [
        'Most first-time buyers of custom software send the same thing: a paragraph in an email, a slide deck from a strategy session, or a feature list copied from a competitor’s website. Then they wonder why one shop quotes $45,000 and another quotes $280,000 for what sounds like the same project.',
        'The quotes are usually both sincere. They are just answering different questions. A vague brief forces every shop to guess at the parts you left out, and guessing is where the spread comes from.',
        'A good brief does not need to be long. One page, maybe two if integrations are messy, is enough to get estimates you can compare. This piece walks through what belongs in that page, and ends with an outline you can copy and fill in before your next conversation.',
      ],
      sections: [
        {
          heading: 'What a one-page brief is trying to do',
          blocks: [
            {
              type: 'p',
              text: 'The brief is not a contract and not a specification. It is a shared picture of the job: who uses it, what they need to get done, what cannot change, and what success looks like. Enough detail that a senior person can estimate without inventing your business.',
            },
            {
              type: 'p',
              text: 'You are not trying to design the software. You are trying to describe the problem clearly enough that someone else can propose a shape for the solution. The best briefs we receive read like a letter from a thoughtful operator, not like a requirements document written by committee.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Context in three sentences.',
                  body: 'What your company does, why this project exists now, and what happens if you do nothing for another year.',
                },
                {
                  title: 'The job in one sentence.',
                  body: 'Not a product name. The work the software has to make easier. “Help our field team log inspections and sync them to billing” is a job. “We need an app” is not.',
                },
                {
                  title: 'Who touches it.',
                  body: 'Roles, not org chart titles. How many people, how often, on what devices, in what language.',
                },
                {
                  title: 'What you already have.',
                  body: 'Spreadsheets, SaaS tools, paper forms, a half-finished prototype. Include the good, the bad, and the thing everyone secretly uses instead of the official system.',
                },
                {
                  title: 'Timeline and budget range.',
                  body: 'Even a wide band helps. “Need something usable before harvest season” and “roughly CAD $80k to $120k” tell us more than “ASAP” and “best price.”',
                },
              ],
            },
          ],
        },
        {
          heading: 'Users, jobs, constraints, and non-goals',
          blocks: [
            {
              type: 'p',
              text: 'This is the heart of the brief. Get specific here and the rest of the quote gets honest.',
            },
            {
              type: 'lead',
              text: 'Users and jobs',
            },
            {
              type: 'p',
              text: 'List the people who will use the system and the main thing each group needs to accomplish. Two or three groups is normal. More than five usually means the project is actually three projects wearing one coat.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Warehouse lead.',
                  body: 'Receives shipments, assigns locations, prints labels. Uses a tablet on the floor, often with gloves on.',
                },
                {
                  title: 'Account manager.',
                  body: 'Checks stock levels before promising delivery dates to customers. Desktop, twice a day.',
                },
                {
                  title: 'Owner.',
                  body: 'Weekly summary of what moved, what is stuck, what is costing money. Phone, Sunday evening.',
                },
              ],
            },
            {
              type: 'p',
              text: 'That level of plain detail changes an estimate. Gloves on a tablet means bigger touch targets. Sunday phone use means a simple summary view matters more than a dense dashboard.',
            },
            {
              type: 'lead',
              text: 'Constraints',
            },
            {
              type: 'p',
              text: 'Constraints are the walls of the room. They are not complaints. They are facts the software has to live inside.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Regulatory.',
                  body: 'Law 25, PCI, sector rules, export documentation. Name the ones that apply.',
                },
                {
                  title: 'Technical.',
                  body: 'Must run on iPads you already own. Must work offline in areas with no cell signal. Must stay inside Canada.',
                },
                {
                  title: 'Organizational.',
                  body: 'Only one person knows how the current spreadsheet works and they retire in March. Training has to be simple enough for seasonal staff.',
                },
                {
                  title: 'Commercial.',
                  body: 'Cannot replace the accounting system this year. Must connect to it.',
                },
              ],
            },
            {
              type: 'lead',
              text: 'Non-goals',
            },
            {
              type: 'p',
              text: 'Non-goals are underrated. They stop scope from swelling in the first meeting. Be explicit about what this project is not trying to solve.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Not a customer portal in v1.',
                  body: 'Internal tool first. External access is a later phase.',
                },
                {
                  title: 'Not replacing the CRM.',
                  body: 'Read contact data from HubSpot. Do not rebuild pipeline management.',
                },
                {
                  title: 'Not mobile-native for every role.',
                  body: 'Field team gets mobile. Office team stays in the browser.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Shops that read non-goals breathe easier. It signals you have thought about phasing, which is one of the strongest signs a project will go well.',
            },
          ],
        },
        {
          heading: 'Integrations and data realities',
          blocks: [
            {
              type: 'p',
              text: 'Integrations are where estimates go to die, usually because nobody described them until week three. Put them in the brief upfront, warts and all.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Name every system it must talk to.',
                  body: 'QuickBooks, Shopify, a custom Access database from 2008, a supplier’s portal with no API. List them all.',
                },
                {
                  title: 'Say which direction data flows.',
                  body: 'One-way import, two-way sync, nightly batch, real-time. “Connected to X” is not enough.',
                },
                {
                  title: 'Describe the data you have today.',
                  body: 'Where it lives, how clean it is, how much history matters. “About 40,000 rows in Excel, inconsistent product codes” is useful. “We have data” is not.',
                },
                {
                  title: 'Note access you already have.',
                  body: 'API keys, admin logins, vendor contacts. Or say honestly that you will need help getting access.',
                },
                {
                  title: 'Call out the scary one.',
                  body: 'Every project has a system nobody wants to touch. Name it. The shop would rather know before quoting.',
                },
              ],
            },
            {
              type: 'p',
              text: 'If you are not sure whether an integration is possible, say that too. “We need orders from System X, we do not know if they offer an API” is a fine line in a brief. It tells the shop to budget discovery time instead of pretending the connection is trivial.',
            },
          ],
        },
        {
          heading: 'Success metrics that are not vanity',
          blocks: [
            {
              type: 'p',
              text: '“We want it to be user-friendly” is not a success metric. Neither is “modern” or “scalable.” Those words are fine in conversation. They do not help anyone estimate.',
            },
            {
              type: 'p',
              text: 'Useful metrics tie to behaviour you can observe within a few months of launch.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Time.',
                  body: '“Field inspections logged the same day instead of batched on Fridays.” “Quote turnaround drops from three days to one.”',
                },
                {
                  title: 'Errors.',
                  body: '“Billing disputes on wrong quantities drop by half.” “Fewer manual corrections in the warehouse log.”',
                },
                {
                  title: 'Adoption.',
                  body: '“All six field techs using it daily within six weeks of launch.” “Managers stop maintaining the shadow spreadsheet.”',
                },
                {
                  title: 'Visibility.',
                  body: '“Owner can see stuck orders without calling three people.” “Inventory accuracy within five percent during monthly counts.”',
                },
              ],
            },
            {
              type: 'p',
              text: 'You do not need perfect baselines. Rough is fine. “We think it takes about two hours per batch now” is enough for a shop to understand whether the project is worth the investment.',
            },
            {
              type: 'p',
              text: 'Metrics also protect you later. When scope creep shows up dressed as a small request, you can ask whether it moves the number you cared about. If it does not, it waits for phase two.',
            },
          ],
        },
        {
          heading: 'What makes quotes hard to compare',
          blocks: [
            {
              type: 'p',
              text: 'Even with a good brief, proposals arrive in different shapes. A few things to watch when you line them up side by side.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Different assumptions about who provides what.',
                  body: 'Design, content, API access, training, hosting. One quote includes them, another treats them as extras.',
                },
                {
                  title: 'Different definitions of “launch.”',
                  body: 'A demo on a laptop is not launch. Launch is users doing real work on production data.',
                },
                {
                  title: 'Different phase boundaries.',
                  body: 'If one shop includes the integration and another parks it in phase two, the headline numbers are not comparable until you align the phases.',
                },
                {
                  title: 'Different risk buffers.',
                  body: 'A low quote sometimes means optimism. A high quote sometimes means someone has seen your messy data and priced honestly. Ask what would push the number up or down.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Send the same brief to every shop. Ask each to answer the same five questions: what is in scope, what is out, what they need from you, what they are unsure about, and what happens after launch. That alone eliminates a lot of theatre.',
            },
          ],
        },
        {
          heading: 'A template you can copy',
          blocks: [
            {
              type: 'p',
              text: 'Paste this into a doc and fill in the brackets. One to two pages when you are done is the right length.',
            },
            {
              type: 'list',
              items: [
                {
                  title: '1. Company and context',
                  body: '[What you do] · [Why this project now] · [Cost of waiting another year]',
                },
                {
                  title: '2. The job (one sentence)',
                  body: '[The work this software should make easier]',
                },
                {
                  title: '3. Users and what each needs to do',
                  body: '[Role] · [Main tasks] · [Device / environment] · [How often]',
                },
                {
                  title: '4. What exists today',
                  body: '[Tools, spreadsheets, manual steps, workarounds people actually use]',
                },
                {
                  title: '5. Integrations and data',
                  body: '[Systems to connect] · [Direction of data flow] · [Data quality and volume] · [Access you have or need]',
                },
                {
                  title: '6. Constraints',
                  body: '[Legal / technical / organizational walls the build must respect]',
                },
                {
                  title: '7. Non-goals (v1)',
                  body: '[What this project is explicitly not solving yet]',
                },
                {
                  title: '8. Success metrics',
                  body: '[Time saved, errors reduced, adoption target, visibility gained. Rough baselines welcome.]',
                },
                {
                  title: '9. Timeline and budget band',
                  body: '[Hard dates if any] · [Rough CAD range you are prepared to discuss]',
                },
                {
                  title: '10. Questions for the shop',
                  body: '[What you are unsure about and want honest counsel on]',
                },
              ],
            },
            {
              type: 'p',
              text: 'Attach screenshots, a sample export, or a photo of the paper form if you have them. Visual context saves a round of questions.',
            },
          ],
        },
      ],
      closing: [
        'A brief will not get you identical quotes. Projects have unknowns, and good shops price risk differently. What it will get you is proposals that describe the same job, so you can compare craft and honesty instead of comparing guesses.',
        'We build software by hand for SMEs, and the conversations that start with a clear brief tend to be the ones that end well. If you have a draft and want a plain read on what is missing before you send it out, we are glad to look it over. Bring the one-pager. We will start there.',
      ],
    },
  },
  {
    slug: 'scoping-mvp-without-painting-into-corner',
    title: 'Scoping an MVP without painting yourself into a corner',
    description:
      'How SMEs can scope an MVP that ships a useful first slice without disposable code: MVP vs prototype vs pilot, what to protect, phasing, and honest acceptance criteria.',
    excerpt:
      'An MVP should be the smallest honest version of the real system, not a throwaway demo. Here is how to cut scope without cutting the foundations you will need in six months.',
    category: 'Craft & ownership',
    tags: [
      'MVP',
      'scoping',
      'product development',
      'architecture',
      'phasing',
      'SME',
      'custom software',
    ],
    author: {
      name: 'Vinerals Technologies',
      role: 'Workshop notes',
    },
    publishedDate: '2026-07-12',
    readTime: '8 min read',
    featured: true,
    status: 'published',
    image: '/article-mvp-scoping.jpg',
    imageAlt: 'Phased roadmap sketch and architecture notes on a wooden desk',
    navTitle: 'Scoping an MVP',
    slateId: 'mvp-without-corner',
    content: {
      intro: [
        'MVP has become one of the most abused words in software. It gets used to justify half-built products, ugly shortcuts, and demos that never become systems. Then, a year later, the company is told it needs a full rewrite because “we were just doing an MVP.”',
        'That is not what an MVP is for. A good MVP is the smallest honest version of the real system: enough to put in front of real users, doing real work, on production data. Small does not mean disposable. Small means you chose what to defer, on purpose, without lying to yourself about what you are building.',
        'This piece is for product and ops leads with a limited budget who need something useful soon, and who cannot afford to throw away the first version six months from now.',
      ],
      sections: [
        {
          heading: 'MVP, prototype, and pilot are not the same thing',
          blocks: [
            {
              type: 'p',
              text: 'People mix these three up constantly. Each has a different job. Picking the wrong one is how you end up with the wrong estimate, the wrong timeline, and the wrong argument in month four.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Prototype.',
                  body: 'Built to answer a question: will this workflow feel right, will this integration work, will anyone use it on a phone in a cold warehouse? A prototype can be rough. It can run on fake data. It is allowed to be thrown away once you have the answer.',
                },
                {
                  title: 'Pilot.',
                  body: 'A controlled run with a small group on real data for a fixed period. You are testing adoption and failure modes before you widen the rollout. A pilot can be built on MVP-quality code, but the goal is learning, not permanence.',
                },
                {
                  title: 'MVP.',
                  body: 'The first production slice of the system you intend to keep. Real users, real data, real hosting. You cut features, not foundations. What ships should be extendable without a rewrite if phase two goes ahead.',
                },
              ],
            },
            {
              type: 'p',
              text: 'If you only need to learn whether an idea works, say prototype. If you need something your team will run the business on next quarter, say MVP and scope accordingly. Mixing the words mixes the expectations, and that is where trust breaks down.',
            },
          ],
        },
        {
          heading: 'What to cut, and what to protect',
          blocks: [
            {
              type: 'p',
              text: 'Cutting scope is the whole game. The mistake is cutting the wrong layer. Polish, reports, and edge cases are fair game. Architecture, data model, and auth are usually not.',
            },
            {
              type: 'lead',
              text: 'Safe to defer in v1',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Nice dashboards.',
                  body: 'A simple table with filters beats a chart wall nobody opens.',
                },
                {
                  title: 'Rare edge cases.',
                  body: 'Handle the path 90 percent of users take. Document the rest for manual handling until volume justifies automation.',
                },
                {
                  title: 'Secondary roles.',
                  body: 'Launch with one user type doing one job. Add the warehouse view or the manager approval loop in phase two.',
                },
                {
                  title: 'Cosmetic perfection.',
                  body: 'Clean and clear beats flashy. You are not launching a marketing site.',
                },
                {
                  title: 'Automations you have not validated.',
                  body: 'A human step in the loop is fine for v1 if it keeps the system understandable.',
                },
              ],
            },
            {
              type: 'lead',
              text: 'Protect even when the budget is tight',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Data model.',
                  body: 'Names, relationships, and history. Getting these wrong means painful migrations later. Sketch the entities you will still need at scale, even if v1 only uses half of them.',
                },
                {
                  title: 'Authentication and permissions.',
                  body: 'Even a simple role model is cheaper to build early than to bolt on after twelve months of “everyone is admin.”',
                },
                {
                  title: 'Integration boundaries.',
                  body: 'How you talk to the accounting system or the CRM. A thin, well-defined connector beats a tangle of one-off scripts.',
                },
                {
                  title: 'Audit trail for anything regulated or financial.',
                  body: 'If you will need it eventually, design for it now. Retrofitting logs is miserable.',
                },
                {
                  title: 'Deployment and environments.',
                  body: 'Staging, backups, a path to production that does not live on someone’s laptop. Boring infrastructure is part of the MVP if the MVP is real.',
                },
              ],
            },
            {
              type: 'p',
              text: 'A useful question in every scoping meeting: if we never get phase two funding, would we still be glad we built v1 this way? If the answer is no, you are building a prototype and should price and plan it as one.',
            },
          ],
        },
        {
          heading: 'Phasing without rewrites',
          blocks: [
            {
              type: 'p',
              text: 'Good phasing feels like uncovering layers, not throwing away floors. Each phase should add capability to the same core, not fork into a parallel system nobody maintains.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Slice by user job, not by screen count.',
                  body: 'Phase one: field tech logs an inspection. Phase two: manager approves and billing pulls from it. Same record, new views and rules. Not a second app.',
                },
                {
                  title: 'Name what each phase unlocks.',
                  body: '“Phase two” should mean a specific outcome, not “everything we ran out of time for.”',
                },
                {
                  title: 'Keep one database, one auth system, one deployment.',
                  body: 'Multiple stacks for multiple phases is how SMEs end up paying twice.',
                },
                {
                  title: 'Budget phase two before you start phase one.',
                  body: 'Not the exact dollars. The rough shape. If there is no credible path to phase two, scope phase one as a complete product that stands alone.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Draw a simple diagram: boxes for user groups, arrows for data flow, shaded areas for “this phase” vs “later.” If the diagram needs a second diagram to explain phase two, the phasing is probably fantasy.',
            },
          ],
        },
        {
          heading: 'Acceptance criteria that prevent scope fog',
          blocks: [
            {
              type: 'p',
              text: '“Done” is where MVPs go to argue. Write acceptance criteria before build starts, in language a non-developer can verify in an afternoon.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Behaviour, not adjectives.',
                  body: '“User can submit a form offline and it syncs when back on Wi-Fi” beats “works well on mobile.”',
                },
                {
                  title: 'Real data volumes.',
                  body: '“Handles last month’s actual export file without timing out” beats “performant.”',
                },
                {
                  title: 'Named roles.',
                  body: '“Warehouse lead can reassign a location; viewer cannot” beats “role-based access.”',
                },
                {
                  title: 'Failure cases.',
                  body: 'What happens when the integration is down, when validation fails, when someone duplicates a record. Silence is not acceptance.',
                },
                {
                  title: 'Out of scope, listed explicitly.',
                  body: 'The features you are not shipping in v1 should appear in the same document as the ones you are. That is how you stop “I thought that was included.”',
                },
              ],
            },
            {
              type: 'p',
              text: 'Attach the criteria to the brief and the quote. When scope creep arrives dressed as a small tweak, you have a shared reference that is not memory.',
            },
          ],
        },
        {
          heading: 'When “phase 2” is a lie',
          blocks: [
            {
              type: 'p',
              text: 'Phase two is sometimes a polite fiction: a way to win the deal now and defer the hard conversation about money until everyone is emotionally invested. A few signs the phasing story will not hold.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Phase one is unusable without phase two.',
                  body: 'If v1 does not deliver value on its own, it is not an MVP. It is a down payment on a gamble.',
                },
                {
                  title: 'Nobody has budget authority for phase two.',
                  body: '“We will find the money later” is not a plan. Later arrives with new priorities.',
                },
                {
                  title: 'Phase two scope is “everything else.”',
                  body: 'If you cannot name it, you cannot price it, and it will not happen on schedule.',
                },
                {
                  title: 'The technical foundation assumes phase two that may never come.',
                  body: 'Over-building for a future that is uncertain is its own failure mode. Build extendable, not empty.',
                },
                {
                  title: 'Success metrics only exist for the full vision.',
                  body: 'If you cannot measure whether phase one worked, you will not get a honest yes for phase two.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Honest phasing sounds smaller. “We will ship logging and billing export in nine weeks. If adoption hits X, we scope approvals next.” That is a plan you can fund and defend.',
            },
          ],
        },
        {
          heading: 'A scoping checklist before you sign',
          blocks: [
            {
              type: 'p',
              text: 'Run this with your shop before the contract is inked. It takes an hour and saves a season of regret.',
            },
            {
              type: 'list',
              items: [
                {
                  title: '1. Are we building an MVP, a prototype, or a pilot?',
                  body: 'One word. Agreed definition.',
                },
                {
                  title: '2. What job does v1 complete for a real user?',
                  body: 'In one sentence, without mentioning future phases.',
                },
                {
                  title: '3. What foundations are protected in the estimate?',
                  body: 'Data model, auth, integrations, ops. Named explicitly.',
                },
                {
                  title: '4. What is explicitly out of v1?',
                  body: 'Written down, not implied.',
                },
                {
                  title: '5. What are the acceptance criteria?',
                  body: 'Testable by you, not only by the dev team.',
                },
                {
                  title: '6. If phase two never happens, is v1 still worth what we paid?',
                  body: 'If no, rescope or reprice.',
                },
              ],
            },
            {
              type: 'p',
              text: 'A shop that pushes back on fuzzy scope is doing you a favour. A shop that says yes to everything and cuts foundations is selling you a prototype at MVP prices.',
            },
          ],
        },
      ],
      closing: [
        'The point of an MVP is not to be small for its own sake. It is to be honest: about what users need first, about what must last, and about what you are willing to defer without fooling yourself.',
        'We build software by hand for SMEs, and most of our best projects start with a tight first slice that still feels like the real thing. If you are scoping an MVP and want a plain read on what to cut and what to protect, we are glad to walk through it with you. Bring the one-sentence job and the list of what you are tempted to defer. We will start there.',
      ],
    },
  },
  {
    slug: 'food-systems-traceability-software-sme',
    title: 'Food systems software: traceability without the enterprise theatre',
    description:
      'Practical traceability for food-sector SMEs: what it means on the floor, data you already have, common failures, and where to start before enterprise software or AI.',
    excerpt:
      'Traceability fails when it is bolted on at the end. For processors and agrifood SMEs, it works when it matches how product actually moves from field to buyer.',
    category: 'Sector',
    tags: [
      'food systems',
      'traceability',
      'agrifood',
      'supply chain',
      'SME',
      'compliance',
      'Québec',
    ],
    author: {
      name: 'Vinerals Technologies',
      role: 'Workshop notes',
    },
    publishedDate: '2026-07-12',
    readTime: '8 min read',
    featured: true,
    status: 'published',
    image: '/article-food-traceability.jpg',
    imageAlt: 'Lot tags, field notebook, and batch labels on a wooden desk',
    navTitle: 'Food traceability',
    slateId: 'food-traceability',
    content: {
      intro: [
        'Traceability in food systems sounds like something only large exporters need. Then a buyer asks where a batch came from, a regulator asks for records you cannot produce in one afternoon, or a recall forces you to trace a lot through three spreadsheets and a WhatsApp thread.',
        'At that point, traceability stops being a buzzword and becomes a Tuesday. The question is not whether you need it. The question is whether your system matches how product actually moves through your operation, or whether you are trying to tape an enterprise portal onto a process that still runs on paper and memory.',
        'This piece is for food processors, co-ops, and agrifood SMEs who need practical chain-of-custody without buying a platform built for a company ten times their size.',
      ],
      sections: [
        {
          heading: 'What traceability means in practice for an SME',
          blocks: [
            {
              type: 'p',
              text: 'Traceability is the ability to follow a product, or a lot, backward and forward through your chain: where inputs came from, what happened to them on your floor, and where shipments went. That is it. Everything else is packaging.',
            },
            {
              type: 'p',
              text: 'For a small or mid-sized operator, the useful version is usually narrower than the enterprise brochure suggests.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'One step back, one step forward.',
                  body: 'You can name your immediate supplier and your immediate customer for any lot you shipped. For many SMEs, that is the regulatory and commercial baseline.',
                },
                {
                  title: 'Batch or lot identity that holds together.',
                  body: 'A code on the label ties to a record in your system. Mixing, splitting, and repacking create new lots with clear parentage, not mystery blends.',
                },
                {
                  title: 'Events, not just inventory counts.',
                  body: 'Received, washed, cut, packed, held, shipped. The story matters as much as the quantity.',
                },
                {
                  title: 'Records you can pull in hours, not weeks.',
                  body: 'When a buyer or inspector asks, you are not reconstructing the month from three people’s notebooks.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Export rules, buyer audits, and sector programmes may ask for more depth over time. Start with the chain you actually run today. Software that does not match that chain will be fought every day until someone goes back to the spreadsheet.',
            },
          ],
        },
        {
          heading: 'Data you already have vs data you invent',
          blocks: [
            {
              type: 'p',
              text: 'Most agrifood SMEs already generate traceability data. It just lives in the wrong shape: harvest tags, receiving slips, production logs, cold-room sheets, packing lists, invoices. The work is often collecting and linking, not inventing information from nothing.',
            },
            {
              type: 'lead',
              text: 'Data you probably already have',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Receiving.',
                  body: 'Supplier name, delivery date, quantity, sometimes a grower or field code on the tag.',
                },
                {
                  title: 'Production.',
                  body: 'What went in, what came out, on which day, in which run. Even handwritten shift logs count if they are consistent.',
                },
                {
                  title: 'Shipping.',
                  body: 'Customer, lot or product code, quantity, ship date. Often half in the ERP and half on the loading dock clipboard.',
                },
                {
                  title: 'Quality holds and corrections.',
                  body: 'The batch that sat in quarantine, the relabel, the rework. These are traceability events too.',
                },
              ],
            },
            {
              type: 'lead',
              text: 'Data people invent because the process is broken',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Retroactive lot numbers.',
                  body: 'Assigned after the fact because nobody recorded them at receiving.',
                },
                {
                  title: 'Generic “mixed lot” buckets.',
                  body: 'Used so often they stop meaning anything.',
                },
                {
                  title: 'Duplicate master data.',
                  body: 'The same supplier under four spellings, the same product with two codes.',
                },
                {
                  title: 'Narrative traceability.',
                  body: '“Ask Marie, she was on shift that week.” Marie is invaluable. She is not a system.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Good software starts by mirroring the honest path product takes, then makes that path easier to record. Bad software asks you to describe an ideal process you do not run, then blames the floor when adoption fails.',
            },
          ],
        },
        {
          heading: 'Common failure modes',
          blocks: [
            {
              type: 'p',
              text: 'We see the same patterns in food-sector projects, whether the client came to us or arrived after a failed rollout elsewhere.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'The spreadsheet cathedral.',
                  body: 'Years of tabs, macros, and colour codes only one person understands. It works until that person is on vacation or the file corrupts. Then traceability is whatever can be reconstructed.',
                },
                {
                  title: 'The buyer portal bolt-on.',
                  body: 'A large customer demands their format. Someone builds a one-off export or a separate portal just for them. Then a second buyer wants a different format. You are maintaining three truths.',
                },
                {
                  title: 'Enterprise software, SME operation.',
                  body: 'A platform built for global traceability, sold with a demo that skips the part where someone scans every crate on a wet loading dock at 6am. Licence fees match the brochure. Adoption matches reality.',
                },
                {
                  title: 'Barcode theatre.',
                  body: 'Labels printed, scanners bought, then used for the first week because the workflow around them is slower than pen and paper.',
                },
                {
                  title: 'Traceability as a reporting layer only.',
                  body: 'Pretty dashboards built on data nobody enters at the source. The report exists. The chain does not.',
                },
              ],
            },
            {
              type: 'p',
              text: 'The failure is rarely technology alone. It is a mismatch between how product moves and how the system expects people to record it. Fix the match first. Tools second.',
            },
          ],
        },
        {
          heading: 'What to build first',
          blocks: [
            {
              type: 'p',
              text: 'A sensible first version for most SMEs is smaller than the RFP template suggests, and more useful than a pilot that only works in the office.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Lot identity at the moments that matter.',
                  body: 'Receiving, transformation, and shipping. Capture there, not in a separate “traceability module” at the end of the day.',
                },
                {
                  title: 'Simple parent-child rules.',
                  body: 'When lots combine or split, the system records what went into what. No black-box blending.',
                },
                {
                  title: 'One export shape that answers most questions.',
                  body: 'A standard report or file you can send to buyers and regulators, with filters by date, lot, and customer.',
                },
                {
                  title: 'Search that works for ops, not only for auditors.',
                  body: '“Where did this lot go?” and “What came in on Tuesday?” answered in under a minute.',
                },
                {
                  title: 'Offline or low-friction capture where the work happens.',
                  body: 'Cold rooms, fields, loading bays. If recording is harder than the task, the task wins.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Defer the glossy customer portal, the blockchain slide, and the multi-year integration map until the internal chain is solid. Buyers care that you can answer accurately, not that you bought the most impressive noun.',
            },
          ],
        },
        {
          heading: 'Where AI helps later, not first',
          blocks: [
            {
              type: 'p',
              text: 'Food traceability is a tempting place to put AI because the documents are messy: handwritten tags, PDF certificates, photos, emails. Models can help read those. They cannot replace a chain that was never recorded.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Useful later.',
                  body: 'Pulling fields off supplier certificates into structured records, with a human checking the uncertain ones. Flagging when a scanned tag does not match the lot in the system.',
                },
                {
                  title: 'Not a starting point.',
                  body: 'Predicting contamination risk, automating recall decisions, or running customer chat over traceability data you do not have yet.',
                },
                {
                  title: 'The order of operations.',
                  body: 'First: one reliable internal record per lot. Second: clean enough exports for the buyers you serve. Third: assistive reading and search where volume justifies it.',
                },
              ],
            },
            {
              type: 'p',
              text: 'If your traceability problem is really a data capture problem, AI will automate confusion. Fix capture first. Models are seasoning, not the meal.',
            },
          ],
        },
        {
          heading: 'How we approach food-systems work',
          blocks: [
            {
              type: 'p',
              text: 'We are a Montréal solidarity cooperative that builds software by hand. We have done work in agrifood and adjacent sectors. We are not a traceability vendor with a single product to fit every chain. We are a shop that listens to how product moves, then builds the smallest honest system that makes that movement legible.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Walk the floor first.',
                  body: 'Receiving, processing, packing, shipping. We want to see where labels are applied, where data is invented, and where people already cheat the official process.',
                },
                {
                  title: 'Start from existing records.',
                  body: 'Tags, forms, exports. Software should reduce double entry, not add a parallel universe.',
                },
                {
                  title: 'Ship something the ops team will use in week one.',
                  body: 'Traceability that only exists for audits is traceability that fails audits under pressure.',
                },
                {
                  title: 'Leave room for buyer-specific formats without forking the truth.',
                  body: 'One internal chain, many export views.',
                },
                {
                  title: 'Say when custom is the wrong answer.',
                  body: 'Sometimes a sector platform or a tightened spreadsheet plus training is enough for the next two years. We would rather say that early.',
                },
              ],
            },
            {
              type: 'p',
              text: 'We do not promise compliance on your behalf. Rules change, buyers differ, and inspectors ask their own questions. We promise software that makes your actual chain easier to show, without enterprise theatre you have to hire a team to maintain.',
            },
          ],
        },
        {
          heading: 'A short checklist before you buy or build',
          blocks: [
            {
              type: 'p',
              text: 'Run this internally before you sign with anyone, us included.',
            },
            {
              type: 'list',
              items: [
                {
                  title: '1. Can we trace one real lot today, on paper, end to end?',
                  body: 'If not, software will not fix the gap. Process might.',
                },
                {
                  title: '2. Where are lots born, split, and buried in our operation?',
                  body: 'Those moments are where capture must live.',
                },
                {
                  title: '3. What do our top three buyers actually ask for?',
                  body: 'Build to that, not to a generic global standard.',
                },
                {
                  title: '4. Who will enter data at the source, and what will we remove to make room?',
                  body: 'Adoption is a headcount and habit question.',
                },
                {
                  title: '5. What is v1 success?',
                  body: '“Pull a chain-of-custody report in ten minutes” beats “full digital transformation.”',
                },
              ],
            },
          ],
        },
      ],
      closing: [
        'Traceability is not a luxury feature for food-sector SMEs anymore. It is part of selling, operating, and sleeping at night when something goes wrong. It does not require an enterprise platform. It requires a chain that matches reality, recorded where the work happens.',
        'If you are in food systems and trying to figure out whether to fix the spreadsheet, buy a platform, or build something that fits your chain, we are glad to walk through it with you. Bring one lot you shipped last month and how you traced it. We will start there.',
      ],
    },
  },
  {
    slug: 'is-your-data-ready-for-ai-checklist',
    title: 'Is your data ready for AI? A pre-flight checklist',
    description:
      'A practical pre-flight checklist for SMEs before AI projects: data sources, quality, volume, privacy under Law 25, pipelines vs exports, and clear go/no-go signals.',
    excerpt:
      'Models amplify whatever you feed them. Before you buy models or hype retainers, run this plain checklist on sources, quality, access, privacy, and whether your data is a pipeline or a pile of exports.',
    category: 'AI honesty',
    tags: [
      'AI',
      'data quality',
      'data readiness',
      'privacy',
      'Law 25',
      'SME',
      'checklist',
      'Québec',
    ],
    author: {
      name: 'Vinerals Technologies',
      role: 'Workshop notes',
    },
    publishedDate: '2026-07-12',
    readTime: '8 min read',
    featured: true,
    status: 'published',
    image: '/article-data-ready-ai.jpg',
    imageAlt: 'Data export sheets and checklist clipboard on a wooden desk',
    navTitle: 'Data ready for AI?',
    slateId: 'data-ready-for-ai',
    content: {
      intro: [
        'A lot of AI projects fail before the model does anything interesting. They fail in the data: scattered exports, inconsistent labels, access nobody can get, privacy rules nobody checked until legal saw the proposal.',
        'Vendors will sell you a pilot anyway. Some will wrap the data cleanup inside a large retainer and call it “AI transformation.” The model is the easy part now. Your data is the part that is yours, and the part that decides whether any of this works.',
        'This is a pre-flight checklist for ops leads and founders who have a specific AI use case in mind and want to know, honestly, whether the ground is solid enough to spend money. No fake thresholds. No magic numbers. Just questions worth answering on paper before anyone trains anything.',
      ],
      sections: [
        {
          heading: 'Sources, ownership, and access',
          blocks: [
            {
              type: 'p',
              text: 'Start with a simple inventory. Not a data lake strategy. A list on one page of where the information for this project actually lives today.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Name every source.',
                  body: 'CRM, ERP, support inbox, shared drive, supplier portal, paper forms someone types up on Fridays. If it feeds the use case, it goes on the list.',
                },
                {
                  title: 'Say who owns each source.',
                  body: 'Department, vendor, individual. Ownership tells you who can grant access and who can break the integration next quarter.',
                },
                {
                  title: 'Confirm you can get it out.',
                  body: 'API, scheduled export, manual download, screenshot. Be honest about manual steps. They have a labour cost and an error cost.',
                },
                {
                  title: 'Check admin access.',
                  body: 'If the only person who can pull the export is leaving in April, that is a blocker, not a detail.',
                },
                {
                  title: 'Write down what “one record” means.',
                  body: 'A customer, an order, a document, a ticket. AI projects stumble when the unit of data is undefined.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Pre-flight pass: you can pull a sample from every source on the list without a week of IT tickets. Pre-flight fail: the data you need is “in the system somewhere” and nobody has exported it in a year.',
            },
          ],
        },
        {
          heading: 'Quality, labels, and volume',
          blocks: [
            {
              type: 'p',
              text: 'People want a magic minimum: ten thousand rows, six months of history, 95 percent accuracy. Real projects are messier. What matters is whether the data fits the job you are asking the model to do.',
            },
            {
              type: 'lead',
              text: 'Quality questions',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Are the same things named the same way?',
                  body: 'Customer names, product codes, categories. If four spellings mean one client, the model learns the mess.',
                },
                {
                  title: 'Are fields filled when they matter?',
                  body: 'Optional fields that everyone skips are optional for a reason. Either make them required in the process or stop expecting the model to use them.',
                },
                {
                  title: 'Do examples include the hard cases?',
                  body: 'Scanned PDFs, blurry photos, bilingual labels, the supplier format that only shows up in November. Training only on clean samples is how pilots look brilliant and production falls apart.',
                },
                {
                  title: 'Is there a human-verified answer to learn from?',
                  body: 'For classification or extraction, you need examples where someone already decided the right label or the right fields. Without that, you have text, not training data.',
                },
              ],
            },
            {
              type: 'lead',
              text: 'Volume without fake thresholds',
            },
            {
              type: 'p',
              text: 'Ask relative to the task, not against a blog post.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Document extraction.',
                  body: 'Enough real documents of each type to see variation, plus a few hundred labeled examples if you want the model to beat a simple template. The ugly variants matter more than the count.',
                },
                {
                  title: 'Sorting and routing.',
                  body: 'Enough past examples of each category to see overlap. If two categories look identical in the data, the model will not separate them either.',
                },
                {
                  title: 'Search over your material.',
                  body: 'Less about row count, more about whether the content is indexed, current, and permissioned.',
                },
                {
                  title: 'Anything predictive.',
                  body: 'Usually needs longer, cleaner history than people expect. If you have three months of patchy records, you are not ready for forecasting. You are ready for a data cleanup project.',
                },
              ],
            },
          ],
        },
        {
          heading: 'Privacy, consent, and sector rules',
          blocks: [
            {
              type: 'p',
              text: 'This section is boring until it is the reason legal shuts the project down. For Québec SMEs, Law 25 is part of the pre-flight, not a launch-day checkbox.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'What personal information is in the data?',
                  body: 'Names, emails, health information, employee records, customer children’s camp registrations. Name it explicitly.',
                },
                {
                  title: 'Do you have a lawful basis to use it for this purpose?',
                  body: 'Consent, contract, legitimate interest. “We always had this data” is not the same as “we can feed it to a model for this new task.”',
                },
                {
                  title: 'Where will processing happen?',
                  body: 'Your servers, a Canadian cloud region, a vendor in another country. Location matters for contracts and for customer trust.',
                },
                {
                  title: 'Will data leave your environment?',
                  body: 'Third-party APIs, hosted fine-tuning, support staff at the vendor reading samples. Each path needs a decision, not a shrug.',
                },
                {
                  title: 'Sector-specific rules.',
                  body: 'Health, finance, education, minors. Some data should never be in a general model workflow without specialist review.',
                },
                {
                  title: 'Retention and deletion.',
                  body: 'If the model provider keeps copies for training or support, you need to know how to get them deleted when a client asks.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Pre-flight pass: legal or a qualified privacy lead has seen a one-page summary of what data goes where. Pre-flight fail: “we will figure out compliance after the pilot.”',
            },
          ],
        },
        {
          heading: 'Pipelines vs one-off exports',
          blocks: [
            {
              type: 'p',
              text: 'A pile of CSV files on a drive is data. It is not a system. AI that needs fresh input every day cannot run on a monthly export someone forgets to run.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'One-off exports.',
                  body: 'Fine for a two-week pilot to see if document extraction works on last quarter’s invoices. Not fine for production without a plan to refresh.',
                },
                {
                  title: 'Scheduled exports.',
                  body: 'Nightly or weekly drops to a known location. Better, if someone monitors failures and the schema does not change silently.',
                },
                {
                  title: 'APIs and event streams.',
                  body: 'Data arrives when things happen. More engineering upfront, less heroics later.',
                },
                {
                  title: 'Human-in-the-loop capture.',
                  body: 'Sometimes the right “pipeline” is a simple internal tool where people confirm labels as they work. That is valid if you count the labour honestly.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Match the pipeline to the freshness the task needs. Search over policies that change monthly can use a monthly sync. Fraud flags on live transactions cannot use a spreadsheet from Tuesday.',
            },
            {
              type: 'p',
              text: 'If the pre-flight inventory only works with manual exports, budget the cleanup and automation as part of the project. Do not hide it inside “model tuning.”',
            },
          ],
        },
        {
          heading: 'Grounding, evaluation, and who checks the output',
          blocks: [
            {
              type: 'p',
              text: 'Before you go live, you need a way to know when the model is wrong and who catches it. This is part of data readiness because the evaluation set is data too.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Holdout examples.',
                  body: 'Real cases the model has not seen, labeled the same way as training data. Run them before you trust a demo.',
                },
                {
                  title: 'Failure categories.',
                  body: 'Wrong field, wrong class, hallucinated clause, missed edge case. Track them separately instead of one “accuracy” number.',
                },
                {
                  title: 'Human review path.',
                  body: 'Who sees low-confidence outputs? How fast? What do they do with them? A model without a review path is a liability.',
                },
                {
                  title: 'Rollback.',
                  body: 'If quality drops next month, can you turn it off without breaking the workflow? Readiness includes an exit ramp.',
                },
              ],
            },
          ],
        },
        {
          heading: 'Go / no-go checklist',
          blocks: [
            {
              type: 'p',
              text: 'Score each line yes or no. A few nos does not always kill the project. It tells you what to fix first and what to stop pretending is ready.',
            },
            {
              type: 'list',
              items: [
                {
                  title: '1. We named the specific task the model will do.',
                  body: 'One job, not a platform vision.',
                },
                {
                  title: '2. We listed every data source and can pull a sample this week.',
                  body: 'Without heroics.',
                },
                {
                  title: '3. We have labeled or verifiable examples for that task.',
                  body: 'Or we budgeted time to create them.',
                },
                {
                  title: '4. The messy real-world variants are in the sample.',
                  body: 'Not only the clean ones.',
                },
                {
                  title: '5. Privacy and sector rules are reviewed for this use.',
                  body: 'Documented in plain language.',
                },
                {
                  title: '6. We know how data stays fresh after pilot.',
                  body: 'Pipeline, schedule, or human process.',
                },
                {
                  title: '7. We have a human review plan for wrong outputs.',
                  body: 'With named owners.',
                },
                {
                  title: '8. We measured the baseline without AI.',
                  body: 'Time, errors, cost. So we can tell if the project helped.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Eight yes answers: you are in pilot territory. Five to seven: fix the gaps or narrow the task. Below five: you likely have a data and operations project wearing an AI hat. That project may be worth doing. It is probably not worth buying models yet.',
            },
          ],
        },
        {
          heading: 'What to do when you are not ready',
          blocks: [
            {
              type: 'p',
              text: 'Not ready is a normal result. It is better than a pilot that teaches you the same thing for ten times the price.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Narrow the task.',
                  body: 'One document type, one inbox, one report. Smaller scope often drops the data bar to something you can clear in a month.',
                },
                {
                  title: 'Fix capture first.',
                  body: 'A simple internal form or integration that makes the record right at the source beats a model guessing from incomplete exports.',
                },
                {
                  title: 'Run a labeling sprint.',
                  body: 'Two weeks of structured human labeling on past cases. Unglamorous, often enough to unlock the pilot.',
                },
                {
                  title: 'Improve search before chat.',
                  body: 'If the real problem is finding answers in existing docs, structured search plus good metadata may solve it without a model.',
                },
                {
                  title: 'Postpone predictive work.',
                  body: 'If history is short or dirty, descriptive tools and dashboards come first.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Saying “not yet” is not anti-AI. It is how you avoid paying model prices for spreadsheet work.',
            },
          ],
        },
      ],
      closing: [
        'Data readiness is not a one-time certification. Systems change, vendors change fields, and last year’s clean export becomes this year’s mixed-up CSV. The checklist is worth rerunning whenever the use case, the source, or the privacy context shifts.',
        'We build software by hand for SMEs, and a fair share of our AI work starts with no model at all: inventories, pipelines, labeling, and the quiet fixes that make a pilot worth running. If you have a use case in mind and want a plain pre-flight read on the data side, we are glad to walk through this list with you. Bring your source list and one messy sample. We will start there.',
      ],
    },
  },
  {
    slug: 'five-year-cost-saas-vs-custom',
    title: 'Five-year cost: SaaS vs custom (without the spreadsheet fantasy)',
    description:
      'How SMEs can compare five-year SaaS and custom software TCO with honest ranges: hidden costs, creep patterns, post-launch maintenance, and when the expensive option wins.',
    excerpt:
      'Monthly SaaS feels cheap until workarounds, seats, and lock-in show up on the bill. Here is how to think in five-year totals without pretending the spreadsheet is precise.',
    category: 'Decisions',
    tags: [
      'TCO',
      'SaaS',
      'custom software',
      'cost comparison',
      'budgeting',
      'SME',
      'five-year cost',
      'Québec',
    ],
    author: {
      name: 'Vinerals Technologies',
      role: 'Workshop notes',
    },
    publishedDate: '2026-07-12',
    readTime: '9 min read',
    featured: true,
    status: 'published',
    image: '/article-saas-vs-custom-tco.jpg',
    imageAlt: 'Five-year cost sketch and calculator on a wooden desk',
    navTitle: 'SaaS vs custom TCO',
    slateId: 'saas-vs-custom-tco',
    content: {
      intro: [
        'The SaaS pitch is monthly. The custom quote is upfront. So the meeting ends with someone multiplying the subscription by twelve, comparing it to the build price, and declaring custom insane before lunch is over.',
        'That math leaves out most of what you will actually pay. SaaS stacks grow seats, add-ons, connectors, and workarounds. Custom software has a bill after launch too. Five years is where the picture gets honest, if you count everything and stop pretending one decimal place means certainty.',
        'This piece is a TCO frame for finance-aware operators: what to include, how SaaS creeps, what custom really costs after go-live, a worked example in ranges, and when the line that looks expensive on day one is cheaper by year five.',
      ],
      sections: [
        {
          heading: 'What to count (and what people forget)',
          blocks: [
            {
              type: 'p',
              text: 'Total cost of ownership is not a vendor invoice. It is every dollar and every hour the choice costs you over the period you care about. For most SMEs comparing SaaS and custom, five years is a useful horizon: long enough for subscriptions to compound, short enough that you are not forecasting fiction.',
            },
            {
              type: 'lead',
              text: 'On the SaaS side, count all of this',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Core licences.',
                  body: 'Per seat, per site, per module. Use your realistic headcount in year three, not today’s.',
                },
                {
                  title: 'Annual increases.',
                  body: 'Plan for renewal bumps. Five to eight percent per year is a common band unless you have a fixed contract.',
                },
                {
                  title: 'Adjacent tools.',
                  body: 'The reporting add-on, the integration platform, the form builder, the BI layer. Stacks rarely stay one product.',
                },
                {
                  title: 'Implementation and migration.',
                  body: 'Setup fees, data migration, consultant hours, the first year of tuning.',
                },
                {
                  title: 'Internal labour.',
                  body: 'Admin time, training new hires, managing vendor tickets, building exports because the API costs extra.',
                },
                {
                  title: 'Workarounds.',
                  body: 'Spreadsheets, manual re-entry, duplicate data entry because the SaaS does not fit the process. Labour has a cost even when it is not on the vendor’s invoice.',
                },
                {
                  title: 'Exit cost.',
                  body: 'Export fees, migration to the next tool, double-running systems during cutover. Lock-in is a line item, just often paid late.',
                },
              ],
            },
            {
              type: 'lead',
              text: 'On the custom side, count all of this',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Initial build.',
                  body: 'The quote for design, development, testing, and launch.',
                },
                {
                  title: 'Hosting and infrastructure.',
                  body: 'Cloud, backups, monitoring, certificates. Often CAD $500 to $3,000 a month depending on scale and compliance.',
                },
                {
                  title: 'Maintenance and change.',
                  body: 'Security patches, dependency updates, small feature requests. Budget fifteen to twenty-five percent of the original build per year as a planning band, not a promise.',
                },
                {
                  title: 'Internal product ownership.',
                  body: 'Someone steers priorities, accepts work, tests releases. It can be a fraction of a role, but zero is how systems rot.',
                },
                {
                  title: 'Major enhancements.',
                  body: 'New modules, new integrations, regulatory changes. Phase two is real money. Decide upfront whether it is funded or deferred.',
                },
              ],
            },
            {
              type: 'p',
              text: 'If an item is unknown, use a range and note the assumption. Ranges are honest. False precision is how bad decisions get stamped with a spreadsheet.',
            },
          ],
        },
        {
          heading: 'How SaaS cost creep actually happens',
          blocks: [
            {
              type: 'p',
              text: 'SaaS rarely jumps in one dramatic line item. It creeps through a dozen small yeses.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Seat growth.',
                  body: 'You hired. Every new user is another monthly tick. Features tied to headcount scale even when usage does not.',
                },
                {
                  title: 'Tier upgrades.',
                  body: 'The report you need sits in the next plan. So does the API access. So does SSO.',
                },
                {
                  title: 'Module sprawl.',
                  body: 'Inventory module, field service module, advanced analytics. Each reasonable alone. Together they are a second software budget.',
                },
                {
                  title: 'Integration tax.',
                  body: 'Middleware, consultant hours, brittle Zapier chains that become production infrastructure by accident.',
                },
                {
                  title: 'Storage and usage fees.',
                  body: 'Documents, photos, API calls, automated jobs. Fine at low volume. Surprising at operational scale.',
                },
                {
                  title: 'Professional services.',
                  body: 'Annual health checks, reimplementation after you outgrow the config, training every time the UI changes.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Creep is not a moral failure. It is the business model. Your defence is to model year three and year five explicitly, not just year one’s introductory price.',
            },
          ],
        },
        {
          heading: 'What custom costs after launch',
          blocks: [
            {
              type: 'p',
              text: 'Custom software is not free once it ships. The difference is where the money goes: you are paying for change you choose, not for seats on someone else’s roadmap.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Keep-the-lights-on work.',
                  body: 'Hosting, monitoring, security updates, bug fixes. Predictable if someone owns it.',
                },
                {
                  title: 'Dependency drift.',
                  body: 'Libraries age, browsers change, APIs deprecate. Ignored maintenance becomes an emergency rewrite.',
                },
                {
                  title: 'Evolving the product.',
                  body: 'New rules, new buyer requirements, new internal process. Custom shines when the change is yours. It still costs labour.',
                },
                {
                  title: 'Knowledge continuity.',
                  body: 'Documentation and handover matter. If only one contractor knows the deployment, you pay a risk premium every year.',
                },
              ],
            },
            {
              type: 'p',
              text: 'A useful planning split: separate “run” from “improve.” Run is non-negotiable. Improve is where ROI lives. If you cannot fund run, custom is a bad bet no matter how good the build.',
            },
          ],
        },
        {
          heading: 'A worked example in ranges, not false precision',
          blocks: [
            {
              type: 'p',
              text: 'Imagine a company with about fifty staff running one core operational workflow: scheduling, field data, approvals, and billing export. They are comparing a SaaS vertical platform plus surrounding tools against a custom build focused on the same job.',
            },
            {
              type: 'p',
              text: 'These are directional CAD bands for 2026 planning. Your numbers will move with sector, compliance, and how much of the stack is already in place.',
            },
            {
              type: 'lead',
              text: 'SaaS path, five years',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Years 1 to 2.',
                  body: 'Core platform plus two adjacent tools: roughly CAD $6,000 to $9,000 per month all in once seats and modules land. Implementation and migration: CAD $40,000 to $80,000 one-time.',
                },
                {
                  title: 'Years 3 to 5.',
                  body: 'Renewal increases and headcount: drift toward CAD $8,000 to $12,000 per month. Integration maintenance and internal admin: another CAD $30,000 to $50,000 per year in labour or consultants.',
                },
                {
                  title: 'Five-year total (illustrative).',
                  body: 'Roughly CAD $550,000 to $850,000, plus exit migration if you leave.',
                },
              ],
            },
            {
              type: 'lead',
              text: 'Custom path, five years',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Year 1 build.',
                  body: 'CAD $150,000 to $220,000 for a focused system with integrations and launch support.',
                },
                {
                  title: 'Years 2 to 5 run.',
                  body: 'Hosting CAD $12,000 to $36,000 per year. Maintenance at fifteen to twenty-five percent of build: CAD $22,000 to $55,000 per year.',
                },
                {
                  title: 'Enhancements.',
                  body: 'Plan for one meaningful phase: CAD $40,000 to $80,000 spread across the period, or explicitly defer it.',
                },
                {
                  title: 'Five-year total (illustrative).',
                  body: 'Roughly CAD $320,000 to $480,000, with more variance tied to how much you improve versus merely run.',
                },
              ],
            },
            {
              type: 'p',
              text: 'In this shape, custom looks higher in year one and often lower by year five. SaaS looks cheaper early and climbs with seats and modules. The crossover is usually somewhere between year three and year four for teams in this size band, assuming the custom build stays focused.',
            },
            {
              type: 'p',
              text: 'Change one assumption and the picture moves. Thirty staff instead of fifty narrows the gap. Heavy compliance widens custom’s run costs. A SaaS product that fits eighty percent out of the box flattens the SaaS curve. That is why the ranges matter more than the example.',
            },
          ],
        },
        {
          heading: 'When the “expensive” option is cheaper',
          blocks: [
            {
              type: 'p',
              text: 'Upfront price is a storytelling tool. Five-year TCO is closer to economics. Custom tends to win on total cost when several of these are true.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'The workflow is your advantage.',
                  body: 'Software that encodes how you win in the market, not how you file expenses.',
                },
                {
                  title: 'Seat count climbs but value per seat does not.',
                  body: 'You are paying for users who only touch the system twice a week.',
                },
                {
                  title: 'The SaaS stack is already crowded.',
                  body: 'Three subscriptions and middleware to do one job is a tax.',
                },
                {
                  title: 'Integrations are fragile and frequent.',
                  body: 'Every vendor update breaks your chain. Custom can own the connector properly.',
                },
                {
                  title: 'Data ownership and exit matter.',
                  body: 'Migration and export fees are part of the SaaS bill, whether you pay them now or later.',
                },
                {
                  title: 'The process is stable enough to amortize a build.',
                  body: 'You will use the same core workflow for years, not pivot quarterly.',
                },
              ],
            },
            {
              type: 'p',
              text: 'SaaS tends to win on total cost when the job is commodity, the team is small, requirements change constantly, or a mature product already fits without heroic workarounds. That is a good outcome. TCO thinking should make SaaS the honest choice sometimes, not always push custom.',
            },
          ],
        },
        {
          heading: 'How to build the comparison without fantasy',
          blocks: [
            {
              type: 'p',
              text: 'You do not need a forty-tab model. You need the same horizon, the same scope, and visible assumptions.',
            },
            {
              type: 'list',
              items: [
                {
                  title: '1. Name the job once.',
                  body: 'Same workflow, same integrations, same user count trajectory.',
                },
                {
                  title: '2. Use three columns.',
                  body: 'SaaS, custom, hybrid. Hybrid is often the real answer.',
                },
                {
                  title: '3. Model low and high bands.',
                  body: 'Not one number per line. Show what moves the total.',
                },
                {
                  title: '4. Separate one-time and recurring.',
                  body: 'So year-one cash flow is visible, not buried.',
                },
                {
                  title: '5. Include internal hours.',
                  body: 'Even rough estimates. They often decide the winner.',
                },
                {
                  title: '6. Write the assumptions on the page.',
                  body: 'Headcount, renewal rate, maintenance percent, phase two yes or no.',
                },
                {
                  title: '7. Ask what has to be true for each path to win.',
                  body: 'If the SaaS win requires a product that does not exist yet, that is a risk flag, not a plan.',
                },
              ],
            },
            {
              type: 'p',
              text: 'A spreadsheet that survives contact with leadership is one where anyone can point at a line and say “we assumed X.” If nobody can, the number is decoration.',
            },
          ],
        },
        {
          heading: 'A short decision lens after the math',
          blocks: [
            {
              type: 'p',
              text: 'TCO tells you cost. It does not tell you fit. After the bands, run these questions.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Can we fund run costs for the winner?',
                  body: 'SaaS or custom, the recurring line has to be real.',
                },
                {
                  title: 'Does either path depend on heroics?',
                  body: 'One person’s spreadsheet, one brittle integration, one vendor feature on the roadmap.',
                },
                {
                  title: 'What is the cost of being wrong for two years?',
                  body: 'Switching tax, lost data, team fatigue. Sometimes that favours SaaS speed. Sometimes it favours owning the core.',
                },
                {
                  title: 'Are we comparing a product to a project?',
                  body: 'SaaS is renting a product. Custom is commissioning one. The economics differ because the asset differs.',
                },
              ],
            },
          ],
        },
      ],
      closing: [
        'Five-year TCO will not give you a single correct answer. It will give you a clearer argument: what you are paying for, what creeps, what you own, and where the crossover might live if your assumptions hold.',
        'We build software by hand for SMEs, and we spend a fair amount of time telling people to keep the SaaS stack when the math and the fit say so. If you are weighing custom against subscriptions and want someone to stress-test the assumptions without selling you a build, we are glad to walk through the bands with you. Bring the monthly invoices and the quote. We will start there.',
      ],
    },
  },
  {
    slug: 'when-not-to-build-custom-software',
    title: 'When we will tell you not to build custom',
    description:
      'When a software shop should say no to custom work: SaaS wins, org problems, budget mismatches, and what honest counsel looks like instead of selling hours.',
    excerpt:
      'A shop that always says yes is selling hours, not counsel. Here is when we tell SMEs not to build custom, what we offer instead, and what good clients do with a no.',
    category: 'Craft & ownership',
    tags: [
      'custom software',
      'honest counsel',
      'build vs buy',
      'SaaS',
      'project fit',
      'SME',
      'refusal',
      'Québec',
    ],
    author: {
      name: 'Vinerals Technologies',
      role: 'Workshop notes',
    },
    publishedDate: '2026-07-12',
    readTime: '8 min read',
    featured: true,
    status: 'published',
    image: '/article-when-not-to-build.jpg',
    imageAlt: 'Project brief with not-yet note on a consultation desk',
    navTitle: 'When not to build',
    slateId: 'when-not-to-build',
    content: {
      intro: [
        'Custom software is what we do. Saying no to it is part of the job.',
        'That sounds like bad business until you have watched a company spend six figures on software that solved the wrong problem, or rebuilt something that already existed as a subscription, or launched a system nobody inside the company would own after the agency left.',
        'A shop that always says yes is selling hours, not counsel. This piece is about when we decline custom work, what we say instead, and what buyers who want an honest partner should expect from a good no.',
      ],
      sections: [
        {
          heading: 'When SaaS or a process fix should win',
          blocks: [
            {
              type: 'p',
              text: 'The most common reason we say no is simple: the job is already well served by software you can rent, and custom would be ego, not advantage.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Commodity back-office work.',
                  body: 'Payroll, basic accounting, standard CRM, email marketing. Mature products exist. Buy them and spend your craft budget where you are different.',
                },
                {
                  title: 'A good vertical fit you have not tried hard enough.',
                  body: 'Sometimes the right answer is two more weeks evaluating existing tools, not six months building.',
                },
                {
                  title: 'The pain is process, not software.',
                  body: 'Four approvals for a two-minute task will hurt in any system. Fix the steps first, then see what tool fits.',
                },
                {
                  title: 'The team is tiny and the need is generic.',
                  body: 'Below a certain scale, subscriptions win on total cost and speed. Custom earns its keep when the workflow is specific and stable.',
                },
                {
                  title: 'You need speed this quarter more than fit next year.',
                  body: 'Renting a close-enough tool while you learn is valid. Custom is a commitment.',
                },
              ],
            },
            {
              type: 'p',
              text: 'We have sent people back to off-the-shelf products with a short list of configuration choices and saved them a year. That is a successful meeting.',
            },
          ],
        },
        {
          heading: 'Projects that are really org problems',
          blocks: [
            {
              type: 'p',
              text: 'Software gets requested when the real issue is ownership, incentives, or departments that do not agree on what “the process” is.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'No internal owner.',
                  body: 'If nobody with authority will accept deliveries, prioritize fixes, or answer questions from users, the build will drift the moment we step back.',
                },
                {
                  title: 'Competing definitions of success.',
                  body: 'Operations wants speed. Finance wants control. Sales wants flexibility. Until leadership aligns on one primary job, software becomes a battlefield.',
                },
                {
                  title: 'Change resistance treated as a UI problem.',
                  body: 'If the floor will not use the current tool because they were never consulted, a prettier custom app repeats the same story.',
                },
                {
                  title: 'Data nobody will maintain.',
                  body: 'Custom systems need someone who cares about master data. Without that, you get a expensive empty database.',
                },
                {
                  title: 'Politics dressed as requirements.',
                  body: 'When every stakeholder adds a veto and nobody ranks priorities, the project is not ready for a build quote.',
                },
              ],
            },
            {
              type: 'p',
              text: 'In these cases we might suggest facilitated process work, a smaller pilot, or fixing ownership before code. Building through organizational fog is how budgets die.',
            },
          ],
        },
        {
          heading: 'Budget, timeline, and ownership mismatches',
          blocks: [
            {
              type: 'p',
              text: 'Sometimes the idea is sound and the company is not in a position to carry it honestly yet.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'Budget below the real job.',
                  body: 'We would rather say so than deliver a cut scope that fails in production and poisons the well for later.',
                },
                {
                  title: 'Timeline that only works if nothing goes wrong.',
                  body: 'Fixed dates without room for discovery, integration surprises, or user testing are a prototype timeline, not an MVP timeline.',
                },
                {
                  title: 'No plan for run costs.',
                  body: 'If you cannot fund hosting, maintenance, and a human owner after launch, custom is not affordable yet even if the build is financed.',
                },
                {
                  title: 'Ownership expectations that do not match the contract.',
                  body: 'If you need full code ownership, your repo, and clean handover but the budget assumes a hosted white-label product, we should stop before both sides are unhappy.',
                },
                {
                  title: 'AI scope with data readiness nowhere in sight.',
                  body: 'We will not sell a model project when the pre-flight checklist fails and nobody wants to fund the boring fixes first.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Mismatch is not moral judgment. It is fit. A no now can be a yes in twelve months when the budget, owner, and data catch up.',
            },
          ],
        },
        {
          heading: 'How we say no',
          blocks: [
            {
              type: 'p',
              text: 'A useful no is specific, early, and leaves you with a path. Not a vague “we are not a good fit” email.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'We name the reason plainly.',
                  body: 'SaaS fit, org readiness, budget, data, timeline. No corporate fog.',
                },
                {
                  title: 'We say it before you pay for discovery.',
                  body: 'First conversations are free for a reason. The no should land there when it is obvious.',
                },
                {
                  title: 'We point to alternatives.',
                  body: 'Products worth trying, process steps, a smaller engagement, another shop better suited to the stack you named.',
                },
                {
                  title: 'We offer a narrower yes when it exists.',
                  body: 'Sometimes the answer is not “no custom” but “not that custom.” A brief audit, a prototype, a integration fix, a data cleanup sprint.',
                },
                {
                  title: 'We stay willing to revisit.',
                  body: 'Circumstances change. A no today is not a blacklist. It is a snapshot.',
                },
              ],
            },
            {
              type: 'p',
              text: 'You should leave the conversation understanding what would need to change for custom to make sense. If you do not, ask. Clarity is the product.',
            },
          ],
        },
        {
          heading: 'What good clients do after a no',
          blocks: [
            {
              type: 'p',
              text: 'The best responses we see are not arguments. They are curiosity.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'They test the alternative.',
                  body: 'Actually run the SaaS trial, tighten the process, assign an owner. See if the no was right.',
                },
                {
                  title: 'They fix the named blocker.',
                  body: 'Data cleanup, executive alignment, budget for run costs. Then they come back with evidence.',
                },
                {
                  title: 'They narrow the ask.',
                  body: 'One workflow, one integration, one quarter. Smaller honest scope often turns a no into a yes.',
                },
                {
                  title: 'They keep counsel separate from ego.',
                  body: 'Being told not to build is not being told you are wrong. It is being told where the money works harder.',
                },
                {
                  title: 'They ask who else to talk to.',
                  body: 'Sometimes the right answer is a different kind of partner. We are glad to say so when it is true.',
                },
              ],
            },
            {
              type: 'p',
              text: 'Clients who treat a no as information tend to spend less overall, whether they build with us later or not.',
            },
          ],
        },
        {
          heading: 'Signs you want a shop that will refuse work',
          blocks: [
            {
              type: 'p',
              text: 'If you are buying custom software, you should want a partner who will push back. A few signals that you are talking to one.',
            },
            {
              type: 'list',
              items: [
                {
                  title: 'They ask about SaaS before they ask about stack.',
                  body: 'Curiosity about what you tried is a good sign.',
                },
                {
                  title: 'They name risks in the first meeting.',
                  body: 'Integrations, adoption, data, maintenance. Not only upside.',
                },
                {
                  title: 'They tie quotes to scope you can verify.',
                  body: 'Acceptance criteria, non-goals, handover. Not mood boards.',
                },
                {
                  title: 'They have sent you away before.',
                  body: 'Ask for an example. Shops with no stories are shops that never say no.',
                },
                {
                  title: 'They are willing to lose the deal to keep trust.',
                  body: 'That is the whole point.',
                },
              ],
            },
          ],
        },
      ],
      closing: [
        'Craft includes knowing what not to make. Custom software should earn its place in your business: where the workflow is yours, where rented tools bend you the wrong way, where ownership and five-year cost favour a build. Everywhere else, the honest answer is simpler and cheaper.',
        'We are a Montréal solidarity cooperative that builds software by hand for SMEs. If you want counsel that includes a no when a no is right, we are glad to start with the job you have in mind and tell you what we would actually do. Book a consultation. The first conversation is free, honest, and without obligation.',
      ],
    },
  },
];

import { RESOURCES_SLATE } from './resources-slate';

const slatePriority = new Map(
  RESOURCES_SLATE.flatMap((s) => [
    [s.id, s.priority] as const,
    [s.workingSlug, s.priority] as const,
  ])
);

function articlePriority(article: Article): number {
  if (article.slateId && slatePriority.has(article.slateId)) {
    return slatePriority.get(article.slateId)!;
  }
  if (slatePriority.has(article.slug)) {
    return slatePriority.get(article.slug)!;
  }
  return 999;
}

export function getPublishedArticles(): Article[] {
  return articles
    .filter((a) => a.status === 'published')
    .sort((a, b) => articlePriority(a) - articlePriority(b));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.status === 'published');
}

export function getFeaturedArticles(): Article[] {
  return getPublishedArticles().filter((a) => a.featured);
}
