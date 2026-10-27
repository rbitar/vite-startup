import { RiArrowRightLine } from "@remixicon/react"

import { FrameCrosses } from "@/components/shared/frame-crosses"

export function HeroSection() {
  return (
    <section className="hero-gradient relative border-b px-6 pb-14 pt-24 text-center sm:px-10 sm:pb-20 sm:pt-28 lg:pt-32">
      <FrameCrosses edges="bottom" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <a
          href="#features"
          className="mb-7 inline-flex items-center justify-center rounded-full border border-blue-600/25 bg-clip-padding bg-gradient-to-br from-white/80 via-blue-600/10 to-blue-600/20 px-5 py-2 text-xs font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_4px_20px_rgba(23,61,166,.1)] backdrop-blur-xl transition-colors hover:border-blue-600/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/15 dark:from-white/10 dark:via-blue-600/15 dark:to-blue-600/30 dark:shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_4px_20px_rgba(23,61,166,.15)] dark:hover:border-white/30"
        >
          The unified AI gateway
        </a>
        <h1 className="text-balance text-[44px] font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[82px]">
          One API.
          <span className="block text-foreground/80">Frontier AI Models</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
          Route, optimize, and observe every model request through one OpenAI-compatible endpoint built for production.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-blue-600 px-6 text-sm font-medium text-white shadow-[0_10px_32px_rgba(23,61,166,.32)] transition hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
          >
            Get your API key <RiArrowRightLine className="size-4" />
          </a>
          <a
            href="#models"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm border bg-background/70 px-6 text-sm font-medium transition hover:bg-muted sm:w-auto"
          >
            Explore models
          </a>
        </div>
      </div>

    </section>
  )
}
