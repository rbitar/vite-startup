import { createFileRoute } from "@tanstack/react-router"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { CtaSection } from "@/components/sections/cta-section"
import { DevelopersSection } from "@/components/sections/developers-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { HeroSection } from "@/components/sections/hero-section"
import { LogosSection } from "@/components/sections/logos-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { ReliabilitySection } from "@/components/sections/reliability-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground selection:bg-blue-600 selection:text-white">
      <SiteHeader />
      <main id="top" className="mx-auto max-w-[1280px] border-x">
        <HeroSection />
        <LogosSection />
        <FeaturesSection />
        <DevelopersSection />
        <ReliabilitySection />
        <PricingSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
