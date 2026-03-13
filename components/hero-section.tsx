import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 container-padding mx-auto overflow-x-hidden">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none">
              Hi, I&apos;m Michael.
            </h1>
            <p className="text-lg md:text-xl font-medium text-foreground/70 leading-snug max-w-lg">
              I build product companies through disruption cycles. Fast to clarity. Fast to conviction. Fast to results.
            </p>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              Product &amp; revenue leader. 20 years. Four disruption cycles. I move quickly into complex environments, form a sharp point of view on what matters, and drive teams to execute.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg">
                <a href="https://cal.com/hedgehog-growth/30min">Let&apos;s meet</a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/about">
                  My story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/michael-headshot.jpg"
              alt="Michael Cavopol"
              className="rounded-2xl object-cover"
              width={440}
              height={550}
              priority
              quality={85}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 440px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
