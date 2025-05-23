"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

export default function ImpactSection() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -348, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 348, behavior: "smooth" })
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

  const [isInView, setIsInView] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Function to handle automatic scrolling
  const autoScroll = useCallback(() => {
    if (carouselRef.current && !isDragging) {
      const carousel = carouselRef.current
      const cardWidth = 348 + 24 // card width + margin

      // If we're near the end, quickly jump back to the start without animation
      if (carousel.scrollLeft > (projects.length - 3) * cardWidth) {
        carousel.scrollTo({ left: 0, behavior: "auto" })
      } else {
        // Otherwise, smoothly scroll to the next item
        carousel.scrollBy({ left: cardWidth, behavior: "smooth" })
      }
    }
  }, [projects.length, isDragging])

  // Set up intersection observer and auto-scrolling
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    // Create intersection observer to detect when carousel is in view
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }, // Trigger when at least 10% of the carousel is visible
    )

    observerRef.current.observe(carousel)

    // Clean up
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current)
      }
    }
  }, [])

  // Handle auto-scrolling when in view
  useEffect(() => {
    if (isInView && !isDragging) {
      // Start auto-scrolling every 4 seconds
      autoScrollTimerRef.current = setInterval(autoScroll, 4000)
    } else {
      // Clear the timer when not in view or when user is interacting
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current)
        autoScrollTimerRef.current = null
      }
    }

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current)
      }
    }
  }, [isInView, isDragging, autoScroll])

  return (
    <div className="container-padding mx-auto max-w-6xl">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Impact</h2>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            I help $5-50M ARR Product teams 2-4× revenue in &lt;12 mo by aligning{" "}
            <a
              href="#approach"
              className="underline font-medium hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white rounded-sm"
              aria-label="Learn more about my approach to product vision and go-to-market alignment"
            >
              product vision and go-to-market
            </a>
            .
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="py-4">
          <h3 className="sr-only">Key Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column */}
            <div className="grid grid-rows-2 gap-y-8">
              {/* Metric 1 */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <ArrowUp className="h-7 w-7 mr-2 text-gray-800 dark:text-gray-200" aria-hidden="true" />
                  <h4 className="text-3xl font-bold">12.7× ARR Growth</h4>
                </div>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                  Contract Value +427×
                </p>
              </div>

              {/* Metric 3 */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <ArrowDown className="h-7 w-7 mr-2 text-gray-800 dark:text-gray-200" aria-hidden="true" />
                  <h4 className="text-3xl font-bold">3× Burn Reduction</h4>
                </div>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                  ↓70% OpEx // ↑38% NDR
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="grid grid-rows-2 gap-y-8">
              {/* Metric 2 */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <ArrowUp className="h-7 w-7 mr-2 text-gray-800 dark:text-gray-200" aria-hidden="true" />
                  <h4 className="text-3xl font-bold">3× R&D Impact</h4>
                </div>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                  Delivery Speed ↑14× // Bugs ↓70%
                </p>
              </div>

              {/* Metric 4 */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold mr-2 text-gray-800 dark:text-gray-200" aria-hidden="true">
                    +
                  </span>
                  <h4 className="text-3xl font-bold">150% Net Revenue</h4>
                </div>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                  LTV 12.6× // NPS 135pts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Carousel */}
        <div className="relative group">
          <h3 className="text-xl font-semibold mb-6">Recent Project Highlights</h3>

          {/* Overlay navigation arrows that only appear on hover */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollLeft}
            aria-label="Scroll projects left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 shadow-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={scrollRight}
            aria-label="Scroll projects right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-black/80 shadow-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-6 pb-6 px-2 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            role="region"
            aria-label="Project highlights carousel"
          >
            {/* Render all projects, then repeat the first few to create the infinite effect */}
            {projects.map((project, index) => (
              <Card key={`original-${index}`} className="flex-none w-[348px] snap-start">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h5 className="sr-only">Project Outcomes</h5>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-400 mr-2" aria-hidden="true">
                          •
                        </span>
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

            {/* Clone the first 3 projects to create the infinite loop effect */}
            {projects.slice(0, 3).map((project, index) => (
              <Card key={`clone-${index}`} className="flex-none w-[348px] snap-start">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h5 className="sr-only">Project Outcomes</h5>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-400 mr-2" aria-hidden="true">
                          •
                        </span>
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
  )
}
