import { Suspense } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { FUNDAMENTALS_HOME } from "@/lib/fundamentals/chapters";
import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { LINUX_HOME } from "@/lib/linux/stages";
import { LINUX_UI } from "@/lib/linux/ui";
import { SITE_NAME } from "@/lib/site";
import { ARCHITECTURE_HOME } from "@/lib/architecture/topics";
import { ARCHITECTURE_UI } from "@/lib/architecture/ui";
import { SYSTEM_DESIGN_HOME } from "@/lib/system-design/cases";
import { SYSTEM_DESIGN_UI } from "@/lib/system-design/ui";
import { BrandMark } from "./BrandMark";
import { InstallButton } from "./InstallButton";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";
import { VoiceToggle } from "./VoiceToggle";

/** The menu button without behavior, shown until MobileNav can render. */
function MenuButtonPlaceholder() {
  return (
    <div className="lg:hidden">
      <span aria-hidden="true" className="-ml-2 grid size-9 place-items-center text-text-faint">
        <svg viewBox="0 0 20 20" className="size-5" fill="none">
          <path d="M3 5.5h14M3 10h14M3 14.5h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
}

/**
 * The sticky top bar: the menu button (below `lg`), the logo, and on the
 * right the search trigger slot, the default-voice switch, the install
 * button, and the theme switch.
 */
export function SiteHeader({ searchSlot }: { searchSlot?: ReactNode }) {
  return (
    <header className="sticky top-0 z-40 h-14 border-b border-border">
      {/* The blur sits on its own layer. A backdrop-filter on the header
          itself would trap the fixed-position drawer inside the header. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-bg/85 backdrop-blur-md" />
      <div className="flex h-full items-center gap-3 px-4 sm:px-6">
        <Suspense fallback={<MenuButtonPlaceholder />}>
          <MobileNav />
        </Suspense>
        <Link href="/" className="flex min-w-0 items-center gap-2.5 text-text no-underline">
          <span
            aria-hidden="true"
            className="grid size-7 shrink-0 place-items-center rounded-md border max-[360px]:hidden border-border-strong bg-bg-raised"
          >
            <BrandMark className="size-[18px]" />
          </span>
          <span className="truncate font-display text-[15px] font-semibold sm:text-[16px] tracking-tight">{SITE_NAME}</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Link
            href={LINUX_HOME}
            className="hidden whitespace-nowrap rounded-md px-1.5 py-1.5 text-[13.5px] text-text-dim no-underline transition-colors hover:text-accent lg:inline"
          >
            {LINUX_UI.headerLink}
          </Link>
          <Link
            href={FUNDAMENTALS_HOME}
            className="hidden whitespace-nowrap rounded-md px-1.5 py-1.5 text-[13.5px] text-text-dim no-underline transition-colors hover:text-accent lg:inline"
          >
            {FUNDAMENTALS_UI.headerLink}
          </Link>
          <Link
            href={SYSTEM_DESIGN_HOME}
            className="hidden whitespace-nowrap rounded-md px-1.5 py-1.5 text-[13.5px] text-text-dim no-underline transition-colors hover:text-accent lg:inline"
          >
            {SYSTEM_DESIGN_UI.headerLink}
          </Link>
          <Link
            href={ARCHITECTURE_HOME}
            className="hidden whitespace-nowrap rounded-md px-1.5 py-1.5 text-[13.5px] text-text-dim no-underline transition-colors hover:text-accent lg:inline"
          >
            {ARCHITECTURE_UI.headerLink}
          </Link>
          {searchSlot}
          <VoiceToggle />
          <InstallButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
