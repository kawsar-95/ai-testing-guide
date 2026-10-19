"use client";

import Link from "next/link";
import { TOPICS } from "@/lib/architecture/topics";
import { ARCHITECTURE_UI } from "@/lib/architecture/ui";
import { useArchitectureProgress } from "./useArchitectureProgress";

/**
 * The topics of the Architecture module for the sidebar and the drawer. It uses
 * the same classes as LinuxSidebarList, so all lists look like one design. A
 * done topic shows a tick.
 */
export function ArchitectureSidebarList({
  activePath,
  onNavigate,
}: {
  activePath: string | null;
  onNavigate?: () => void;
}) {
  const { done } = useArchitectureProgress();
  return (
    <nav aria-label={ARCHITECTURE_UI.sidebarNav} className="px-3 py-6">
      <ol className="m-0 list-none space-y-px p-0">
        {TOPICS.map((item) => {
          const active = item.href === activePath;
          const isDone = item.kind === "topic" && done.includes(item.slug);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
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
                  <span>
                    {item.kind === "practice"
                      ? ARCHITECTURE_UI.sidebarPracticeLabel
                      : ARCHITECTURE_UI.sidebarTopicLabel(item.number)}
                  </span>
                  {isDone ? (
                    <>
                      <span aria-hidden="true" className="text-accent">
                        ✓
                      </span>
                      <span className="sr-only">{ARCHITECTURE_UI.sidebarDone}</span>
                    </>
                  ) : null}
                </span>
                <span
                  className={
                    "mt-0.5 block text-[13.5px] leading-snug " +
                    (active ? "text-text" : "text-text-dim group-hover:text-text")
                  }
                >
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
