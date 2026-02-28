# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Michael Cavopol at michael.cavopol.me. Originally scaffolded with v0.dev, now maintained directly via Claude Code. Single-page portfolio with a separate `/correspondence` page (virtual business card).

## Tech Stack

- **Framework:** Next.js 15 (App Router, React 19)
- **Styling:** Tailwind CSS 3 with CSS variables for theming (light/dark via `next-themes`)
- **UI Components:** shadcn/ui (Radix primitives + `class-variance-authority`), icons from `lucide-react`
- **Package Manager:** pnpm
- **Deployment:** Vercel (project: `michael-cavopol-me`, domain: `michael.cavopol.me`)
- **Analytics:** Google Analytics (G-DPF519FPD1) with Core Web Vitals reporting

## Commands

```bash
pnpm install         # Install dependencies
pnpm dev             # Local dev server (localhost:3000)
pnpm build           # Production build
pnpm lint            # ESLint
npx vercel deploy    # Deploy preview to Vercel
npx vercel --prod    # Deploy to production
```

**Note:** `next.config.mjs` has `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` set to `true` — builds will succeed even with lint/type errors. Run `pnpm lint` and `npx tsc --noEmit` separately to catch issues.

## Architecture

### Routing

- `/` — Main portfolio page (`app/page.tsx`)
- `/correspondence` — Virtual business card page (`app/correspondence/page.tsx`)
- `/vcard` — API route that serves a downloadable .vcf contact file (`app/vcard/route.ts`)
- `robots.ts`, `sitemap.ts` — SEO metadata routes

### Homepage Loading Strategy

The homepage uses a two-tier loading approach for performance:

1. **Above-the-fold (SSR):** `HeroSection` and `AboutSection` render server-side in `app/page.tsx`
2. **Below-the-fold (lazy):** All remaining sections load client-side via `next/dynamic` with `ssr: false` in `components/lazy-sections.tsx`

Section order: hero → about → impact → approach → superpower → companies → career → writing → contact

### Component Organization

- `components/` — Page sections (e.g., `hero-section.tsx`, `about-section.tsx`) and layout components (`navbar.tsx`, `footer.tsx`)
- `components/ui/` — shadcn/ui primitives (`button.tsx`, `card.tsx`, `dropdown-menu.tsx`)
- `components/lazy-sections.tsx` — Central dynamic import hub for all below-the-fold sections
- `components/section-observer.tsx` — IntersectionObserver for tracking visible sections
- `lib/utils.ts` — Single utility: `cn()` for Tailwind class merging

### Path Aliases

`@/*` maps to the project root (e.g., `@/components/navbar`, `@/lib/utils`).

### Theming

Dark mode via `next-themes` with class strategy. Colors defined as CSS custom properties in `styles/globals.css`, consumed via `hsl(var(--variable))` in Tailwind config. Always support both light and dark variants when styling.

### SEO & Structured Data

`app/layout.tsx` contains JSON-LD schema markup (Person + Organization) and comprehensive OpenGraph/Twitter metadata. The `/correspondence` page has its own OG image (`/add-to-contacts-preview.png`).

## Key Conventions

- All section components are default-exported (required by `next/dynamic`)
- Client components must have `"use client"` directive
- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- Static assets go in `public/` (images in `public/images/` for content images)
- The `container-padding` and `section-padding` CSS classes handle responsive spacing
