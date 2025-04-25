import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 container-padding mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white">
            Fractional Chief Revenue Officer & Product Leader
          </h1>
          <p className="text-xl md:text-2xl font-medium">Hi, I'm Michael</p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
            A B2B-Product operator who has spent two decades building product and revenue teams so the companies (and
            the people inside them) can grow faster.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="https://cal.com/hedgehog-growth/30min">Let's Meet</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">
                Learn More
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative max-w-md mx-auto w-full">
          {/* Fixed height container for the image */}
          <div style={{ height: "400px", width: "100%" }} className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/michael-headshot.jpg"
              alt="Michael Cavopol – Fractional CRO & Product Leader speaking at SaaS conference"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
