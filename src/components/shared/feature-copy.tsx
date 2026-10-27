export function FeatureCopy({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="relative z-10 bg-background p-6 sm:p-7">
      <h3 className="text-lg font-medium tracking-[-0.025em]">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  )
}
