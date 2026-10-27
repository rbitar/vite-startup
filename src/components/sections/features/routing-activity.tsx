import { RiPulseLine, RiCheckboxCircleLine, RiRouteLine, RiShieldCheckLine, RiFlashlightLine } from "@remixicon/react"

import { AnimatedList } from "@/components/ui/animated-list"
import { cn } from "@/lib/utils"

const routingEvents = [
  {
    icon: <RiRouteLine className="size-4" />,
    title: "Routed to Claude Sonnet",
    meta: "342ms · 8.2k tokens",
    accent: "bg-blue-600/15 text-blue-600 dark:text-blue-400",
  },
  {
    icon: <RiFlashlightLine className="size-4" />,
    title: "Prompt cache hit",
    meta: "Saved $0.018 · 42ms",
    accent: "bg-amber-500/15 text-amber-500",
  },
  {
    icon: <RiPulseLine className="size-4" />,
    title: "Latency policy applied",
    meta: "Gemini Flash · 118ms",
    accent: "bg-blue-500/15 text-blue-500",
  },
  {
    icon: <RiCheckboxCircleLine className="size-4" />,
    title: "Fallback completed",
    meta: "OpenAI → Mistral · 621ms",
    accent: "bg-emerald-500/15 text-emerald-500",
  },
  {
    icon: <RiShieldCheckLine className="size-4" />,
    title: "Guardrail passed",
    meta: "No sensitive data detected",
    accent: "bg-cyan-500/15 text-cyan-500",
  },
]

export function RoutingActivity() {
  return (
    <div className="relative h-[360px] shrink-0 overflow-hidden bg-background">
      <AnimatedList delay={1150} className="absolute inset-x-4 top-4 gap-2">
        {routingEvents.map((event) => (
          <div key={event.title} className="mx-auto flex w-full max-w-sm items-center gap-3 rounded-xl border bg-background/95 p-3 shadow-sm">
            <span className={cn("flex size-9 shrink-0 items-center justify-center rounded-lg", event.accent)}>
              {event.icon}
            </span>
            <span className="min-w-0 text-left">
              <span className="block truncate text-xs font-medium">{event.title}</span>
              <span className="mt-0.5 block truncate font-mono text-[10px] text-muted-foreground">{event.meta}</span>
            </span>
          </div>
        ))}
      </AnimatedList>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
