"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TrendingUp, BarChart2, Clock } from "lucide-react"

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

  // Define category colors
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
    <section id="about" className="section-padding bg-white dark:bg-black">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              I help venture-backed and profitability-focused teams achieve their <strong>company mission</strong>{" "}
              through tight integration of <strong>customer obsession</strong>, <strong>commercial strategy</strong>,{" "}
              <strong>innovative technology</strong> and <strong>intuitive design</strong>.
            </p>
          </div>

          {/* Quote Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex">
                <div className="w-1 bg-black dark:bg-white mr-6 flex-shrink-0"></div>
                <div>
                  <p className="text-2xl md:text-3xl font-light text-gray-800 dark:text-gray-200 leading-relaxed">
                    "Michael turns messy product roadmaps and revenue efforts into compounding revenue machines."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Introduction Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I do this by uniting company <strong>mission</strong>, product <strong>vision</strong>, and
                  go‑to‑market <strong>execution</strong>. This alignment connects every function—from marketing and
                  sales development through engineering and support—driving focused, predictable results.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I've seen firsthand how dedicated, passionate teams will rally behind audacious missions; that shared
                  purpose fuels growth‑oriented companies to transform their trajectory.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cards Grid - Reorganized without Impact Framework */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ideal Fit Card */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Ideal Fit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    50 to 350‑person product companies needing support integrating <strong>Product Strategy</strong> and{" "}
                    <strong>Revenue Engines</strong>.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Titles vary but rhyme with <strong>COO</strong> or <strong>CPRO</strong> (Product & Revenue Officer)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Full-Stack Perspective Card */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Full‑Stack Perspective</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    Two‑decades of experience across technical, product, marketing, sales and customer success roles.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    I see the whole revenue engine and focus on what actually matters.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Core Playbook Card */}
            <Card className="flex flex-col h-full md:col-span-2">
              <CardHeader>
                <CardTitle>Core Playbook</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          </div>

          {/* Add extra spacing to ensure separation between sections */}
          <div className="h-6"></div>

          {/* Key Outcomes Card */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Key Results</CardTitle>
              <CardDescription>Real results delivered for clients and companies</CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>

          {/* Partners Section - Cloud of Pills with Filtering */}
          <div id="partners">
            <div className="space-y-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">I've Worked with Amazing Companies</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Over two decades, I've collaborated with companies across diverse industries and sectors.
              </p>
            </div>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Company Partners</CardTitle>
                <CardDescription>
                  Filter by industry category or click on any company to see related organizations
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="pills-container" onClick={handleBackgroundClick}>
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
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${categoryColors[company.category]}`}
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
              </CardContent>
            </Card>
          </div>

          {/* Operating Principles */}
          <div className="space-y-6">
            <div className="space-y-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Operating Principles</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Core philosophies that guide my approach to building successful companies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Revenue Acceleration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nail ICP, craft an offer that hits "must-have," cut time-to-value.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Focused Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    Every feature pays rent in revenue or differentiation.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Capital Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">Cash chases the highest-leverage move—always.</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When these gears lock, momentum feels unfair—because it is.
            </p>
          </div>

          {/* Off the Clock */}
          <div className="space-y-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Off the Clock</CardTitle>
                <CardDescription>Life beyond the office</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Nashville-based. Father-to-be. Sort-of runner and biker. AI tinkerer. Likely sketching ideas on
                  napkins or quoting Clayton Christensen. Mentor at the Nashville Entrepreneur Center; guest-lecturer on
                  pricing, product strategy, and recession-proof growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
