# Next.js + Tailwind CSS 4 + TypeScript Starter

<div align="center">
  <h3>Modern, production-ready starter template engineered with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui.</h3>
  <p>
    Made with &hearts; by <a href="https://github.com/alipiry">Ali Piry</a>
  </p>
</div>

---

## Features

- **Next.js 16 (App Router)**: Fast, modern routing with React Server Components by default and Turbopack.
- **React 19**: Built on the latest React foundation with full server-side streaming support.
- **Tailwind CSS v4**: CSS-first configuration with `@theme` variables, OKLCH colors, and `@tailwindcss/typography`.
- **shadcn/ui & Base UI**: Accessible, headless UI primitives (`base-nova` style) with `Button`, `Card`, `Badge`, and `Separator`.
- **TypeScript 5**: Strict compiler checks with path aliases (`@/` imports).
- **Lucide Icons**: Crisp, customizable SVG icons via `lucide-react`.
- **Code Quality & Git Hooks**:
  - **ESLint 9**: Modern flat-config linting with Next.js rules.
  - **Prettier**: Automated formatting with `prettier-plugin-tailwindcss`.
  - **Husky & lint-staged**: Pre-commit linting, typechecking, and formatting.
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
| `pnpm typecheck`    | `tsc --noEmit`                | Runs strict TypeScript typechecking            |
| `pnpm lint`         | `eslint src`                  | Checks code against ESLint rules               |
| `pnpm lint:strict`  | `eslint --max-warnings=0 src` | Fails on any ESLint warnings or errors         |
| `pnpm format`       | `prettier -w .`               | Formats all files with Prettier                |
| `pnpm format:check` | `prettier -c .`               | Checks files against Prettier formatting       |

---

## Project Structure

```
├── .github/              # CI workflows (GitHub Actions)
├── .husky/               # Git hooks
├── public/               # Static assets
└── src/
    ├── app/              # Next.js App Router (pages, layout, metadata)
    │   ├── (root)/       # Main application routes
    │   ├── globals.css   # Tailwind CSS v4 @theme styles & color tokens
    │   ├── layout.tsx    # Root layout with Inter font & metadata
    │   ├── robots.ts     # Dynamic robots.txt
    │   └── sitemap.ts    # Dynamic sitemap.xml
    ├── components/       # Reusable components
    │   ├── ui/           # shadcn/ui components (button, card, badge, separator)
    │   └── container.tsx # Responsive container wrapper
    ├── config/           # App configuration and environment variables
    ├── consts/           # App constants, metadata defaults
    ├── lib/              # Utility functions (cn helper)
    └── ui/               # Section-level UI components
        ├── header/       # Header navbar and brand container
        ├── home/         # Hero section, features grid
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
