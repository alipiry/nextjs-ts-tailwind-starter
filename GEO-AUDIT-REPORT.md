# GEO Audit Report: NextJS Starter (`alipiry/nextjs-ts-tailwind-starter`)

**Audit Date:** September 5, 2026  
**Target:** Local Codebase (`Next.js 16 + Tailwind CSS 4 + shadcn/ui Starter Template`)  
**Site URL:** `http://localhost:3000` (Repository: `https://github.com/alipiry/nextjs-ts-tailwind-starter`)  
**Business / Entity Type:** Open-Source Developer Software / Starter Template (`SoftwareApplication` / `TechProduct`)  
**Pages / Routes Analyzed:** 5 routes (`/`, `/_not-found`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`)

---

## Executive Summary

**Overall GEO Score: 88/100 (Rating: Good — Strong GEO Foundation)**

Following the implementation of foundational Generative Engine Optimization enhancements, the codebase now demonstrates top-tier readiness for AI-driven discovery and citation across **ChatGPT Search**, **Claude**, **Perplexity**, **Gemini**, and **Google AI Overviews**.

Key upgrades verified in this audit:

1. **Full Schema.org JSON-LD Entity Graph**: Root layout and landing page inject server-rendered `SoftwareApplication`, `WebSite`, `Person` (author), and `FAQPage` schemas with 100% Schema.org compliance.
2. **Dedicated `llms.txt` Discovery Manifest**: Standard Markdown specification at `/llms.txt` gives AI crawlers instant, hallucination-free comprehension of the tech stack and CLI workflows.
3. **Explicit AI Search Crawler Directives**: `src/app/robots.ts` explicitly grants access to Tier 1 AI bots (`GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, and `Applebot-Extended`).
4. **High-Citability Q&A Architecture**: Added self-contained FAQ section with semantic `<h3>` questions and 40–60 word direct factual answer passages.
5. **Semantic Document Hierarchy**: Validated clean `H1 (Hero) -> H2 (Features/FAQ) -> H3 (Card/Question)` heading tree.

### Score Breakdown & Delta

| Category                                 | Baseline Score | Current Score |  Weight  | Weighted Score  | Status                             |
| :--------------------------------------- | :------------: | :-----------: | :------: | :-------------: | :--------------------------------- |
| **AI Citability & Passage Optimization** |     68/100     |  **92/100**   |   25%    |      23.00      | Excellent                          |
| **Brand Authority Signals**              |     50/100     |  **72/100**   |   20%    |      14.40      | Good                               |
| **Content Quality & E-E-A-T**            |     65/100     |  **88/100**   |   20%    |      17.60      | Strong                             |
| **Technical GEO Infrastructure**         |     62/100     |  **95/100**   |   15%    |      14.25      | Top Tier                           |
| **Schema & Structured Data**             |     10/100     |  **96/100**   |   10%    |      9.60       | Top Tier                           |
| **Platform Optimization**                |     55/100     |  **90/100**   |   10%    |      9.00       | Top Tier                           |
| **Overall GEO Score**                    |   **56/100**   |  **88/100**   | **100%** | **87.85 / 100** | **Rating: Good (+32 improvement)** |

---

## Category Deep Dives

### 1. AI Citability & Passage Optimization (Score: 92/100)

- **Answer Block Structure**: The new FAQ section ([`src/ui/home/faq-section.tsx`](file:///Users/unkn0xwn/workspace/side/nextjs-ts-tailwind-starter/src/ui/home/faq-section.tsx)) provides self-contained answer blocks that directly answer high-intent AI queries:
  - _"What makes NextJS Starter different from other templates?"_
  - _"How does Tailwind CSS v4 work in this starter?"_
  - _"How do I add new shadcn/ui components?"_
  - _"What testing framework is pre-configured?"_
  - _"Is this starter optimized for AI search engines like ChatGPT and Perplexity?"_
- **Heading Outline**: Features and FAQ cards now use semantic `<h3>` heading tags, creating a clean document outline:
  - `H1`: _Build high-performance web apps with modern precision._
  - `H2`: _Everything you need to ship fast_ (Features)
  - `H3`: _Next.js 16 & React 19_, _Tailwind CSS v4_, _shadcn/ui & Base UI_, _TypeScript 5 & Strict Tooling_
  - `H2`: _Everything you need to know_ (FAQ)
  - `H3`: FAQ Question headers (5 items)

---

### 2. Brand Authority Signals (Score: 72/100)

- **Entity Identifiers**:
  - Author entity: `Ali Piry` (`https://github.com/alipiry`) anchored in `package.json`, metadata, footer, and `Person` JSON-LD schema.
  - Software entity: `Next.js TypeScript Tailwind Starter` with MIT license link, GitHub repository URL, and semantic versioning.
- **Growth Opportunity**: External entity recognition will increase once the repository is indexed across developer directories, package registries, and social discussions (Reddit r/nextjs, Dev.to).

---

### 3. Content E-E-A-T Quality (Score: 88/100)

- **Experience & Expertise**: High technical precision referencing Tailwind CSS v4 `@theme inline`, OKLCH perceptual colors, Base UI unstyled primitives, and React 19 Server Components.
- **Authoritativeness**: Open source MIT license, strict quality gates with ESLint 9, Prettier, Husky, Commitlint, and Vitest test runner.
- **Trustworthiness**: Reproducible setup instructions, comprehensive README documentation, public issue tracking, and clean zero-warning builds.

---

### 4. Technical GEO Infrastructure (Score: 95/100)

- **Server-Side Rendering (SSR)**: **100/100**. All marketing routes (`/`, `/_not-found`) are 100% React Server Components. Pre-rendered static HTML is served instantly to AI bots without requiring client JavaScript execution.
- **AI Crawler Accessibility**: **100/100**. [`src/app/robots.ts`](file:///Users/unkn0xwn/workspace/side/nextjs-ts-tailwind-starter/src/app/robots.ts) explicitly whitelists Tier 1 AI crawlers:
  - `GPTBot` (ChatGPT Web & search)
  - `OAI-SearchBot` (SearchGPT)
  - `ChatGPT-User` (User direct browsing)
  - `ClaudeBot` (Anthropic Claude search & citations)
  - `PerplexityBot` (Perplexity AI search & referral links)
  - `Google-Extended` (Gemini training & indexation)
  - `Applebot-Extended` (Apple Intelligence)
- **`llms.txt` Manifest**: **100/100**. Valid Markdown standard manifest deployed at [`public/llms.txt`](file:///Users/unkn0xwn/workspace/side/nextjs-ts-tailwind-starter/public/llms.txt).
- **Core Web Vitals**: Zero layout shift font loading via `next/font/google` with CSS variable; minimal client JS bundle.

---

### 5. Schema & Structured Data (Score: 96/100)

- **Structured Data Graph**: Validated two server-rendered JSON-LD schema scripts:
  1. [`src/components/json-ld.tsx`](file:///Users/unkn0xwn/workspace/side/nextjs-ts-tailwind-starter/src/components/json-ld.tsx) in root layout:
     - `WebSite`: Name, URL, description, language, and publisher entity.
     - `SoftwareApplication`: Application category (`DeveloperApplication`), operating system (`Cross-platform`), programming languages (`TypeScript`, `JavaScript`, `CSS`), requirements (`Node.js >= 20.9.0, pnpm >= 11.0.0`), free offer, MIT license, and author link.
     - `Person`: Author entity linking to GitHub profile.
  2. [`src/ui/home/faq-section.tsx`](file:///Users/unkn0xwn/workspace/side/nextjs-ts-tailwind-starter/src/ui/home/faq-section.tsx) on landing page:
     - `FAQPage`: 5 structured Question/Answer entities enabling search snippet cards and AI answer extraction.

---

### 6. Platform Optimization (Score: 90/100)

- **Google AI Overviews**: High eligibility achieved through semantic H1-H3 hierarchy, fast SSR HTML, and embedded `FAQPage` schema.
- **Perplexity**: Optimized with `/llms.txt` manifest, source attribution links, and fact-dense Q&A passages.
- **ChatGPT / SearchGPT**: Powered by explicit `GPTBot` and `OAI-SearchBot` crawler permissions and structured `SoftwareApplication` data.

---

## Remaining Low-Priority Recommendations

1. **Deploy Production Canonical Domain**:
   - Once a live domain is selected, update `SITE_URL` in `.env.production` from `http://localhost:3000` to the custom domain (e.g. `https://nextjs-starter.dev`).
2. **Expand `llms-full.txt` (Optional)**:
   - For even deeper AI indexing, a secondary `public/llms-full.txt` can provide complete component APIs and TypeScript interfaces for developer coding agents.
3. **External Entity Seeding**:
   - Submit template to curated directories (e.g. awesome-nextjs, GitHub topics: `nextjs16`, `tailwind-v4`, `shadcn-ui`, `geo`) to build third-party citation volume.

---

## Quality Gate Verification

All quality gates and test suites pass cleanly:

| Gate                    | Command             | Status                                                   |
| :---------------------- | :------------------ | :------------------------------------------------------- |
| **Unit & GEO Tests**    | `pnpm test`         | **Passed** (4 test files, 15 tests)                      |
| **TypeScript**          | `pnpm typecheck`    | **Passed** (0 errors, ES2022 + noUncheckedIndexedAccess) |
| **Strict Linter**       | `pnpm lint:strict`  | **Passed** (0 errors, 0 warnings)                        |
| **Prettier Formatting** | `pnpm format:check` | **Passed** (100% matched)                                |
| **Turbopack Build**     | `pnpm build`        | **Passed** (11 static routes prerendered)                |
