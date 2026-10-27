import { useEffect, useRef, useState } from "react"
import { RiCloseLine, RiMenuLine } from "@remixicon/react"

import { Brand } from "@/components/shared/brand"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type NavigationItem = {
  label: string
  href: string
  description: string
}

export function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const [open, setOpen] = useState(false)
  const navigating = useRef(false)

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)")
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }

    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="inline-flex size-11 items-center justify-center rounded-sm bg-background/80 text-foreground transition-colors hover:bg-blue-600/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        >
          <RiMenuLine className="size-5" aria-hidden="true" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="top"
        showCloseButton={false}
        overlayClassName="z-[60] bg-black/45 duration-300 supports-backdrop-filter:backdrop-blur-md md:hidden"
        className="z-[61] max-h-dvh w-full gap-0 overflow-hidden rounded-none bg-background text-foreground outline-none duration-300 data-[side=top]:data-open:slide-in-from-top data-[side=top]:data-closed:slide-out-to-top md:hidden"
        onCloseAutoFocus={(event) => {
          // Let the anchor move focus to its section without the trigger
          // interrupting the page's smooth scroll when the sheet closes.
          if (navigating.current) event.preventDefault()
          navigating.current = false
        }}
      >
        <div className="flex shrink-0 items-center justify-between border-b bg-linear-to-r from-blue-600/10 via-blue-600/5 to-transparent px-5 py-3">
          <Brand />
          <SheetClose asChild>
            <button
              type="button"
              aria-label="Close navigation menu"
              className="inline-flex size-11 items-center justify-center rounded-sm bg-background/70 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <RiCloseLine className="size-5" aria-hidden="true" />
            </button>
          </SheetClose>
        </div>

        <div className="min-h-0 overflow-y-auto overscroll-contain p-3">
          <SheetTitle className="px-3 pb-2 pt-3 font-mono text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Explore Vertex
          </SheetTitle>
          <SheetDescription className="sr-only">
            Explore our products, models, features, pricing, and developer documentation.
          </SheetDescription>
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {items.map(({ label, href, description }) => (
                <li key={label}>
                  <SheetClose asChild>
                    <a
                      href={href}
                      onClick={() => { navigating.current = true }}
                      className="flex items-center rounded-xl px-3 py-3 transition-colors hover:bg-blue-600/8 focus-visible:bg-blue-600/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                    >
                      <span className="min-w-0">
                        <span className="block text-xl font-medium tracking-tight">{label}</span>
                        <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">{description}</span>
                      </span>
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="shrink-0 border-t bg-muted/35 p-5">
          <p className="mb-3 text-xs text-muted-foreground">One API. Every AI model.</p>
          <SheetClose asChild>
            <a
              href="#pricing"
              onClick={() => { navigating.current = true }}
              className="flex h-12 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white shadow-[0_6px_24px_rgba(23,61,166,.2)] transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get started
            </a>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
