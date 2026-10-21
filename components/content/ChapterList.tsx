"use client";

import { useEffect, useRef } from "react";
import { NavList } from "@/components/layout/NavList";
import { scrollActiveIntoView } from "@/components/layout/scroll-active";

/**
 * The left list of a content page: the pages of the current module. The page
 * passes its own route, so the static HTML already has the right list. It
 * scrolls the current page into view inside the list.
 */
export function ChapterList({ activePath }: { activePath: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollActiveIntoView(ref.current);
  }, [activePath]);

  return (
    <div ref={ref}>
      <NavList activePath={activePath} />
    </div>
  );
}
