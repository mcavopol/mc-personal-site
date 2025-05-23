"use client"
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function StorySection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const expandButtonRef = useRef<HTMLDivElement>(null)
  const [timelineHeight, setTimelineHeight] = useState<number | null>(null)

  // Toggle expanded state
  const toggleExpanded = () => {
    setIsExpanded((prev) => {
      const newExpanded = !prev

      if (newExpanded) {
        // When expanding, scroll to the section
        setTimeout(() => {
          const sectionElement = document.getElementById("career")
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      } else {
        // When collapsing, scroll to position where the "Read More" button is just visible
        setTimeout(() => {
          if (sectionRef.current && expandButtonRef.current) {
            // Calculate the position to scroll to
            const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY
            const buttonHeight = expandButtonRef.current.offsetHeight
            const collapsedHeight = timelineHeight || 600

            // Position where the button would be (section top + content height - button height)
            const targetPosition = sectionTop + collapsedHeight - buttonHeight

            // Scroll to position with a small offset to ensure button is visible
            window.scrollTo({
              top: targetPosition - 20, // 20px offset to ensure button is visible
              behavior: "smooth",
            })
          }
        }, 300)
      }

      return newExpanded
    })
  }

  // Calculate the collapsed height to show first card and half of second card
  useEffect(() => {
    const calculateCollapsedHeight = () => {
      if (timelineRef.current) {
        const cards = timelineRef.current.querySelectorAll(".relative.flex")
        if (cards.length >= 3) {
          const firstCardHeight = cards[0].getBoundingClientRect().height
          const secondCardHeight = cards[1].getBoundingClientRect().height
          const thirdCardHeight = cards[2].getBoundingClientRect().height
          // Set height to show first card fully, second card fully, and about 1/5 of third card
          // Reduced from 0.35 to 0.2 to show 1.5 fewer lines
          setTimelineHeight(firstCardHeight + secondCardHeight + thirdCardHeight * 0.2)
        }
      }
    }

    // Calculate on mount and when window resizes
    calculateCollapsedHeight()
    window.addEventListener("resize", calculateCollapsedHeight)

    return () => {
      window.removeEventListener("resize", calculateCollapsedHeight)
    }
  }, [])

  return (
    <section id="career" ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Career Timeline */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Story</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
                I once worried my meandering career was unfocused. I now believe it's my{" "}
                <a
                  href="#superpower"
                  className="font-bold underline hover:text-black dark:hover:text-white transition-colors"
                >
                  superpower
                </a>
                , giving me a rare perspective otherwise reserved only for Founders and CEOs.
              </p>
            </div>

            <div
              className="relative mt-10 md:pb-12 overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: isExpanded ? "5000px" : timelineHeight ? `${timelineHeight}px` : "600px",
                position: "relative",
              }}
            >
              {/* Gradient overlay when collapsed */}
              {!isExpanded && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent z-20 pointer-events-none"
                  style={{ bottom: "0" }}
                />
              )}

              {/* Expand button when collapsed */}
              {!isExpanded && (
                <div ref={expandButtonRef} className="absolute bottom-0 left-0 right-0 flex justify-center z-30 pb-2">
                  <Button onClick={toggleExpanded} variant="outline" className="flex items-center gap-2">
                    <span>Read More</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* Central timeline line */}
              <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2 z-10"></div>

              <div ref={timelineRef} className="space-y-12 md:space-y-0">
                <TimelineCard
                  age="9"
                  year="1996"
                  role="Asked for a computer for Christmas"
                  company=""
                  description={`Instead, my parents bought me a Motherboard, RAM, CPU, HDD and a copy of Windows 95.

"If you can build it, you can have it"`}
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
                  description={`I was hired for a technical role, but soon realized, while I loved the close-knit team, I missed the fast-cycle, customer-facing problem solving.

I moved into a hybrid role as both Product Manager and Solution Engineer tightly integrating market needs with product capability.

With the tailwind of the Lean-construction movement, I was tapped for a new market tiger-team, charged with growing LeanKit into new verticals. 

My blend of technical and business acumen made me a natural revenue leader. As LeanKit accelerated towards exit, I was asked to build & lead the Post-Sales functions of Customer-Success, Solution Architecture and Professional Services.`}
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
                  description={`I joined Ambition as employee 10 and the first non-founder exec to help them control churn and accelerate stalled revenue.

We improved churn by hiring a team of CSMs, and later layering in Solution Architecture, Professional Services and Account Management functions, which I personally built and led. 

In hindsight, this was an error. We papered over product shortcomings with an expensive team, missing the opportunity to refocus on creating an incredible product experience.

I learned that true customer success comes from intuitive products that create customer value inside the places they already work, paving the path for future product-led work.`}
                  achievements={[
                    "2m → 8m ARR",
                    "60% → 92% Retention",
                    "2.5x growth in customer lifetime value (LTV)",
                    "12.7x growth in same-account expansion sales",
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

To accomplish this, we turned a traditional IT-service org into a venture-backed Fintech. We rebuilt the leadership team, professionalized operations and established a coherent product & revenue strategy. The cornerstone of that strategy was a small product with amazing organic traction.

We implemented the dual strategy of using Product Led Growth to maximize organic acquisition while relying on channel partnerships to sell our product into enterprise accounts.

Revenue growth tripled, from under 5% to 30-40% YoY, while attracting strategic acquirers in point-of-sales systems.`}
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
                  description={`I was recruited by an ATX-based Shopify alternative, trying to get profitable in the post-ZIRP-era overhang. Through deep customer discovery, I identified key profitable customer segments and the risks/opportunities within.

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

            {/* Collapse button when expanded - shown at the bottom */}
            {isExpanded && (
              <div className="flex justify-center mt-8">
                <Button onClick={toggleExpanded} variant="outline" className="flex items-center gap-2">
                  <span>See Less</span>
                  <ChevronUp className="h-4 w-4" />
                </Button>
              </div>
            )}
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
      Personal: "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-100 border-blue-400 dark:border-blue-700",
      "IT Consulting":
        "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-100 border-purple-400 dark:border-purple-700",
      Education:
        "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-100 border-green-400 dark:border-green-700",
      "B2B SaaS":
        "bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-100 border-orange-400 dark:border-orange-700",
      "PLG & Channel":
        "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-100 border-amber-400 dark:border-amber-700",
      "SMB -> Enterprise":
        "bg-sky-100 dark:bg-sky-900/40 text-sky-800 dark:text-sky-100 border-sky-400 dark:border-sky-700",
      "Consulting + Fractional":
        "bg-pink-100 dark:bg-pink-900/40 text-pink-800 dark:text-pink-100 border-pink-400 dark:border-pink-700",
    }

    return (
      sectorColors[sector] ||
      "bg-gray-100 dark:bg-gray-800/40 text-gray-800 dark:text-gray-100 border-gray-400 dark:border-gray-700"
    )
  }

  // Get revenue model color
  const getRevenueModelColor = () => {
    return "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-100 border-indigo-400 dark:border-indigo-700"
  }

  // Split description into paragraphs
  const paragraphs = description.split("\n\n").filter((p) => p.trim() !== "")

  return (
    <div
      className={`
        relative flex flex-col md:flex-row items-start gap-4 md:gap-0 group 
        mb-12 w-full
        ${!isLeft ? "md:mt-[-120px]" : ""}
      `}
    >
      {/* Age circle - always on the left for mobile, centered for desktop */}
      <div className="absolute left-0 md:left-1/2 top-0 flex flex-col items-center md:transform md:-translate-x-1/2 z-20">
        <div className="rounded-full w-11 h-11 bg-black dark:bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <span className="text-white dark:text-black text-sm font-bold">{age}</span>
        </div>
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">{year}</div>
      </div>

      {/* Content card - full width on mobile, alternating sides on desktop */}
      <div
        className={`
          w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] 
          ml-16 md:ml-0 
          ${isLeft ? "md:mr-auto md:pr-6" : "md:ml-auto md:pl-6"}
          transition-all duration-300 group-hover:shadow-md
          relative md:z-10
          overflow-hidden
        `}
      >
        <div
          className={`
          overflow-hidden 
          bg-white dark:bg-gray-900
          border-2 border-gray-300 dark:border-gray-700
          rounded-lg
          shadow-sm 
          transition-all duration-300
          hover:shadow-lg
          card-content
        `}
        >
          <div className="p-4">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
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
            <div className="flex flex-col space-y-1 mb-3">
              <h3 className="text-xl font-bold">{role}</h3>
            </div>

            {/* Description with proper paragraph spacing */}
            <div className="mb-3 space-y-3">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-sm text-gray-700 dark:text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Achievements */}
            {achievements.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                <h3 className="text-sm font-semibold mb-2 flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Key Outcomes
                </h3>
                <ul className="space-y-1">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
