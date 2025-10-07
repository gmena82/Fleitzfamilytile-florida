# Fleitz Family Tile – Florida

Modern marketing site for Fleitz Family Tile built with Next.js 14, TypeScript, Tailwind CSS 4, and pnpm. The layout mirrors high-performing tile showroom landing pages while spotlighting Fleitz Family Tile's services, design resources, and contact touchpoints.

## Tech stack

- **Next.js 14** (App Router, TypeScript strict mode)
- **Tailwind CSS 4 (alpha)** via CSS import
- **React Hook Form + Zod** for forms and validation
- **Drizzle ORM** schema placeholder for future lead capture
- **pnpm** for dependency management
- **ESLint 9**, **Prettier**, **Vitest**, **Playwright** configured for DX

## Getting started

```bash
pnpm install
pnpm dev
```

> **Note:** Package installation requires network access to npm. If installation fails in a restricted environment, retry from a network-enabled machine.

### Useful commands

- `pnpm lint` – lint the project
- `pnpm build` – create a production build
- `pnpm test` – run unit tests with Vitest
- `pnpm test:e2e` – execute Playwright E2E tests
- `pnpm sitemap` – generate sitemap & robots.txt

## Content structure

- `app/` – App Router routes (home, services, buyers, marketplace, resources, about, contact, blog, legal)
- `src/components/` – shared UI, layout, section, and SEO helpers
- `src/config/site.ts` – central contact info, locations, and metadata
- `src/content/faq.ts` – reusable FAQs for marketing + JSON-LD
- `src/db/schema.ts` – Drizzle ORM schema for future lead capture
- `public/images/` – placeholders for brand, showroom, and project imagery

## Outstanding tasks

- Replace placeholder contact details and showroom address with verified information.
- Populate the `public/images` folders with the official logo and photography.
- Connect the contact form to a backend or CRM if lead capture is required.
- Update copy once direct content from fleitzfamilytile.com is confirmed.
