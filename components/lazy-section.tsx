"use client"

import { useEffect, useState, useRef, type ReactNode } from "react"
import LoadingSkeleton from "./loading-skeleton"

interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  rootMargin?: string
  threshold?: number
}

export default function LazySection({
  children,
  fallback = <LoadingSkeleton />,
  rootMargin = "100px",
  threshold = 0.1,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [rootMargin, threshold, hasLoaded])

  return <div ref={ref}>{isVisible ? children : fallback}</div>
}
