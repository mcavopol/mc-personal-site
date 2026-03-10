# Site Redesign Design — michael.cavopol.me

**Date:** 2026-03-09
**Status:** Approved
**Depends on:** [Messaging Framework](2026-02-27-messaging-framework.md)

---

## Design Direction

- **Visual tone:** Warm & personal — approachable, human, photo-forward
- **Palette:** Warm neutrals with muted teal accent
  - Light: bg `#FAFAF8`, text `#1A1A1A`, accent `#2A7C6F`
  - Dark: bg `#141414`, text `#E8E8E6`, accent `#3D9B8F`
- **Typography:** Inter (keep current), strong hierarchy with large headings
- **Cards:** Subtle shadows, warm backgrounds — not pure black/white
- **Dark mode:** Supported via `next-themes`, warm not sterile

---

## Site Structure

Three pages:

1. **Homepage** (`/`) — Information-dense credibility page with metrics, role highlights, quotes, and company marquee
2. **About** (`/about`) — Deep career narrative, disruption cycles, AI thesis, leadership philosophy, personal
3. **Correspondence** (`/correspondence`) — Virtual business card (keep as-is)

---

## Homepage (`/`)

~4-5 screens. Information-dense. Leads with numbers.

### Section 1 — Hero

- Photo left (right on mobile), text right
- Headline: "Hi, I'm Michael."
- Subhead: "I build product companies through disruption cycles. Fast to clarity. Fast to conviction. Fast to results."
- CTAs: `[ Let's meet ]` (primary, teal accent, → cal.com) + `[ My story → ]` (text link → /about)

### Section 2 — Impact Metrics

2×2 grid of bold headline metrics with supporting detail. Keep the current pattern — it works.

| Metric | Detail |
|--------|--------|
| ↑ 12.7× ARR Growth | Contract Value +427× |
| ↑ 3× R&D Impact | Delivery Speed ↑14× // Bugs ↓70% |
| ↓ 3× Burn Reduction | ↓70% OpEx // ↑38% NDR |
| + 150% Net Revenue | LTV ↑12.6× // NPS ↑35pts |

### Section 3 — Role Highlights Carousel

Horizontally scrolling cards. Auto-advancing, draggable/swipeable. Multiple cards per company where appropriate.

Each card:
- Role title
- Company name
- 1-2 sentence description of what was done
- 3-4 bullet outcomes with hard numbers
- "Learn more" link → corresponding section on /about

Cards (ordered by relevance/recency):

| Card | Role | Description | Outcomes |
|------|------|-------------|----------|
| Arena Labs | COO & CPO | AI-native product rebuild for healthcare workforce wellness. Pivoted GTM to hospital C-suite. Rebuilt product around JTBD. | 85% engagement vs 3-5% baseline, AI coaching model, $25-45/mo profitable subscription |
| Prado | Interim COO & SVP Revenue/Product | Walked in, interviewed every customer in first month. Identified enterprise ICP mismatch. Refocused product and GTM. | Burn 3x → 0x in 6 months, Median contract +427×, Dev cycle 60d → <7d |
| Fresh Technology | SVP Revenue & Product | Built strategic narrative for restaurant tech through COVID. Channel pivot to POS partnerships. | 93% YoY growth, Sales cycle 8 mo → 15 days, Support SLA 23× faster |
| Ambition | VP Post-Sales & Solutions | Built CS, support, PS, and solutions engineering from zero. Solved churn problem while product matured. | NRR +30pts, LTV 2.5×, Expansion ARR 12.7×, NPS 55 |
| LeanKit | Director, CS & Professional Services | Built PS, support, docs, and CS orgs. Identified data-to-insight gap and bridged it with BI team. | Owned majority of revenue at exit, CX NPS 50+ |
| LeanKit | Product Manager, Construction | Tiger team to open construction vertical from first principles. One of last industries ripe for Agile transformation. | New market opened, Customers: Walmart, BAE, Rolls-Royce |

### Section 4 — Featured Quote (Rotating)

Full-width quote block. Timed rotation (crossfade) through all 6 quotes. Attribution visible.

Quotes (in rotation):
1. "Michael learned more about our business in two weeks than top-tier consultants..." — CEO, Prado
2. "Michael fundamentally changed how we thought about revenue growth..." — CEO, Ambition
3. "He spotted a critical issue with our distribution model right away..." — CEO, Fresh Technology
4. "Michael is a self-starter who's always laser-focused..." — CEO, LeanKit
5. "Michael is a product person's product person..." — CPO, Ambition
6. "Just when you think you've got him figured out..." — Board Member & Investor

### Section 5 — Company Names Marquee

Animated horizontal text scroll. Infinite loop, pauses on hover. Clean typography, muted styling.

Names: Walmart · Salesforce · Delta · Rolls-Royce · J&J · BAE Systems · Intel · FedEx · Caterpillar · Amazon · Square · Cisco · ServiceNow

### Section 6 — CTA

"Let's meet" (primary → cal.com) + email secondary (mcavopol@gmail.com). Warm, conversational close.

### Section 7 — Footer

Name, tagline, social links (LinkedIn, Substack, X, GitHub, Email). Copyright. Dark mode toggle.

---

## About Page (`/about`)

Deep narrative page. First person, conversational voice per brand guidelines.

### Section 1 — Career Narrative

The strategic narrative intro in first person:
- Technology disrupts in waves (Agile, Cloud, Mobile, AI)
- The leaders who thrive move fastest when the ground shifts
- "I've spent 20 years on the front lines of these transitions"

### Section 2 — Disruption Cycles

Visual timeline or stacked sections, one per cycle. Each includes: timeframe, company, role(s), the full story from interviews.

1. **Agile/Lean — LeanKit (2013-2017)**
   - Joined as engineer #~20, rose through PM, PS, CS to owning majority of revenue
   - Tiger team for construction vertical — first principles approach
   - Data-to-insight gap discovery and PS team build
   - $3M → $18M ARR, Planview acquisition

2. **Cloud/SaaS — Ambition (2017-2020)**
   - Employee ~10, tripled ARR $2M → $6M (eventually $8M)
   - Built all post-sales functions from zero
   - The anti-pattern: learned the cost of building for buyer not user
   - Lesson that hardened conviction about JTBD and user-first thinking

3. **COVID-era ops — Fresh Technology (2020-2024)**
   - Restaurant tech through pandemic
   - Strategic narrative: delivery marketplaces as existential threat (Amazon/booksellers analogy)
   - Two products: first-party online ordering + KDS for demand routing
   - Channel pivot to POS partnerships. 93% YoY growth

4. **AI — Arena Labs + HGP (2024-present)**
   - Pro services → product company transformation
   - GTM pivot: clinician discretionary budgets → C-suite P&L owners
   - Product rebuild around JTBD: acute intervention + longitudinal habit formation
   - Tesla Autopilot AI strategy: coaches generate training data, AI runs recommendations, pre-compiles conversation starters
   - 85% engagement vs 3-5% industry baseline

### Section 3 — AI Thesis

- The big claim: AI is massive for all companies, especially non-tech "Main Street"
- Software cost collapse in three acts
- Three questions every business owner must answer fast (growth, margins, core offering)

### Section 4 — All Quotes

All 6 quotes displayed — grid or stacked cards with attribution.

### Section 5 — Leadership Philosophy

- In-the-work leadership: gets on calls, picks up the phone, gets on the plane
- Hires for human characteristics, not credentials (math teacher → PM, events coordinator → CS director)
- People consistently rise to leadership positions under his leadership
- Reorg approach: reframe as opportunity, show the data, let team self-organize, invest in transitions
- Genuine care + transparency + no ego

### Section 6 — Personal / Off the Clock

Nashville-based. Father. Sort-of runner and biker. Tech tinkerer. Coffee shops. Costco evangelist. Warner Parks. NEC mentor and guest lecturer.

### Section 7 — Full Company List

Interactive pill cloud with category filtering (clean up current component). Categories: Tech, Retail, Healthcare, Aerospace, Engineering, Construction, BPO, Logistics, Hospitality, High-Growth SaaS.

---

## Correspondence (`/correspondence`)

Keep as-is. Virtual business card with vCard download. Update OG image if visual design changes warrant it.

---

## Navigation

- **Navbar:** "Michael Cavopol" (home link) + "About" + "Correspondence" + dark mode toggle
- **Mobile:** Hamburger menu with same links
- Simplified from current 7-link nav to 2-link nav (About, Correspondence)

---

## Technical Notes

- Keep SSR for above-fold (hero + metrics), lazy-load below-fold sections
- Keep `next/dynamic` with `ssr: false` pattern for below-fold
- Update CSS custom properties for new color palette
- Company marquee: CSS animation (no JS needed) with `@keyframes` translateX
- Quote rotation: client-side interval with crossfade transition
- Role carousel: keep current embla-carousel or similar pattern
- Remove unused sections/components from current site during implementation

---

## Primary CTA

- **Primary:** "Let's meet" → `https://cal.com/hedgehog-growth/30min`
- **Secondary:** Email → `mcavopol@gmail.com`

---

## What's NOT in v1

- Blog / writing section (Substack link in footer only)
- Case study deep-dive pages (future enhancement)
- Contact form (Cal.com + email is sufficient)
- Logo images for company marquee (text-based)
- Animations beyond marquee and quote rotation (iterate post-v1)
