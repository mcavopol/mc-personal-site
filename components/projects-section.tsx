import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Foresight Strategic Narrative",
      description:
        'Foresight had a vision for Customer Success, but couldn\'t outgrow "Is this just a survey?". A compelling strategic narrative (with companion deck!) solved this and reframed the conversation.',
      outcomes: [
        "Increased Exec. Alignment",
        'Re-Framed "the big problem" and solution',
        "Doubled Disco -> Opp ratio",
        "+25% pipeline conversion",
      ],
      link: "#",
    },
    {
      title: "LeanKit Growth Strategy",
      description:
        "Scaled post-sales engine and new-market product management, resulting in significant ARR growth from $5M to $14M.",
      outcomes: ["ARR $5M → $14M", "Reduced churn", "CX NPS 50+"],
      link: "#",
    },
    {
      title: "Ambition Revenue Operations",
      description:
        "Built comprehensive customer success, support, professional services, and solutions engineering teams.",
      outcomes: ["NRR +30 points", "LTV 2.5×", "Expansion ARR 12.7×", "NPS 55"],
      link: "#",
    },
    {
      title: "Fresh Technology Channel Strategy",
      description: "Pivoted to low-CAC POS partnerships, dramatically improving growth and operational efficiency.",
      outcomes: ["YoY growth 93%", "Sales cycle 8 mo → 15 days", "Support SLA 23× faster"],
      link: "#",
    },
    {
      title: "Prado Enterprise Refocus",
      description: "As Interim COO & SVP of Revenue/Product, refocused on enterprise ICP and optimized burn rate.",
      outcomes: ["Burn multiple 3× → 0×", "Median contract 427×", "Dev cycle 60d → <7d"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              A showcase of key initiatives and transformations I've led throughout my career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.link} className="flex items-center">
                      Learn more <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
