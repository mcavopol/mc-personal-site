import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function CtaSection() {
  return (
    <section id="contact" className="section-padding" aria-label="Get in touch">
      <div className="container-padding mx-auto max-w-2xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Let&apos;s talk.
        </h2>
        <p className="text-lg text-muted-foreground">
          Whether it&apos;s a role, a project, or just a good conversation over coffee &mdash; I&apos;m always up for it.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button size="lg" asChild>
            <a
              href="https://cal.com/hedgehog-growth/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s meet
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="mailto:mcavopol@gmail.com" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              mcavopol@gmail.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
