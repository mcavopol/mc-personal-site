"use client"

import dynamic from "next/dynamic"
import SectionLoading from "@/components/section-loading"

// Lazy load below-the-fold components
const ImpactSection = dynamic(() => import("@/components/impact-section"), {
  loading: () => <SectionLoading />,
  ssr: false,
})

const RoleHighlightsSection = dynamic(() => import("@/components/role-highlights-section"), {
  loading: () => <SectionLoading />,
  ssr: false,
})

const QuotesSection = dynamic(() => import("@/components/quotes-section"), {
  loading: () => <SectionLoading />,
  ssr: false,
})

const CompanyMarqueeSection = dynamic(() => import("@/components/company-marquee-section"), {
  loading: () => <SectionLoading />,
  ssr: false,
})

const CtaSection = dynamic(() => import("@/components/cta-section"), {
  loading: () => <SectionLoading />,
  ssr: false,
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <SectionLoading />,
  ssr: false,
})

export default function LazySections() {
  return (
    <>
      <ImpactSection />
      <RoleHighlightsSection />
      <QuotesSection />
      <CompanyMarqueeSection />
      <CtaSection />
      <Footer />
    </>
  )
}
