import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

// Define the base URL for the site
const baseUrl = "https://michael.cavopol.me" // Replace with your actual domain

export const metadata: Metadata = {
  title: "Fractional Chief Revenue Officer & Product Leader – Michael Cavopol",
  description:
    "Nashville-based Fractional CRO helping B2B SaaS companies build revenue engines that scale. 20+ years experience in Revenue Engineering, Product Strategy, and Go-to-Market execution.",
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
    title: "Fractional Chief Revenue Officer & Product Leader – Michael Cavopol",
    description:
      "Nashville-based Fractional CRO helping B2B SaaS companies build revenue engines that scale. 20+ years experience in Revenue Engineering, Product Strategy, and Go-to-Market execution.",
    siteName: "Michael Cavopol",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Michael Cavopol – Fractional CRO & Product Leader speaking at SaaS conference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Chief Revenue Officer & Product Leader – Michael Cavopol",
    description:
      "Nashville-based Fractional CRO helping B2B SaaS companies build revenue engines that scale. 20+ years experience in Revenue Engineering, Product Strategy, and Go-to-Market execution.",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@michaelcavopol",
  },
  keywords: [
    "Fractional CRO",
    "Chief Revenue Officer",
    "Product Leader",
    "Revenue Engineering",
    "B2B SaaS",
    "Nashville",
    "Growth Strategy",
    "Go-to-Market",
    "Product Strategy",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DPF519FPD1" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DPF519FPD1');
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
