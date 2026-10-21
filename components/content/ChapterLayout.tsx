import { Suspense } from "react";
import type { ReactNode } from "react";
import { SidebarList } from "@/components/layout/SidebarList";
import { SectionNav } from "@/components/navigation/SectionNav";
import type { OutlineItem } from "@/lib/outline";
import { chapterNav } from "@/lib/ui";
import { ChapterList } from "./ChapterList";

/**
 * The three columns of a content page: the left list (from the `chapter`
 * breakpoint, 820 px), the text, and "On this page" (from `toc`, 1100 px).
 */
export function ChapterLayout({ children, outline }: { children: ReactNode; outline: OutlineItem[] }) {
  return (
    <div className="mx-auto w-full max-w-[1400px] gap-12 px-4 sm:px-6 chapter:grid chapter:grid-cols-[240px_minmax(0,1fr)] toc:grid-cols-[240px_minmax(0,1fr)_280px]">
      <aside
        aria-label={chapterNav}
        className="sticky top-20 hidden h-[calc(100vh-6rem)] self-start overflow-y-auto overscroll-contain pt-4 chapter:block"
      >
        <Suspense fallback={<SidebarList activePath={null} />}>
          <ChapterList />
        </Suspense>
      </aside>
      <div className="mx-auto w-full min-w-0 max-w-[720px] py-7 sm:py-10">{children}</div>
      <aside className="hidden pt-10 toc:block">
        <SectionNav items={outline} />
      </aside>
    </div>
  );
}
