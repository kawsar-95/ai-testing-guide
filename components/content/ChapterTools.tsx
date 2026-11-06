"use client";

import { useEffect } from "react";
import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { useBookmarks, useLastPage, usePageRead } from "@/components/reading/useReadingState";
import { bookmark, bookmarked, markRead, markedRead } from "@/lib/ui";

const TOGGLE = "btn btn-outline btn-sm aria-pressed:border-accent aria-pressed:text-accent";

/**
 * The Bookmark and Mark as read toggles of a content page. It sits in the
 * meta row (`MetaLine`, which also shows the reading time) and saves the page
 * as the last page when it mounts. The server HTML renders both toggles off.
 * The state is in the label and the accent colour, not in an emoji.
 */
export function ChapterTools({ route }: { route: string }) {
  const read = usePageRead();
  const marks = useBookmarks();
  const { setLast } = useLastPage();
  const isRead = read.done.includes(route);
  const isMarked = marks.done.includes(route);

  useEffect(() => {
    setLast(route);
  }, [route, setLast]);

  return (
    <div data-chapter-tools className="not-prose flex flex-wrap items-center gap-2">
      <button type="button" aria-pressed={isMarked} onClick={() => marks.toggle(route)} className={TOGGLE}>
        {isMarked ? <T en={bookmarked} bn={SHELL_BN.bookmarked} /> : <T en={bookmark} bn={SHELL_BN.bookmark} />}
      </button>
      <button type="button" aria-pressed={isRead} onClick={() => read.toggle(route)} className={TOGGLE}>
        {isRead ? <T en={markedRead} bn={SHELL_BN.markedRead} /> : <T en={markRead} bn={SHELL_BN.markRead} />}
      </button>
    </div>
  );
}
