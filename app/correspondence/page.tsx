import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Download,
  Linkedin,
  Mail,
  Github,
  Instagram,
  BookOpen,
  Twitter,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"

export default function CorrespondencePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-3 py-6 md:p-6">
      <div className="w-full max-w-xl mx-auto space-y-2">
        {/* Header */}
        <div className="text-center space-y-2">
          {/* Profile Photo */}
          <div className="flex justify-center mb-3">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
              <Image
                src="/michael-headshot.jpg"
                alt="Michael Cavopol"
                width={80}
                height={80}
                className="w-full h-full object-cover grayscale"
                priority
              />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white">Michael Cavopol</h1>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center justify-center gap-1">
              <MapPin className="h-3 w-3" />
              <a
                href="https://www.google.com/maps/dir//204+Harpeth+Wood+Dr,+Nashville,+TN+37221/@36.0734954,-86.9006586,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="whitespace-nowrap">204 Harpeth Wood Drive,</span>{" "}
                <span className="whitespace-nowrap">Nashville TN, 37221</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Phone className="h-3 w-3" />
              <a href="tel:6159442954" className="hover:text-black dark:hover:text-white transition-colors">
                (615) 944-2954
              </a>
            </div>
          </div>

          {/* Add to Contacts CTA */}
          <div className="pt-2">
            <Button
              asChild
              size="sm"
              className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <a href="/vcard" className="flex items-center gap-1">
                <Download className="h-3 w-3" />
                Add to Contacts
              </a>
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 py-2">
          <a
            href="https://linkedin.com/in/michael-cavopol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/cavopol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter (X)"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/cavopol/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://cavopol.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <BookOpen className="h-4 w-4" />
          </a>
          <a
            href="mailto:mcavopol@gmail.com"
            aria-label="Email"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/mcavopol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        {/* Work Sections */}
        <div className="space-y-3">
          {/* Personal Work */}
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-3 space-y-2">
              <h2 className="text-sm font-semibold text-black dark:text-white">Work with me personally</h2>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Fractional Product, Revenue and Ops leader or coach for early and growing tech startups.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs">
                <div className="flex items-center justify-start sm:justify-center gap-1">
                  <Mail className="h-3 w-3 text-gray-500" />
                  <a
                    href="mailto:michael.cavopol@gmail.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    michael.cavopol@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-start sm:justify-center gap-1">
                  <span className="text-gray-700 dark:text-gray-300">Learn more:</span>
                  <a
                    href="https://michael.cavopol.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                  >
                    michael.cavopol.me
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Firm Work */}
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-3 space-y-2">
              <h2 className="text-sm font-semibold text-black dark:text-white">Work with my firm</h2>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Helping non-tech companies ≧$10mm get practical use from technology and AI; driving EBIDTA and revenue
                growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs">
                <div className="flex items-center justify-start sm:justify-center gap-1">
                  <Mail className="h-3 w-3 text-gray-500" />
                  <a
                    href="mailto:michael@hedgehoggrowth.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    michael@hedgehoggrowth.com
                  </a>
                </div>
                <div className="flex items-center justify-start sm:justify-center gap-1">
                  <span className="text-gray-700 dark:text-gray-300">Learn more:</span>
                  <a
                    href="https://hedgehoggrowth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                  >
                    hedgehoggrowth.com
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services & AI */}
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-3 space-y-2">
              <h2 className="text-sm font-semibold text-black dark:text-white">
                For newsletters, user accounts and sign-ups
              </h2>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Please use this address for any non-human correspondence.
              </p>
              <div className="flex items-center justify-center gap-1 text-xs">
                <Mail className="h-3 w-3 text-gray-500" />
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
