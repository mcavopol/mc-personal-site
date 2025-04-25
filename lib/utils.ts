import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility for lazy loading components
export function lazyLoad<T, U>(factory: () => Promise<T>, render: (factory: T) => U) {
  return {
    loading: () => <div className="min-h-[200px] flex items-center justify-center">Loading...</div>,
    render,
  }
}

// Utility to detect if JS is enabled
export function isJSEnabled() {
  return typeof window !== "undefined"
}

// Utility to check if an element is in viewport
export function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
