import type { ReactNode } from "react";
import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { skipLink } from "@/lib/ui";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Everything around a page: the skip link, the header, and the footer. */
export function SiteShell({ children, searchSlot }: { children: ReactNode; searchSlot?: ReactNode }) {
  return (
    <div>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-accent focus:bg-bg-raised focus:px-4 focus:py-2 focus:text-sm focus:text-text"
      >
        <T en={skipLink} bn={SHELL_BN.skipLink} />
      </a>
      <SiteHeader searchSlot={searchSlot} />
      <div className="flex min-h-[calc(100vh-4rem)] min-w-0 flex-col">
        {/* The inline style beats the global :focus-visible rule for the skip-link target. */}
        <main id="content" tabIndex={-1} style={{ outline: "none" }} className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
