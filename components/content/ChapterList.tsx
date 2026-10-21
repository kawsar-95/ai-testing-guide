"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NavList } from "@/components/layout/NavList";
import { withTrailingSlash } from "@/components/layout/SidebarList";
import { scrollActiveIntoView } from "@/components/layout/scroll-active";

/**
 * The left list of a content page: the pages of the current module. It
 * scrolls the current page into view inside the list. usePathname can
 * suspend, so ChapterLayout wraps it in Suspense.
 */
export function ChapterList() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollActiveIntoView(ref.current);
  }, [pathname]);

  return (
    <div ref={ref}>
      <NavList activePath={withTrailingSlash(pathname)} />
    </div>
  );
}
