import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function OffTheClockSection() {
  return (
    <section id="off-the-clock" className="section-padding bg-white dark:bg-black">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="space-y-6">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>Off the Clock</CardTitle>
              <CardDescription>Life beyond the office</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Nashville-based. Father-to-be. Sort-of runner and biker. AI tinkerer. Likely sketching ideas on napkins
                or quoting Clayton Christensen. Mentor at the Nashville Entrepreneur Center; guest-lecturer on pricing,
                product strategy, and recession-proof growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
