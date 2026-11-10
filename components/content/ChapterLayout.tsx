import type { ReactNode } from "react";
import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { SidebarToggle } from "@/components/layout/SidebarToggle";
import { SectionNav } from "@/components/navigation/SectionNav";
import type { OutlineItem } from "@/lib/outline";
import { chapterNav } from "@/lib/ui";
import { ChapterList } from "./ChapterList";
import { SectionFocus } from "./SectionFocus";

/**
 * The three columns of a content page: the left list (from the `chapter`
 * breakpoint, 820 px), the text, and "On this page" (from `toc`, 1280 px).
 *
 * The reader can close each side column with its toggle button. A closed
 * column shrinks to a rail that holds only the button. The widths are the
 * variables `--sb-left` and `--sb-right`, which app/globals.css sets from
 * `data-sidebar-left` and `data-sidebar-right` on <html>. The text column
 * keeps its width: the room that a closed column frees goes to the margins.
 * Both columns stick 96 px (top-24) below the viewport top, so their toggle
 * buttons sit on one line, and the "On this page" heading on that line is
 * level with the eyebrow of the text.
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
    : "max-w-[1400px] toc:grid-cols-[var(--sb-left)_minmax(0,1fr)_var(--sb-right)]";
  return (
    <div
      className={`chapter-cols mx-auto w-full gap-12 px-4 sm:px-6 chapter:grid chapter:grid-cols-[var(--sb-left)_minmax(0,1fr)] ${columns}`}
    >
      <aside
        aria-labelledby="chapter-nav-label"
        className="sticky top-24 hidden h-[calc(100vh-7rem)] self-start chapter:block"
      >
        <div className="flex h-full flex-col">
          <div className="flex shrink-0">
            <SidebarToggle side="left" />
          </div>
          <span id="chapter-nav-label" className="sr-only">
            <T en={chapterNav} bn={SHELL_BN.chapterNav} />
          </span>
          <div data-sidebar-body="left" className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <ChapterList activePath={route} />
          </div>
        </div>
      </aside>
      <div className={`mx-auto w-full min-w-0 py-7 sm:py-10 ${wide ? "" : "max-w-[720px]"}`}>
        {children}
        {wide ? null : <SectionFocus key={route} />}
      </div>
      {wide ? null : (
        <aside className="hidden pt-8 toc:block">
          <SectionNav items={outline ?? []} />
        </aside>
      )}
    </div>
  );
}
