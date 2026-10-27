import { ApiTerminal } from "@/components/sections/features/api-terminal"
import { GlobalGlobe } from "@/components/sections/features/global-globe"
import { IntegrationOrbit } from "@/components/sections/features/integration-orbit"
import { RoutingActivity } from "@/components/sections/features/routing-activity"
import { UsageChart } from "@/components/sections/features/usage-chart"
import { FeatureCopy } from "@/components/shared/feature-copy"
import { SectionHeading } from "@/components/shared/section-heading"

export function FeaturesSection() {
  return (
    <section id="features" className="border-b">
      <SectionHeading
        eyebrow="The gateway layer"
        title="Infrastructure for model choice"
        description="Everything you need to move quickly across models without giving up reliability, control, or visibility."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <article className="flex min-h-[520px] min-w-0 flex-col border-b lg:col-span-7 lg:border-r">
          <ApiTerminal />
          <FeatureCopy
            title="One compatible endpoint"
            description="Use the OpenAI SDK you already know. Change one base URL and reach every supported model."
          />
        </article>

        <article className="flex min-h-[520px] min-w-0 flex-col border-b lg:col-span-5">
          <IntegrationOrbit />
          <FeatureCopy
            title="Seamless integrations"
            description="Connect your favorite tools and bring AI into the workflows your team already uses."
          />
        </article>

        <article className="flex min-h-[430px] min-w-0 flex-col border-b lg:col-span-4 lg:border-b-0 lg:border-r">
          <RoutingActivity />
          <FeatureCopy
            title="Automatic failover"
            description="Keep requests moving through rate limits, outages, and changing provider availability."
          />
        </article>

        <article className="flex min-h-[430px] min-w-0 flex-col border-b lg:col-span-4 lg:border-b-0 lg:border-r">
          <div className="relative h-[360px] w-full min-w-0 shrink-0 overflow-hidden bg-background">
            <UsageChart />
          </div>
          <FeatureCopy
            title="Unified cost and latency"
            description="Compare providers, trace every request, and control spend from one clear operating view."
          />
        </article>

        <article className="flex min-h-[430px] min-w-0 flex-col lg:col-span-4">
          <GlobalGlobe />
          <FeatureCopy
            title="Global inference gateway"
            description="Route requests through the nearest healthy region for consistently fast model access."
          />
        </article>
      </div>
    </section>
  )
}
