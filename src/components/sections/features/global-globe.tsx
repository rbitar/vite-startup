import { type COBEOptions } from "cobe"
import { useTheme } from "next-themes"

import { Globe } from "@/components/ui/globe"

const darkGlobeConfig: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.28,
  dark: 1,
  diffuse: 1.1,
  mapSamples: 12000,
  mapBrightness: 4.5,
  baseColor: [0.05, 0.12, 0.32] as [number, number, number],
  markerColor: [0.15, 0.46, 1] as [number, number, number],
  glowColor: [0.08, 0.18, 0.48] as [number, number, number],
  markers: [
    { location: [37.7749, -122.4194] as [number, number], size: 0.08 },
    { location: [40.7128, -74.006] as [number, number], size: 0.06 },
    { location: [51.5072, -0.1276] as [number, number], size: 0.07 },
    { location: [48.8566, 2.3522] as [number, number], size: 0.05 },
    { location: [1.3521, 103.8198] as [number, number], size: 0.08 },
    { location: [35.6762, 139.6503] as [number, number], size: 0.06 },
    { location: [-33.8688, 151.2093] as [number, number], size: 0.05 },
    { location: [-23.5505, -46.6333] as [number, number], size: 0.06 },
  ],
}

const lightGlobeConfig: COBEOptions = {
  ...darkGlobeConfig,
  dark: 0,
  diffuse: 0.4,
  mapBrightness: 1.2,
  baseColor: [0.9, 0.94, 1],
  markerColor: [0.09, 0.24, 0.65],
  glowColor: [0.85, 0.9, 1],
}

export function GlobalGlobe() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="relative h-[360px] shrink-0 overflow-hidden bg-background">
      <Globe
        className="top-6 max-w-[360px]"
        config={resolvedTheme === "light" ? lightGlobeConfig : darkGlobeConfig}
      />
    </div>
  )
}
