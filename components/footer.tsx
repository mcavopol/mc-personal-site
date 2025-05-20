import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Github, Instagram, BookOpen, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container-padding mx-auto max-w-6xl">
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold">Michael Cavopol</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Chief Revenue & Product Operator</p>
              </div>

              <div className="flex space-x-6 mb-6 md:mb-0">
                <a
                  href="https://linkedin.com/in/michael-cavopol"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/cavopol"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter (X)"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/cavopol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://cavopol.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Substack"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <BookOpen className="h-5 w-5" />
                </a>
                <a
                  href="mailto:mcavopol@gmail.com"
                  aria-label="Email"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/mcavopol"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Michael Cavopol. All rights reserved.
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  )
}
