export interface Testimonial {
  avatar: string
  name: string
  role: string
  quote: string
}

export function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <figure className="h-full w-[310px] shrink-0 rounded-xl border bg-card/75 p-5 shadow-sm transition-colors hover:bg-muted/40 sm:w-[360px]">
      <blockquote className="text-sm leading-6 text-foreground/85">“{review.quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <img
          src={review.avatar}
          alt=""
          width={36}
          height={36}
          className="size-9 shrink-0 rounded-full border object-cover"
        />
        <span>
          <span className="block text-sm font-medium">{review.name}</span>
          <span className="block text-xs text-muted-foreground">{review.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}
