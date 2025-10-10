# Fleitz Family Tile – Engineering Playbook

This repository powers the marketing site for Fleitz Family Tile. The goals of this playbook are to keep local development and CI/CD reliable, document the failure modes we have already hit, and make it easy to extend the site (especially when cloning it for future regions).

## Table of Contents

1. [Purpose & Guiding Principles](#purpose--guiding-principles)
2. [Tech Stack](#tech-stack)
3. [Requirements](#requirements)
4. [Getting Started](#getting-started)
5. [Project Structure (App Router)](#project-structure-app-router)
6. [Development Scripts](#development-scripts)
7. [Pre-Commit / CI Guardrails](#pre-commit--ci-guardrails)
8. [Adding a Blog Post (Checklist)](#adding-a-blog-post-checklist)
9. [Internal Links & `typedRoutes`](#internal-links--typedroutes)
10. [Common Build Failures & Fast Fixes](#common-build-failures--fast-fixes)
11. [Environment Variables](#environment-variables)
12. [Images & Static Assets](#images--static-assets)
13. [Vercel Deployment Notes](#vercel-deployment-notes)
14. [Troubleshooting Matrix](#troubleshooting-matrix)

---

## Purpose & Guiding Principles

- **Predictable builds:** Local dev, CI, and Vercel must behave the same. We pin Node 20 and fail fast on linting, type errors, and broken links.
- **Visibility into failures:** Every incident we have hit (typed routes, case-only renames, missing env vars) is documented with the exact fix so we do not repeat it.
- **Reusable blueprint:** This repo will be cloned for future Fleitz Family Tile builds. Keep content and config modular, and update this README whenever a new pitfall surfaces.

## Tech Stack

- **Next.js 14** (App Router, TypeScript strict mode, `experimental.typedRoutes` on)
- **Tailwind CSS 4 (alpha)** via CSS import
- **React Hook Form + Zod** for forms/validation
- **Drizzle ORM** schema placeholder for future lead capture
- **pnpm** for dependency management
- **ESLint 9**, **Prettier**, **Vitest**, **Playwright** configured for DX

## Requirements

- **Node.js 20.x LTS**. Use `nvm`/`fnm` or Volta to match CI/Vercel. Add a `.nvmrc` when upgrading.
- **pnpm** ≥ 9. Run `corepack enable` if pnpm is not installed.
- **Git** with case sensitivity enabled. On macOS/Windows run `git config core.ignorecase false` inside the repo.
- Ensure your local Node version matches Vercel (`node -v` should output `v20.x`).

## Getting Started

```bash
git clone <repo-url>
cd fleitzfamilytile-florida
corepack enable  # optional but recommended
pnpm install
cp .env.example .env.local  # fill in values from 1Password / project brief
pnpm dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Project Structure (App Router)

```
app/
  page.tsx                      ->  /
  blog/
    why-tile-flooring-bradenton-fl/
      page.tsx                  ->  /blog/why-tile-flooring-bradenton-fl
  services/
    bathrooms/
      page.tsx                  ->  /services/bathrooms
  (marketing)/                  ->  Route groups are ignored in URLs
  api/                          ->  /api/* endpoints
public/                         ->  Static files served at /<name>
src/components/                 ->  Shared UI, layout, sections
src/config/                     ->  Site metadata + constants
```

Routes are folder-based. A URL `/services/bathrooms` requires `app/services/bathrooms/page.tsx`. Case, spelling, and folder names must match exactly—Linux/Vercel treats `Bathrooms` and `bathrooms` as different routes.

## Development Scripts

The repo already contains the following pnpm scripts:

| Script          | Purpose                            |
| --------------- | ---------------------------------- |
| `pnpm dev`      | Start the Next.js dev server       |
| `pnpm build`    | Production build (runs on Vercel)  |
| `pnpm start`    | Serve the production build         |
| `pnpm lint`     | ESLint (fails on warnings in CI)   |
| `pnpm test`     | Vitest unit tests                  |
| `pnpm test:e2e` | Playwright end-to-end tests        |
| `pnpm sitemap`  | Generate sitemap and robots.txt    |
| `pnpm db:*`     | Drizzle scaffolding for future use |

### Recommended additions

Add the following scripts to automate type checking and static route validation. They have caught multiple deploy failures already.

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "format": "prettier --check .",
    "format:fix": "prettier --write .",
    "check:routes": "node scripts/check-static-hrefs.js",
    "preflight": "pnpm format && pnpm lint && pnpm typecheck && pnpm check:routes"
  },
  "engines": {
    "node": "^20.0.0"
  }
}
```

### Static href sanity-check script

Create `scripts/check-static-hrefs.js` (commit it to the repo):

```js
/*
  Scans TS/TSX/MDX in /app for static <Link href="/..."> strings
  and verifies a corresponding route folder contains page.tsx/page.mdx.
  This is a quick "fail-fast" before Next’s typedRoutes/TS run.
*/
const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(process.cwd(), "app");
const exts = [".tsx", ".ts", ".mdx", ".jsx", ".js"];

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (exts.includes(path.extname(entry.name))) out.push(full);
  }
  return out;
}

function routeExists(href) {
  if (!href.startsWith("/")) return true;
  const candidate = path.join(APP_DIR, ...href.split("/").filter(Boolean));
  const pageTsx = path.join(candidate, "page.tsx");
  const pageMdx = path.join(candidate, "page.mdx");
  return fs.existsSync(pageTsx) || fs.existsSync(pageMdx);
}

const HREF_RE = /href\s*=\s*"(\/[^"#]*)"/g;

const files = walk(APP_DIR);
const problems = [];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  let m;
  while ((m = HREF_RE.exec(text))) {
    const href = m[1];
    if (href.startsWith("http")) continue;
    if (href.includes("[") && href.includes("]")) continue;
    if (!routeExists(href)) problems.push({ file, href });
  }
}

if (problems.length) {
  console.error("\nStatic hrefs pointing to missing routes:");
  for (const p of problems) console.error(`- ${p.file}: "${p.href}"`);
  console.error("\nFix the href(s) or create the route(s).");
  process.exit(1);
} else {
  console.log("✔ Static hrefs look good.");
}
```

This script caught the regression where `/services/bathroom` (missing `s`) shipped in a link and failed `typedRoutes` at build time.

## Pre-Commit / CI Guardrails

1. **Husky + lint-staged**

   ```bash
   pnpm dlx husky init
   ```

   Create `.husky/pre-commit`:

   ```sh
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"

   pnpm preflight
   ```

   Adjust `preflight` to match the scripts above. lint-staged is already configured to format and lint staged files.

2. **Case-sensitive git history** – A previous deploy failed because `components/CTA` was renamed to `components/Cta` locally. Commit the rename with an intermediate filename or run `git mv CTA CTA_tmp && git mv CTA_tmp Cta` so Linux picks it up.

3. **CI mirrors Vercel** – Ensure GitHub Actions (or any CI) runs `pnpm preflight` and `pnpm build`. Every failure listed below was originally caught on Vercel because it was missing locally.

## Adding a Blog Post (Checklist)

- Create the folder: `app/blog/<slug>/page.tsx` (or `page.mdx` when MDX is enabled).
- Slugs should be lowercase, kebab-case, and match every `<Link href="/blog/<slug>">` exactly.
- Draft content and verify internal links using `pnpm check:routes`.
- Place images in `public/blog/<slug>/...` and import via `next/image`. Remote assets require the domain in `next.config.mjs`.
- Confirm accessibility: heading structure starts at `<h1>`, alt text on images, buttons/links have descriptive labels.
- Run locally before committing:
  ```bash
  pnpm preflight
  pnpm build
  ```
- Commit with a clear message (`feat(blog): add why porcelain tile works in florida humidity`) and push. CI should be green if preflight passes.

## Internal Links & `typedRoutes`

`next.config.mjs` enables `experimental.typedRoutes`. This intentionally breaks the build when a `<Link>` points to a route folder that does not exist.

- **Static routes:** Only link to paths that have a `page.tsx`/`page.mdx`. Example:
  ```tsx
  <Link href="/services/bathrooms">Bathroom remodeling</Link>
  ```
- **Dynamic routes:** For folders like `/services/[slug]`, cast to `Route` only when you are certain the slug exists.

  ```tsx
  import type { Route } from "next";

  <Link href={`/services/${slug}` as Route}>View service</Link>;
  ```

- **Temporary bypass:** During large refactors you may cast to `Route` while fixing links, but remove the cast before merging. Disabling `typedRoutes` led directly to missing pages previously.

## Common Build Failures & Fast Fixes

| Failure                                                              | Where it happened       | Root cause                                       | Resolution                                                           |
| -------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | -------------------------------------------------------------------- |
| `Type error: "/services/bathroom" is not an existing route as Route` | `pnpm build` on Vercel  | Link typo (`bathroom` vs `bathrooms`)            | Fix the href, run `pnpm check:routes`, re-deploy                     |
| `Module not found: Can't resolve '@/components/CTA'`                 | GitHub Actions build    | Case-only rename not committed on macOS          | Ensure `core.ignorecase=false`, re-commit rename with correct casing |
| ESLint/TS errors blocking CI                                         | Local preflight skipped | New component violated lint rules / types        | Always run `pnpm preflight` before pushing; fix lint/type errors     |
| Remote image blocked in prod                                         | Production build        | CDN domain missing from `images.remotePatterns`  | Update `next.config.mjs` and redeploy                                |
| Works locally, fails on Vercel                                       | Vercel build            | Local Node 18 vs Vercel Node 20                  | Install Node 20 locally, rerun `pnpm install`, rebuild               |
| `Dynamic server usage: useState` in a Server Component               | `pnpm build`            | Hook added to server file without `"use client"` | Add `"use client"` pragma or move hook into a client component       |

## Environment Variables

- Copy `.env.example` to `.env.local` and keep it synced when new variables are introduced.
- **Never commit secrets.** Store production values in Vercel (Project → Settings → Environment Variables) and staging separately.
- Client-side values must be prefixed with `NEXT_PUBLIC_`.
- After editing env vars locally, restart the dev server.

## Images & Static Assets

- Local assets live under `public/…` and are available at `/images/foo.jpg`.
- Prefer `next/image` for all inline imagery. Include descriptive `alt` text.
- For remote images, append the domain to `images.remotePatterns` in `next.config.mjs`. Missing entries will throw a runtime error on Vercel.
- Keep SVGs optimized. Use `pnpm dlx svgo <file>` before committing large SVGs.

## Vercel Deployment Notes

- Build command: `pnpm build` (default Next.js). Do **not** skip builds on preview branches.
- Node version: set to 20.x in Vercel → Project Settings → General → Node.js Version. This must match `.engines`.
- Preview vs Production: environment variables differ. Seed both and redeploy when values change.
- Cache busting: editing `next.config.mjs`, `pnpm-lock.yaml`, or the Tailwind config invalidates the build cache—expect longer builds after these changes.

## Troubleshooting Matrix

| Symptom                                                       | Root cause                          | Fix                                                                                                              |
| ------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `Type error: "/x/y" is not an existing route …`               | `typedRoutes` caught a bad `<Link>` | Correct the path or create the route. For dynamic links, ensure the slug is validated before casting to `Route`. |
| `Cannot find module '@/components/Button'`                    | Import path casing mismatch         | Match the file name exactly; commit the rename with correct casing.                                              |
| `Error: Invalid src prop (https://cdn.com/...) on next/image` | Remote domain not whitelisted       | Update `images.remotePatterns`/`images.domains` and redeploy.                                                    |
| `ReferenceError: process.env.XYZ is not defined`              | Env var missing in Vercel           | Add the variable to Vercel, mirror in `.env.example`, redeploy.                                                  |
| Dev server runs but CI fails                                  | Local checks skipped                | Run `pnpm preflight` + `pnpm build` before pushing.                                                              |
| `Dynamic server usage` warnings                               | Hooks in Server Components          | Add `"use client"` or refactor logic into a client component.                                                    |

---

Update this README whenever a new failure occurs or the project structure changes. The more we document, the faster every future clone can ship.
