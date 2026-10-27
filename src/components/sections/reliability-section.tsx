import { RiLock2Line } from "@remixicon/react"

import { Ripple } from "@/components/ui/ripple"
import { cn } from "@/lib/utils"

export function ReliabilitySection() {
  return (
    <section className="relative overflow-hidden border-b px-6 py-20 text-center sm:px-12 sm:py-24">
      <Ripple className="opacity-40" mainCircleSize={180} numCircles={9} />
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl border bg-background shadow-sm">
          <RiLock2Line className="size-5 text-blue-600" />
        </div>
        <h2 className="mt-6 text-balance text-3xl font-medium tracking-[-0.045em] sm:text-4xl">
          Reliability built into every request.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
          Production-grade controls keep your workloads available, observable, and protected as they scale.
        </p>
        <div className="mt-10 grid grid-cols-3 overflow-hidden rounded-2xl border bg-background/80 backdrop-blur">
          {[
            ["99.99%", "Gateway uptime"],
            ["8", "Global regions"],
            ["< 20ms", "Routing overhead"],
          ].map(([value, label], index) => (
            <div key={label} className={cn("px-2 py-5 sm:px-6", index < 2 && "border-r")}>
              <strong className="block text-lg font-medium tracking-tight sm:text-2xl">{value}</strong>
              <span className="mt-1 block text-[10px] text-muted-foreground sm:text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
