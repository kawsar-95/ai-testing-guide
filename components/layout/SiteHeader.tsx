import { Suspense } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { BrandMark } from "./BrandMark";
import { HeaderNav, NavItems } from "./HeaderNav";
import { InstallButton } from "./InstallButton";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";
import { VoiceToggle } from "./VoiceToggle";

/** The menu button without behavior, shown until MobileNav can render. */
function MenuButtonPlaceholder() {
  return (
    <div className="nav:hidden">
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-lg border border-border text-text-faint"
      >
        <svg viewBox="0 0 20 20" className="size-5" fill="none">
          <path d="M3 5.5h14M3 10h14M3 14.5h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
}

/**
 * The sticky top bar, 64 px high: the logo, the top nav (1200 px and wider),
 * and on the right the search trigger slot, the default-voice switch, the
 * install button, the theme switch, and the menu button (narrower than 1200 px).
 */
export function SiteHeader({ searchSlot }: { searchSlot?: ReactNode }) {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border">
      {/* The blur sits on its own layer. A backdrop-filter on the header
          itself would trap the fixed-position drawer inside the header. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-bg/90 backdrop-blur-md backdrop-saturate-150" />
      <div className="mx-auto flex h-full max-w-[1440px] items-center gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 text-text no-underline">
          <span
            aria-hidden="true"
            className="grid size-[34px] shrink-0 place-items-center rounded-lg bg-accent text-bg max-[360px]:hidden"
          >
            <BrandMark className="size-5" mono />
          </span>
          <span className="truncate font-display text-[17px] font-bold tracking-tight sm:text-[18px]">{SITE_NAME}</span>
        </Link>
        <Suspense fallback={<NavItems activeId={null} />}>
          <HeaderNav />
        </Suspense>
        <div className="ml-auto flex items-center gap-2 nav:ml-4">
          {searchSlot}
          <VoiceToggle />
          <InstallButton />
          <ThemeToggle />
          <Suspense fallback={<MenuButtonPlaceholder />}>
            <MobileNav />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
