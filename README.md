# Next.js + Tailwind CSS 4 + TypeScript Starter

<div align="center">
  <h3>Modern, production-ready starter template engineered with Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, and Generative Engine Optimization (GEO).</h3>
  <p>
    Made with ❤ by <a href="https://github.com/alipiry">Ali Piry</a>
  </p>
</div>

---

## Features

- **Next.js 16 (App Router)**: Fast, modern routing with React Server Components by default and Turbopack.
- **React 19**: Built on the latest React foundation with full server-side streaming support.
- **Tailwind CSS v4**: CSS-first configuration with `@theme` variables, OKLCH colors, and `@tailwindcss/typography`.
- **shadcn/ui & Base UI**: Accessible, headless UI primitives (`base-nova` style) with `Button`, `Card`, `Badge`, `Separator`, and `DropdownMenu`.
- **Dark Mode**: System-aware theme toggle with `next-themes` and smooth transitions.
- **TypeScript 5**: Strict compiler checks (`ES2022`, `noUncheckedIndexedAccess`) with path aliases (`@/` imports).
- **Automated Testing**: Vitest test runner for pure unit testing of decoupled business logic, hooks, and utilities (no fragile UI tests).
- **Resilient Link Component**: Built-in insulation against DOM-mutating browser extensions and auto-managed external links.
- **Generative Engine Optimization (GEO)**:
  - Standard `llms.txt` discovery manifest for AI search engines (ChatGPT, Claude, Perplexity).
  - Schema.org JSON-LD structured data (`SoftwareApplication`, `WebSite`, `FAQPage`, `Person` author graph).
  - Explicit AI search crawler permissions in `robots.ts` (`GPTBot`, `ClaudeBot`, `PerplexityBot`, etc.).
  - Fact-dense, high-citability FAQ section for AI quotation and search snippet extraction.
- **Lucide Icons**: Crisp, customizable SVG icons via `lucide-react`.
- **Code Quality & Git Hooks**:
  - **ESLint 9**: Modern flat-config linting with Next.js rules.
  - **Prettier**: Automated formatting with `prettier-plugin-tailwindcss`.
  - **Husky & lint-staged**: Fast pre-commit linting, typechecking, and formatting on staged files.
  - **Commitlint**: Enforced Conventional Commits (`@commitlint/config-conventional`).
- **SEO & Social Sharing**:
  - Dynamic OpenGraph and Twitter card metadata configuration.
  - Automatic `sitemap.xml` and `robots.txt` generation.
  - Complete favicon and Apple touch icon suites.

---

## Prerequisites

- **Node.js**: `>= 20.9.0`
- **pnpm**: `>= 11.0.0`

---

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/alipiry/nextjs-ts-tailwind-starter.git
cd nextjs-ts-tailwind-starter
pnpm install
```

### 2. Configure Environment

Copy the example environment file:

```bash
cp .env.example .env.local
```

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Available Scripts

| Script              | Command                       | Description                                    |
| :------------------ | :---------------------------- | :--------------------------------------------- |
| `pnpm dev`          | `next dev`                    | Starts local development server with Turbopack |
| `pnpm build`        | `next build`                  | Creates an optimized production build          |
| `pnpm start`        | `next start`                  | Runs the production server                     |
| `pnpm test`         | `vitest run`                  | Runs automated unit test suite                 |
| `pnpm test:watch`   | `vitest`                      | Starts test runner in interactive watch mode   |
| `pnpm typecheck`    | `tsc --noEmit`                | Runs strict TypeScript typechecking            |
| `pnpm lint`         | `eslint src`                  | Checks code against ESLint rules               |
| `pnpm lint:strict`  | `eslint --max-warnings=0 src` | Fails on any ESLint warnings or errors         |
| `pnpm format`       | `prettier -w .`               | Formats all files with Prettier                |
| `pnpm format:check` | `prettier -c .`               | Checks files against Prettier formatting       |

---

## Project Structure

```
├── .github/              # CI workflows (GitHub Actions)
├── .husky/               # Git hooks (pre-commit, commit-msg)
├── public/               # Static assets (images, icons, llms.txt manifest)
│   └── llms.txt          # Standard AI discovery manifest
├── vitest.config.mts     # Vitest configuration
├── vitest.setup.ts       # Test environment setup
└── src/
    ├── app/              # Next.js App Router (pages, layout, metadata)
    │   ├── (root)/       # Main application routes
    │   ├── globals.css   # Tailwind CSS v4 @theme styles & color tokens
    │   ├── layout.tsx    # Root layout with Inter font, theme provider & JSON-LD schema
    │   ├── robots.ts     # Dynamic robots.txt with AI search bot permissions
    │   └── sitemap.ts    # Dynamic sitemap.xml
    ├── components/       # Reusable components
    │   ├── ui/           # shadcn/ui primitives (button, card, badge, link, etc.)
    │   ├── container.tsx # Bounded responsive container (max-w-7xl)
    │   ├── json-ld.tsx   # Schema.org JSON-LD structured data graph
    │   ├── mode-toggle.tsx   # Theme switcher dropdown
    │   └── theme-provider.tsx # next-themes provider wrapper
    ├── config/           # App configuration and environment variables
    ├── consts/           # App constants, metadata defaults
    ├── lib/              # Utility functions (cn helper)
    └── ui/               # Section-level layout components
        ├── header/       # Header navbar and brand container
        ├── home/         # Hero section, features grid, FAQ section
        └── footer/       # Footer container and links
```

---

## Adding shadcn Components

This template uses the `base-nova` style with `@base-ui/react` primitives. You can add new shadcn components directly using:

```bash
pnpm dlx shadcn add <component-name>
```

---

## Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/alipiry/nextjs-ts-tailwind-starter)

---

## License

Distributed under the [MIT License](LICENSE).
