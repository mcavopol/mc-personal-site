"use client"

import type React from "react"
import { ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, BarChart2, Clock, Code, Building, Repeat, Users, Bot } from "lucide-react"
import { useState, useEffect, useMemo } from "react"

export default function AboutSection() {
  // Calculate current year for age calculations
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  // State for filtering companies
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Define company data with consistent structure
  const companyData = {
    Tech: [
      "Salesforce",
      "Verizon",
      "Intel",
      "Cisco",
      "ServiceNow",
      "Zendesk",
      "Twilio",
      "T‑Mobile",
      "MuleSoft",
      "Outreach",
      "Veracode",
      "GoDaddy",
      "LevelSet",
      "Posigen",
    ],
    "Retail & E‑commerce": [
      "Amazon",
      "Walmart",
      "Square (Block)",
      "Fiserv",
      "Lightspeed",
      "SpotOn",
      "TouchBistro",
      "Jet.com",
      "Ranger Station",
      "ABLE Clothing",
    ],
    Healthcare: ["Johnson & Johnson", "Cardinal Health", "Stryker", "Unum"],
    Aerospace: ["Delta", "Rolls‑Royce Aerospace", "BAE Systems", "Siemens Aerospace"],
    "Engineering & Industrial": ["Caterpillar", "Bosch", "Siemens Gas Turbine", "Rockwell Automation"],
    Construction: ["Skanska", "Turner", "JE Dunn", "Gilbane", "Hoar"],
    "BPO & Contact Centers": ["ADP", "TTEC", "Aerotek", "West Corp (Saleytics)"],
    "Logistics & Supply Chain": [
      "FedEx",
      "WM (Waste Management)",
      "Ryder",
      "Coyote Logistics",
      "Covenant Transport",
      "GlobalTranz",
      "BlueGrace",
      "FreightWaves",
    ],
    "Hospitality & Foodservice": [
      "Erewhon",
      "Hardee's",
      "Blaze Pizza",
      "PJ's Coffee",
      "Taziki's",
      "Everytable",
      "Snap Kitchen",
      "Alfred Coffee",
      "FitLife Foods",
      "Epicured",
    ],
    "High‑Growth SaaS & Startups": [
      "LeanKit",
      "Ambition",
      "Fresh Technology",
      "Prado",
      "Clearloop",
      "XOi",
      "Foresight",
      "Untamed Theory",
      "Jelawai Productions",
    ],
  }

  // Define category colors - vibrant for categories
  const categoryColors = {
    Tech: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800",
    "Retail & E‑commerce":
      "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800",
    Healthcare: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800",
    Aerospace: "bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 border-sky-200 dark:border-sky-800",
    "Engineering & Industrial":
      "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800",
    Construction:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-800",
    "BPO & Contact Centers":
      "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800",
    "Logistics & Supply Chain":
      "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-200 dark:border-indigo-800",
    "Hospitality & Foodservice":
      "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800",
    "High‑Growth SaaS & Startups":
      "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 border-pink-200 dark:border-pink-800",
  }

  // Define company colors - lighter/darker versions of category colors
  const companyColors = {
    Tech: "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-900",
    "Retail & E‑commerce":
      "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-900",
    Healthcare: "bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-100 dark:border-red-900",
    Aerospace: "bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-100 dark:border-sky-900",
    "Engineering & Industrial":
      "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-900",
    Construction:
      "bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-900",
    "BPO & Contact Centers":
      "bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-900",
    "Logistics & Supply Chain":
      "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-900",
    "Hospitality & Foodservice":
      "bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-100 dark:border-green-900",
    "High‑Growth SaaS & Startups":
      "bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 border-pink-100 dark:border-pink-900",
  }

  // Create a randomized array of all companies
  const allCompanies = useMemo(() => {
    const companies: { name: string; category: string }[] = []

    Object.entries(companyData).forEach(([category, companyList]) => {
      companyList.forEach((company) => {
        companies.push({ name: company, category })
      })
    })

    // Fisher-Yates shuffle algorithm
    for (let i = companies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[companies[i], companies[j]] = [companies[j], companies[i]]
    }

    return companies
  }, [])

  // Handle category click
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null) // Toggle off if already selected
    } else {
      setSelectedCategory(category) // Select new category
    }
  }

  // Handle background click to clear filter
  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Only clear if clicking directly on the container, not on a pill
    if ((e.target as HTMLElement).classList.contains("pills-container")) {
      setSelectedCategory(null)
    }
  }

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Founder's Right Hand */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800">
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">The Founders' Right Hand</h2>

              <div className="mb-6 border-l-4 border-gray-400 dark:border-gray-600 pl-6 py-2">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "Michael turns messy product roadmaps and revenue efforts into compounding revenue machines."
                </p>
              </div>

              <div className="mb-8 space-y-6">
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I work with venture‑backed product companies, helping <strong>break growth plateaus</strong> and{" "}
                    <strong>create operating leverage</strong>.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I do this by uniting company <strong>mission</strong>, product <strong>vision</strong>, and
                    go‑to‑market <strong>execution</strong>. This alignment connects every function—from marketing and
                    sales development through engineering and support—driving focused, predictable results.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I've seen firsthand how dedicated, passionate teams will rally behind audacious missions; that
                    shared purpose fuels growth‑oriented companies to transform their trajectory.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-bold mb-2">Ideal Fit</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    50 to 350‑person product companies that need support integrating <strong>Product Strategy</strong>{" "}
                    and <strong>Revenue Engines</strong>.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Titles vary but rhyme with <strong>COO</strong> or <strong>CPRO</strong> (Product & Revenue Officer)
                  </p>

                  <h3 className="text-lg font-bold mb-2">Full‑Stack Perspective</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Two‑decades of experience across technical, product, marketing, sales and customer success roles.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    I see the whole revenue engine and focus on what actually matters.
                  </p>

                  <h3 className="text-lg font-bold mb-2">Core Plays</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                      Revenue Acceleration
                    </span>
                    <span className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                      AI‑Native Innovation
                    </span>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                      Capital‑Efficient Scaling
                    </span>
                    <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                      ICP Value Creation
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h3 className="text-xl font-bold mb-6">Key Outcomes</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border-l-4 border-gray-400 dark:border-gray-600">
                    <div className="flex items-start">
                      <TrendingUp className="h-6 w-6 mr-3 mt-1 text-gray-700 dark:text-gray-300" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Revenue Growth</h4>
                        <ul className="space-y-1">
                          <li className="flex items-baseline">
                            <span className="font-semibold mr-2">Expansion revenue:</span>
                            <span className="text-gray-700 dark:text-gray-300">+1,270%</span>
                          </li>
                          <li className="flex items-baseline">
                            <span className="font-semibold mr-2">Median Contract Value:</span>
                            <span className="text-gray-700 dark:text-gray-300">+427×</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border-l-4 border-gray-400 dark:border-gray-600">
                    <div className="flex items-start">
                      <BarChart2 className="h-6 w-6 mr-3 mt-1 text-gray-700 dark:text-gray-300" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Customer Retention & Value</h4>
                        <ul className="space-y-1">
                          <li className="flex items-baseline">
                            <span className="font-semibold mr-2">Logo LTV:</span>
                            <span className="text-gray-700 dark:text-gray-300">+255%</span>
                          </li>
                          <li className="flex items-baseline">
                            <span className="font-semibold mr-2">Gross Logo Retention:</span>
                            <span className="text-gray-700 dark:text-gray-300">+41%</span>
                          </li>
                          <li className="flex items-baseline">
                            <span className="font-semibold mr-2">Net Dollar Retention:</span>
                            <span className="text-gray-700 dark:text-gray-300">+30%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border-l-4 border-gray-400 dark:border-gray-600">
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 mr-3 mt-1 text-gray-700 dark:text-gray-300" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Operational Efficiency</h4>
                        <ul className="space-y-1">
                          <li className="flex items-baseline">
                            <span className="font-semibold mr-2">Sales Cycle:</span>
                            <span className="text-gray-700 dark:text-gray-300">6–8 mo → 15 days</span>
                          </li>
                          <li className="flex items-baseline">
                            <span className="font-semibold mr-2">Delivery Velocity:</span>
                            <span className="text-gray-700 dark:text-gray-300">3×</span>
                          </li>
                          <li className="flex items-baseline">
                            <span className="font-semibold mr-2">Support Response Time:</span>
                            <span className="text-gray-700 dark:text-gray-300">23× faster</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Timeline */}
          <div id="career" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Story</h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
              I once worried my meandering career was unfocused. I now believe it's my{" "}
              <a
                href="#superpower"
                className="font-bold underline hover:text-black dark:hover:text-white transition-colors"
              >
                superpower
              </a>
              , giving me a rare perspective otherwise reserved only for Founders and CEOs.
            </p>

            <div className="relative mt-10 md:pb-12 overflow-hidden">
              {/* Central timeline line */}
              <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2 z-30"></div>

              <div className="space-y-6 md:-space-y-12">
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

I moved into a hybrid role as both Product Manager and Solution Engineeer tighly integrating market needs with product capability.

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

We improved churn by hiring a team of CSMs, and later layering in Solution Architecture, Professional Services and Account Management functions, which I personal built and led. 

In hindsight, this was an error. We papered over product shortcomings with an expensive team, missing the opportunity to refocus on creating an incredible product experience.

I learned that true customer success comes from intuituve products that create customer value inside the places they already work, paving the path for future product-led work.`}
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

To acomplish this, we turned a traditional IT-service org into a venture-backed Fintech. We rebuilt the leadership team, professionalized operations and established a coherent product & revenue strategy. The cornerstone of that strategy was a small product with amazing organic traction.

We implemented the dual strategy of using Product Led Growth to maximize organic acquisition while relying on channel partnerships to sell our product into enterprise accounts.

Revenue growth tripled, from under 5% to 30-40% YoY, while attracting strategic acquireres in point-of-sales systems.`}
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
          </div>

          {/* Superpower Section */}
          <div
            id="superpower"
            className="space-y-6 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 p-6 md:p-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Superpower</h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              By saying "Yes!" whenever tapped to solve a new problem, I earned a broad first-hand perspective across
              every function of a product company.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <Code className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                <div>
                  <h3 className="text-xl font-bold">Technical × Commercial DNA</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Computer‑science roots + quota‑carrying sales + PLG chops.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Building className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                <div>
                  <h3 className="text-xl font-bold">Company OS</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Tying usability, feasibility and viability to accountability, cadence and vision.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <TrendingUp className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                <div>
                  <h3 className="text-xl font-bold">Operator's POV</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    I've owned burn multiple, retention, product-market fit, then lived the results in board rooms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Repeat className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                <div>
                  <h3 className="text-xl font-bold">Repeatable Playbooks</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Go To Market strategies chosen by unit economics, not fashion.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                <div>
                  <h3 className="text-xl font-bold">Customer Obsession</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Focused on customer problems + value creation, not technical solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Bot className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                <div>
                  <h3 className="text-xl font-bold">AI Edge</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Innovating the next generation of product and tactics with AI copilots, agent workflows, and RAG
                    systems that cut CAC and COGS now, not next quarter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section - Cloud of Pills with Filtering */}
          <div id="partners" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">I've Worked with Amazing Companies</h2>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="p-6 pills-container" onClick={handleBackgroundClick}>
                {/* Category Pills - Centered */}
                <div className="mb-6 text-center">
                  <div className="inline-flex flex-wrap justify-center gap-3">
                    {Object.keys(companyData).map((category) => (
                      <div
                        key={category}
                        className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                          selectedCategory === category ? "ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-600" : ""
                        } ${categoryColors[category]}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCategoryClick(category)
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-800 my-6"></div>

                {/* Company Pills - Centered and Randomized */}
                <div className="flex flex-wrap justify-center gap-3">
                  {allCompanies
                    .filter((company) => !selectedCategory || company.category === selectedCategory)
                    .map((company) => (
                      <div
                        key={`${company.category}-${company.name}`}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${companyColors[company.category]}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCategoryClick(company.category)
                        }}
                      >
                        {company.name}
                      </div>
                    ))}
                </div>

                {/* Instructions - only show when filtering */}
                {selectedCategory && (
                  <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    Click anywhere or on the same category again to clear filter
                  </div>
                )}
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
