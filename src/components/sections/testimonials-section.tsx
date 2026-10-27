import { ReviewCard, type Testimonial } from "@/components/shared/review-card"
import { Marquee } from "@/components/ui/marquee"

const reviews: Testimonial[] = [
  {
    avatar: "https://sb.frontend.co/storage/v1/object/public/assets/avatars/unsplash/female-1.jpeg",
    name: "Maya Kim",
    role: "AI Platform Lead",
    quote:
      "Vertex gave us one reliable interface for every model experiment. We stopped rebuilding provider integrations and started shipping.",
  },
  {
    avatar: "https://sb.frontend.co/storage/v1/object/public/assets/avatars/unsplash/male-1.jpeg",
    name: "Jon Bell",
    role: "Founding Engineer",
    quote:
      "Fallback routing turned model outages into a non-event. Our application stays fast even when a provider is under pressure.",
  },
  {
    avatar: "https://sb.frontend.co/storage/v1/object/public/assets/avatars/unsplash/male-2.jpeg",
    name: "Ari Rao",
    role: "VP of Engineering",
    quote:
      "The unified cost view finally made inference spend understandable across teams, providers, and environments.",
  },
  {
    avatar: "https://sb.frontend.co/storage/v1/object/public/assets/avatars/unsplash/female-2.jpeg",
    name: "Sofia Chen",
    role: "Product Engineer",
    quote:
      "We changed one base URL and had access to the models we needed. The developer experience is exactly that simple.",
  },
  {
    avatar: "https://sb.frontend.co/storage/v1/object/public/assets/avatars/unsplash/male-3.jpeg",
    name: "Owen Taylor",
    role: "Infrastructure Director",
    quote:
      "Vertex lets our developers move quickly while the platform team keeps control of budgets, policies, and reliability.",
  },
  {
    avatar: "https://sb.frontend.co/storage/v1/object/public/assets/avatars/unsplash/female-3.jpeg",
    name: "Nina Brooks",
    role: "Applied AI Engineer",
    quote:
      "Model comparisons that used to take days now take minutes. The same payload works everywhere we want to test.",
  },
]

export function TestimonialsSection() {
  const firstReviews = reviews.slice(0, 3)
  const secondReviews = reviews.slice(3)

  return (
    <section className="border-b py-16 sm:py-20">
      <div className="px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Early access feedback</p>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.045em] sm:text-4xl">Built for teams shipping AI</h2>
      </div>
      <div className="relative mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:34s] [--gap:1rem]">
          {firstReviews.map((review) => <ReviewCard key={review.name} review={review} />)}
        </Marquee>
        <Marquee reverse pauseOnHover className="mt-2 [--duration:38s] [--gap:1rem]">
          {secondReviews.map((review) => <ReviewCard key={review.name} review={review} />)}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent sm:w-40" />
      </div>
    </section>
  )
}
