"use client"

import { useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

export default function ImpactSection() {
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

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollingForward = true
    let scrollInterval: NodeJS.Timeout
    let pauseTimeout: NodeJS.Timeout
    let isScrolling = false

    // Function to handle auto-scrolling
    const startAutoScroll = () => {
      if (isScrolling) return

      scrollInterval = setInterval(() => {
        if (!carousel) return

        const maxScroll = carousel.scrollWidth - carousel.clientWidth
        const currentScroll = carousel.scrollLeft

        // Change direction when reaching the ends
        if (currentScroll >= maxScroll - 10) {
          scrollingForward = false
        } else if (currentScroll <= 10) {
          scrollingForward = true
        }

        // Scroll slowly in the current direction
        carousel.scrollBy({
          left: scrollingForward ? 1 : -1,
          behavior: "auto",
        })
      }, 30) // Slow scroll speed
    }

    // Function to pause scrolling
    const pauseScrolling = () => {
      isScrolling = true
      clearInterval(scrollInterval)

      // Resume after user stops interacting
      clearTimeout(pauseTimeout)
      pauseTimeout = setTimeout(() => {
        isScrolling = false
        startAutoScroll()
      }, 5000) // Resume after 5 seconds of inactivity
    }

    // Start auto-scrolling
    startAutoScroll()

    // Pause on hover or user interaction
    carousel.addEventListener("mouseenter", pauseScrolling)
    carousel.addEventListener("touchstart", pauseScrolling)
    carousel.addEventListener("wheel", pauseScrolling)

    // Clean up event listeners
    return () => {
      clearInterval(scrollInterval)
      clearTimeout(pauseTimeout)
      carousel.removeEventListener("mouseenter", pauseScrolling)
      carousel.removeEventListener("touchstart", pauseScrolling)
      carousel.removeEventListener("wheel", pauseScrolling)
    }
  }, [])

  return (
    <section id="impact" className="section-padding bg-white dark:bg-black pt-0">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Impact</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              In collaboration with incredible teams, I've delivered meaningful business impact.
            </p>
          </div>

          {/* Impact Card - Clean Design with Dividers */}
          <Card className="overflow-hidden">
            <CardContent className="p-6 md:p-8">
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
                      ↓70% OpEx & ↑38% NDR
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
            </CardContent>
          </Card>

          {/* Project Carousel */}
          <div className="relative group">
            {/* Overlay navigation arrows that only appear on hover */}
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 shadow-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={scrollRight}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 shadow-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="flex overflow-x-auto space-x-6 pb-6 px-2 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onMouseLeave={() => {
                // This empty handler is needed to work with the useEffect hook
                // The actual logic is in the useEffect
              }}
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
