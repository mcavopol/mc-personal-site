import MultiRowPanoramaWall from "@/components/multi-row-panorama-wall"

export default function Home() {
  // Example panorama rows - replace with your actual images
  const panoramaRows = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-21%20at%208.14.05%E2%80%AFPM-jsb0QlijTqU03VW4V8n8gYVqyOPbHc.png",
      alt: "Tech companies including Microsoft, Adobe, Salesforce, IBM, Xerox, Cisco, Verizon, Twilio, Outreach, Veracode, and ServiceNow",
      category: "Technology",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-21%20at%208.13.44%E2%80%AFPM-Z4DPwoIAfouZdJDcNCscjbL7nhnSMS.png",
      alt: "Logistics companies including FedEx, Delta, WM, Walmart, Freight Waves, Coyote, and GlobalTranz",
      category: "Logistics & Retail",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-21%20at%208.14.28%E2%80%AFPM-N4rCCOkIpbOpsduXuSq7t1V8D9AfHk.png",
      alt: "Manufacturing companies including Honda, Rolls-Royce, Bosch, Siemens, BAE Systems, Caterpillar, Skanska, Turner, Gilbane, and Hoar Construction",
      category: "Manufacturing & Construction",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-21%20at%208.14.45%E2%80%AFPM-xwh7X9vCQR9HR7vPct8pWkdjeXGWDk.png",
      alt: "Retail and payment companies including Target, Amazon, Square, PayPal, ADP, Fiserv, Lightspeed, SpotOn, T-Mobile, and Carmax",
      category: "Retail & Payments",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-21%20at%208.14.57%E2%80%AFPM-tPfJdeI0879kTBW4lxdJV2TBxDj6cW.png",
      alt: "Healthcare companies including Johnson & Johnson, Stryker, Cardinal Health, Kimberly-Clark, Itec, Aerotek, and Unum",
      category: "Healthcare",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-21%20at%208.15.23%E2%80%AFPM-v5ZmuICbssrQGp4bAZQ4vBGEeeRBU3.png",
      alt: "Food companies including Erewhon, Alfred, Blaze Pizza, Everytable, Tazikis, Fitlife x Foods, and Epicured",
      category: "Food & Hospitality",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm">
        <MultiRowPanoramaWall panoramaRows={panoramaRows} showCategories={true} />
      </div>
    </main>
  )
}
