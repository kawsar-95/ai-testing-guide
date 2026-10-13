"use client";

import Link from "next/link";
import { AREAS } from "@/lib/prep/areas";
import { itemsOf } from "@/lib/prep/items";
import { countDone } from "@/lib/prep/progress";
import { PREP_UI } from "@/lib/prep/ui";
import { useProgress } from "./useProgress";

/**
 * The areas of Interview Prep for the sidebar and the drawer. It uses the
 * same classes as SidebarList, so both lists look like one design. Each
 * area shows how many of its items are done.
 */
export function PrepSidebarList({
  activePath,
  onNavigate,
}: {
  activePath: string | null;
  onNavigate?: () => void;
}) {
  const { done } = useProgress();
  return (
    <nav aria-label={PREP_UI.areaNav} className="px-3 py-6">
      <ol className="m-0 list-none space-y-px p-0">
        {AREAS.map((area, index) => {
          const active = area.href === activePath;
          const ids = itemsOf(area.slug).map((item) => item.id);
          const total = new Set(ids).size;
          const count = countDone(ids, done);
          return (
            <li key={area.href}>
              <Link
                href={area.href}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
                className={
                  "group block rounded-r-md border-l-2 px-3 py-2 no-underline transition-colors " +
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
                  <span>{PREP_UI.sidebarAreaLabel(index + 1)}</span>
                  {total === 0 ? (
                    <span>{PREP_UI.sidebarEmpty}</span>
                  ) : (
                    <>
                      <span aria-hidden="true">{PREP_UI.sidebarCount(count, total)}</span>
                      <span className="sr-only">{PREP_UI.sidebarCountSr(count, total)}</span>
                    </>
                  )}
                </span>
                <span
                  className={
                    "mt-0.5 block text-[13.5px] leading-snug " +
                    (active ? "text-text" : "text-text-dim group-hover:text-text")
                  }
                >
                  {area.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
