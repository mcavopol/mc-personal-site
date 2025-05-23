import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SectionObserver from "@/components/section-observer"
import ScrollToTop from "@/components/scroll-to-top"
import SectionNav from "@/components/section-nav"
import LazySections from "@/components/lazy-sections"

// Define all section IDs for navigation
const sectionIds = ["hero", "about", "impact", "approach", "superpower", "companies", "career", "writing", "contact"]

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen flex flex-col">
        {/* Above-the-fold content - load immediately */}
        <HeroSection />
        <AboutSection />

        {/* Lazy-loaded sections */}
        <LazySections />
      </main>

      {/* Section observer for tracking visibility */}
      <SectionObserver sectionIds={sectionIds} />

      {/* Navigation and scroll utilities */}
      <ScrollToTop />
      <SectionNav />
    </>
  )
}
