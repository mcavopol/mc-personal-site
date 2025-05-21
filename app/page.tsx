import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ImpactSection from "@/components/impact-section"
import ApproachSection from "@/components/approach-section"
import CompaniesSection from "@/components/companies-section"
import StorySection from "@/components/story-section"
import SuperpowerSection from "@/components/superpower-section"
import WritingSection from "@/components/writing-section"
import OffTheClockSection from "@/components/off-the-clock-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <div className="about-impact-wrapper">
        <AboutSection />
        <div className="mt-[-3rem]">
          {" "}
          {/* Reduce space between About and Impact */}
          <ImpactSection />
        </div>
      </div>
      <div className="mt-[-3rem]">
        {" "}
        {/* Reduce space between Impact and Approach */}
        <ApproachSection />
      </div>
      <CompaniesSection />
      <StorySection />
      <SuperpowerSection />
      <div className="mt-[-3rem]">
        {" "}
        {/* Reduce space between Superpower and Writing */}
        <WritingSection />
      </div>
      <OffTheClockSection />
      <Footer />
    </main>
  )
}
