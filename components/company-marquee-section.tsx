const companies = [
  "Walmart",
  "Salesforce",
  "Delta",
  "Rolls-Royce",
  "J&J",
  "BAE Systems",
  "Intel",
  "FedEx",
  "Caterpillar",
  "Amazon",
  "Square",
  "Cisco",
  "ServiceNow",
]

const companyText = companies.join(" \u00b7 ")

export default function CompanyMarqueeSection() {
  return (
    <section
      id="companies"
      className="section-padding overflow-hidden"
      aria-label="Companies worked with"
    >
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex whitespace-nowrap hover:[animation-play-state:paused] motion-reduce:[animation:none]"
          style={{
            animation: "marquee 30s linear infinite",
          }}
          aria-hidden="true"
        >
          <span className="text-lg md:text-xl font-medium tracking-wide text-muted-foreground px-4">
            {companyText} &middot;&nbsp;
          </span>
          <span className="text-lg md:text-xl font-medium tracking-wide text-muted-foreground px-4">
            {companyText} &middot;&nbsp;
          </span>
        </div>

        {/* Accessible static list for screen readers */}
        <p className="sr-only">
          Companies include: {companies.join(", ")}.
        </p>
      </div>
    </section>
  )
}
