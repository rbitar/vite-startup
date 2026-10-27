import { cn } from "@/lib/utils"

export function VertexMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.svg"
      alt=""
      width={24}
      height={24}
      className={cn("brightness-0 dark:invert", className)}
      aria-hidden="true"
    />
  )
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <VertexMark className="size-8" />
      {!compact && (
        <span className="text-[17px] font-semibold tracking-[-0.03em]">Vertex</span>
      )}
    </span>
  )
}
