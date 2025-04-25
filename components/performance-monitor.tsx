"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if the Web Vitals API is available
    if (process.env.NODE_ENV !== "production" || !("web-vitals" in window)) return

    // Import web-vitals dynamically to avoid bundling it in development
    import("web-vitals").then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
      getCLS(sendToAnalytics)
      getFID(sendToAnalytics)
      getLCP(sendToAnalytics)
      getFCP(sendToAnalytics)
      getTTFB(sendToAnalytics)
    })
  }, [])

  // Send results to Google Analytics
  const sendToAnalytics = ({ name, delta, id }: { name: string; delta: number; id: string }) => {
    // Assumes the global `gtag()` function exists, injected by the Google Analytics script
    if (typeof window.gtag === "function") {
      window.gtag("event", name, {
        event_category: "Web Vitals",
        event_label: id,
        value: Math.round(name === "CLS" ? delta * 1000 : delta),
        non_interaction: true,
      })
    }
  }

  // This component doesn't render anything
  return null
}
