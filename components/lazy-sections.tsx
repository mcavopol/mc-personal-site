"use client"

import type { ReactNode } from "react"
import dynamic from "next/dynamic"
import SectionLoading from "@/components/section-loading"

// Lazy load below-the-fold components
const ImpactSection = dynamic(() => import("@/components/impact-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const ApproachSection = dynamic(() => import("@/components/approach-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const SuperpowerSection = dynamic(() => import("@/components/superpower-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const CompaniesSection = dynamic(() => import("@/components/companies-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const StorySection = dynamic(() => import("@/components/story-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const WritingSection = dynamic(() => import("@/components/writing-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const OffTheClockSection = dynamic(() => import("@/components/off-the-clock-section"), {
  loading: () => (
    <div className="container-padding mx-auto max-w-6xl">
      <SectionLoading />
    </div>
  ),
  ssr: false,
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <SectionLoading />,
  ssr: false,
})

interface SectionWrapperProps {
  id: string
  className: string
  children: ReactNode
}

function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}

export default function LazySections() {
  return (
    <>
      <SectionWrapper id="impact" className="section-padding bg-white dark:bg-black pt-0 pb-12">
        <ImpactSection />
      </SectionWrapper>

      <SectionWrapper id="approach" className="section-padding bg-white dark:bg-black pt-12">
        <ApproachSection />
      </SectionWrapper>

      <SectionWrapper id="superpower" className="section-padding bg-white dark:bg-black pb-12">
        <SuperpowerSection />
      </SectionWrapper>

      <SectionWrapper
        id="companies"
        className="section-padding bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
      >
        <CompaniesSection />
      </SectionWrapper>

      <SectionWrapper id="career" className="section-padding bg-gray-50 dark:bg-gray-950">
        <StorySection />
      </SectionWrapper>

      <SectionWrapper id="writing" className="section-padding pt-12">
        <WritingSection />
      </SectionWrapper>

      <SectionWrapper id="contact" className="section-padding bg-gray-50 dark:bg-gray-950">
        <OffTheClockSection />
      </SectionWrapper>

      <Footer />
    </>
  )
}
