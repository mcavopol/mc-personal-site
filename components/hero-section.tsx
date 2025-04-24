import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 container-padding mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400">
            Entrepreneur, Operator, 
Fractional Product & Revenue Leader
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-black dark:text-white">Hi, I'm Michael</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
            A B2B-Product operator who has spent two decades building product and to revenue teams so the 
            companies (and the people inside them) can climb higher, faster.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#contact">Let's get coffee</a>
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
          <img src="/michael-headshot.jpg" alt="Michael Cavopol" className="rounded-lg object-cover shadow-lg" />
        </div>
      </div>
    </section>
  )
}
