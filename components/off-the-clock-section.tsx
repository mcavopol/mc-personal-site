import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Globe, Linkedin } from "lucide-react"

export default function OffTheClockSection() {
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Off the Clock</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Life Beyond the Office</CardTitle>
                <CardDescription>Personal interests and activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Nashville-based. Father-to-be. Sort-of runner and biker. AI tinkerer. Likely sketching ideas on
                  napkins or quoting Clayton Christensen. Mentor at the Nashville Entrepreneur Center; guest-lecturer on
                  pricing, product strategy, and recession-proof growth.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
                <CardDescription>Find me online</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  I'm always eager to meet teams doing genuinely interesting work. If that's you, let's compare notes or
                  get coffee!
                </p>
                <div className="flex items-center space-x-4 mt-4">
                  <Globe className="h-5 w-5 text-gray-500" />
                  <a
                    href="https://hedgehoggrowth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    hedgehoggrowth.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-5 w-5 text-gray-500" />
                  <a
                    href="https://linkedin.com/in/michael-cavopol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    linkedin.com/in/michael-cavopol
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
