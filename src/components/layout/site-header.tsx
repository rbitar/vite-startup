import { RiArrowDownSLine, RiArrowRightSLine } from '@remixicon/react';

import { MobileNavigation } from '@/components/layout/mobile-navigation';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Brand } from '@/components/shared/brand';
import { FrameCrosses } from '@/components/shared/frame-crosses';

const navigationItems = [
  {
    label: 'Products',
    href: '#features',
    description: 'One gateway for your AI stack',
  },
  {
    label: 'Models',
    href: '#models',
    description: 'Explore the models you can build with',
  },
  {
    label: 'Features',
    href: '#features',
    description: 'Routing, insights, and reliability',
  },
  {
    label: 'Pricing',
    href: '/pricing',
    description: 'Start free. Scale at your pace.',
  },
  {
    label: 'Docs',
    href: '#developers',
    description: 'Your first request starts here',
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/86 backdrop-blur-xl supports-[backdrop-filter]:bg-background/74">
      <div className="relative mx-auto flex h-16 max-w-[1280px] items-center justify-between border-x px-5 sm:px-8">
        <FrameCrosses edges="bottom" />
        <a href="#top" aria-label="Vertex home">
          <Brand />
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex lg:gap-10"
        >
          {navigationItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
              {label === 'Products' && <RiArrowDownSLine className="size-3" />}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/pricing"
            className="hidden h-9 items-center gap-1.5 rounded-sm bg-blue-600 px-4 text-xs font-medium text-white shadow-[0_6px_24px_rgba(23,61,166,.28)] transition hover:bg-blue-500 sm:inline-flex"
          >
            Get started <RiArrowRightSLine className="size-3.5" />
          </a>
          <MobileNavigation items={navigationItems} />
        </div>
      </div>
    </header>
  );
}
