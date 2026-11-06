import type { ReactNode } from "react";
import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { formatUpdated } from "@/lib/page";
import { metaSections, metaSources, metaUpdated, readingTime } from "@/lib/ui";

/** One value, or one value per Fundamentals version (the version CSS shows the one of the switch). */
export type Minutes = number | { notes: number; istqb: number };

function ReadingTime({ minutes }: { minutes: Minutes }) {
  if (typeof minutes === "number") return <T en={readingTime(minutes)} bn={SHELL_BN.readingTime(minutes)} />;
  return (
    <>
      <span data-version="notes">
        <T en={readingTime(minutes.notes)} bn={SHELL_BN.readingTime(minutes.notes)} />
      </span>
      <span data-version="istqb">
        <T en={readingTime(minutes.istqb)} bn={SHELL_BN.readingTime(minutes.istqb)} />
      </span>
    </>
  );
}

/**
 * The one meta row of a content page: `5 min read · 4 sections · 3 sources ·
 * updated Oct 2026` on the left and the page tools (`children`: Bookmark and
 * Mark as read) on the right. It is the only `[data-page-meta]` element of the
 * page, which `scripts/check_sources.py` reads. The "Suggest an edit" link is
 * with the sources at the end of the page.
 */
export function MetaLine({
  sections,
  sources,
  updated,
  minutes,
  className = "mb-6",
  children,
}: {
  sections: number;
  sources: number;
  updated: string;
  minutes: Minutes;
  /** The spacing of the row. A page that puts it under a lede keeps the default. */
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div data-page-meta className={`not-prose flex flex-wrap items-center justify-between gap-x-6 gap-y-3 ${className}`}>
      <p className="m-0 font-mono text-xs leading-relaxed text-text-faint">
        <ReadingTime minutes={minutes} /> · <T en={metaSections(sections)} bn={SHELL_BN.metaSections(sections)} /> ·{" "}
        <T en={metaSources(sources)} bn={SHELL_BN.metaSources(sources)} /> ·{" "}
        <T en={metaUpdated(formatUpdated(updated))} bn={SHELL_BN.metaUpdated(formatUpdated(updated))} />
      </p>
      {children}
    </div>
  );
}
