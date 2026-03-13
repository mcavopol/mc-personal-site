import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ScrollToTop from "@/components/scroll-to-top"
import LazySections from "@/components/lazy-sections"

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen flex flex-col">
        <HeroSection />
        <LazySections />
      </main>
      <ScrollToTop />
    </>
  )
}
