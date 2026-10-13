"use client";

import Link from "next/link";
import { countDone, percent } from "@/lib/prep/progress";
import { PREP_UI } from "@/lib/prep/ui";
import type { PrepArea } from "@/lib/prep/types";
import { ProgressBar } from "./ProgressBar";
import { useProgress } from "./useProgress";

/** A card that links to one area and shows how many of its items are done. */
export function AreaCard({ area, ids }: { area: PrepArea; ids: readonly string[] }) {
  const { done } = useProgress();
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  return (
    <li data-area-card className="group relative list-none">
      <div className="flex h-full flex-col rounded-[10px] border border-border bg-bg-raised px-5 py-4 transition-colors group-hover:border-accent">
        <h3 className="font-display text-xl font-medium leading-snug text-text">
          <Link
            href={area.href}
            className="text-text no-underline transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
          >
            {area.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-[14px] leading-relaxed text-pretty text-text-dim">
          {area.description}
        </p>
        <p className="mt-4 font-mono text-[12px] text-text-dim">
          {total === 0 ? PREP_UI.cardEmpty : PREP_UI.cardCount(count, total)}
        </p>
        <ProgressBar
          value={percent(count, total)}
          label={PREP_UI.cardProgressLabel(area.title)}
          className="mt-2"
        />
      </div>
    </li>
  );
}
