"use client";

import Link from "next/link";
import { STAGES } from "@/lib/linux/stages";
import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN } from "@/lib/bn/linux";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
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
  const navLabel = useBn(LINUX_UI.sidebarNav, LINUX_UI_BN.sidebarNav);
  return (
    <nav aria-label={navLabel} className="px-3 py-4">
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
                    <T en={LINUX_UI.sidebarStageLabel(stage.number)} bn={LINUX_UI_BN.sidebarStageLabel(stage.number)} />
                  </span>
                  <span aria-hidden="true">{LINUX_UI.sidebarCount(count, total)}</span>
                  <span className="sr-only">
                    <T en={LINUX_UI.sidebarCountSr(count, total)} bn={LINUX_UI_BN.sidebarCountSr(count, total)} />
                  </span>
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
