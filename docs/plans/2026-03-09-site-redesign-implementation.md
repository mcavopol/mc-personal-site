# Site Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign michael.cavopol.me from a v0-scaffolded single-page portfolio into a 3-page warm & personal digital resume, implementing the approved messaging framework and design doc.

**Architecture:** Keep existing Next.js 15 App Router + Tailwind + shadcn/ui stack. Maintain the SSR-above-fold / lazy-below-fold pattern. Replace all section components with new messaging-aligned versions. Add `/about` page. Keep `/correspondence` as-is.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 3, shadcn/ui, lucide-react, next-themes, CSS keyframe animations.

**Reference docs:**
- Design: `docs/plans/2026-03-09-site-redesign-design.md`
- Messaging: `docs/plans/2026-02-27-messaging-framework.md`

---

### Task 1: Update Color Palette

**Files:**
- Modify: `styles/globals.css` (lines 15-84, CSS custom properties)

**Step 1: Update light mode CSS custom properties**

Replace `:root` custom properties with warm neutral palette:

```css
:root {
  --background: 40 20% 98%;       /* Warm white #FAFAF8 */
  --foreground: 0 0% 10%;          /* Charcoal #1A1A1A */
  --card: 40 20% 98%;
  --card-foreground: 0 0% 10%;
  --popover: 40 20% 98%;
  --popover-foreground: 0 0% 10%;
  --primary: 168 50% 33%;          /* Muted teal #2A7C6F */
  --primary-foreground: 0 0% 98%;
  --secondary: 40 10% 94%;         /* Warm light gray */
  --secondary-foreground: 0 0% 10%;
  --muted: 40 10% 94%;
  --muted-foreground: 0 0% 40%;
  --accent: 168 50% 33%;           /* Teal accent */
  --accent-foreground: 0 0% 98%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 40 10% 88%;
  --input: 40 10% 88%;
  --ring: 168 50% 33%;             /* Teal ring */
  /* Keep chart, radius, sidebar vars as-is */
}
```

**Step 2: Update dark mode CSS custom properties**

Replace `.dark` custom properties:

```css
.dark {
  --background: 0 0% 8%;           /* Deep charcoal #141414 */
  --foreground: 40 5% 90%;         /* Warm gray #E8E8E6 */
  --card: 0 0% 10%;
  --card-foreground: 40 5% 90%;
  --popover: 0 0% 10%;
  --popover-foreground: 40 5% 90%;
  --primary: 168 42% 40%;          /* Lighter teal #3D9B8F */
  --primary-foreground: 0 0% 8%;
  --secondary: 0 0% 14%;
  --secondary-foreground: 40 5% 90%;
  --muted: 0 0% 14%;
  --muted-foreground: 40 5% 60%;
  --accent: 168 42% 40%;
  --accent-foreground: 0 0% 8%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 16%;
  --input: 0 0% 16%;
  --ring: 168 42% 40%;
  /* Keep chart, sidebar vars as-is */
}
```

**Step 3: Verify build**

Run: `pnpm build`
Expected: Build succeeds. Colors propagate through all `hsl(var(--*))` references automatically.

**Step 4: Visual check**

Run: `pnpm dev` and check both light/dark modes in browser. Verify warm white bg, teal accent on buttons.

**Step 5: Commit**

```bash
git add styles/globals.css
git commit -m "style: update color palette to warm neutrals with teal accent"
```

---

### Task 2: Simplify Navbar

**Files:**
- Modify: `components/navbar.tsx`

**Step 1: Update nav links**

Replace the `navLinks` array (line 25-31) with the new 2-link navigation:

```tsx
const navLinks = [
  { name: "About", href: "/about" },
  { name: "Correspondence", href: "/correspondence" },
]
```

Note: These are now page links (not `#section` anchors).

**Step 2: Verify**

Run: `pnpm dev`, check navbar renders with just "About" and "Correspondence" links + dark mode toggle.

**Step 3: Commit**

```bash
git add components/navbar.tsx
git commit -m "refactor: simplify navbar to 2-link navigation"
```

---

### Task 3: Rewrite Hero Section

**Files:**
- Modify: `components/hero-section.tsx`

**Step 1: Rewrite hero with new messaging**

Replace entire component with new copy from messaging framework. Keep the 2-column layout (text left, photo right) but update all copy:

- Headline: "Hi, I'm Michael."
- Subhead: First-person conversational intro from messaging framework roof: "I build product companies through disruption cycles. Fast to clarity. Fast to conviction. Fast to results."
- Brief supporting text: "Product & revenue leader. 20 years. Four disruption cycles. I move quickly into complex environments, form a sharp point of view on what matters, and drive teams to execute."
- Primary CTA: "Let's meet" → `https://cal.com/hedgehog-growth/30min` (teal accent button)
- Secondary CTA: "My story →" → `/about` (outline/text button)

Keep the Image component pointing to `/michael-headshot.jpg` with same responsive sizing.

**Step 2: Verify**

Run: `pnpm dev`, check hero renders correctly with new copy in both light/dark modes.

**Step 3: Commit**

```bash
git add components/hero-section.tsx
git commit -m "feat: rewrite hero section with messaging framework copy"
```

---

### Task 4: Update Impact Metrics Section

**Files:**
- Modify: `components/impact-section.tsx`

**Step 1: Simplify to metrics-only**

Remove the project carousel from this component. Keep only the metrics grid (the 2×2 grid of bold headline metrics). This section becomes a pure metrics display.

Remove the carousel imports, refs, scroll handlers, auto-scroll logic, and carousel JSX. Keep:
- Section header with updated copy
- 2×2 metric grid (12.7× ARR Growth, 3× R&D Impact, 3× Burn Reduction, 150% Net Revenue)

Update the section header text to align with messaging framework voice:
- Remove "I help $5-50M ARR product companies 2-4× revenue in <12 mo by aligning product vision and go-to-market."
- Replace with something conversational per brand voice, e.g.: "The results speak for themselves."

**Step 2: Verify**

Run: `pnpm dev`, check metrics display correctly without carousel.

**Step 3: Commit**

```bash
git add components/impact-section.tsx
git commit -m "refactor: simplify impact section to metrics-only grid"
```

---

### Task 5: Create Role Highlights Carousel

**Files:**
- Create: `components/role-highlights-section.tsx`

**Step 1: Create the role highlights carousel component**

Build a new horizontally scrolling card carousel for role highlights. Reuse the scrolling pattern from the old impact-section carousel (refs, scroll handlers, auto-advance, drag/swipe).

Data structure for each card:

```tsx
const roles = [
  {
    company: "Arena Labs",
    role: "COO & CPO",
    period: "2024–present",
    description: "AI-native product rebuild for healthcare workforce wellness. Pivoted GTM to hospital C-suite. Rebuilt product around jobs-to-be-done.",
    outcomes: ["85% engagement vs 3-5% baseline", "AI coaching model (Tesla Autopilot approach)", "$25-45/mo profitable subscription"],
  },
  {
    company: "Prado",
    role: "Interim COO & SVP Revenue/Product",
    period: "2023–2024",
    description: "Walked in, interviewed every customer in first month. Identified enterprise ICP mismatch. Refocused product and GTM.",
    outcomes: ["Burn 3x → 0x in 6 months", "Median contract +427×", "Dev cycle 60d → <7d"],
  },
  {
    company: "Fresh Technology",
    role: "SVP Revenue & Product",
    period: "2020–2024",
    description: "Built strategic narrative for restaurant tech through COVID. Channel pivot to POS partnerships.",
    outcomes: ["93% YoY growth", "Sales cycle 8 mo → 15 days", "Support SLA 23× faster"],
  },
  {
    company: "Ambition",
    role: "VP Post-Sales & Solutions",
    period: "2017–2020",
    description: "Built CS, support, PS, and solutions engineering from zero. Solved churn problem while product matured.",
    outcomes: ["ARR $2M → $6M (→ $8M)", "NRR +30pts", "Expansion ARR 12.7×", "NPS 55"],
  },
  {
    company: "LeanKit",
    role: "Director, CS & Professional Services",
    period: "2015–2017",
    description: "Built PS, support, docs, and CS orgs. Identified data-to-insight gap and bridged it with BI team.",
    outcomes: ["Owned majority of revenue at exit", "CX NPS 50+", "Planview acquisition"],
  },
  {
    company: "LeanKit",
    role: "Product Manager, Construction",
    period: "2013–2015",
    description: "Tiger team to open construction vertical from first principles. One of last industries ripe for Agile transformation.",
    outcomes: ["New market opened", "Customers: Walmart, BAE, Rolls-Royce", "$3M → $18M ARR (company)"],
  },
]
```

Each card renders as a shadcn Card component with:
- Company name (bold, large)
- Role title
- Period (muted text)
- Description paragraph
- Bulleted outcomes list

Section heading: "The Work" or "Recent Roles"

Include auto-scroll (4s interval), pause on hover/drag, manual arrow navigation (ChevronLeft/ChevronRight), and the IntersectionObserver pattern from the old carousel to only animate when visible.

Must be `"use client"` and default-exported.

**Step 2: Verify**

Run: `pnpm dev` (will need to be wired into page first in Task 10, but component should compile).

**Step 3: Commit**

```bash
git add components/role-highlights-section.tsx
git commit -m "feat: create role highlights carousel component"
```

---

### Task 6: Create Rotating Quotes Component

**Files:**
- Create: `components/quotes-section.tsx`

**Step 1: Build the rotating quotes section**

Create a full-width quote block that cycles through all 6 quotes with a crossfade transition.

```tsx
const quotes = [
  {
    text: "Michael learned more about our business in two weeks than top-tier consultants did in a deep evaluation. He has an uncanny ability to make sense of chaos. In his first month, he literally talked to every customer and helped us uncover gaps in our product — but more importantly, in our company strategy — that had been staring us in the face for years.",
    author: "CEO, Prado",
  },
  {
    text: "Michael fundamentally changed how we thought about revenue growth. He helped us see that we didn't quite have product-market fit yet, and quickly went to work building a professional services team that could scale revenue while we addressed the gaps in our product. He's the unicorn who can play across revenue, product, and strategy.",
    author: "CEO, Ambition",
  },
  {
    text: "Michael balances a well-tuned product sense with an incredible instinct for commercial strategy. He spotted a critical issue with our distribution model right away, and despite overwhelming opposition, kept advocating for a channel-driven approach for months. We finally listened — and since then, we've restructured the entire business around channel partners. Revenue has tripled since that decision.",
    author: "CEO, Fresh Technology",
  },
  {
    text: "Michael is a self-starter who's always laser-focused on the one or two things slowing the company down. He's relentless about challenging the status quo and relentless in his pursuit of excellence — but he balances that with genuine care for the people around him.",
    author: "CEO, LeanKit",
  },
  {
    text: "Michael is a product person's product person. He loves building incredible digital experiences and he deeply cares about user context. He has this ability to put himself in the user's shoes at the exact moment in the customer journey — he can predict what a user is thinking and feeling with insane precision. I was constantly baffled during user interviews at his ability to guess what a user would say.",
    author: "CPO, Ambition",
  },
  {
    text: "Michael is an incredibly versatile cross-functional leader. Just when you think you've got him figured out, you'll catch him writing code on a flight, then presenting the company's growth strategy to investors an hour later. You can't pin him down. Just when you think nobody can be great at sales, product, and leadership all at once — he proves you wrong.",
    author: "Board Member & Investor",
  },
]
```

Implementation:
- `useState` for `activeIndex`, `useEffect` with `setInterval` (6s) to advance
- Crossfade: use CSS `transition: opacity 0.5s ease-in-out` with absolute positioning
- Show current quote with `opacity-100`, previous with `opacity-0`
- Left vertical bar accent (like current about-section quote block)
- Pause rotation on hover (`onMouseEnter`/`onMouseLeave`)
- Small dot indicators at bottom showing which quote is active
- `prefers-reduced-motion`: disable auto-rotation, show navigation dots only
- Must be `"use client"` and default-exported

**Step 2: Verify compilation**

Run: `pnpm build` (component won't be visible until wired in Task 10).

**Step 3: Commit**

```bash
git add components/quotes-section.tsx
git commit -m "feat: create rotating quotes section component"
```

---

### Task 7: Create Company Names Text Marquee

**Files:**
- Create: `components/company-marquee-section.tsx`

**Step 1: Build the animated text marquee**

Create a pure CSS animated horizontal scroll of company names. No JS needed for the animation itself.

Company names to display:
`Walmart · Salesforce · Delta · Rolls-Royce · J&J · BAE Systems · Intel · FedEx · Caterpillar · Amazon · Square · Cisco · ServiceNow`

Implementation approach:
- Render the text string twice inside a flex container (for seamless infinite loop)
- CSS `@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`
- Apply `animation: marquee 30s linear infinite` to the container
- Pause on hover: `.marquee-track:hover { animation-play-state: paused; }`
- Separator between names: ` · ` (middle dot with spaces)
- Text styling: `text-muted-foreground`, medium weight, tracking-wide
- Fade edges with CSS `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`
- Respect `prefers-reduced-motion`: disable animation, show static list

Add the marquee keyframe to `styles/globals.css`:

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

Component should NOT be `"use client"` — it's pure CSS animation, can be server-rendered.

**Step 2: Verify**

Run: `pnpm dev` after wiring in Task 10.

**Step 3: Commit**

```bash
git add components/company-marquee-section.tsx styles/globals.css
git commit -m "feat: create company names text marquee component"
```

---

### Task 8: Create CTA Section

**Files:**
- Create: `components/cta-section.tsx`

**Step 1: Build the CTA section**

Simple, warm closing section with:
- Heading: "Let's talk." or "Interested? Let's connect."
- Brief text: conversational line per brand voice
- Primary CTA: `[ Let's meet ]` → `https://cal.com/hedgehog-growth/30min`
- Secondary: `mcavopol@gmail.com` as a text link

Use the teal accent for the primary button. Keep it clean — no cards, just centered text + buttons.

Must be default-exported. Can be server component (no client interactivity needed).

**Step 2: Commit**

```bash
git add components/cta-section.tsx
git commit -m "feat: create CTA section component"
```

---

### Task 9: Update Footer

**Files:**
- Modify: `components/footer.tsx`

**Step 1: Update footer content**

- Update tagline from "Chief Revenue & Product Operator" to something aligned with messaging framework (e.g., "Product & Revenue Leader" or keep simple with just the name)
- Keep social links: LinkedIn, X, Substack, GitHub, Email
- Add Instagram (already present)
- Ensure footer uses new color palette (should happen automatically via CSS vars)
- Keep dark mode toggle accessible

**Step 2: Commit**

```bash
git add components/footer.tsx
git commit -m "refactor: update footer with messaging-aligned copy"
```

---

### Task 10: Wire Homepage Together

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/lazy-sections.tsx`

**Step 1: Update lazy-sections.tsx**

Replace the 7 old lazy-loaded sections with the new ones:

```tsx
const ImpactSection = dynamic(() => import("@/components/impact-section"), { loading: () => <SectionLoading />, ssr: false })
const RoleHighlightsSection = dynamic(() => import("@/components/role-highlights-section"), { loading: () => <SectionLoading />, ssr: false })
const QuotesSection = dynamic(() => import("@/components/quotes-section"), { loading: () => <SectionLoading />, ssr: false })
const CompanyMarqueeSection = dynamic(() => import("@/components/company-marquee-section"), { loading: () => <SectionLoading />, ssr: false })
const CtaSection = dynamic(() => import("@/components/cta-section"), { loading: () => <SectionLoading />, ssr: false })
const Footer = dynamic(() => import("@/components/footer"), { loading: () => <SectionLoading />, ssr: false })
```

Update the `LazySections` return to render new section order:
1. Impact (metrics grid)
2. Role Highlights (carousel)
3. Quotes (rotating)
4. Company Marquee
5. CTA
6. Footer

Remove old sections: ApproachSection, SuperpowerSection, CompaniesSection, StorySection, WritingSection, OffTheClockSection.

**Step 2: Update page.tsx**

Update `sectionIds` array to match new sections:

```tsx
const sectionIds = ["hero", "about", "impact", "roles", "quotes", "companies", "contact"]
```

Remove the `AboutSection` import — the about content now lives on `/about`. The hero section is the only SSR section above the fold.

Update the page structure:
```tsx
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen flex flex-col">
        <HeroSection />
        <LazySections />
      </main>
      <ScrollToTop />
    </>
  )
}
```

Remove `SectionObserver` and `SectionNav` imports (no longer needed with simplified page structure).

**Step 3: Verify full homepage**

Run: `pnpm dev`, check all sections render in order, scroll works, dark mode works.

**Step 4: Commit**

```bash
git add app/page.tsx components/lazy-sections.tsx
git commit -m "feat: wire new homepage sections together"
```

---

### Task 11: Update Layout Metadata & SEO

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Update metadata**

Update the title, description, OpenGraph, Twitter, and JSON-LD schema to align with the messaging framework:

- Title: "Michael Cavopol | Product & Revenue Leader | Nashville"
- Description: Use messaging framework roof — "Product & revenue leader with 20 years across 4 disruption cycles. Fast to clarity. Fast to conviction. Fast to results."
- Update `personSchema.jobTitle` to "Product & Revenue Leader"
- Update `personSchema.description` with messaging framework copy
- Update `organizationSchema` — keep Hedgehog Growth but update description
- Update keywords to match new positioning
- Remove `generator: "v0.dev"` — no longer scaffolded by v0

**Step 2: Update critical CSS**

Update the inlined critical CSS colors to match new warm palette (the `:root` and `.dark` vars in the `<style>` tag).

**Step 3: Verify**

Run: `pnpm build`, check that metadata renders correctly in page source.

**Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "refactor: update metadata and SEO for messaging framework"
```

---

### Task 12: Create About Page

**Files:**
- Create: `app/about/page.tsx`

This is the largest single task. The About page has 7 sections. Build it as a single page component initially (can split into sub-components later if needed).

**Step 1: Create the page file with metadata**

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Michael Cavopol",
  description: "The full story. 20 years across product, revenue, and operations. Four disruption cycles. Building product companies that compound.",
}
```

**Step 2: Build page sections**

The page should include these sections, in order:

1. **Career Narrative Intro** — Strategic narrative in first person. Use content from messaging framework "The Big Change" section. 2-3 paragraphs max.

2. **Disruption Cycles** — 4 stacked sections (one per cycle). Each has: cycle name, timeframe, company, role, the full story from interviews (see messaging framework doc Section "Key Lessons by Company" and Pillar 2 proof points). Use a clear visual separator between cycles.

3. **AI Thesis** — The three-act software cost collapse + three questions. Content from messaging framework "AI Thesis" section.

4. **All Quotes** — All 6 quotes displayed in a 2-column grid (or stacked on mobile). Each as a Card with quote text + attribution.

5. **Leadership Philosophy** — Content from Pillar 3 proof points: in-the-work leadership, hiring philosophy (math teacher → PM, events coordinator → CS director), reorg approach, transparency.

6. **Personal / Off the Clock** — Nashville, family, coffee shops, Costco, NEC mentor. Brief, conversational.

7. **Full Company List** — Import and render the existing company pill/filter component from `about-section.tsx` (extract the company data and category filtering logic into a standalone component if needed, or inline it).

All copy should follow brand voice guidelines: first person, conversational, "we" for results / "I" for decisions, numbers without commentary, short sentences.

Include Navbar at top and Footer at bottom. Use standard `container-padding` and `section-padding` classes.

**Step 3: Verify**

Run: `pnpm dev`, navigate to `/about`, check all sections render.

**Step 4: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: create About page with full career narrative"
```

---

### Task 13: Clean Up Unused Components

**Files:**
- Delete: `components/approach-section.tsx`
- Delete: `components/superpower-section.tsx`
- Delete: `components/companies-section.tsx`
- Delete: `components/story-section.tsx`
- Delete: `components/writing-section.tsx`
- Delete: `components/off-the-clock-section.tsx`
- Delete: `components/contact-section.tsx`
- Delete: `components/key-results-section.tsx`
- Delete: `components/logo-banners.tsx`
- Delete: `components/section-nav.tsx`
- Delete: `components/section-observer.tsx`
- Delete: `components/lazy-section.tsx` (the individual wrapper, not lazy-sections.tsx)
- Delete: `components/performance-monitor.tsx` (if not imported anywhere)

**Step 1: Verify no remaining imports**

Search the codebase for any remaining imports of the deleted components. Fix any broken imports.

Run: `pnpm build`
Expected: Build succeeds with no import errors.

**Step 2: Remove unused animation CSS**

In `styles/globals.css`, remove the `slotMachine` keyframes and `.animate-slot-machine` class (no longer needed without logo-banners). Keep `fadeIn`, `marquee`, and the new styles.

Remove `.banner-container`, `.banner-animation-wrapper`, and logo-banner-specific CSS.

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove unused components and styles from old site"
```

---

### Task 14: Build Verification & Deploy

**Step 1: Full build**

Run: `pnpm build`
Expected: Build succeeds with no errors.

**Step 2: Lint check**

Run: `pnpm lint`
Fix any lint errors.

**Step 3: Type check**

Run: `npx tsc --noEmit`
Fix any type errors.

**Step 4: Visual verification**

Run: `pnpm dev` and manually check:
- [ ] Homepage renders all 7 sections in order (hero, impact, roles, quotes, marquee, CTA, footer)
- [ ] Dark mode toggle works on all sections
- [ ] Role highlights carousel scrolls and auto-advances
- [ ] Quotes rotate with crossfade
- [ ] Company marquee animates smoothly
- [ ] "Let's meet" CTA links to cal.com
- [ ] "My story" links to /about
- [ ] About page renders all 7 sections
- [ ] Navbar links work (About, Correspondence)
- [ ] Correspondence page still works
- [ ] Mobile responsive layout works
- [ ] Warm color palette visible in both modes

**Step 5: Commit any fixes**

```bash
git add -A
git commit -m "fix: resolve build and lint issues from redesign"
```

**Step 6: Deploy preview**

```bash
npx vercel deploy
```

Check preview URL for any deployment issues.
