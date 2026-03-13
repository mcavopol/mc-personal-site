"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

const quotes = [
  {
    text: "Michael learned more about our business in two weeks than top-tier consultants did in a deep evaluation. He has an uncanny ability to make sense of chaos. In his first month, he literally talked to every customer and helped us uncover gaps in our product \u2014 but more importantly, in our company strategy \u2014 that had been staring us in the face for years.",
    author: "CEO, Prado",
  },
  {
    text: "Michael fundamentally changed how we thought about revenue growth. He helped us see that we didn\u2019t quite have product-market fit yet, and quickly went to work building a professional services team that could scale revenue while we addressed the gaps in our product. He\u2019s the unicorn who can play across revenue, product, and strategy.",
    author: "CEO, Ambition",
  },
  {
    text: "Michael balances a well-tuned product sense with an incredible instinct for commercial strategy. He spotted a critical issue with our distribution model right away, and despite overwhelming opposition, kept advocating for a channel-driven approach for months. We finally listened \u2014 and since then, we\u2019ve restructured the entire business around channel partners. Revenue has tripled since that decision.",
    author: "CEO, Fresh Technology",
  },
  {
    text: "Michael is a self-starter who\u2019s always laser-focused on the one or two things slowing the company down. He\u2019s relentless about challenging the status quo and relentless in his pursuit of excellence \u2014 but he balances that with genuine care for the people around him.",
    author: "CEO, LeanKit",
  },
  {
    text: "Michael is a product person\u2019s product person. He loves building incredible digital experiences and he deeply cares about user context. He has this ability to put himself in the user\u2019s shoes at the exact moment in the customer journey \u2014 he can predict what a user is thinking and feeling with insane precision. I was constantly baffled during user interviews at his ability to guess what a user would say.",
    author: "CPO, Ambition",
  },
  {
    text: "Michael is an incredibly versatile cross-functional leader. Just when you think you\u2019ve got him figured out, you\u2019ll catch him writing code on a flight, then presenting the company\u2019s growth strategy to investors an hour later. You can\u2019t pin him down. Just when you think nobody can be great at sales, product, and leadership all at once \u2014 he proves you wrong.",
    author: "Board Member & Investor",
  },
]

export default function QuotesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % quotes.length)
  }, [])

  // Auto-rotation
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    const timer = setInterval(advance, 6000)
    return () => clearInterval(timer)
  }, [isPaused, prefersReducedMotion, advance])

  return (
    <section id="quotes" className="section-padding" aria-label="Testimonials">
      <div className="container-padding mx-auto max-w-4xl">
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />

          {/* Quote container with fixed height for crossfade */}
          <div className="relative pl-8 min-h-[200px] md:min-h-[160px]">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className={cn(
                  "transition-opacity duration-500 ease-in-out",
                  index === activeIndex
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0 pl-8 pointer-events-none"
                )}
                aria-hidden={index !== activeIndex}
              >
                <blockquote className="space-y-4">
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <footer className="text-sm font-medium text-muted-foreground">
                    &mdash; {quote.author}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-6 pl-8" role="tablist" aria-label="Quote navigation">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Quote ${index + 1} of ${quotes.length}`}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors duration-300",
                  index === activeIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
