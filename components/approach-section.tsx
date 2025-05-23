"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ApproachSection() {
  return (
    <div className="container-padding mx-auto max-w-6xl">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Approach</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I've achieved strong results through uniting company <strong>mission</strong>, product{" "}
            <strong>vision</strong>, and go‑to‑market <strong>execution</strong> in a codified way of operating. Every
            function, from marketing to engineering, is tightly integrated to drive focused, predictable results.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            This environment creates dedicated, passionate teams who rally behind audacious missions. Their shared
            purpose fuels growth and transforms outcomes.
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
                  30 to 300‑person product companies needing support integrating <strong>Product Strategy</strong> and{" "}
                  <strong>Revenue Engines</strong>.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  The roles I'm best in carry different titles, but rhyme with <strong>CPRO</strong> (Product & Revenue
                  Officer) CRO, CPO or <strong>COO</strong>.
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
                <span className="inline-flex items-center border border-gray-200 dark:border-gray-800 rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  Revenue Acceleration
                </span>
                <span className="inline-flex items-center border border-gray-200 dark:border-gray-800 rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  Innovative Disruption - AI
                </span>
                <span className="inline-flex items-center border border-gray-200 dark:border-gray-800 rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  Capital‑Efficient Scaling
                </span>
                <span className="inline-flex items-center border border-gray-200 dark:border-gray-800 rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  ICP Value Creation
                </span>
                <span className="inline-flex items-center border border-gray-200 dark:border-gray-800 rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  Strategic Narrative
                </span>
                <span className="inline-flex items-center border border-gray-200 dark:border-gray-800 rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  Customer Obsession
                </span>
                <span className="inline-flex items-center border border-gray-200 dark:border-gray-800 rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  High Velocity Delivery
                </span>
                <span className="inline-flex items-center border border-gray-200 dark:border-gray-800 rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  Lean Operations
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
