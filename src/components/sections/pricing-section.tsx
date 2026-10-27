import { useState } from "react"
import { RiCheckLine } from "@remixicon/react"

import { SectionHeading } from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="border-b">
      <SectionHeading
        eyebrow="Simple pricing"
        title="Start free. Scale without surprises."
        description="Pay for the models you use and add platform controls when your team needs them."
        className="border-b-0"
      />
      <div className="flex justify-center border-b py-6">
        <div className="inline-flex rounded-sm border bg-muted/40 p-1" aria-label="Billing cadence">
          <button
            type="button"
            aria-pressed={!annual}
            onClick={() => setAnnual(false)}
            className={cn("rounded-sm px-4 py-1.5 text-xs font-medium transition", !annual ? "bg-background text-foreground shadow-sm" : "text-muted-foreground")}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={annual}
            onClick={() => setAnnual(true)}
            className={cn("rounded-sm px-4 py-1.5 text-xs font-medium transition", annual ? "bg-background text-foreground shadow-sm" : "text-muted-foreground")}
          >
            Annual <span className="text-blue-600 dark:text-blue-400">−20%</span>
          </button>
        </div>
      </div>
      <div className="grid gap-px bg-border lg:grid-cols-3">
        {[
          {
            name: "Developer",
            price: "$0",
            cadence: "/ month",
            description: "For prototypes, side projects, and individual builders.",
            action: "Start building",
            popular: false,
            features: ["Pay-as-you-go model usage", "All model providers", "Basic usage analytics", "Community support"],
          },
          {
            name: "Team",
            price: annual ? "$39" : "$49",
            cadence: "/ month",
            description: "For teams running reliable AI products in production.",
            action: "Start 14-day trial",
            popular: true,
            features: ["Everything in Developer", "Routing and fallback policies", "Team budgets and alerts", "90-day request analytics", "Priority support"],
          },
          {
            name: "Enterprise",
            price: "Custom",
            cadence: "",
            description: "For organizations that need security and scale.",
            action: "Talk to sales",
            popular: false,
            features: ["Everything in Team", "SAML SSO and audit logs", "Custom retention and regions", "Dedicated capacity", "Enterprise SLA"],
          },
        ].map((plan) => (
          <article key={plan.name} className={cn("relative flex flex-col bg-background", plan.popular && "pricing-card-popular")}>
            <div className="relative z-10 flex flex-1 flex-col p-7 sm:p-9">
              <div className="flex min-h-7 flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-medium">{plan.name}</p>
                {plan.popular && (
                  <span className="rounded-full border border-blue-600/40 px-3 py-1 text-xs font-medium text-blue-600 dark:border-[#5479db]/40 dark:text-blue-400">
                    Most popular
                  </span>
                )}
              </div>
              <div className="mt-7 flex items-end gap-2">
                <span className="text-4xl font-medium tracking-[-0.05em]">{plan.price}</span>
                {plan.cadence && <span className="pb-1 text-xs text-muted-foreground">{plan.cadence}</span>}
              </div>
              <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">{plan.description}</p>
              <a
                href="#top"
                className={cn(
                  "mt-7 inline-flex h-10 items-center justify-center rounded-sm border text-sm font-medium transition",
                  plan.popular ? "border-blue-600 bg-blue-600 text-white hover:bg-blue-500" : "bg-background hover:bg-muted"
                )}
              >
                {plan.action}
              </a>
              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <RiCheckLine className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
