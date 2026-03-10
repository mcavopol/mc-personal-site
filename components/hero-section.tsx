import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 container-padding mx-auto overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I&apos;m Michael.
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-muted-foreground">
              I build product companies through disruption cycles. Fast to clarity. Fast to conviction. Fast to results.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              Product &amp; revenue leader. 20 years. Four disruption cycles. I move quickly into complex environments, form a sharp point of view on what matters, and drive teams to execute.
            </p>
            <div className="hidden md:flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="https://cal.com/hedgehog-growth/30min">Let&apos;s meet</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  My story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="/michael-headshot.jpg"
              alt="Michael Cavopol - Professional headshot of a man with dark hair and a blue shirt"
              className="rounded-lg object-cover shadow-lg"
              width={400}
              height={400}
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            />
          </div>
          <div className="md:hidden flex justify-center mt-6 col-span-1">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <a href="https://cal.com/hedgehog-growth/30min">Let&apos;s meet</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  My story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
