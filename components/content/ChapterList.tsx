"use client";

import { useEffect, useRef } from "react";
import { NavList } from "@/components/layout/NavList";
import { scrollActiveIntoView } from "@/components/layout/scroll-active";
import { useSidebar } from "@/components/layout/useSidebar";

/**
 * The left list of a content page: the pages of the current module. The page
 * passes its own route, so the static HTML already has the right list. It
 * scrolls the current page into view inside the list. A closed sidebar has no
 * box and forgets its scroll position, so it scrolls again when it opens.
 */
export function ChapterList({ activePath }: { activePath: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const sidebar = useSidebar("left");

  useEffect(() => {
    if (sidebar === "open") scrollActiveIntoView(ref.current);
  }, [activePath, sidebar]);

  return (
    <div ref={ref}>
      <NavList activePath={activePath} />
    </div>
  );
}
