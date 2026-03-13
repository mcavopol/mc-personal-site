import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import AboutCompanyList from "@/components/about-company-list"

export const metadata: Metadata = {
  title: "About | Michael Cavopol",
  description:
    "The full story. 20 years across product, revenue, and operations. Four disruption cycles. Building product companies that compound.",
}

const quotes = [
  {
    text: "Michael learned more about our business in two weeks than top-tier consultants did in a deep evaluation. He has an uncanny ability to make sense of chaos. In his first month, he literally talked to every customer and helped us uncover gaps in our product \u2014 but more importantly, in our company strategy \u2014 that had been staring us in the face for years.",
    author: "CEO, Prado",
  },
  {
    text: "Michael fundamentally changed how we thought about revenue growth. He helped us see that we didn\u2019t quite have product-market fit yet, and quickly went to work building a professional services team that could scale revenue while we addressed the gaps in our product. He\u2019s the unicorn who can play across revenue, product, and strategy.",
    author: "CEO, Ambition",
  },
  {
    text: "Michael balances a well-tuned product sense with an incredible instinct for commercial strategy. He spotted a critical issue with our distribution model right away, and despite overwhelming opposition, kept advocating for a channel-driven approach for months. We finally listened \u2014 and since then, we\u2019ve restructured the entire business around channel partners. Revenue has tripled since that decision.",
    author: "CEO, Fresh Technology",
  },
  {
    text: "Michael is a self-starter who\u2019s always laser-focused on the one or two things slowing the company down. He\u2019s relentless about challenging the status quo and relentless in his pursuit of excellence \u2014 but he balances that with genuine care for the people around him.",
    author: "CEO, LeanKit",
  },
  {
    text: "Michael is a product person\u2019s product person. He loves building incredible digital experiences and he deeply cares about user context. He has this ability to put himself in the user\u2019s shoes at the exact moment in the customer journey \u2014 he can predict what a user is thinking and feeling with insane precision. I was constantly baffled during user interviews at his ability to guess what a user would say.",
    author: "CPO, Ambition",
  },
  {
    text: "Michael is an incredibly versatile cross-functional leader. Just when you think you\u2019ve got him figured out, you\u2019ll catch him writing code on a flight, then presenting the company\u2019s growth strategy to investors an hour later. You can\u2019t pin him down. Just when you think nobody can be great at sales, product, and leadership all at once \u2014 he proves you wrong.",
    author: "Board Member & Investor",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen flex flex-col">
        {/* Section 1: Career Narrative Intro */}
        <section className="section-padding pt-28 md:pt-32">
          <div className="container-padding mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              The Full Story
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Technology doesn&apos;t disrupt on a schedule &mdash; it comes in waves. Agile. Cloud. Mobile. AI. Each wave reshapes how companies build, sell, and operate. The leaders who thrive aren&apos;t the ones with the best tools &mdash; they&apos;re the ones who move fastest when the ground shifts.
              </p>
              <p>
                I&apos;ve spent 20 years on the front lines of these transitions. Not theorizing about them &mdash; building through them. Product, revenue, operations. The tools change every cycle. The approach doesn&apos;t: move quickly into a complex environment, form a sharp point of view on what matters, and drive teams to execute before the window closes.
              </p>
              <p>
                Four disruption cycles. Same muscle. Here&apos;s how it played out.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Disruption Cycles */}
        <section className="section-padding">
          <div className="container-padding mx-auto max-w-4xl space-y-16">
            {/* Cycle 1: Agile/Lean */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                  Cycle 1
                </span>
                <span className="text-sm text-muted-foreground">2013&ndash;2017</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Agile/Lean &mdash; LeanKit
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I joined LeanKit as engineer #~20. My passion wasn&apos;t writing code &mdash; it was using technology to solve problems. I rose through product management, professional services, customer success, and eventually owned the majority of revenue at the company.
                </p>
                <p>
                  The pattern started here. I led a tiger team to open the construction vertical from first principles &mdash; one of the last industries ripe for Agile transformation. Customers included Walmart, BAE Systems, and Rolls-Royce. Along the way, I built a custom reporting API for enterprise customers who needed performance data for budgeting and planning. We deployed it. Customers did nothing with it.
                </p>
                <p>
                  The gap wasn&apos;t data access &mdash; it was insight delivery. Customers weren&apos;t in the business of building reports. I built a professional services team with BI analysts to bridge the capability-to-insight gap. That PS team became support and docs oversight, then customer success leadership, then ownership of the majority of company revenue.
                </p>
                <p>
                  $3M to $18M ARR. Planview acquisition. The lesson: the gap between capability and customer value is where the real work lives.
                </p>
              </div>
            </div>

            <hr className="border-border" />

            {/* Cycle 2: Cloud & SaaS */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                  Cycle 2
                </span>
                <span className="text-sm text-muted-foreground">2017&ndash;2020</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Cloud & SaaS &mdash; Ambition
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Employee ~10. I tripled ARR from $2M to $6M, eventually $8M. Built everything post-sales: customer success, support, professional services, solutions engineering &mdash; all from zero.
                </p>
                <p>
                  This was the anti-pattern. The founders had built for the buyer, not the user. The product should have been a Salesforce integration, not a standalone dashboard. I learned the cost of ignoring product-market fit &mdash; you can paper over product gaps with great CS, but only for so long. NRR improved 30 points. Expansion ARR grew 12.7x. NPS hit 55.
                </p>
                <p>
                  But the real lesson was harder: this experience hardened my conviction about jobs-to-be-done and user-first product thinking. It drove every subsequent role.
                </p>
              </div>
            </div>

            <hr className="border-border" />

            {/* Cycle 3: COVID-era ops */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                  Cycle 3
                </span>
                <span className="text-sm text-muted-foreground">2020&ndash;2024</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                COVID-Era Ops &mdash; Fresh Technology
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Restaurant tech through a pandemic. Delivery marketplaces &mdash; Uber Eats, DoorDash, GrubHub &mdash; were disintermediating restaurants the way Amazon disintermediated booksellers. COVID hit right as a VC raise was happening.
                </p>
                <p>
                  I built the strategic narrative: help customers understand the existential shift before selling them the solution. Two products emerged: no-commission first-party online ordering and a kitchen display system for demand routing, margin-aware prioritization, delivery driver coordination, and ETA accuracy.
                </p>
                <p>
                  The unlock was channel distribution. I identified that POS partnerships were the path and signed Square, Clover, and Lightspeed. Sales cycle went from 8 months to 15 days. We grew 93% year-over-year. The chaos-to-thesis-to-momentum cycle works even when the disruption is external and the industry is unfamiliar.
                </p>
              </div>
            </div>

            <hr className="border-border" />

            {/* Cycle 4: AI */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                  Cycle 4
                </span>
                <span className="text-sm text-muted-foreground">2024&ndash;present</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                AI &mdash; Arena Labs + Hedgehog Growth
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Arena Labs was a professional services company that had failed multiple times to become a product company. They were selling 8-week coaching programs to clinicians with discretionary budgets instead of C-suite P&L owners.
                </p>
                <p>
                  I pivoted GTM to hospital C-suite buyers &mdash; CNOs, CMOs, CEOs, CFOs. Rebuilt the product around jobs-to-be-done: acute intervention (physiological tools for in-the-moment stress) and longitudinal habit formation (personalized protocol toolkit). $25&ndash;$45/month subscription, profitable without a human coach.
                </p>
                <p>
                  The AI strategy follows the Tesla Autopilot model: human coaches generate training data while coaching, AI runs smart recommendations in the background, and pre-compiles conversation starters to reduce coach cognitive load. Not replacing humans &mdash; using AI to scale quality. 85% engagement versus 3&ndash;5% industry baseline.
                </p>
                <p>
                  Through Hedgehog Growth Partners, I advise non-tech companies on practical AI adoption &mdash; helping them answer the three questions that matter most for their business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: AI Thesis */}
        <section className="section-padding bg-secondary/50">
          <div className="container-padding mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              AI Thesis
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                AI is a massive unlock for all companies, but especially for non-tech &ldquo;Main Street&rdquo; companies. They have the most to gain &mdash; and the most to lose as AI-powered competitors close the gap.
              </p>

              <h3 className="text-xl font-semibold text-foreground pt-4">
                The Software Cost Collapse (Three Acts)
              </h3>
              <ol className="list-decimal list-inside space-y-3 ml-1">
                <li>
                  <strong>AI-native competitors outcompete incumbent SaaS</strong> &mdash; same capabilities, better, faster, cheaper.
                </li>
                <li>
                  <strong>Companies use AI internally</strong> to recreate what they&apos;re paying SaaS vendors for, killing those contracts.
                </li>
                <li>
                  <strong>Maintaining internal tools &ldquo;won&apos;t make the beer taste better&rdquo;</strong> &mdash; smart companies outsource to AI-native firms at 1/10th to 1/100th the price, bringing us back to a vendor model at radically lower cost.
                </li>
              </ol>
              <p>
                Net result: everyone gets deeply capable software at a fraction of today&apos;s cost.
              </p>

              <h3 className="text-xl font-semibold text-foreground pt-4">
                Three Questions Every Business Owner Needs to Answer Fast
              </h3>
              <ol className="list-decimal list-inside space-y-3 ml-1">
                <li>
                  <strong>Growth:</strong> How does AI supercharge sales and marketing to grow faster while staying capital-efficient?
                </li>
                <li>
                  <strong>Margins:</strong> How does AI reduce opex to materially improve margins?
                </li>
                <li>
                  <strong>Core offering (most important):</strong> How does AI-native thinking transform your offering to customers? Not bolt-on AI &mdash; rebuild in an AI-native way. Whether you&apos;re in charcoal, retail fashion, restaurants, manufacturing, or technology.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 4: All Quotes */}
        <section className="section-padding">
          <div className="container-padding mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              What People Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex flex-1">
                      <div className="w-1 bg-primary mr-4 flex-shrink-0 rounded-full" aria-hidden="true" />
                      <div className="flex flex-col justify-between">
                        <blockquote className="text-muted-foreground leading-relaxed">
                          &ldquo;{quote.text}&rdquo;
                        </blockquote>
                        <cite className="mt-4 text-sm font-medium not-italic text-foreground">
                          &mdash; {quote.author}
                        </cite>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Leadership Philosophy */}
        <section className="section-padding bg-secondary/50">
          <div className="container-padding mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              How I Lead
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I get on calls. I pick up the phone. I get on the plane. Not managing from a distance &mdash; in the work, alongside the team. Low power distance. People follow because you&apos;re building with them, not directing from above.
              </p>
              <p>
                Clarity on what matters enables focused presence. When you know the one or two things that will actually move the needle, you don&apos;t spread thin across everything. You show up where it counts.
              </p>

              <h3 className="text-xl font-semibold text-foreground pt-4">
                Hiring Philosophy
              </h3>
              <p>
                I hire for human characteristics, not credentials. A math teacher became a support agent, then a support lead, then moved into product management. An events coordinator became a CSM, then a CSM manager, then a CSM director, then a CS function leader. People I&apos;ve hired consistently rise to leadership positions &mdash; years later at Ambition, the leadership team was all my hires.
              </p>

              <h3 className="text-xl font-semibold text-foreground pt-4">
                Reorgs and Hard Decisions
              </h3>
              <p>
                At Prado, I reframed the challenge as an opportunity: &ldquo;These aren&apos;t difficult customers &mdash; we&apos;re just trying to serve everyone.&rdquo; I showed the data (margin by segment), and let the team self-organize toward the obvious answer. For those who didn&apos;t fit the new direction, I invested in their transition with care and support.
              </p>
              <p>
                Genuine care for people and mission. Transparency. No ego about the work. Willing to have hard conversations from a place of caring.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Personal / Off the Clock */}
        <section className="section-padding">
          <div className="container-padding mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Off the Clock
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nashville-based. Married to Laura Lea. Father. Sort-of runner and biker. Tech tinkerer. Likely sketching ideas in overpriced coffee shops. Costco evangelist. Warner Parks resident.
              </p>
              <p>
                Mentor at the Nashville Entrepreneur Center. Guest lecturer on pricing, product strategy, and recession-proof growth. Always game for a good problem, and a better cup of coffee.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Full Company List */}
        <section className="section-padding bg-secondary/50">
          <div className="container-padding mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Companies I&apos;ve Worked With
            </h2>
            <p className="text-muted-foreground mb-8">
              Across 10 industries, from Fortune 500 to early-stage startups. Click a category to filter.
            </p>
            <AboutCompanyList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
