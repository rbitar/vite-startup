import { VertexMark } from "@/components/shared/brand"
import { FrameCrosses } from "@/components/shared/frame-crosses"
import { FlickeringGrid } from "@/components/ui/flickering-grid"

export function CtaSection() {
  return (
    <section className="relative border-b">
      <FrameCrosses />
      <div className="relative overflow-hidden px-6 py-24 text-center sm:px-10 sm:py-28">
        <FlickeringGrid
          className="absolute inset-0 [mask-image:radial-gradient(420px_circle_at_center,white,transparent)]"
          squareSize={3}
          gridGap={7}
          color="#173DA6"
          maxOpacity={0.42}
          flickerChance={0.08}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <VertexMark className="mx-auto mb-7 size-12" />
          <h2 className="text-balance text-4xl font-medium tracking-[-0.055em] sm:text-5xl md:text-6xl">
            Build on every model.
            <span className="block text-blue-600 dark:text-blue-400">Ship through one API.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
            Your models will change. Your infrastructure doesn’t have to.
          </p>
        </div>
      </div>
    </section>
  )
}
