"use client";

import { useEffect } from "react";
import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { useBookmarks, useLastPage, usePageRead } from "@/components/reading/useReadingState";
import { bookmark, bookmarked, markRead, markedRead, readingTime } from "@/lib/ui";

const PILL =
  "inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-raised px-3 py-1 font-mono text-[12px] text-text-dim";
const TOGGLE = "btn btn-outline btn-sm aria-pressed:border-accent aria-pressed:text-accent";

/**
 * The reading-time pill (one value per version on a Fundamentals chapter) and the Bookmark and Mark as read toggles of a
 * content page. It saves the page as the last page when it mounts. The
 * server HTML renders both toggles off.
 */
export function ChapterTools({
  route,
  minutes,
}: {
  route: string;
  /** One value, or one value per Fundamentals version. The version CSS shows the one of the switch. */
  minutes: number | { notes: number; istqb: number };
}) {
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
        <span aria-hidden="true" className="hidden sm:inline">📖</span>
        {typeof minutes === "number" ? (
          <T en={readingTime(minutes)} bn={SHELL_BN.readingTime(minutes)} />
        ) : (
          <>
            <span data-version="notes">
              <T en={readingTime(minutes.notes)} bn={SHELL_BN.readingTime(minutes.notes)} />
            </span>
            <span data-version="istqb">
              <T en={readingTime(minutes.istqb)} bn={SHELL_BN.readingTime(minutes.istqb)} />
            </span>
          </>
        )}
      </span>
      <span className="grow" />
      <button type="button" aria-pressed={isMarked} onClick={() => marks.toggle(route)} className={TOGGLE}>
        <span aria-hidden="true" className="hidden sm:inline">🔖</span>
        {isMarked ? <T en={bookmarked} bn={SHELL_BN.bookmarked} /> : <T en={bookmark} bn={SHELL_BN.bookmark} />}
      </button>
      <button type="button" aria-pressed={isRead} onClick={() => read.toggle(route)} className={TOGGLE}>
        <span aria-hidden="true" className="hidden sm:inline">✓</span>
        {isRead ? <T en={markedRead} bn={SHELL_BN.markedRead} /> : <T en={markRead} bn={SHELL_BN.markRead} />}
      </button>
    </div>
  );
}
