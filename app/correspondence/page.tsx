import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Linkedin, Mail, Github, Instagram, BookOpen, Twitter, Globe, Phone, MapPin } from "lucide-react"

export default function CorrespondencePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Michael Cavopol</h1>
          <div className="space-y-2 text-gray-600 dark:text-gray-400">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>204 Harpeth Wood Drive, Nashville TN, 37221</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:6159442954" className="hover:text-black dark:hover:text-white transition-colors">
                (615) 944-2954
              </a>
            </div>
          </div>

          {/* Add to Contacts CTA */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <a href="/vcard" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Add to Contacts
              </a>
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/michael-cavopol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/cavopol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter (X)"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/cavopol/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://cavopol.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <BookOpen className="h-6 w-6" />
          </a>
          <a
            href="mailto:mcavopol@gmail.com"
            aria-label="Email"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/mcavopol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>

        {/* Work Sections */}
        <div className="space-y-6">
          {/* Personal Work */}
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-black dark:text-white">Work with me personally</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Fractional Product, Revenue and Operations leadership for early and growing tech companies.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <a
                    href="https://michael.cavopol.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    michael.cavopol.me
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <a
                    href="mailto:michael.cavopol@gmail.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    michael.cavopol@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Firm Work */}
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-black dark:text-white">Work with my firm</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Focused Innovation & Revenue Acceleration for Capital-Efficient Product Companies
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <a
                    href="https://hedgehoggrowth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    hedgehoggrowth.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <a
                    href="mailto:michael@hedgehoggrowth.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    michael@hedgehoggrowth.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services & AI */}
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-black dark:text-white">For services, bots and AI</h2>
              <p className="text-gray-700 dark:text-gray-300">
                For newsletters, user accounts and other non-human uses
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <a
                  href="mailto:mcavopol@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  mcavopol@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
