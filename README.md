# Vinerals Technologies Website

> **AI & Software for Growing Businesses** — Montreal's Social Enterprise Tech Partner

A modern, accessible, and performant Next.js website for Vinerals Technologies, a solidarity cooperative building custom software and AI solutions for SMEs.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ and npm/pnpm/yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Amankrah/vinerals_technologies.git
cd vinerals_technologies/frontend/vinerals-technologies

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
vinerals-technologies/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Homepage
│   ├── services/                # Service pages
│   ├── industries/              # Industry solutions
│   ├── work/                    # Portfolio/case studies
│   ├── about/                   # About pages
│   ├── partners/                # Partner pages
│   ├── resources/               # Blog & resources
│   ├── contact/                 # Contact page
│   ├── legal/                   # Legal pages
│   ├── layout.tsx               # Root layout
│   ├── sitemap.ts               # Dynamic sitemap
│   └── robots.ts                # Robots.txt config
├── components/                   # React components (to be created)
│   ├── ui/                      # Primitive UI components
│   ├── layout/                  # Layout components
│   ├── sections/                # Page sections
│   └── shared/                  # Shared components
├── lib/                         # Utilities and helpers (to be created)
├── hooks/                       # Custom React hooks (to be created)
├── styles/                      # Global styles (to be created)
├── content/                     # Static content (to be created)
├── types/                       # TypeScript types (to be created)
└── public/                      # Static assets
```

## 🎨 Design System

### Color Palette

- **Primary (Blue):** Trust, technology, professionalism
- **Secondary (Teal):** Innovation, growth, accessibility
- **Accent (Amber):** Energy, optimism, call-to-action
- **Neutral (Gray):** Text and backgrounds

### Typography

- **Font:** Inter (sans-serif) for general text
- **Monospace:** JetBrains Mono for code snippets

## 🛠️ Tech Stack

### Core

- **Framework:** [Next.js 16.1](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **UI Library:** [React 19.2](https://reactjs.org/)

### Styling & Animation

- **CSS Framework:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Utilities:** [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)

### Development Tools

- **Linting:** ESLint with Next.js config
- **Package Manager:** npm/pnpm/yarn

## 📄 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on [localhost:3000](http://localhost:3000) |
| `npm run build` | Build optimized production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🎯 Key Features

### Performance

- ⚡ **Fast Loading:** Optimized images, fonts, and code splitting
- 🎨 **Modern UI:** Smooth animations with Framer Motion
- 📱 **Responsive:** Mobile-first design approach
- ♿ **Accessible:** WCAG AA compliant

### SEO & Discoverability

- 🔍 **SEO Optimized:** Meta tags, Open Graph, structured data
- 🗺️ **Dynamic Sitemap:** Auto-generated from pages
- 🤖 **Robots.txt:** Proper crawling directives
- 📊 **Analytics Ready:** Built-in support for analytics

### Developer Experience

- 💪 **Type Safety:** Full TypeScript coverage
- 🎨 **Component Library:** Reusable UI components
- 🔧 **Easy Configuration:** Centralized configs
- 📝 **Documentation:** Comprehensive guide included

## 🔒 Environment Variables

Create a `.env.local` file in the root directory (see `.env.example`):

```bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://vineralstechnologies.com

# Contact form (optional - if using Resend or similar)
RESEND_API_KEY=your_resend_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify:** Use the Next.js Runtime
- **AWS Amplify:** Configure build settings
- **Docker:** Use the official Next.js Docker setup

### Build Configuration

```bash
# Production build
npm run build

# The output will be in the .next directory
```

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s | 🎯 Target |
| **FID** (First Input Delay) | < 100ms | 🎯 Target |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 🎯 Target |
| **Lighthouse Score** | > 90 | 🎯 Target |

## 🏗️ Development Status

This project is currently in **active development**. The following features are implemented:

- ✅ Next.js 16 App Router setup
- ✅ TypeScript configuration
- ✅ Tailwind CSS integration
- ✅ Framer Motion for animations
- ✅ Page routing structure
- ✅ Sitemap and robots.txt
- 🚧 Component library (in progress)
- 🚧 Content implementation (in progress)
- 🚧 API routes (planned)
- 🚧 Contact form (planned)

## 🤝 Contributing

This is a private repository for Vinerals Technologies. For internal team members:

1. Create a new branch from `main`
2. Make your changes
3. Test thoroughly
4. Submit a pull request
5. Wait for review and approval

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Keep components small and focused
- Write meaningful commit messages
- Add comments for complex logic

### Commit Message Format

```
type(scope): subject

Examples:
feat(homepage): add hero section
fix(contact): resolve form validation issue
docs(readme): update installation instructions
style(global): adjust color palette
```

## 📝 Documentation

Detailed documentation is available in the `docs/` folder (excluded from git for privacy):

- **Design System:** Complete color, typography, and component guidelines
- **Content Guide:** Copy writing and SEO best practices
- **Technical Specs:** Architecture and implementation details

## 🐛 Known Issues

None at the moment. Report issues internally to the development team.

## 📧 Contact

- **Website:** [vineralstechnologies.com](https://vineralstechnologies.com) (coming soon)
- **Email:** contact@vineralstechnologies.com
- **Phone:** +1 (514) 961-9754
- **Location:** Montreal, Quebec, Canada

## 📜 License

© 2025 Vinerals Technologies Solidarity Cooperative. All rights reserved.

This is proprietary software developed for Vinerals Technologies. Unauthorized copying, distribution, or use is prohibited.

---

**Built with ❤️ in Montreal by the Vinerals Technologies team**
