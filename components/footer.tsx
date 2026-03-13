import { Linkedin, Mail, Github, Instagram, BookOpen, Twitter } from "lucide-react"

const socialLinks = [
  { href: "https://linkedin.com/in/michael-cavopol", label: "LinkedIn", icon: Linkedin },
  { href: "https://x.com/cavopol", label: "Twitter (X)", icon: Twitter },
  { href: "https://www.instagram.com/cavopol/", label: "Instagram", icon: Instagram },
  { href: "https://cavopol.substack.com/", label: "Substack", icon: BookOpen },
  { href: "mailto:mcavopol@gmail.com", label: "Email", icon: Mail, external: false },
  { href: "https://github.com/mcavopol", label: "GitHub", icon: Github },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold tracking-tight">Michael Cavopol</h3>
            <p className="text-sm text-muted-foreground mt-0.5">Product & Revenue Leader</p>
          </div>

          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external !== false ? "_blank" : undefined}
                rel={link.external !== false ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          &copy; {currentYear} Michael Cavopol. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
