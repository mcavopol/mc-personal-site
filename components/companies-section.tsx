"use client"
import { useRef, useEffect, useState } from "react"
import LogoBanners from "./logo-banners"

export default function CompaniesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Set up intersection observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Update state when section enters viewport
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        root: null, // Use viewport as root
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of section is visible
      },
    )

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="companies"
      ref={sectionRef}
      className="section-padding bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container-padding mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Industry Leaders</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Over two decades, I've collaborated with great companies across diverse industries and sectors.
        </p>
        <LogoBanners />
      </div>
    </section>
  )
}
