"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Check if we're near the footer to adjust position
      const footer = document.querySelector("footer")
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        // Add a class when near footer
        if (footerTop - windowHeight < 100) {
          document.documentElement.classList.add("near-footer")
        } else {
          document.documentElement.classList.remove("near-footer")
        }
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    toggleVisibility() // Check initial position

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-300 scroll-to-top-button"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
