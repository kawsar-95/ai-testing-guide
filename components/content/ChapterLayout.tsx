import type { ReactNode } from "react";
import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { SectionNav } from "@/components/navigation/SectionNav";
import type { OutlineItem } from "@/lib/outline";
import { chapterNav } from "@/lib/ui";
import { ChapterList } from "./ChapterList";

/**
 * The three columns of a content page: the left list (from the `chapter`
 * breakpoint, 820 px), the text, and "On this page" (from `toc`, 1280 px).
 */
export function ChapterLayout({
  children,
  outline,
  route,
}: {
  children: ReactNode;
  outline: OutlineItem[];
  /** The route of the page, with a trailing slash. It selects the list and its current item. */
  route: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[1400px] gap-12 px-4 sm:px-6 chapter:grid chapter:grid-cols-[240px_minmax(0,1fr)] toc:grid-cols-[240px_minmax(0,1fr)_280px]">
      <aside
        aria-labelledby="chapter-nav-label"
        className="sticky top-20 hidden h-[calc(100vh-6rem)] self-start overflow-y-auto overscroll-contain pt-4 chapter:block"
      >
        <span id="chapter-nav-label" className="sr-only">
          <T en={chapterNav} bn={SHELL_BN.chapterNav} />
        </span>
        <ChapterList activePath={route} />
      </aside>
      <div className="mx-auto w-full min-w-0 max-w-[720px] py-7 sm:py-10">{children}</div>
      <aside className="hidden pt-10 toc:block">
        <SectionNav items={outline} />
      </aside>
    </div>
  );
}
