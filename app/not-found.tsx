import type { Metadata } from "next";
import Link from "next/link";
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
      <div className="mx-auto max-w-2xl px-5 pt-10 pb-8 sm:px-8 sm:pt-16">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-3 font-display text-[clamp(2rem,6vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-text">
          Page not found
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-pretty text-text-dim">
          This page does not exist. It may have moved, or the address may have a typing error.
        </p>
        <p className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
          <Link href="/" className="font-mono text-sm text-accent no-underline transition-colors hover:text-text">
            Back to the contents
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
