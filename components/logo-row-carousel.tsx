"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Logo {
  name: string
  src: string
  alt: string
}

interface LogoRowCarouselProps {
  logos: Logo[]
  className?: string
  autoplay?: boolean
  autoplaySpeed?: number
  rowIndex: number
  direction?: "ltr" | "rtl"
}

export default function LogoRowCarousel({
  logos,
  className,
  autoplay = true,
  autoplaySpeed = 3000,
  rowIndex,
  direction = "ltr",
}: LogoRowCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // Handle scroll buttons visibility
  const handleScroll = () => {
    if (!scrollRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
  }

  // Scroll functions
  const scroll = (scrollDirection: "left" | "right") => {
    if (!scrollRef.current) return

    const scrollAmount = scrollRef.current.clientWidth / 2
    const actualDirection = direction === "rtl" ? (scrollDirection === "left" ? "right" : "left") : scrollDirection

    scrollRef.current.scrollBy({
      left: actualDirection === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  // Autoplay functionality with alternating directions based on row
  useEffect(() => {
    if (!autoplay || isPaused) return

    const interval = setInterval(
      () => {
        if (!scrollRef.current) return

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        const isAtEnd = direction === "rtl" ? scrollLeft <= 10 : scrollLeft >= scrollWidth - clientWidth - 10
        const isAtStart = direction === "rtl" ? scrollLeft >= scrollWidth - clientWidth - 10 : scrollLeft <= 10

        if (isAtEnd) {
          // Reset to beginning/end based on direction
          scrollRef.current.scrollTo({
            left: direction === "rtl" ? scrollWidth - clientWidth : 0,
            behavior: "smooth",
          })
        } else if (isAtStart) {
          // Start scrolling in the proper direction
          scrollRef.current.scrollBy({
            left: direction === "rtl" ? -100 : 100,
            behavior: "smooth",
          })
        } else {
          // Continue scrolling in the current direction
          scrollRef.current.scrollBy({
            left: direction === "rtl" ? -100 : 100,
            behavior: "smooth",
          })
        }
      },
      autoplaySpeed + rowIndex * 500,
    ) // Stagger the autoplay timing

    return () => clearInterval(interval)
  }, [autoplay, autoplaySpeed, isPaused, direction, rowIndex])

  return (
    <div
      className={cn("relative w-full py-2 overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative">
        {showLeftArrow && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}

        <div
          ref={scrollRef}
          className={cn(
            "flex overflow-x-auto scrollbar-hide gap-8 py-2 px-2",
            direction === "rtl" ? "flex-row-reverse" : "flex-row",
          )}
          onScroll={handleScroll}
          dir={direction}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-10 md:h-12 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={logo.src || "/placeholder.svg"} alt={logo.alt} className="h-full object-contain" />
            </div>
          ))}
        </div>

        {showRightArrow && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
