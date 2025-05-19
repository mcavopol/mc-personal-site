import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 container-padding mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400">
            AI-Focused, Product & Revenue Operator
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-black dark:text-white">Hi, I'm Michael</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
            My unique background integrates technical fluency with revenue strategy unifying product vision, go‑to‑market execution, and data‑driven operations to build capital‑efficient product companies.
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
        <div className="relative aspect-square max-w-md mx-auto">
          <img
            src="/michael-headshot.jpg"
            alt="Michael Cavopol"
            className="rounded-lg object-cover shadow-lg"
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>
  )
}
