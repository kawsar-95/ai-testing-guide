import Link from "next/link";
import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { REPO_URL } from "@/lib/page";
import { OWNER, SITE_NAME } from "@/lib/site";
import { footerSource } from "@/lib/ui";
import { BrandMark } from "./BrandMark";

/**
 * The site footer: one quiet row on every page. The brand, the source link,
 * and the copyright. The header and /contents/ already link every part and
 * module, so the footer does not list them a second time.
 */
export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-text no-underline">
          <span aria-hidden="true" className="grid size-7 place-items-center rounded-md bg-accent text-bg">
            <BrandMark className="size-4" mono />
          </span>
          <span className="font-display text-base font-bold tracking-tight">{SITE_NAME}</span>
        </Link>
        <p className="m-0 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs text-text-faint">
          <a href={REPO_URL} className="inline-flex min-h-6 items-center underline underline-offset-2 hover:text-accent">
            <T en={footerSource} bn={SHELL_BN.footerSource} />
          </a>
          <span>
            © 2026{" "}
            <a href={OWNER.url} className="underline underline-offset-2 hover:text-accent">
              {OWNER.name}
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
