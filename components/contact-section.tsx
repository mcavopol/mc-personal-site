"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Globe, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Work With Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              I take on <strong>fractional product, revenue, and operations work</strong> for companies doing genuinely
              interesting things. If you're chasing ambitious growth without the bonfire budget, let's compare notes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>How to reach me directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
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

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
                <CardDescription>Exploring opportunities for collaboration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Whether you're looking for fractional leadership, strategic consulting, or just want to discuss SaaS
                  growth strategies over coffee, I'm always open to connecting with like-minded professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
