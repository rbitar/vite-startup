import { RiGithubFill, RiTwitterXFill } from "@remixicon/react"

import { Brand } from "@/components/shared/brand"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1280px] border-x px-6 py-10 sm:px-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Brand />
          <p className="mt-3 max-w-sm text-xs leading-5 text-muted-foreground">
            The unified gateway for production AI applications.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
          <a className="hover:text-foreground" href="#models">Models</a>
          <a className="hover:text-foreground" href="#developers">Docs</a>
          <a className="hover:text-foreground" href="#pricing">Pricing</a>
          <a className="hover:text-foreground" href="#top">Status</a>
          <a className="hover:text-foreground" href="#top">Privacy</a>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-[11px] text-muted-foreground">
        <span>© 2026 Vertex, Inc. All rights reserved.</span>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon">
            <a href="https://github.com" aria-label="GitHub">
              <RiGithubFill className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://x.com" aria-label="X (Twitter)">
              <RiTwitterXFill className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
