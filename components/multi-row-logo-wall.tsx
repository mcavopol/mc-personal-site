"use client"

import { useState, useEffect } from "react"
import LogoRowCarousel from "./logo-row-carousel"
import { cn } from "@/lib/utils"

interface Logo {
  name: string
  src: string
  alt: string
  category?: string
}

interface MultiRowLogoWallProps {
  title?: string
  logoRows: Logo[][]
  className?: string
}

export default function MultiRowLogoWall({
  title = "Trusted by industry leaders",
  logoRows,
  className,
}: MultiRowLogoWallProps) {
  const [displayRows, setDisplayRows] = useState<Logo[][]>(logoRows)

  // Handle responsive row reduction
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // On small screens, combine rows to reduce from 6 to 3
        const newRows: Logo[][] = []
        for (let i = 0; i < logoRows.length; i += 2) {
          if (i + 1 < logoRows.length) {
            // Combine two rows
            newRows.push([...logoRows[i], ...logoRows[i + 1]])
          } else {
            // Last row if odd number of rows
            newRows.push(logoRows[i])
          }
        }
        setDisplayRows(newRows)
      } else {
        // On larger screens, use all 6 rows
        setDisplayRows(logoRows)
      }
    }

    // Initial call
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [logoRows])

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="container px-4 mx-auto">
        {title && <h3 className="text-lg font-medium text-center mb-6">{title}</h3>}

        <div className="space-y-1 md:space-y-2">
          {displayRows.map((rowLogos, index) => (
            <LogoRowCarousel
              key={index}
              logos={rowLogos}
              rowIndex={index}
              direction={index % 2 === 0 ? "ltr" : "rtl"}
              autoplaySpeed={3000 + index * 500}
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          ...and many more industry leaders trust our platform
        </p>
      </div>
    </div>
  )
}
