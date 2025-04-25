import { Suspense, lazy } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"

// Lazy load below-the-fold components
const AboutSection = lazy(() => import("@/components/about-section"))
const ProjectsSection = lazy(() => import("@/components/projects-section"))
const WritingSection = lazy(() => import("@/components/writing-section"))
const ContactSection = lazy(() => import("@/components/contact-section"))
const Footer = lazy(() => import("@/components/footer"))

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
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
