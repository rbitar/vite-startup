import { FlickeringGrid } from "@/components/ui/flickering-grid"

const customerLogos = [
  {
    name: "Next.js",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/standard/nextjs-logo.svg",
    width: 394,
    height: 80,
  },
  {
    name: "OpenAI",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/standard/openai-logo.svg",
    width: 512,
    height: 126,
  },
  {
    name: "Stripe",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/standard/stripe-logo.svg",
    width: 73,
    height: 31,
  },
  {
    name: "Vercel",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/standard/vercel-logo.svg",
    width: 2048,
    height: 407,
  },
  {
    name: "Supabase",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/standard/supabase-logo.svg",
    width: 581,
    height: 113,
  },
  {
    name: "Anthropic",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/standard/anthropic-logo.svg",
    width: 579,
    height: 65,
  },
  {
    name: "Tailwind CSS",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/standard/tailwindcss-logo.svg",
    width: 665,
    height: 82,
  },
  {
    name: "Linear",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/standard/linear-logo.svg",
    width: 122,
    height: 31,
  },
]

export function LogosSection() {
  return (
    <section id="models" className="border-b">
      <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden border-b px-6 py-20 text-center sm:min-h-[340px] sm:py-28">
        <FlickeringGrid
          className="absolute inset-0 [mask-image:radial-gradient(520px_circle_at_center,white,transparent)]"
          squareSize={3}
          gridGap={8}
          color="#173DA6"
          maxOpacity={0.34}
          flickerChance={0.08}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_12%,var(--background)_78%)] opacity-70" />
        <h2 className="relative z-10 max-w-3xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
          Built for
          <span className="block text-blue-600 dark:text-blue-400">your AI stack.</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
        {customerLogos.map((logo) => (
          <div
            key={logo.name}
            className="group flex h-32 items-center justify-center bg-background px-6 sm:h-36"
          >
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              width={logo.width}
              height={logo.height}
              className="h-8 w-[132px] max-w-full object-contain opacity-75 brightness-0 transition-all duration-200 group-hover:scale-[1.03] group-hover:opacity-100 dark:invert"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
