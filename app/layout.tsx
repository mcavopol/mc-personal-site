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
  title: "Michael Cavopol | Chief Revenue & Product Operator | Nashville",
  description:
    "Product & Revenue leader with 20+ years experience integrating product vision, go-to-market execution, and data-driven operations to build capital-efficient product companies. Based in Nashville, TN.",
  keywords: [
    "product operations",
    "revenue operations",
    "SaaS growth",
    "product strategy",
    "AI innovation",
    "Nashville",
    "fractional CRO",
    "fractional CPO",
    "B2B SaaS",
    "go-to-market strategy",
    "revenue engineering",
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
    title: "Michael Cavopol | Chief Revenue & Product Operator",
    description:
      "Product & Revenue leader with 20+ years experience integrating product vision, go-to-market execution, and data-driven operations to build capital-efficient product companies.",
    siteName: "Michael Cavopol",
    images: [
      {
        url: `${baseUrl}/michael-headshot.jpg`,
        width: 1200,
        height: 630,
        alt: "Michael Cavopol - Chief Revenue & Product Operator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Cavopol | Chief Revenue & Product Operator",
    description:
      "Product & Revenue leader with 20+ years experience integrating product vision, go-to-market execution, and data-driven operations to build capital-efficient product companies.",
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
  generator: "v0.dev",
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
  jobTitle: "Chief Revenue & Product Operator",
  description:
    "Product & Revenue leader with 20+ years experience integrating product vision, go-to-market execution, and data-driven operations.",
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
    "Boutique advisory practice specializing in product strategy, revenue operations, and AI innovation for B2B SaaS companies.",
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

        {/* Inline critical CSS for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Critical CSS for above-the-fold content */
          :root {
            --background: 0 0% 100%;
            --foreground: 0 0% 3.9%;
            --primary: 0 0% 9%;
            --primary-foreground: 0 0% 98%;
          }
          .dark {
            --background: 0 0% 3.9%;
            --foreground: 0 0% 98%;
            --primary: 0 0% 98%;
            --primary-foreground: 0 0% 9%;
          }
          body {
            margin: 0;
            -webkit-font-smoothing: antialiased;
          }
          #hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding-top: 4rem;
          }
          .container-padding {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          @media (min-width: 640px) {
            .container-padding {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
            }
          }
          @media (min-width: 1024px) {
            .container-padding {
              padding-left: 2rem;
              padding-right: 2rem;
            }
          }
          header {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 50;
            transition: all 0.3s;
          }
          header.scrolled {
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(4px);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }
          .dark header.scrolled {
            background-color: rgba(0, 0, 0, 0.9);
          }
        `,
          }}
        />

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
