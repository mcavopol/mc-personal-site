"use client"
import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface LogoBannerProps {
  src: string
  alt: string
  category: string
}

export default function LogoBanners() {
  // Define the logo banners with their categories
  const logoBanners: LogoBannerProps[] = [
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

  return (
    <div className="space-y-3 md:space-y-4 w-full">
      {logoBanners.map((banner, index) => (
        <LogoBanner key={index} src={banner.src} alt={banner.alt} category={banner.category} />
      ))}
    </div>
  )
}

function LogoBanner({ src, alt, category }: LogoBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [isCentered, setIsCentered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { resolvedTheme } = useTheme()

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

  // Check if image should be centered after it loads
  const checkCentering = () => {
    if (containerRef.current && imageRef.current && isLoaded) {
      const containerWidth = containerRef.current.offsetWidth
      const imgWidth = imageRef.current.offsetWidth

      // Set centering if image is narrower than container
      setIsCentered(imgWidth < containerWidth)
    }
  }

  // Update centering on resize
  useEffect(() => {
    const handleResize = () => {
      checkCentering()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isLoaded])

  // Check centering when image loads
  useEffect(() => {
    if (isLoaded) {
      checkCentering()
    }
  }, [isLoaded])

  // Handle image load
  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className="w-full">
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
        className="w-full overflow-x-auto scrollbar-hide bg-transparent"
        style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
      >
        {/* Content container - handles centering */}
        <div
          className="w-full bg-transparent"
          style={{
            display: "flex",
            justifyContent: isCentered ? "center" : "flex-start",
            minWidth: isCentered ? "100%" : "min-content",
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
