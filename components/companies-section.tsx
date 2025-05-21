"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function CompaniesSection() {
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
    <section id="companies" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">I've Worked with Amazing Companies</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Over two decades, I've collaborated with companies across diverse industries and sectors.
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="pills-container" onClick={handleBackgroundClick}>
                {/* Category Pills - Centered */}
                <div className="mb-6 text-center">
                  <div className="inline-flex flex-wrap justify-center gap-3">
                    {Object.keys(companyData).map((category) => (
                      <div
                        key={category}
                        className={`px-4 py-2 rounded-full text-xs font-medium border cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
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
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${categoryColors[company.category]}`}
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
      </div>
    </section>
  )
}
