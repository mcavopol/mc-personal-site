export default function ImpactSection() {
  return (
    <section className="section-padding" aria-label="Impact metrics">
      <div className="container-padding mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12">
          The results speak for themselves.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
          <div>
            <p className="text-4xl md:text-5xl font-bold tracking-tighter">12.7x</p>
            <p className="text-lg font-medium mt-1">ARR Growth</p>
            <p className="text-sm text-muted-foreground mt-1">Contract value +427x</p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-bold tracking-tighter">3x</p>
            <p className="text-lg font-medium mt-1">R&amp;D Impact</p>
            <p className="text-sm text-muted-foreground mt-1">Delivery speed 14x faster. Bugs down 70%.</p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-bold tracking-tighter">3x</p>
            <p className="text-lg font-medium mt-1">Burn Reduction</p>
            <p className="text-sm text-muted-foreground mt-1">70% OpEx reduction. 38% NDR improvement.</p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-bold tracking-tighter">+150%</p>
            <p className="text-lg font-medium mt-1">Net Revenue</p>
            <p className="text-sm text-muted-foreground mt-1">LTV 12.6x increase. NPS up 35 points.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
