"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"
import { Card, CardContent } from "@/components/ui/card"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Impact", href: "#impact" },
    { name: "Approach", href: "#approach" },
    { name: "Superpower", href: "#superpower" },
    { name: "Story", href: "#career" },
    { name: "Writing", href: "#writing" },
  ]

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
      onKeyDown={handleKeyDown}
    >
      <div className="container-padding mx-auto max-w-6xl">
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <div className="flex items-center justify-between h-16">
              <a
                href="#"
                className="text-xl font-bold tracking-tighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white rounded-sm"
                aria-label="Michael Cavopol - Home"
              >
                Michael Cavopol
              </a>

              <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white rounded-sm px-1 py-1"
                  >
                    {link.name}
                  </a>
                ))}
                <ModeToggle />
              </nav>

              <div className="flex md:hidden items-center space-x-2">
                <ModeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <div className="container-padding py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white rounded-sm px-1 py-1"
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
