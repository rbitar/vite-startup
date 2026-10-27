import { RiCodeSSlashLine, RiSpeedUpLine, RiFlowChart } from "@remixicon/react"

import { SectionHeading } from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"

export function DevelopersSection() {
  return (
    <section id="developers" className="border-b">
      <SectionHeading
        eyebrow="Start in minutes"
        title="A simpler path to production AI"
        description="Your application stays focused on the product. Vertex handles the shifting model landscape underneath."
      />
      <div className="grid md:grid-cols-3">
        {[
          {
            icon: RiCodeSSlashLine,
            title: "Change one base URL",
            text: "Keep your existing OpenAI-compatible SDK, payloads, and streaming logic.",
          },
          {
            icon: RiFlowChart,
            title: "Set a routing policy",
            text: "Choose a model directly or let Vertex optimize for cost, quality, or latency.",
          },
          {
            icon: RiSpeedUpLine,
            title: "Observe every request",
            text: "Trace performance and spend across models, applications, and environments.",
          },
        ].map((step, index) => (
          <article key={step.title} className={cn("relative p-8 sm:p-10", index < 2 && "border-b md:border-b-0 md:border-r")}>
            <step.icon className="size-6" />
            <h3 className="mt-5 text-lg font-medium tracking-tight">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
