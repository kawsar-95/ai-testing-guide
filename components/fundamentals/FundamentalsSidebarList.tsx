"use client";

import Link from "next/link";
import { CHAPTERS } from "@/lib/fundamentals/chapters";
import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { FUNDAMENTALS_UI_BN } from "@/lib/bn/fundamentals";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { countDone } from "@/lib/prep/progress";
import { useFundamentalsProgress } from "./useFundamentalsProgress";

/**
 * The chapters of the Fundamentals module for the sidebar and the drawer. It uses the
 * same classes as LinuxSidebarList, so all lists look like one design. Each
 * chapter shows how many of its topics are done.
 */
export function FundamentalsSidebarList({
  activePath,
  onNavigate,
}: {
  activePath: string | null;
  onNavigate?: () => void;
}) {
  const { done } = useFundamentalsProgress();
  const navLabel = useBn(FUNDAMENTALS_UI.sidebarNav, FUNDAMENTALS_UI_BN.sidebarNav);
  return (
    <nav aria-label={navLabel} className="px-3 py-4">
      <ol className="m-0 list-none space-y-px p-0">
        {CHAPTERS.map((chapter) => {
          const active = chapter.href === activePath;
          const ids = chapter.topics.map((topic) => topic.id);
          const total = new Set(ids).size;
          const count = countDone(ids, done);
          return (
            <li key={chapter.href}>
              <Link
                href={chapter.href}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
                className={
                  "group block rounded-r-md border-l-2 px-3 py-1.5 no-underline transition-colors " +
                  (active
                    ? "border-accent bg-bg-raised"
                    : "border-transparent hover:border-border-strong hover:bg-bg-raised/60")
                }
              >
                <span
                  className={
                    "flex items-baseline justify-between gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em] " +
                    (active ? "text-accent" : "text-text-faint")
                  }
                >
                  <span>
                    <T
                      en={FUNDAMENTALS_UI.sidebarChapterLabel(chapter.number)}
                      bn={FUNDAMENTALS_UI_BN.sidebarChapterLabel(chapter.number)}
                    />
                  </span>
                  <span aria-hidden="true">{FUNDAMENTALS_UI.sidebarCount(count, total)}</span>
                  <span className="sr-only">
                    <T
                      en={FUNDAMENTALS_UI.sidebarCountSr(count, total)}
                      bn={FUNDAMENTALS_UI_BN.sidebarCountSr(count, total)}
                    />
                  </span>
                </span>
                <span
                  className={
                    "mt-0.5 block text-[13.5px] leading-snug " +
                    (active ? "text-text" : "text-text-dim group-hover:text-text")
                  }
                >
                  {chapter.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
