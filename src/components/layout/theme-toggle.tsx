import { RiMoonLine, RiSunLine } from "@remixicon/react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

import { Button } from "@/components/ui/button"

const emptySubscribe = () => () => {}

export function ThemeToggle() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false)
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-lg"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      className="text-muted-foreground"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (
        isDark ? <RiSunLine className="size-4" /> : <RiMoonLine className="size-4" />
      ) : (
        <span className="size-4" aria-hidden="true" />
      )}
    </Button>
  )
}
