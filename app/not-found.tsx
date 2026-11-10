import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { notFoundBack, notFoundText, notFoundTitle } from "@/lib/ui";
import { SiteShell } from "@/components/layout/SiteShell";
import { SearchPalette } from "@/components/navigation/SearchPalette";

// No canonical or og:url: the 404 page is served for every unknown URL.
// Next adds <meta name="robots" content="noindex"> to this page itself.
export const metadata: Metadata = {
  title: "Page not found",
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

/** The 404 page. GitHub Pages serves it for every unknown URL. */
export default function NotFound() {
  return (
    <SiteShell searchSlot={<SearchPalette />}>
      {/* The same header as the other standalone pages (Contents, Dashboard, a module home). */}
      <div className="mx-auto max-w-2xl px-4 pt-10 pb-8 sm:px-6 sm:pt-14">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-text">
          <T en={notFoundTitle} bn={SHELL_BN.notFoundTitle} />
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-pretty text-text-dim sm:text-lg sm:leading-relaxed">
          <T en={notFoundText} bn={SHELL_BN.notFoundText} />
        </p>
        <p className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
          <Link href="/" className="inline-flex min-h-6 items-center font-mono text-sm text-accent no-underline transition-colors hover:text-text">
            <T en={notFoundBack} bn={SHELL_BN.notFoundBack} />
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
