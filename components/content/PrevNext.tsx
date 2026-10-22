import Link from "next/link";
import type { NavPage } from "@/lib/nav";
import { partLabel, prevNextNav } from "@/lib/ui";
import { SHELL_BN } from "@/lib/bn/shell";
import { T } from "@/components/i18n/T";

const CARD =
  "group block rounded-2xl border border-border bg-bg-raised px-5 py-4 no-underline shadow-sm transition-shadow hover:border-border-strong hover:shadow-md";

/** Cards that link to the previous and the next part. */
export function PrevNext({ prev, next }: { prev?: NavPage; next?: NavPage }) {
  if (!prev && !next) return null;
  return (
    <nav aria-labelledby="prev-next-label" className="grid gap-3 sm:grid-cols-2">
      <span id="prev-next-label" className="sr-only">
        <T en={prevNextNav} bn={SHELL_BN.prevNextNav} />
      </span>
      {prev && (
        <Link href={prev.href} rel="prev" className={CARD}>
          <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-text-faint">
            ← <T en={partLabel(prev.part)} bn={SHELL_BN.partLabel(prev.part)} />
          </span>
          <span className="mt-1 block font-display text-lg leading-snug text-text transition-colors group-hover:text-accent">
            {prev.title}
          </span>
        </Link>
      )}
      {next && (
        <Link href={next.href} rel="next" className={CARD + " sm:col-start-2 sm:text-right"}>
          <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-text-faint">
            <T en={partLabel(next.part)} bn={SHELL_BN.partLabel(next.part)} /> →
          </span>
          <span className="mt-1 block font-display text-lg leading-snug text-text transition-colors group-hover:text-accent">
            {next.title}
          </span>
        </Link>
      )}
    </nav>
  );
}
