"use client"

import { useEffect, useRef } from "react"

interface SectionObserverProps {
  sectionIds: string[]
  onSectionVisible?: (id: string) => void
}

export default function SectionObserver({ sectionIds, onSectionVisible }: SectionObserverProps) {
  const observedSections = useRef<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id && onSectionVisible) {
            onSectionVisible(entry.target.id)

            // If we only want to observe each section once (for initial load detection)
            // observedSections.current.add(entry.target.id)
            // observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0,
      },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element && !observedSections.current.has(id)) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds, onSectionVisible])

  // This component doesn't render anything
  return null
}
