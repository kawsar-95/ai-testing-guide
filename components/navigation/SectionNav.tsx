"use client";

import { useEffect, useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { SidebarToggle } from "@/components/layout/SidebarToggle";
import { SHELL_BN } from "@/lib/bn/shell";
import { onThisPage } from "@/lib/ui";
import type { OutlineItem } from "@/lib/outline";

/** The reading line: an item is current when its top is above this point. */
const LINE = 0.3;

/**
 * The sticky "On this page" list. It marks the last outline item whose top
 * has passed the reading line. The observer band ends at that line, so it
 * fires each time a top crosses it.
 */
export function SectionNav({ items }: { items: OutlineItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  const navLabel = useBn(onThisPage, SHELL_BN.onThisPage);

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * LINE;
      let current: string | null = null;
      for (const item of items) {
        const el = document.getElementById(item.id);
        // An element in a hidden voice panel has no box. Skip it.
        if (!el || el.getClientRects().length === 0) continue;
        if (el.getBoundingClientRect().top <= line) current = item.id;
      }
      setActive(current);
    };

    const observer = new IntersectionObserver(update, {
      rootMargin: `0px 0px -${(1 - LINE) * 100}% 0px`,
      threshold: 0,
    });
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    // A change of voice shows or hides panels, so the headings move.
    const voices = new MutationObserver(update);
    voices.observe(document.documentElement, {
      subtree: true,
      attributes: true,
      attributeFilter: ["data-voice", "data-voice-default"],
    });
    update();

    return () => {
      observer.disconnect();
      voices.disconnect();
    };
  }, [items]);

  if (items.length === 0) return null;

  // Show the ### items of the current ## section only, so the list stays short.
  const parentOf = new Map<string, string>();
  let h2 = "";
  for (const item of items) {
    if (item.level === 2) h2 = item.id;
    parentOf.set(item.id, h2);
  }
  const openSection = active ? parentOf.get(active) : undefined;

  return (
    // -m-1 p-1: room inside the scroll box for the focus ring of the toggle, with no change to the layout.
    // top-23 is top-24 less that 4 px: the toggle row sticks 96 px from the top, level with the left toggle.
    <nav
      data-toc
      aria-label={navLabel}
      className="sticky top-23 -m-1 max-h-[calc(100vh-7.75rem)] overflow-y-auto p-1 pb-6"
    >
      {/* A closed sidebar is a rail: the label and the list hide, and the toggle stays. */}
      <div className="mb-1.5 flex min-h-9 items-center justify-end pointer-coarse:min-h-11">
        <p
          data-sidebar-body="right"
          className="mr-auto font-mono text-[11px] uppercase tracking-[0.16em] text-text-faint"
        >
          <T en={onThisPage} bn={SHELL_BN.onThisPage} />
        </p>
        <SidebarToggle side="right" />
      </div>
      <ol data-sidebar-body="right" className="m-0 list-none border-l border-border p-0">
        {items.map((item) => {
          const isActive = item.id === active;
          if (item.level === 3 && parentOf.get(item.id) !== openSection) return null;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={
                  "-ml-px block border-l-2 py-1.5 pr-2 leading-snug no-underline transition-colors " +
                  (item.level === 3 ? "pl-7 text-[12.5px] " : "pl-4 text-[13.5px] ") +
                  (isActive
                    ? "border-accent text-text"
                    : "border-transparent text-text-dim hover:border-border-strong hover:text-text")
                }
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
