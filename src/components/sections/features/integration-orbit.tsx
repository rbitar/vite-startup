import { VertexMark } from "@/components/shared/brand"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const integrations = [
  {
    name: "Supabase",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/square/supabase.svg",
  },
  {
    name: "Notion",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/square/notion.svg",
  },
  {
    name: "Figma",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/square/figma.svg",
  },
  {
    name: "Dropbox",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/square/dropbox.svg",
  },
  {
    name: "Google",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/square/google.svg",
  },
  {
    name: "OpenAI",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/square/openai.svg",
  },
  {
    name: "Stripe",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/square/stripe.svg",
  },
  {
    name: "GitHub",
    src: "https://sb.frontend.co/storage/v1/object/public/assets/logos/square/github.svg",
  },
]

function IntegrationMark({ src, name }: { src: string; name: string }) {
  return (
    <span
      className="inline-flex size-full items-center justify-center rounded-full border border-black/10 bg-white p-2 shadow-sm"
      title={name}
    >
      <img
        src={src}
        alt={`${name} logo`}
        width={28}
        height={28}
        className="size-full object-contain"
      />
    </span>
  )
}

export function IntegrationOrbit() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-background">
      <VertexMark className="absolute left-1/2 top-1/2 z-10 size-12 -translate-x-1/2 -translate-y-1/2" />
      <OrbitingCircles className="z-10" radius={84} iconSize={44} duration={16}>
        {integrations.slice(0, 4).map((integration) => (
          <IntegrationMark key={integration.name} {...integration} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles className="z-10" radius={150} iconSize={44} duration={24} reverse>
        {integrations.slice(4).map((integration) => (
          <IntegrationMark key={integration.name} {...integration} />
        ))}
      </OrbitingCircles>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-background via-background/80 to-transparent"
      />
    </div>
  )
}
