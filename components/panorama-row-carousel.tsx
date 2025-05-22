"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PanoramaRowCarouselProps {
  imageSrc: string
  imageAlt: string
  category?: string
  className?: string
  autoplay?: boolean
  autoplaySpeed?: number
  rowIndex: number
  showCategory?: boolean
}

export default function PanoramaRowCarousel({
  imageSrc,
  imageAlt,
  category,
  className,
  autoplay = true,
  autoplaySpeed = 3000,
  rowIndex,
  showCategory = false,
}: PanoramaRowCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isScrollable, setIsScrollable] = useState(false)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isCentered, setIsCentered] = useState(false)

  // Handle scroll event
  const handleScroll = () => {
    if (!scrollRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setShowLeftArrow(scrollLeft > 5)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5)
  }

  // Scroll functions
  const scrollLeft = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
  }

  // Check if content is scrollable and if it needs to be centered
  useEffect(() => {
    const checkScrollableAndCentered = () => {
      if (!scrollRef.current || !imageRef.current) return

      const { scrollWidth, clientWidth } = scrollRef.current
      const imageWidth = imageRef.current.offsetWidth

      // Determine if content is scrollable
      const scrollable = scrollWidth > clientWidth + 10 // Add a small buffer
      setIsScrollable(scrollable)

      // Determine if content should be centered (image is narrower than container)
      const shouldCenter = imageWidth < clientWidth
      setIsCentered(shouldCenter)

      // Update arrow visibility
      setShowRightArrow(scrollable)
      setShowLeftArrow(false)
    }

    // Check on image load
    const img = new Image()
    img.onload = checkScrollableAndCentered
    img.src = imageSrc

    // Also check after a short delay to ensure DOM is fully rendered
    const timer = setTimeout(checkScrollableAndCentered, 500)

    // Check on window resize
    window.addEventListener("resize", checkScrollableAndCentered)

    return () => {
      window.removeEventListener("resize", checkScrollableAndCentered)
      clearTimeout(timer)
    }
  }, [imageSrc, rowIndex])

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isPaused || !scrollRef.current || !isScrollable) return

    const interval = setInterval(
      () => {
        if (!scrollRef.current) return

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

        // If we're near the end, go back to start
        if (scrollLeft >= scrollWidth - clientWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          // Otherwise continue scrolling
          scrollRef.current.scrollBy({ left: 100, behavior: "smooth" })
        }
      },
      autoplaySpeed + rowIndex * 500,
    )

    return () => clearInterval(interval)
  }, [autoplay, autoplaySpeed, isPaused, isScrollable, rowIndex])

  return (
    <div
      className={cn("relative w-full py-2 overflow-hidden", className)}
      onMouseEnter={() => {
        setIsPaused(true)
        setIsHovering(true)
      }}
      onMouseLeave={() => {
        setIsPaused(false)
        setIsHovering(false)
      }}
    >
      {showCategory && category && (
        <div className="absolute left-4 top-0 z-10 text-xs font-medium text-muted-foreground">{category}</div>
      )}

      <div className="relative">
        {/* Left fade gradient - only show when scrolled */}
        {isScrollable && showLeftArrow && (
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        )}

        {/* Left control - only visible when hovering and scrolled */}
        {isScrollable && (
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-background/80 backdrop-blur-sm transition-opacity duration-200",
              isHovering && showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            onClick={scrollLeft}
            disabled={!showLeftArrow}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}

        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide py-2" onScroll={handleScroll}>
          {/* Content container - centered if image is narrower than display */}
          <div className={cn("inline-block", isCentered ? "w-full text-center" : "pr-8 pl-0")}>
            <img
              ref={imageRef}
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              className={cn("max-w-none h-10 md:h-12 object-contain", isCentered ? "mx-auto" : "")}
            />
          </div>
        </div>

        {/* Right control - only visible when hovering and can scroll right */}
        {isScrollable && (
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-background/80 backdrop-blur-sm transition-opacity duration-200",
              isHovering && showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            onClick={scrollRight}
            disabled={!showRightArrow}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}

        {/* Right fade gradient - only show when can scroll right */}
        {isScrollable && showRightArrow && (
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        )}
      </div>
    </div>
  )
}
