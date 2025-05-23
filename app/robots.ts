import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://michael.cavopol.me/sitemap.xml", // Replace with your actual domain
    host: "https://michael.cavopol.me", // Replace with your actual domain
  }
}
