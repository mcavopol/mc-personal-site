import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SectionLoading from "@/components/section-loading"
import ScrollToTop from "@/components/scroll-to-top"
import SectionNav from "@/components/section-nav"
import SectionObserver from "@/components/section-observer"

// Lazy load below-the-fold components
const ImpactSection = dynamic(() => import("@/components/impact-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const ApproachSection = dynamic(() => import("@/components/approach-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const SuperpowerSection = dynamic(() => import("@/components/superpower-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const CompaniesSection = dynamic(() => import("@/components/companies-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const StorySection = dynamic(() => import("@/components/story-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const WritingSection = dynamic(() => import("@/components/writing-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const OffTheClockSection = dynamic(() => import("@/components/off-the-clock-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <SectionLoading />,
  ssr: false,
})

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

        {/* Pre-render section containers with IDs for navigation */}
        <section id="impact" className="section-padding bg-white dark:bg-black pt-0 pb-12">
          <ImpactSection />
        </section>

        <section id="approach" className="section-padding bg-white dark:bg-black pt-12">
          <ApproachSection />
        </section>

        <section id="superpower" className="section-padding bg-white dark:bg-black pb-12">
          <SuperpowerSection />
        </section>

        <section
          id="companies"
          className="section-padding bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
        >
          <CompaniesSection />
        </section>

        <section id="career" className="section-padding bg-gray-50 dark:bg-gray-950">
          <StorySection />
        </section>

        <section id="writing" className="section-padding pt-12">
          <WritingSection />
        </section>

        <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-950">
          <OffTheClockSection />
        </section>
      </main>

      <Footer />

      {/* Section observer for tracking visibility */}
      <SectionObserver sectionIds={sectionIds} />

      {/* Navigation and scroll utilities */}
      <ScrollToTop />
      <SectionNav />
    </>
  )
}
