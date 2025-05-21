import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StorySection from "@/components/story-section"
import SuperpowerSection from "@/components/superpower-section"
import ProjectsSection from "@/components/projects-section"
import WritingSection from "@/components/writing-section"
import OffTheClockSection from "@/components/off-the-clock-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StorySection />
      <SuperpowerSection />
      <ProjectsSection />
      <WritingSection />
      <OffTheClockSection />
      <Footer />
    </main>
  )
}
