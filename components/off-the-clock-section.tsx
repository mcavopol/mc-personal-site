import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OffTheClockSection() {
  return (
    <div className="container-padding mx-auto max-w-6xl">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Off the Clock</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Life Beyond the Office</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                Nashville-based. Father-to-be. Sort-of runner and biker. Tech tinkerer. Likely sketching ideas in
                overpriced coffee shops. Costco evangelist. Warner Parks resident. Mentor at the Nashville Entrepreneur
                Center; guest-lecturer on pricing, product strategy, and recession-proof growth. Always game for a good
                problem, and a better cup of coffee.
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                I'm always eager to meet teams doing genuinely interesting work. If that's you, let's compare notes or
                get coffee!
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <a href="mailto:mcavopol@gmail.com" className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-gray-500" />
                    <span>Email me</span>
                  </a>
                </Button>

                <Button
                  asChild
                  className="h-12 px-5 bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  <a
                    href="https://cal.com/hedgehog-growth/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Schedule a call</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <a
                    href="https://linkedin.com/in/michael-cavopol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Linkedin className="h-5 w-5 mr-2 text-gray-500" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
