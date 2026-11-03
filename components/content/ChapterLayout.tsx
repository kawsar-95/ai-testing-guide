import type { ReactNode } from "react";
import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { SectionNav } from "@/components/navigation/SectionNav";
import type { OutlineItem } from "@/lib/outline";
import { chapterNav } from "@/lib/ui";
import { ChapterList } from "./ChapterList";
import { SectionFocus } from "./SectionFocus";

/**
 * The three columns of a content page: the left list (from the `chapter`
 * breakpoint, 820 px), the text, and "On this page" (from `toc`, 1280 px).
 *
 * `wide` is for a glance sheet (the Linux stage pages): the left list stays,
 * but there is no "On this page", no one-section-at-a-time focus, and the
 * column uses all the width, so the cards of the sheet can sit side by side.
 */
export function ChapterLayout({
  children,
  outline,
  route,
  wide = false,
}: {
  children: ReactNode;
  /** The `##` outline of an MDX page, for "On this page". A wide page has none. */
  outline?: OutlineItem[];
  /** The route of the page, with a trailing slash. It selects the list and its current item. */
  route: string;
  wide?: boolean;
}) {
  const columns = wide
    ? "max-w-[1680px]"
    : "max-w-[1400px] toc:grid-cols-[240px_minmax(0,1fr)_280px]";
  return (
    <div className={`mx-auto w-full gap-12 px-4 sm:px-6 chapter:grid chapter:grid-cols-[240px_minmax(0,1fr)] ${columns}`}>
      <aside
        aria-labelledby="chapter-nav-label"
        className="sticky top-20 hidden h-[calc(100vh-6rem)] self-start overflow-y-auto overscroll-contain pt-4 chapter:block"
      >
        <span id="chapter-nav-label" className="sr-only">
          <T en={chapterNav} bn={SHELL_BN.chapterNav} />
        </span>
        <ChapterList activePath={route} />
      </aside>
      <div className={`mx-auto w-full min-w-0 py-7 sm:py-10 ${wide ? "" : "max-w-[720px]"}`}>
        {children}
        {wide ? null : <SectionFocus key={route} />}
      </div>
      {wide ? null : (
        <aside className="hidden pt-10 toc:block">
          <SectionNav items={outline ?? []} />
        </aside>
      )}
    </div>
  );
}
