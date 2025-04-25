import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function WritingSection() {
  return (
    <section id="writing" className="section-padding">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Things I'm Writing About</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              Long-form content on revenue engineering, product strategy, and building sustainable growth engines.
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="flex-shrink-0 w-full md:w-2/5 lg:w-1/2 mx-auto md:mx-0">
                  <div className="w-full rounded-md shadow-sm overflow-hidden">
                    <img
                      src="/images/substack-content.png"
                      alt="Hedgehog Growth Newsletter Articles"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-2xl font-bold">Hedgehog Growth</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Insights on B2B SaaS growth, revenue operations, and product strategy.
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    I write about the intersection of product and revenue, sharing frameworks and insights from two
                    decades of building and scaling B2B SaaS companies. Topics include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Revenue Engineering Frameworks</li>
                    <li>Customer-Obsessed Innovation</li>
                    <li>AI's Impact on B2B Product Companies</li>
                    <li>Navigating Economic Uncertainty</li>
                    <li>Building Resilient Growth Engines</li>
                  </ul>
                  <div className="pt-2">
                    <Button asChild>
                      <a
                        href="https://cavopol.substack.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Read on Substack <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
