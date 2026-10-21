"use client";

import Link from "next/link";
import type { FlatModule } from "@/lib/modules/flat";
import { doneHook } from "./useModuleProgress";

/**
 * The pages of a flat module for the sidebar and the drawer. It uses the same
 * classes as LinuxSidebarList, so all lists look like one design. With
 * progress, a done topic shows a tick.
 */
export function FlatSidebarList({
  module: m,
  activePath,
  onNavigate,
}: {
  module: FlatModule;
  activePath: string | null;
  onNavigate?: () => void;
}) {
  const { done } = doneHook(m)();
  const ui = m.ui;
  return (
    <nav aria-label={ui.sidebarNav} className="px-3 py-4">
      <ol className="m-0 list-none space-y-px p-0">
        {m.items.map((item) => {
          const active = item.href === activePath;
          const isDone = item.kind === "topic" && done.includes(item.slug);
          const label = item.kind === "practice" ? ui.sidebarPracticeLabel : ui.sidebarItemLabel(item.number);
          const tone = active ? "text-accent" : "text-text-faint";
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
                className={
                  "group block rounded-r-md border-l-2 px-3 py-1.5 no-underline transition-colors " +
                  (active
                    ? "border-accent bg-bg-raised"
                    : "border-transparent hover:border-border-strong hover:bg-bg-raised/60")
                }
              >
                {m.progress ? (
                  <span
                    className={
                      "flex items-baseline justify-between gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em] " +
                      tone
                    }
                  >
                    <span>{label}</span>
                    {isDone ? (
                      <>
                        <span aria-hidden="true" className="text-accent">
                          ✓
                        </span>
                        <span className="sr-only">{ui.sidebarDone}</span>
                      </>
                    ) : null}
                  </span>
                ) : (
                  <span className={"block font-mono text-[10.5px] uppercase tracking-[0.12em] " + tone}>{label}</span>
                )}
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
