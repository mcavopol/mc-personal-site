import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

// Define the base URL for the site
const baseUrl = "https://michael.cavopol.me" // Replace with your actual domain

export const metadata: Metadata = {
  title: "Michael Cavopol | Product & Revenue Leader | Nashville",
  description:
    "Product & revenue leader with 20 years across 4 disruption cycles. Fast to clarity. Fast to conviction. Fast to results.",
  keywords: [
    "product leader",
    "revenue leader",
    "disruption cycles",
    "AI strategy",
    "SaaS growth",
    "product strategy",
    "Nashville",
    "B2B SaaS",
    "go-to-market strategy",
    "product management",
    "customer success",
    "operational leadership",
  ],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Michael Cavopol | Product & Revenue Leader",
    description:
      "Product & revenue leader with 20 years across 4 disruption cycles. Fast to clarity. Fast to conviction. Fast to results.",
    siteName: "Michael Cavopol",
    images: [
      {
        url: `${baseUrl}/michael-headshot.jpg`,
        width: 1200,
        height: 630,
        alt: "Michael Cavopol - Product & Revenue Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Cavopol | Product & Revenue Leader",
    description:
      "Product & revenue leader with 20 years across 4 disruption cycles. Fast to clarity. Fast to conviction. Fast to results.",
    images: [`${baseUrl}/michael-headshot.jpg`],
    creator: "@cavopol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Michael Cavopol" }],
  category: "Professional Portfolio",
  verification: {
    google: "verification_token", // Replace with your actual Google verification token
  },
}

// Schema markup for structured data
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Cavopol",
  jobTitle: "Product & Revenue Leader",
  description:
    "Product & revenue leader with 20 years across 4 disruption cycles. Moves quickly into complex environments, forms a sharp point of view on what matters, and drives teams to execute.",
  url: baseUrl,
  image: `${baseUrl}/michael-headshot.jpg`,
  sameAs: [
    "https://linkedin.com/in/michael-cavopol",
    "https://x.com/cavopol",
    "https://cavopol.substack.com/",
    "https://github.com/mcavopol",
    "https://hedgehoggrowth.com",
  ],
  knowsAbout: [
    "Product Strategy",
    "Revenue Operations",
    "SaaS Growth",
    "AI Innovation",
    "Go-to-Market Strategy",
    "B2B Sales",
    "Customer Success",
    "Product Management",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Hedgehog Growth",
    url: "https://hedgehoggrowth.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nashville",
    addressRegion: "TN",
    addressCountry: "US",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hedgehog Growth",
  url: "https://hedgehoggrowth.com",
  founder: {
    "@type": "Person",
    name: "Michael Cavopol",
  },
  description:
    "AI-focused product strategy and operational leadership for growth-stage companies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://cavopol.substack.com" />


        {/* Google Analytics with optimized loading */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DPF519FPD1" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DPF519FPD1', {
              'send_page_view': false
            });
            // Delayed page view to improve FID
            setTimeout(() => {
              gtag('event', 'page_view');
            }, 100);
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black dark:focus:bg-black dark:focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-black dark:focus:ring-white"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
