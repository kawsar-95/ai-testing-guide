"use client";

import type { Level } from "@/lib/prep/types";
import { PREP_UI } from "@/lib/prep/ui";
import { useProgress } from "./useProgress";

/** The layout classes of a list of items. Below `md`, both views are cards. */
export function listClasses(view: "table" | "cards") {
  const table = view === "table";
  return {
    table: table ? "block w-full md:table md:table-fixed md:border-collapse" : "block w-full",
    head: table ? "hidden md:table-header-group" : "hidden",
    body: table ? "block md:table-row-group" : "block",
    row: table
      ? "mb-4 block scroll-mt-20 rounded-[10px] border border-border bg-bg-raised p-5 target:border-accent md:mb-0 md:table-row md:rounded-none md:border-0 md:bg-transparent md:p-0 md:target:bg-bg-raised-2"
      : "mb-4 block scroll-mt-20 rounded-[10px] border border-border bg-bg-raised p-5 target:border-accent",
    cell: table
      ? "block py-2 text-[14px] leading-relaxed text-text before:mb-1 before:block before:font-mono before:text-[11px] before:font-medium before:uppercase before:tracking-[0.15em] before:text-text-dim before:content-[attr(data-label)] md:table-cell md:border-t md:border-border md:px-4 md:py-4 md:align-top md:before:hidden"
      : "block py-2 text-[14px] leading-relaxed text-text before:mb-1 before:block before:font-mono before:text-[11px] before:font-medium before:uppercase before:tracking-[0.15em] before:text-text-dim before:content-[attr(data-label)]",
    wrapper: table ? "md:overflow-hidden md:rounded-[10px] md:border md:border-border" : "",
    th: "px-4 py-3 text-left font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-text-dim",
  };
}

/** A checkbox that toggles the done state of one item. */
export function DoneCheckbox({ id, title }: { id: string; title: string }) {
  const { done, toggle } = useProgress();
  return (
    // The label gives a hit area of 26 px around the 18 px box (WCAG 2.2 target size).
    <label className="-mx-1 -mb-1 -mt-px shrink-0 cursor-pointer p-1">
      <input
        type="checkbox"
        checked={done.includes(id)}
        onChange={() => toggle(id)}
        aria-label={PREP_UI.markDone(title)}
        className="block size-[18px] cursor-pointer accent-accent"
      />
    </label>
  );
}

/** A link to the source. It opens in a new tab and has visible text. `title` names the item for screen readers. */
export function SourceLink({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-block font-mono text-[12px] text-accent underline underline-offset-2"
    >
      {PREP_UI.sourceLink}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only">
        {PREP_UI.sourceFor(title)}
        {PREP_UI.opensInNewTab}
      </span>
    </a>
  );
}

/** The level as text, so the meaning does not depend on color. */
export function LevelBadge({ level }: { level: Level }) {
  return (
    <span className="mb-2 inline-block rounded-full border border-border-strong px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-text-dim">
      {PREP_UI.levelBadge(PREP_UI.levelLabels[level])}
    </span>
  );
}
