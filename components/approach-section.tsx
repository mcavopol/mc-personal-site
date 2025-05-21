"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ApproachSection() {
  return (
    <section id="approach" className="section-padding bg-white dark:bg-black">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Approach</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I do this by uniting company <strong>mission</strong>, product <strong>vision</strong>, and go‑to‑market{" "}
              <strong>execution</strong>. This alignment connects every function—from marketing and sales development
              through engineering and support—driving focused, predictable results.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I've seen firsthand how dedicated, passionate teams will rally behind audacious missions with shared
              purpose fueling growth‑oriented companies to transform their outcome.
            </p>
          </div>

          {/* Cards Grid - Reorganized without Impact Framework */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ideal Fit Card */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Ideal Fit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    50 to 350‑person product companies needing support integrating <strong>Product Strategy</strong> and{" "}
                    <strong>Revenue Engines</strong>.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    The role I'm best in carry different titles, but rhyme with <strong>CPRO</strong> (Product & Revenue
                    Officer) or <strong>COO</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Full-Stack Perspective Card */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Full‑Stack Perspective</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    I bring two‑decades of experience across technical, product, marketing, sales and customer success
                    roles.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    That broad perspective is my{" "}
                    <a
                      href="#superpower"
                      className="underline font-medium hover:text-black dark:hover:text-white transition-colors"
                    >
                      superpower
                    </a>
                    . It lets me see the whole picture across product strategy and revenue engines, bringing clarity and
                    focused to what actually matters.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Core Playbook Card */}
            <Card className="flex flex-col h-full md:col-span-2">
              <CardHeader>
                <CardTitle>Core Playbook</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    Revenue Acceleration
                  </span>
                  <span className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    Innovative Disruption - AI
                  </span>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    Capital‑Efficient Scaling
                  </span>
                  <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    ICP Value Creation
                  </span>
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    Strategic Narrative
                  </span>
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    Customer Obsession
                  </span>
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    High Velocity Delivery
                  </span>
                  <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    Lean Operations
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
