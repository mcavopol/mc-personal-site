import { ArrowUp, ArrowDown } from "lucide-react"

export default function ImpactSection() {
  return (
    <div className="container-padding mx-auto max-w-6xl overflow-x-hidden">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The results speak for themselves.</h2>
        </div>

        {/* Impact Metrics */}
        <div className="py-4">
          <h3 className="sr-only">Key Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column */}
            <div className="grid grid-rows-2 gap-y-8">
              {/* Metric 1 */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <ArrowUp className="h-7 w-7 mr-2 text-foreground" aria-hidden="true" />
                  <h4 className="text-3xl font-bold">12.7x ARR Growth</h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  Contract Value +427x
                </p>
              </div>

              {/* Metric 3 */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <ArrowDown className="h-7 w-7 mr-2 text-foreground" aria-hidden="true" />
                  <h4 className="text-3xl font-bold">3x Burn Reduction</h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  70% OpEx reduction. 38% NDR improvement.
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="grid grid-rows-2 gap-y-8">
              {/* Metric 2 */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <ArrowUp className="h-7 w-7 mr-2 text-foreground" aria-hidden="true" />
                  <h4 className="text-3xl font-bold">3x R&amp;D Impact</h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  Delivery speed 14x faster. Bugs down 70%.
                </p>
              </div>

              {/* Metric 4 */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold mr-2 text-foreground" aria-hidden="true">
                    +
                  </span>
                  <h4 className="text-3xl font-bold">150% Net Revenue</h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  LTV 12.6x increase. NPS up 35 points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
