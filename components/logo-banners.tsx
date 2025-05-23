"use client"
import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LogoBannerProps {
  src: string
  alt: string
  category: string
  index: number
}

// Define the progression sequences for each row
const ROW1_SEQUENCE = [0, 1, 4] // Technology -> Fintech/Ecommerce -> Healthcare/BPO
const ROW2_SEQUENCE = [2, 3, 5] // Engineering/Construction -> Logistics & Supplychain -> Hospitality and Foodservice

export default function LogoBanners() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [initialRows, setInitialRows] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Track current position in the sequence for each row
  const [row1Position, setRow1Position] = useState(0)
  const [row2Position, setRow2Position] = useState(0)

  // Track horizontal scroll counts for each row
  const [row1ScrollCount, setRow1ScrollCount] = useState(0)
  const [row2ScrollCount, setRow2ScrollCount] = useState(0)

  // Animation states
  const [isRow1Animating, setIsRow1Animating] = useState(false)
  const [isRow2Animating, setIsRow2Animating] = useState(false)

  // Define the logo banners with their categories
  const logoBanners: Omit<LogoBannerProps, "index">[] = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-22%20at%2012.37.17%E2%80%AFPM-if2SYGOuR4bRXNjxAxnyxPyaPWLKcm.png",
      alt: "Technology companies including ServiceNow, Veracode, Adobe, IBM, Microsoft, Salesforce, Cisco, Twilio, Verizon, T-Mobile, Xerox, and Outreach",
      category: "Technology",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-22%20at%2010.49.55%E2%80%AFAM-WHcUKXRmrs2dQXoSg3eZaa3sQPpp41.png",
      alt: "Fintech and E-commerce companies including Lightspeed, Square, PayPal, Amazon, Target, Walmart, ADP, Fiserv, SpotOn, and Carmax",
      category: "Fintech and E-commerce",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-22%20at%2010.49.23%E2%80%AFAM-AK72PKpaNc6XC82lmWU5Xd0DK2Ofoc.png",
      alt: "Engineering & Industrial/Construction companies including Honda, Rolls-Royce, Bosch, Siemens, BAE Systems, Caterpillar, Skanska, Turner, Gilbane, and Hoar Construction",
      category: "Engineering & Construction",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-22%20at%2010.49.10%E2%80%AFAM-UFMF4hswrOgiYjNPGTenDOo6qg3xPr.png",
      alt: "Logistics & Supply Chain companies including FreightWaves, FedEx, Delta, WM (Waste Management), Coyote, and GlobalTranz",
      category: "Logistics & Supply Chain",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-22%20at%2010.48.58%E2%80%AFAM-rJTxMZDKzvFYYIXmDNQXVFHZdrbJwh.png",
      alt: "Healthcare and BPO companies including Stryker, Cardinal Health, Johnson & Johnson, Kimberly-Clark, TTEC, Aerotek, and Unum",
      category: "Healthcare & BPO",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-22%20at%2010.48.51%E2%80%AFAM-NhTahTdeiv44nNwA3TUr8kI9lS8dEj.png",
      alt: "Hospitality & Foodservice companies including Erewhon, Alfred, Blaze Pizza, Everytable, Taziki's, Fitlife Foods, and Epicured",
      category: "Hospitality & Foodservice",
    },
  ]

  // Randomly select which rows to show in the rolled-up state
  useEffect(() => {
    // Randomly select starting position in the sequence for row 1
    const row1StartPos = Math.floor(Math.random() * 2) // 0 or 1
    setRow1Position(row1StartPos)

    // Randomly select starting position in the sequence for row 2
    const row2StartPos = Math.floor(Math.random() * 2) // 0 or 1
    setRow2Position(row2StartPos)

    // Set initial rows based on the sequence positions
    setInitialRows([ROW1_SEQUENCE[row1StartPos], ROW2_SEQUENCE[row2StartPos]])
  }, [])

  // Toggle expanded state
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev)
  }

  // Handle horizontal scroll completion for row 1
  const handleRow1ScrollComplete = () => {
    if (isExpanded) return // Only apply in rolled-up state

    const newCount = row1ScrollCount + 1
    setRow1ScrollCount(newCount)

    // After 2 horizontal scrolls, trigger vertical roll-over
    if (newCount >= 2) {
      setRow1ScrollCount(0) // Reset scroll count
      setIsRow1Animating(true) // Start animation

      // After animation completes, update to next banner in sequence
      setTimeout(() => {
        const nextPos = (row1Position + 1) % ROW1_SEQUENCE.length
        setRow1Position(nextPos)
        setInitialRows((prev) => [ROW1_SEQUENCE[nextPos], prev[1]])
        setIsRow1Animating(false)
      }, 500) // Animation duration
    }
  }

  // Handle horizontal scroll completion for row 2
  const handleRow2ScrollComplete = () => {
    if (isExpanded) return // Only apply in rolled-up state

    const newCount = row2ScrollCount + 1
    setRow2ScrollCount(newCount)

    // After 2 horizontal scrolls, trigger vertical roll-over
    if (newCount >= 2) {
      setRow2ScrollCount(0) // Reset scroll count
      setIsRow2Animating(true) // Start animation

      // After animation completes, update to next banner in sequence
      setTimeout(() => {
        const nextPos = (row2Position + 1) % ROW2_SEQUENCE.length
        setRow2Position(nextPos)
        setInitialRows((prev) => [prev[0], ROW2_SEQUENCE[nextPos]])
        setIsRow2Animating(false)
      }, 500) // Animation duration
    }
  }

  // Filter banners based on expanded state
  const visibleBanners = isExpanded
    ? logoBanners
    : initialRows.length === 2
      ? [logoBanners[initialRows[0]], logoBanners[initialRows[1]]]
      : logoBanners.slice(0, 2)

  return (
    <div ref={containerRef} className="space-y-3 md:space-y-4 w-full">
      {/* Logo Banners */}
      <div className={`transition-all duration-500 ease-in-out`}>
        {visibleBanners.map((banner, index) => (
          <div key={`${isExpanded ? "expanded" : "collapsed"}-${index}`} className="banner-container mb-4">
            <div
              className={`banner-animation-wrapper ${
                !isExpanded && index === 0 && isRow1Animating
                  ? "animate-slot-machine"
                  : !isExpanded && index === 1 && isRow2Animating
                    ? "animate-slot-machine"
                    : ""
              }`}
            >
              <LogoBanner
                {...banner}
                index={index}
                onScrollComplete={index === 0 ? handleRow1ScrollComplete : handleRow2ScrollComplete}
                isExpanded={isExpanded}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-4">
        <Button
          onClick={toggleExpanded}
          variant="outline"
          size="sm"
          className="flex items-center gap-1 text-sm font-medium"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              <span>Show Less</span>
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              <span>More Industries</span>
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

interface ExtendedLogoBannerProps extends LogoBannerProps {
  onScrollComplete: () => void
  isExpanded: boolean
}

function LogoBanner({ src, alt, category, index, onScrollComplete, isExpanded }: ExtendedLogoBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [direction, setDirection] = useState(index % 2 === 0 ? 1 : -1) // Alternate initial directions
  const [isAnimating, setIsAnimating] = useState(false)
  const [maxScroll, setMaxScroll] = useState(0)
  const [isCentered, setIsCentered] = useState(false)
  const [horizontalScrollCount, setHorizontalScrollCount] = useState(0)
  const [directionChanges, setDirectionChanges] = useState(0)
  const { resolvedTheme } = useTheme()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add listener for resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Calculate max scroll value and check if image should be centered
  useEffect(() => {
    const calculateMaxScrollAndCentering = () => {
      if (containerRef.current && contentRef.current && imageRef.current && isLoaded) {
        const containerWidth = containerRef.current.offsetWidth
        const imgWidth = imageRef.current.offsetWidth
        const contentPadding = 32 // 16px padding on each side from px-4

        // Check if image should be centered (narrower than container)
        const shouldCenter = imgWidth + contentPadding <= containerWidth

        // Update centering state
        setIsCentered(shouldCenter)

        // Only set max scroll if content is wider than container and not centered
        if (!shouldCenter) {
          // Max scroll should be the image width minus the visible container width, plus padding
          const maxScrollValue = Math.max(0, imgWidth + contentPadding - containerWidth)
          setMaxScroll(maxScrollValue)

          // If we're currently at a scroll position beyond the new maxScroll, reset it
          if (scrollPosition > maxScrollValue) {
            setScrollPosition(maxScrollValue)
          }
        } else {
          setMaxScroll(0)
          // Reset scroll position when centered
          setScrollPosition(0)
        }
      }
    }

    calculateMaxScrollAndCentering()

    const handleResize = () => calculateMaxScrollAndCentering()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isLoaded, scrollPosition])

  // Handle image load
  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  // Reset counters when expanded state changes
  useEffect(() => {
    if (isExpanded) {
      setHorizontalScrollCount(0)
      setDirectionChanges(0)
    }
  }, [isExpanded])

  // Animation logic - only run if not centered
  useEffect(() => {
    if (prefersReducedMotion || maxScroll <= 0 || isAnimating || isCentered) return

    // Stagger the start times based on index
    const startDelay = 1000 + index * 1500

    const startTimer = setTimeout(() => {
      setIsAnimating(true)

      // Instead of a random distance, scroll to either the beginning or end
      // based on the current direction
      let newPosition = direction > 0 ? maxScroll : 0

      // If we're already near the target position, flip the direction and set the opposite end
      const isNearTarget = direction > 0 ? maxScroll - scrollPosition < 100 : scrollPosition < 100

      if (isNearTarget) {
        // Flip direction and set the opposite end as target
        const newDirection = direction * -1
        setDirection(newDirection)
        newPosition = newDirection > 0 ? maxScroll : 0
      }

      // Make duration proportional to distance for consistent speed
      const distance = Math.abs(newPosition - scrollPosition)
      const duration = Math.min(1500, Math.max(800, distance * 1.5)) // Between 800-1500ms based on distance

      // Animate the scroll
      const startTime = performance.now()
      const startPosition = scrollPosition
      const animateScroll = (timestamp: number) => {
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Use easeInOutQuad easing function
        const easeProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2

        const currentPosition = startPosition + distance * easeProgress
        setScrollPosition(currentPosition)

        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        } else {
          // Animation complete
          setScrollPosition(newPosition)
          setIsAnimating(false)

          // Count this as a complete horizontal scroll
          setHorizontalScrollCount((prev) => prev + 1)

          // If we've completed 2 horizontal scrolls, notify parent
          if (horizontalScrollCount >= 1 && !isExpanded) {
            onScrollComplete()
            setHorizontalScrollCount(0)
          }
        }
      }

      requestAnimationFrame(animateScroll)
    }, startDelay)

    return () => clearTimeout(startTimer)
  }, [
    scrollPosition,
    direction,
    maxScroll,
    isAnimating,
    index,
    prefersReducedMotion,
    isCentered,
    horizontalScrollCount,
    isExpanded,
    onScrollComplete,
  ])

  return (
    <div className="w-full animate-fade-in">
      {/* Category label - smaller on mobile */}
      <h3
        className="text-xs md:text-sm font-medium text-left text-gray-600 dark:text-gray-300"
        style={{ lineHeight: 1, marginBottom: "2px" }}
      >
        {category}
      </h3>

      {/* Scroll container - always full width */}
      <div
        ref={containerRef}
        className="w-full overflow-x-hidden bg-transparent"
        style={{
          WebkitOverflowScrolling: "touch",
          maskImage:
            "linear-gradient(to right, transparent 0px, black 16px, black calc(100% - 16px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0px, black 16px, black calc(100% - 16px), transparent 100%)",
        }}
      >
        {/* Content container - handles animation or centering */}
        <div
          ref={contentRef}
          className={`transition-all duration-300 ${isCentered ? "mx-auto" : "w-max"}`}
          style={{
            transform: isCentered ? "none" : `translateX(${-scrollPosition}px)`,
            display: isCentered ? "flex" : "block",
            justifyContent: isCentered ? "center" : "flex-start",
            width: isCentered ? "100%" : "max-content",
            margin: isCentered ? "0 auto" : "0", // Ensure centered content has auto margins
          }}
        >
          <div className="bg-white dark:bg-black py-2 px-4 rounded-md">
            <img
              ref={imageRef}
              src={src || "/placeholder.svg"}
              alt={alt}
              className="h-[45px] md:h-[55px] w-auto dark:invert dark:brightness-100 dark:contrast-100"
              style={{
                maxWidth: "none", // Prevent image from scaling down
                objectFit: "contain",
              }}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
