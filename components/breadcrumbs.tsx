"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export default function Breadcrumbs() {
  const pathname = usePathname()

  // For the main page, we don't need breadcrumbs
  if (pathname === "/") return null

  // Split the pathname into segments
  const segments = pathname.split("/").filter(Boolean)

  // If no segments, return null
  if (segments.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="container-padding mx-auto max-w-6xl py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <li>
          <Link href="/" className="flex items-center hover:text-black dark:hover:text-white transition-colors">
            <Home className="h-4 w-4 mr-1" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {segments.map((segment, index) => {
          // Create the URL for this segment
          const url = `/${segments.slice(0, index + 1).join("/")}`
          const isLast = index === segments.length - 1

          // Format the segment for display (capitalize, replace hyphens)
          const displayName = segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())

          return (
            <li key={segment} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" aria-hidden="true" />
              {isLast ? (
                <span aria-current="page" className="font-medium text-gray-900 dark:text-gray-200">
                  {displayName}
                </span>
              ) : (
                <Link href={url} className="hover:text-black dark:hover:text-white transition-colors">
                  {displayName}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
