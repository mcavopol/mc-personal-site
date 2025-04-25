import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import WritingSection from "@/components/writing-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import PerformanceMonitor from "@/components/performance-monitor"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <PerformanceMonitor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WritingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
