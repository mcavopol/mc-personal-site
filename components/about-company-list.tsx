"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"

const companyData: Record<string, string[]> = {
  Tech: [
    "Salesforce",
    "Verizon",
    "Intel",
    "Cisco",
    "ServiceNow",
    "Zendesk",
    "Twilio",
    "T\u2011Mobile",
    "MuleSoft",
    "Outreach",
    "Veracode",
    "GoDaddy",
    "LevelSet",
    "Posigen",
  ],
  "Retail & E\u2011commerce": [
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
  Aerospace: ["Delta", "Rolls\u2011Royce Aerospace", "BAE Systems", "Siemens Aerospace"],
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
    "Hardee\u2019s",
    "Blaze Pizza",
    "PJ\u2019s Coffee",
    "Taziki\u2019s",
    "Everytable",
    "Snap Kitchen",
    "Alfred Coffee",
    "FitLife Foods",
    "Epicured",
  ],
  "High\u2011Growth SaaS & Startups": [
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

const categoryColors: Record<string, string> = {
  Tech: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800",
  "Retail & E\u2011commerce":
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
  "High\u2011Growth SaaS & Startups":
    "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 border-pink-200 dark:border-pink-800",
}

export default function AboutCompanyList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const allCompanies = useMemo(() => {
    const companies: { name: string; category: string }[] = []
    Object.entries(companyData).forEach(([category, companyList]) => {
      companyList.forEach((company) => {
        companies.push({ name: company, category })
      })
    })
    // Deterministic shuffle using string hash to avoid hydration mismatch
    companies.sort((a, b) => {
      const hashA = a.name.split("").reduce((acc, c) => acc + c.charCodeAt(0) * 31, 0)
      const hashB = b.name.split("").reduce((acc, c) => acc + c.charCodeAt(0) * 31, 0)
      return hashA - hashB
    })
    return companies
  }, [])

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category)
  }

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("pills-container")) {
      setSelectedCategory(null)
    }
  }

  return (
    <div className="space-y-6">
      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {Object.keys(companyData).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium border transition-all cursor-pointer",
              selectedCategory === category
                ? categoryColors[category]
                : "bg-secondary text-secondary-foreground border-border hover:bg-secondary/80",
              selectedCategory && selectedCategory !== category && "opacity-50"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Company pills */}
      <div
        className="pills-container flex flex-wrap gap-2"
        onClick={handleBackgroundClick}
      >
        {allCompanies.map((company, index) => (
          <span
            key={`${company.name}-${index}`}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm border transition-all",
              selectedCategory === null
                ? categoryColors[company.category]
                : selectedCategory === company.category
                  ? categoryColors[company.category]
                  : "opacity-20 bg-secondary text-secondary-foreground border-border"
            )}
          >
            {company.name}
          </span>
        ))}
      </div>
    </div>
  )
}
