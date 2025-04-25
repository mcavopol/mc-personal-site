import { Suspense } from "react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import PerformanceMonitor from "@/components/performance-monitor"

// Dynamically import components that are below the fold
const AboutSection = dynamic(() => import("@/components/about-section"), {
  loading: () => <div className="min-h-[200px]"></div>,
  ssr: true,
})

const ProjectsSection = dynamic(() => import("@/components/projects-section"), {
  loading: () => <div className="min-h-[200px]"></div>,
  ssr: true,
})

const WritingSection = dynamic(() => import("@/components/writing-section"), {
  loading: () => <div className="min-h-[200px]"></div>,
  ssr: true,
})

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  loading: () => <div className="min-h-[200px]"></div>,
  ssr: true,
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="min-h-[100px]"></div>,
  ssr: true,
})

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <PerformanceMonitor />
      <Navbar />
      <HeroSection />

      <Suspense fallback={<div className="min-h-[200px]"></div>}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[200px]"></div>}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[200px]"></div>}>
        <WritingSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[200px]"></div>}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[100px]"></div>}>
        <Footer />
      </Suspense>
    </main>
  )
}
