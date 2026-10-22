"use client";

import Link from "next/link";
import { useId } from "react";
import type { FlatItem, FlatModule } from "@/lib/modules/flat";
import type { FlatModuleId } from "@/lib/modules/registry";
import { LinkDoneToggle } from "./LinkDoneToggle";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { FLAT_UI_BN } from "@/lib/bn/flat";
import { doneHook } from "./useModuleProgress";

/**
 * The pages of a flat module for the sidebar and the drawer. It uses the same
 * classes as LinuxSidebarList, so all lists look like one design. With
 * progress, a done topic shows a tick, and a link item has a done toggle.
 * With parts, each part has a small label above its items.
 */
export function FlatSidebarList({
  module: m,
  activePath,
  onNavigate,
}: {
  module: FlatModule<FlatModuleId>;
  activePath: string | null;
  onNavigate?: () => void;
}) {
  const uid = useId(); // two lists render on a course page, so a module id alone would repeat
  const { done } = doneHook(m)();
  const ui = m.ui;
  const bn = FLAT_UI_BN[m.id];
  const navLabel = useBn(ui.sidebarNav, bn.sidebarNav);
  return (
    <nav aria-label={navLabel} className="px-3 py-4">
      {m.groups().map(({ part, items }) => {
        const list = (
          <ol
            key="all"
            aria-labelledby={part ? `${uid}-part-${part.num}` : undefined}
            className="m-0 list-none space-y-px p-0"
          >
            {items.map(row)}
          </ol>
        );
        if (!part) return list;
        return (
          <div key={part.num} className="mt-4 first:mt-0">
            <p id={`${uid}-part-${part.num}`} className="px-3 pb-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-text-dim">
              <T en={`PART ${part.num}`} bn={`পার্ট ${part.num}`} /> · {part.title}
            </p>
            {list}
          </div>
        );
      })}
    </nav>
  );

  function row(item: FlatItem) {
    const active = item.href === activePath;
    const isDone = item.kind === "topic" && done.includes(item.slug);
    const label =
      item.kind === "practice" ? (
        <T en={ui.sidebarPracticeLabel ?? ""} bn={bn.sidebarPracticeLabel ?? ""} />
      ) : (
        <T en={ui.sidebarItemLabel(item.number)} bn={bn.sidebarItemLabel(item.number)} />
      );
    const tone = active ? "text-accent" : "text-text-faint";
    const toggle = m.progress && item.kind === "link";
    return (
      <li key={item.slug} className={toggle ? "flex items-center gap-1" : undefined}>
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          onClick={onNavigate}
          className={
            "group block rounded-r-md border-l-2 px-3 py-1.5 no-underline transition-colors " +
            (toggle ? "min-w-0 flex-1 " : "") +
            (active ? "border-accent bg-bg-raised" : "border-transparent hover:border-border-strong hover:bg-bg-raised/60")
          }
        >
          {m.progress ? (
            <span
              className={
                "flex items-baseline justify-between gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em] " + tone
              }
            >
              <span>{label}</span>
              {isDone ? (
                <>
                  <span aria-hidden="true" className="text-accent">
                    ✓
                  </span>
                  <span className="sr-only">
                    <T en={ui.sidebarDone ?? ""} bn={bn.sidebarDone ?? ""} />
                  </span>
                </>
              ) : null}
            </span>
          ) : (
            <span className={"block font-mono text-[10.5px] uppercase tracking-[0.12em] " + tone}>{label}</span>
          )}
          <span
            className={
              "mt-0.5 block text-[13.5px] leading-snug " + (active ? "text-text" : "text-text-dim group-hover:text-text")
            }
          >
            {item.title}
          </span>
        </Link>
        {toggle ? <LinkDoneToggle moduleId={m.id} id={item.slug} title={item.title} /> : null}
      </li>
    );
  }
}
