import { createFileRoute } from '@tanstack/react-router';

import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { PricingSection } from '@/components/sections/pricing-section';

export const Route = createFileRoute('/pricing')({
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground selection:bg-blue-600 selection:text-white">
      <SiteHeader />
      <main id="top" className="mx-auto max-w-[1280px] border-x">
        <PricingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
