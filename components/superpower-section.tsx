import { Card, CardContent } from "@/components/ui/card"
import { Code, Building, TrendingUp, Repeat, Users, Bot } from "lucide-react"

export default function SuperpowerSection() {
  return (
    <section id="superpower" className="section-padding bg-white dark:bg-black pb-12">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Superpower</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              By saying "Yes!" whenever tapped to solve a new problem, I earned a broad first-hand perspective across
              every function of a product company.
            </p>
          </div>

          <Card className="flex flex-col">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Code className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                  <div>
                    <h3 className="text-xl font-bold">Technical × Commercial DNA</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Computer‑science roots + quota‑carrying sales + PLG chops.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Building className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                  <div>
                    <h3 className="text-xl font-bold">Company OS</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Tying usability, feasibility and viability to accountability, cadence and vision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                  <div>
                    <h3 className="text-xl font-bold">Operator's POV</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      I've owned burn multiple, retention, product-market fit, then lived the results in board rooms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Repeat className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                  <div>
                    <h3 className="text-xl font-bold">Repeatable Playbooks</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Go To Market strategies chosen by unit economics, not fashion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                  <div>
                    <h3 className="text-xl font-bold">Customer Obsession</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Focused on customer problems + value creation, not technical solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Bot className="h-6 w-6 mt-1 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                  <div>
                    <h3 className="text-xl font-bold">AI Edge</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Innovating the next generation of product and tactics with AI copilots, agent workflows, and RAG
                      systems that cut CAC and COGS now, not next quarter.
                    </p>
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
