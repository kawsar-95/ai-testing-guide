"use client";

import { useEffect } from "react";
import { useBookmarks, useLastPage, usePageRead } from "@/components/reading/useReadingState";
import { bookmark, bookmarked, markRead, markedRead, readingTime } from "@/lib/ui";

const PILL =
  "inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-raised px-3 py-1 font-mono text-[12px] text-text-dim";
const TOGGLE = "btn btn-outline btn-sm aria-pressed:border-accent aria-pressed:text-accent";

/**
 * The reading-time pill and the Bookmark and Mark as read toggles of a
 * content page. It saves the page as the last page when it mounts. The
 * server HTML renders both toggles off.
 */
export function ChapterTools({ route, minutes }: { route: string; minutes: number }) {
  const read = usePageRead();
  const marks = useBookmarks();
  const { setLast } = useLastPage();
  const isRead = read.done.includes(route);
  const isMarked = marks.done.includes(route);

  useEffect(() => {
    setLast(route);
  }, [route, setLast]);

  return (
    <div data-chapter-tools className="not-prose mt-4 mb-8 flex flex-wrap items-center gap-2.5">
      <span className={PILL}>
        <span aria-hidden="true">📖</span>
        {readingTime(minutes)}
      </span>
      <span className="grow" />
      <button type="button" aria-pressed={isMarked} onClick={() => marks.toggle(route)} className={TOGGLE}>
        <span aria-hidden="true">🔖</span>
        {isMarked ? bookmarked : bookmark}
      </button>
      <button type="button" aria-pressed={isRead} onClick={() => read.toggle(route)} className={TOGGLE}>
        <span aria-hidden="true">✓</span>
        {isRead ? markedRead : markRead}
      </button>
    </div>
  );
}
