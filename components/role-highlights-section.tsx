"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const roles = [
  {
    company: "Arena Labs",
    role: "COO & CPO",
    period: "2024\u2013present",
    description:
      "AI-native product rebuild for healthcare workforce wellness. Pivoted GTM to hospital C-suite. Rebuilt product around jobs-to-be-done.",
    outcomes: [
      "85% engagement vs 3-5% baseline",
      "AI coaching model (Tesla Autopilot approach)",
      "$25-45/mo profitable subscription",
    ],
  },
  {
    company: "Prado",
    role: "Interim COO & SVP Revenue/Product",
    period: "2023\u20132024",
    description:
      "Walked in, interviewed every customer in first month. Identified enterprise ICP mismatch. Refocused product and GTM.",
    outcomes: [
      "Burn 3x \u2192 0x in 6 months",
      "Median contract +427\u00d7",
      "Dev cycle 60d \u2192 <7d",
    ],
  },
  {
    company: "Fresh Technology",
    role: "SVP Revenue & Product",
    period: "2020\u20132024",
    description:
      "Built strategic narrative for restaurant tech through COVID. Channel pivot to POS partnerships.",
    outcomes: [
      "93% YoY growth",
      "Sales cycle 8 mo \u2192 15 days",
      "Support SLA 23\u00d7 faster",
    ],
  },
  {
    company: "Ambition",
    role: "VP Post-Sales & Solutions",
    period: "2017\u20132020",
    description:
      "Built CS, support, PS, and solutions engineering from zero. Solved churn problem while product matured.",
    outcomes: [
      "ARR $2M \u2192 $6M (\u2192 $8M)",
      "NRR +30pts",
      "Expansion ARR 12.7\u00d7",
      "NPS 55",
    ],
  },
  {
    company: "LeanKit",
    role: "Director, CS & Professional Services",
    period: "2015\u20132017",
    description:
      "Built PS, support, docs, and CS orgs. Identified data-to-insight gap and bridged it with BI team.",
    outcomes: [
      "Owned majority of revenue at exit",
      "CX NPS 50+",
      "Planview acquisition",
    ],
  },
  {
    company: "LeanKit",
    role: "Product Manager, Construction",
    period: "2013\u20132015",
    description:
      "Tiger team to open construction vertical from first principles. One of last industries ripe for Agile transformation.",
    outcomes: [
      "New market opened",
      "Customers: Walmart, BAE, Rolls-Royce",
      "$3M \u2192 $18M ARR (company)",
    ],
  },
]

const CARD_WIDTH = 348
const CARD_GAP = 24
const AUTO_SCROLL_INTERVAL = 4000

export default function RoleHighlightsSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scrollByCard = useCallback((direction: "left" | "right") => {
    if (!carouselRef.current) return
    const scrollAmount = direction === "left" ? -(CARD_WIDTH + CARD_GAP) : CARD_WIDTH + CARD_GAP
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }, [])

  const autoScroll = useCallback(() => {
    if (!carouselRef.current || isPaused) return
    const carousel = carouselRef.current
    const maxScroll = carousel.scrollWidth - carousel.clientWidth

    if (carousel.scrollLeft >= maxScroll - 10) {
      carousel.scrollTo({ left: 0, behavior: "smooth" })
    } else {
      carousel.scrollBy({ left: CARD_WIDTH + CARD_GAP, behavior: "smooth" })
    }
  }, [isPaused])

  // IntersectionObserver to only animate when visible
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(carousel)

    return () => observer.disconnect()
  }, [])

  // Auto-scroll when in view and not paused
  useEffect(() => {
    if (isInView && !isPaused) {
      autoScrollTimerRef.current = setInterval(autoScroll, AUTO_SCROLL_INTERVAL)
    } else if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current)
      autoScrollTimerRef.current = null
    }

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current)
      }
    }
  }, [isInView, isPaused, autoScroll])

  return (
    <section id="roles" className="section-padding" aria-label="Recent roles">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The Work
          </h2>

          <div
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollByCard("left")}
              aria-label="Scroll roles left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 shadow-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollByCard("right")}
              aria-label="Scroll roles right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 shadow-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Carousel */}
            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-6 pb-4 px-1 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              role="region"
              aria-label="Role highlights carousel"
            >
              {roles.map((item, index) => (
                <Card
                  key={index}
                  className="flex-none w-[348px] snap-start"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{item.company}</CardTitle>
                    <CardDescription className="space-y-1">
                      <span className="block font-medium text-foreground/80">
                        {item.role}
                      </span>
                      <span className="block text-muted-foreground text-sm">
                        {item.period}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-1.5" aria-label={`${item.company} outcomes`}>
                      {item.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span
                            className="text-primary mr-2 mt-0.5 shrink-0"
                            aria-hidden="true"
                          >
                            &bull;
                          </span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
