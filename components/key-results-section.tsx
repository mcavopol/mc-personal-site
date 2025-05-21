"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"

export default function KeyResultsSection() {
  return (
    <section id="key-results" className="section-padding bg-white dark:bg-black">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key Results</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              In collaboration with incredible teams, I've delivered meaningful business impact.
            </p>
          </div>

          {/* Key Results Card - Clean Design with Dividers */}
          <Card className="overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200 dark:divide-gray-800">
                {/* First Column */}
                <div className="grid grid-rows-2 gap-y-4">
                  {/* Metric 1 */}
                  <div className="p-8 text-center flex flex-col justify-center">
                    <div className="flex items-center justify-center mb-2">
                      <ArrowUp className="h-7 w-7 mr-2 text-gray-800 dark:text-gray-200" />
                      <h3 className="text-3xl font-bold">12.7× ARR Growth</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium max-w-[80%] mx-auto">
                      Contract Value +427×
                    </p>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-8 text-center flex flex-col justify-center">
                    <div className="flex items-center justify-center mb-2">
                      <ArrowDown className="h-7 w-7 mr-2 text-gray-800 dark:text-gray-200" />
                      <h3 className="text-3xl font-bold">3× Burn Reduction</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium max-w-[80%] mx-auto">
                      ↓70% OpEx & 138% NDR
                    </p>
                  </div>
                </div>

                {/* Second Column */}
                <div className="grid grid-rows-2 gap-y-4">
                  {/* Metric 2 */}
                  <div className="p-8 text-center flex flex-col justify-center">
                    <div className="flex items-center justify-center mb-2">
                      <ArrowUp className="h-7 w-7 mr-2 text-gray-800 dark:text-gray-200" />
                      <h3 className="text-3xl font-bold">3× R&D Impact</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium max-w-[80%] mx-auto">
                      Ship Speed ↑14× & Bugs ↓70%
                    </p>
                  </div>

                  {/* Metric 4 */}
                  <div className="p-8 text-center flex flex-col justify-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold mr-2 text-gray-800 dark:text-gray-200">+</span>
                      <h3 className="text-3xl font-bold">150% Net Revenue</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium max-w-[80%] mx-auto">
                      LTV 12.6× & NPS 135pts
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
