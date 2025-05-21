"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight, ArrowUp, ArrowDown } from "lucide-react"

export default function ProjectsSection() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" })
    }
  }

  const projects = [
    {
      title: "Foresight Strategic Narrative",
      description:
        "Helped Foresight co-founders tell the story of their big audatious goal, reframing sales and investor conversations.",
      outcomes: [
        "Increased Exec. Alignment",
        'Re-Framed "the big problem" and solution',
        "Doubled Disco → Opp ratio",
        "+25% pipeline conversion",
      ],
      link: "#",
    },
    {
      title: "LeanKit Growth Strategy",
      description:
        "Scaled post-sales engine and new-market product management, resulting in significant ARR growth from $5M to $14M.",
      outcomes: ["ARR $5M → $14M", "Reduced churn", "CX NPS 50+"],
      link: "#",
    },
    {
      title: "Ambition Revenue Operations",
      description:
        "Built comprehensive customer success, support, professional services, and solutions engineering teams.",
      outcomes: ["NRR +30 points", "LTV 2.5×", "Expansion ARR 12.7×", "NPS 55"],
      link: "#",
    },
    {
      title: "Fresh Technology Channel Strategy",
      description: "Pivoted to low-CAC POS partnerships, dramatically improving growth and operational efficiency.",
      outcomes: ["YoY growth 93%", "Sales cycle 8 mo → 15 days", "Support SLA 23× faster"],
      link: "#",
    },
    {
      title: "Prado Enterprise Refocus",
      description: "As Interim COO & SVP of Revenue/Product, refocused on enterprise ICP and optimized burn rate.",
      outcomes: ["Burn multiple 3× → 0×", "Median contract 427×", "Dev cycle 60d → <7d"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key Results</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              A showcase of key initiatives and transformations I've led throughout my career.
            </p>
          </div>

          {/* KPI Highlights Section - Clean Design with Dividers */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200 dark:divide-gray-800">
            {/* First Column */}
            <div className="grid grid-rows-2 gap-y-4">
              {/* Metric 1 */}
              <div className="p-8 text-center flex flex-col justify-center">
                <div className="flex items-center justify-center mb-2">
                  <ArrowUp className="h-7 w-7 mr-2 text-gray-800 dark:text-gray-200" />
                  <h3 className="text-3xl font-bold">12.7× ARR Growth</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium max-w-[80%] mx-auto">
                  Contract Value +427×
                </p>
              </div>

              {/* Metric 3 */}
              <div className="p-8 text-center flex flex-col justify-center">
                <div className="flex items-center justify-center mb-2">
                  <ArrowDown className="h-7 w-7 mr-2 text-gray-800 dark:text-gray-200" />
                  <h3 className="text-3xl font-bold">3× Burn Reduction</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium max-w-[80%] mx-auto">
                  ↓70% OpEx & 138% NDR
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="grid grid-rows-2 gap-y-4">
              {/* Metric 2 */}
              <div className="p-8 text-center flex flex-col justify-center">
                <div className="flex items-center justify-center mb-2">
                  <ArrowUp className="h-7 w-7 mr-2 text-gray-800 dark:text-gray-200" />
                  <h3 className="text-3xl font-bold">3× R&D Impact</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium max-w-[80%] mx-auto">
                  Ship Speed ↑14× & Bugs ↓70%
                </p>
              </div>

              {/* Metric 4 */}
              <div className="p-8 text-center flex flex-col justify-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold mr-2 text-gray-800 dark:text-gray-200">+</span>
                  <h3 className="text-3xl font-bold">150% Net Revenue</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium max-w-[80%] mx-auto">
                  LTV 12.6× & NPS 135pts
                </p>
              </div>
            </div>
          </div>

          {/* Project Carousel */}
          <div className="relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Project Highlights</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={scrollLeft} aria-label="Scroll left">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={scrollRight} aria-label="Scroll right">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projects.map((project, index) => (
                <Card key={index} className="flex-none w-[350px] snap-start">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400" asChild>
                      <a href={project.link} className="flex items-center">
                        Learn more <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
