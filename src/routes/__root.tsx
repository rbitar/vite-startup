import type { ReactNode } from "react"
import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router"

import { ThemeProvider } from "@/components/layout/theme-provider"
import { siteConfig } from "@/lib/site"
import stylesUrl from "@/styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteConfig.name },
      { name: "description", content: siteConfig.description },
    ],
    links: [
      { rel: "stylesheet", href: stylesUrl },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
    ],
  }),
  // The document shell renders even when a route errors or 404s.
  shellComponent: RootDocument,
  component: Outlet,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
