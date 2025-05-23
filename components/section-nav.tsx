"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "approach", label: "Approach" },
  { id: "superpower", label: "Superpower" },
  { id: "companies", label: "Companies" },
  { id: "career", label: "Story" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
]

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0,
      },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
    }
  }

  const activeLabel = sections.find((s) => s.id === activeSection)?.label || "Navigate"

  return (
    <div className="fixed bottom-8 left-8 z-50 md:hidden">
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="bg-white dark:bg-black shadow-lg rounded-full px-4 py-2 flex items-center gap-2"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="Section navigation menu"
        >
          <span className="text-sm font-medium">{activeLabel}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </Button>

        {isOpen && (
          <div className="absolute bottom-full left-0 mb-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg py-2 min-w-[160px]">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                  activeSection === id ? "bg-gray-100 dark:bg-gray-800 font-medium" : ""
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
