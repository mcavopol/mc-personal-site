"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function AboutSection() {
  // Calculate current year for age calculations
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Why I Do This */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why I Do This</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              The most incredible people I've hired have come from non-traditional backgrounds outside of the "tech
              hubs" of SF, NYC, Boston, etc.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              I've seen firsthand how dedicated, passional people inside growth-focused companies transform their own,
              and their families, future.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              I believe that by building the next generation of durable, profitability focused companies, we will build
              a platform of economic opportunity for amazing, entrepreneurial individuals. This resilient class of
              techno-optimists, obsessed with creating value for their communities and customers can lead us to a new
              age of prosperity and abundance.
            </p>
          </div>

          {/* Career Timeline */}
          <div id="career" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Journey</h2>

            <div className="relative mt-10 md:pb-12 overflow-hidden">
              {/* Central timeline line */}
              <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2"></div>

              <div className="space-y-6 md:-space-y-12">
                <TimelineCard
                  age="9"
                  year="1996"
                  role="Asked for a computer for Christmas"
                  company=""
                  description={`My parents bought me a Motherboard, RAM, CPU, HDD and a copy of Windows 95.`}
                  achievements={["1 computer built", "2 week completion time", "4 hard drive reformats"]}
                  isLeft={true}
                  sector="Personal"
                  revenueModel=""
                />

                <TimelineCard
                  age="16"
                  year="2003"
                  role="My real first job"
                  company=""
                  description={`I started doing small business IT for companies around Nashville. Fixing computers, setting up networks, automating workflows. I fell in love with solving business problems.

I loved working with non-technical buyers and solving their issues with tech and kept doing this through high-school and university.`}
                  achievements={[
                    "7500+ computers fixed",
                    "1500+ wifi's troubleshooted",
                    "16 min record for fastest PC build from scratch",
                  ]}
                  isLeft={false}
                  sector="IT Consulting"
                  revenueModel="Services"
                />

                <TimelineCard
                  age="18"
                  year="2005"
                  role="University"
                  company=""
                  description={`I spent most of my time studying computer science and applying what I learned outside of school in my IT consulting work.

Paid my way through school with IT consulting and didn't rack up any debt!`}
                  achievements={["$0 debt"]}
                  isLeft={true}
                  sector="Education"
                  revenueModel=""
                />

                <TimelineCard
                  age="22"
                  year="2009"
                  role="LeanKit"
                  company="Future of Work"
                  description={`Hired into technical role, but soon missed the fast-cycle problem solving of consulting, leading me into product management.

Grew LeanKit into new markets with the tailwinds of a Lean-construction movement.

My blend of technical and business acumen made me a natural revenue leader. As we neared exit I was tapped to build & lead the Post-Sales, Solution Engineering and Professional Services functions.`}
                  achievements={["3m → 18m ARR", "110% net revenue retention"]}
                  isLeft={false}
                  sector="B2B SaaS"
                  revenueModel="Enterprise & PLG"
                />

                <TimelineCard
                  age="29"
                  year="2016"
                  role="Ambition"
                  company="Sales Tech"
                  description={`Joined Ambition as employee 10 to help them build out their post-sales functions.

As we scaled, I was tapped to build solution engineering and professional services functions as we established a Customers and Solutions org.`}
                  achievements={[
                    "2m → 8m ARR",
                    "2.5x growth in customer lifetime value (LTV)",
                    "12.7x growth in same-account sales (NRR)",
                  ]}
                  isLeft={true}
                  sector="B2B SaaS"
                  revenueModel="Enterprise"
                />

                <TimelineCard
                  age="32"
                  year="2019"
                  role="Fresh"
                  company="Restaurant Tech"
                  description={`Recruited by Fintech backers to spin a technology portfolio out of a legacy IT business.

Initially responsible for a platform migration, I was asked to assume revenue responsibility for a small product with huge organic traction.

We implemented both Product Led Growth and Channel revenue approaches to maximize the growth, leading to an overall 30% growth rate.

Along the way we rebuilt a legacy IT services team into a formidable modern technology company.`}
                  achievements={[
                    "Bootstrapped channel revenue to 40% of MRR and 10x'd TAM",
                    "30% annual revenue growth",
                  ]}
                  isLeft={false}
                  sector="PLG & Channel"
                  revenueModel="SaaS + Payments"
                />

                <TimelineCard
                  age="36"
                  year="2023"
                  role="Prado"
                  company="B2B2C e-commerce"
                  description={`I was recruited by an ATX-based Shopify alternative, trying to get profitable in the post-ZIRP-era overhang. Through deep customer discovery, identified key profitable customer segments and the risks/opportunities within.

We tripled resourcing to profitable customers, delivering on key initiatives by defocusing on less profitable segments.

As a result we scaled revenue 25% and further boosted revenue by moving off Square processing to a 1st party payments solution.

We decreased operating costs 70% through extreme focus on only essential priorities, and achieved profitability.`}
                  achievements={[
                    "70% cost reduction",
                    "3x development velocity",
                    "65% reduction in defects",
                    "Enterprise ICP focus grew ACV by 425x",
                    "Increase Pmts take-rate by 30bps",
                    "Profitability Achieved",
                  ]}
                  isLeft={true}
                  sector="SMB -> Enterprise"
                  revenueModel="SaaS + Payments"
                />

                <TimelineCard
                  age="37"
                  year="2024"
                  role="Hedgehog Growth"
                  company="Advisory"
                  description={`I started Hedgehog as a boutique advisory practice. It serves as a platform for advising, consulting, AI-experimentation and micro-SaaS ventures.`}
                  achievements={[
                    "3 toy hedgehogs received",
                    "10x ROI delivered",
                    "1 recession navigated (in progress)",
                  ]}
                  isLeft={false}
                  sector="Consulting + Fractional"
                  revenueModel="Joint Ventures"
                  isLast={true}
                />
              </div>
            </div>
          </div>

          {/* Operating Principles */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Operating Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">Revenue Acceleration</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Nail ICP, craft an offer that hits "must-have," cut time-to-value.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">Focused Innovation</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Every feature pays rent in revenue or differentiation.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">Capital Efficiency</h3>
                    <p className="text-gray-700 dark:text-gray-300">Cash chases the highest-leverage move—always.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When these gears lock, momentum feels unfair—because it is.
            </p>
          </div>

          {/* Expertise */}
          <div id="expertise" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Expertise at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <ArrowRight className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">GTM Mechanics</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    PLG, CLG, Channel, SLG—choose by unit economics, not fashion.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ArrowRight className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Partnership Magnet</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Signed Square, Lightspeed, Salesforce, AWS, Verizon, more.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ArrowRight className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Turnaround Playbooks</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Burn control, org redesign, continuous-delivery cultures.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ArrowRight className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Data-First Ops</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Dashboards that shout what matters; everything else is noise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Off the Clock */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Off the Clock</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              Nashville-based. Father-to-be. Sort-of runner and biker. AI tinkerer. Likely sketching ideas on napkins or
              quoting Clayton Christensen. Mentor at the Nashville Entrepreneur Center; guest-lecturer on pricing,
              product strategy, and recession-proof growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineCardProps {
  age: string
  year: string
  role: string
  company: string
  description: string
  achievements: string[]
  isLeft: boolean
  sector: string
  revenueModel: string
  isLast?: boolean
}

function TimelineCard({
  age,
  year,
  role,
  company,
  description,
  achievements,
  isLeft,
  sector,
  revenueModel,
  isLast = false,
}: TimelineCardProps) {
  // Generate a sector-based color
  const getSectorColor = (sector: string) => {
    const sectorColors: { [key: string]: string } = {
      Personal: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100",
      "IT Consulting": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100",
      Education: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100",
      "B2B SaaS": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100",
      "PLG & Channel": "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100",
      "SMB -> Enterprise": "bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-100",
      "Consulting + Fractional": "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100",
    }

    return sectorColors[sector] || "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
  }

  // Get revenue model color
  const getRevenueModelColor = () => {
    return "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100"
  }

  // Split description into paragraphs
  const paragraphs = description.split("\n\n").filter((p) => p.trim() !== "")

  return (
    <div
      className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-0 group ${
        !isLast ? "mb-8 md:mb-4" : ""
      } md:my-6 w-full`}
    >
      {/* Age circle - always on the left for mobile, centered for desktop */}
      <div className="absolute left-0 md:left-1/2 top-0 flex flex-col items-center md:transform md:-translate-x-1/2 z-30">
        <div className="rounded-full w-11 h-11 bg-black dark:bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <span className="text-white dark:text-black text-sm font-bold">{age}</span>
        </div>
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">{year}</div>
      </div>

      {/* Content card - full width on mobile, alternating sides on desktop */}
      <div
        className={`
  w-[calc(100%-4rem)] md:w-[calc(50%-1.5rem)] 
  ml-16 md:ml-0 
  ${isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}
  transition-all duration-300 group-hover:shadow-md
  ${isLeft ? "md:-mb-8" : "md:-mt-8"}
  relative md:z-10
  overflow-hidden
`}
      >
        <Card
          className="overflow-hidden border-t-4 shadow-sm card-content"
          style={{ borderTopColor: "var(--border-color)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1 transition-colors"
            style={
              {
                "--border-color": `var(--${sector.toLowerCase().replace(" ", "-").replace("&", "and")}-color, black)`,
              } as React.CSSProperties
            }
          ></div>

          <CardContent className="p-3">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-2">
              {/* Sector badge */}
              <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getSectorColor(sector)}`}>
                {sector}
              </div>

              {/* Company badge - only show if company is provided */}
              {company && (
                <div className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
                  {company}
                </div>
              )}

              {/* Revenue Model badge - only show if revenueModel is provided */}
              {revenueModel && (
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRevenueModelColor()}`}>
                  {revenueModel}
                </div>
              )}
            </div>

            {/* Title */}
            <div className="flex flex-col space-y-1 mb-2">
              <h3 className="text-xl font-bold">{role}</h3>
            </div>

            {/* Description with proper paragraph spacing */}
            <div className="mb-2 space-y-3">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-sm text-gray-700 dark:text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Achievements */}
            {achievements.length > 0 && (
              <div className="border-t border-gray-100 dark:border-gray-800 pt-2 mt-1">
                <h4 className="text-sm font-semibold mb-1 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Key Outcomes
                </h4>
                <ul className="space-y-0.5">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
