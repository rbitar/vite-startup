import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string
  title: string
  description: string
  className?: string
}) {
  return (
    <div className={cn("border-b px-6 py-16 text-center sm:px-10 sm:py-20", className)}>
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
          {eyebrow}
        </p>
        <h2 className="text-balance text-3xl font-medium tracking-[-0.045em] sm:text-4xl md:text-[44px] md:leading-[1.05]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}
