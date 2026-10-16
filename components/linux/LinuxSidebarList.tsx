"use client";

import Link from "next/link";
import { STAGES } from "@/lib/linux/stages";
import { LINUX_UI } from "@/lib/linux/ui";
import { countDone } from "@/lib/prep/progress";
import { useLinuxProgress } from "./useLinuxProgress";

/**
 * The stages of the Linux module for the sidebar and the drawer. It uses the
 * same classes as PrepSidebarList, so all lists look like one design. Each
 * stage shows how many of its topics are done.
 */
export function LinuxSidebarList({
  activePath,
  onNavigate,
}: {
  activePath: string | null;
  onNavigate?: () => void;
}) {
  const { done } = useLinuxProgress();
  return (
    <nav aria-label={LINUX_UI.sidebarNav} className="px-3 py-6">
      <ol className="m-0 list-none space-y-px p-0">
        {STAGES.map((stage) => {
          const active = stage.href === activePath;
          const ids = stage.topics.map((topic) => topic.id);
          const total = new Set(ids).size;
          const count = countDone(ids, done);
          return (
            <li key={stage.href}>
              <Link
                href={stage.href}
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
                  <span>{LINUX_UI.sidebarStageLabel(stage.number)}</span>
                  <span aria-hidden="true">{LINUX_UI.sidebarCount(count, total)}</span>
                  <span className="sr-only">{LINUX_UI.sidebarCountSr(count, total)}</span>
                </span>
                <span
                  className={
                    "mt-0.5 block text-[13.5px] leading-snug " +
                    (active ? "text-text" : "text-text-dim group-hover:text-text")
                  }
                >
                  {stage.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
