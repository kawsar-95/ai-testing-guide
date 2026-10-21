"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import { blurClosesDropdown, type DropdownEvent, type HeaderNavItem } from "@/lib/header-nav";
import { navModuleHome } from "@/lib/ui";

const ITEM =
  "relative flex h-16 items-center whitespace-nowrap text-[15px] font-medium no-underline transition-colors " +
  "after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-accent after:transition-opacity";

/** The look of a top nav item: dim, and the teal underline when it is current or hovered. */
export function navItemClass(active: boolean): string {
  return `${ITEM} ${active ? "text-text after:opacity-100" : "text-text-dim hover:text-text after:opacity-0 hover:after:opacity-100"}`;
}

/**
 * One top nav item with a dropdown of its pages. The header owns the open
 * state, so one dropdown is open at most. Escape closes it and moves the
 * focus to the button. A click outside or focus that leaves it closes it.
 */
export function NavDropdown({
  item,
  active,
  activePath,
  open,
  onEvent,
}: {
  item: HeaderNavItem;
  active: boolean;
  activePath: string;
  open: boolean;
  onEvent: (event: DropdownEvent) => void;
}) {
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) onEvent({ type: "outside" });
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      onEvent({ type: "escape" });
      buttonRef.current?.focus();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onEvent]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (open && blurClosesDropdown(next, Boolean(next && rootRef.current?.contains(next)))) {
          onEvent({ type: "blur-out" });
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-current={active ? "true" : undefined}
        onClick={() => onEvent({ type: "toggle", id: item.id })}
        className={`${navItemClass(active)} gap-1`}
      >
        {item.label}
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className={`size-3 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
          fill="none"
        >
          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full left-1/2 z-50 mt-1 w-80 -translate-x-1/2 rounded-xl border border-border bg-bg-raised p-2 shadow-lg"
      >
        <Link
          href={item.href}
          className="block rounded-lg px-3 py-2 text-[14px] font-semibold text-accent no-underline hover:bg-bg-raised-2"
        >
          {navModuleHome(item.label)} <span aria-hidden="true">→</span>
        </Link>
        <ol className="m-0 mt-1 max-h-[60vh] list-none overflow-y-auto overscroll-contain border-t border-border p-0 pt-1">
          {item.pages?.map((page, i) => (
            <li key={page.href}>
              <Link
                href={page.href}
                aria-current={page.href === activePath ? "page" : undefined}
                className={
                  "flex gap-3 rounded-lg px-3 py-1.5 text-[14px] leading-snug no-underline hover:bg-bg-raised-2 " +
                  (page.href === activePath ? "text-accent" : "text-text-dim hover:text-text")
                }
              >
                <span className="w-6 shrink-0 font-mono text-[12px] leading-[1.45rem] text-text-faint tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">{page.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
