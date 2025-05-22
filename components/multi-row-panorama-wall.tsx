"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Pause, Play, ChevronDown, ChevronUp } from "lucide-react"
import PanoramaRowCarousel from "./panorama-row-carousel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PanoramaRow {
  src: string
  alt: string
  category?: string
}

interface MultiRowPanoramaWallProps {
  title?: string
  panoramaRows: PanoramaRow[]
  className?: string
  showCategories?: boolean
}

export default function MultiRowPanoramaWall({
  title = "Trusted by industry leaders",
  panoramaRows,
  className,
  showCategories = false,
}: MultiRowPanoramaWallProps) {
  const [displayRows, setDisplayRows] = useState<PanoramaRow[]>([])
  const [isPaused, setIsPaused] = useState(false)
  const [key, setKey] = useState(0) // Force re-render key
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentRowIndex, setCurrentRowIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isRotating, setIsRotating] = useState(false)
  const rotationTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Select a random initial row from the first 4 rows (indices 0-3)
  const selectInitialRow = useCallback(() => {
    // Only select from rows 1-4 (indices 0-3)
    const randomIndex = Math.floor(Math.random() * Math.min(4, panoramaRows.length))
    setCurrentRowIndex(randomIndex)
    return [panoramaRows[randomIndex]]
  }, [panoramaRows])

  // Toggle expanded state
  const toggleExpanded = () => {
    setIsAnimating(true)
    setIsExpanded(!isExpanded)

    // Force re-render of all carousels to recalculate dimensions after animation
    setTimeout(() => {
      setIsAnimating(false)
      setKey((prev) => prev + 1)
    }, 500) // Match this with the CSS transition duration
  }

  // Rotate to the next carousel in sequence
  const rotateToNextCarousel = useCallback(() => {
    setIsRotating(true)

    // Calculate the next index, only using the first 4 rows
    const nextIndex = (currentRowIndex + 1) % Math.min(4, panoramaRows.length)

    // Animate out current carousel
    setTimeout(() => {
      setCurrentRowIndex(nextIndex)

      // Animate in new carousel
      setTimeout(() => {
        setIsRotating(false)
      }, 500)
    }, 500)
  }, [currentRowIndex, panoramaRows.length])

  // Set up rotation timer for collapsed view
  useEffect(() => {
    // Clear any existing timer
    if (rotationTimerRef.current) {
      clearInterval(rotationTimerRef.current)
      rotationTimerRef.current = null
    }

    // Only set up rotation in collapsed view and when not manually paused
    if (!isExpanded && !isPaused) {
      rotationTimerRef.current = setInterval(rotateToNextCarousel, 7000)
    }

    return () => {
      if (rotationTimerRef.current) {
        clearInterval(rotationTimerRef.current)
      }
    }
  }, [isExpanded, isPaused, rotateToNextCarousel])

  // Update displayed rows based on expanded state and screen size
  useEffect(() => {
    if (isExpanded) {
      // When expanded, handle responsive row reduction
      if (window.innerWidth < 768) {
        // On small screens, show only 3 rows (first, middle, last)
        if (panoramaRows.length > 3) {
          const middleIndex = Math.floor(panoramaRows.length / 2)
          setDisplayRows([panoramaRows[0], panoramaRows[middleIndex], panoramaRows[panoramaRows.length - 1]])
        } else {
          setDisplayRows(panoramaRows)
        }
      } else {
        // On larger screens, use all rows
        setDisplayRows(panoramaRows)
      }
    } else {
      // When collapsed, show only the current row
      setDisplayRows([panoramaRows[currentRowIndex]])
    }
  }, [isExpanded, panoramaRows, currentRowIndex])

  // Initialize with a random row
  useEffect(() => {
    if (panoramaRows.length > 0) {
      setDisplayRows(selectInitialRow())
    }
  }, [panoramaRows, selectInitialRow])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Only update if expanded
      if (isExpanded) {
        if (window.innerWidth < 768) {
          // On small screens, show only 3 rows (first, middle, last)
          if (panoramaRows.length > 3) {
            const middleIndex = Math.floor(panoramaRows.length / 2)
            setDisplayRows([panoramaRows[0], panoramaRows[middleIndex], panoramaRows[panoramaRows.length - 1]])
          } else {
            setDisplayRows(panoramaRows)
          }
        } else {
          // On larger screens, use all rows
          setDisplayRows(panoramaRows)
        }
      }

      // Force re-render of all carousels to recalculate dimensions
      setKey((prev) => prev + 1)
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [isExpanded, panoramaRows])

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center justify-between mb-6 w-full">
          {title && <h3 className="text-lg font-medium">{title}</h3>}
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-sm"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play animation" : "Pause animation"}
          >
            {isPaused ? (
              <>
                <Play className="h-3.5 w-3.5" />
                <span>Play</span>
              </>
            ) : (
              <>
                <Pause className="h-3.5 w-3.5" />
                <span>Pause</span>
              </>
            )}
          </Button>
        </div>

        {/* Carousel container with animation */}
        <div className="w-full relative">
          <div
            className={cn(
              "w-full transition-all duration-500 ease-in-out",
              isAnimating && "overflow-hidden",
              !isExpanded && isRotating && "opacity-0 transform -translate-y-10",
            )}
            style={{
              maxHeight: isExpanded ? "2000px" : "80px", // Use a large value for expanded to ensure all content fits
              transition: "max-height 500ms ease-in-out, opacity 500ms, transform 500ms",
            }}
          >
            <div className="space-y-1 md:space-y-2 w-full">
              {displayRows.map((row, index) => (
                <PanoramaRowCarousel
                  key={`${key}-${index}`} // Use compound key to force re-render
                  imageSrc={row.src}
                  imageAlt={row.alt}
                  category={row.category}
                  rowIndex={isExpanded ? index : currentRowIndex}
                  autoplaySpeed={3000 + (isExpanded ? index : currentRowIndex) * 500}
                  autoplay={!isPaused}
                  showCategory={showCategories}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Toggle button - always visible */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpanded}
          className="mt-4 flex items-center gap-1 text-sm font-medium"
          aria-expanded={isExpanded}
          aria-controls="logo-rows"
        >
          {isExpanded ? (
            <>
              <span>See less</span>
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <span>More industries</span>
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
