"use client";

import { useEffect, useRef } from "react";
import { applyLevelFilter, levelForHash } from "@/lib/prep/prefs";
import type { QaItem } from "@/lib/prep/types";
import { PREP_UI } from "@/lib/prep/ui";
import { DoneCheckbox, LevelBadge, SourceLink, listClasses } from "./item-parts";
import { usePrefs } from "./usePrefs";

const TEXT = "whitespace-pre-line";

/** The questions of an area. A table from `md` up, or cards, by the `view` preference. */
export function QaTable({ items }: { items: readonly QaItem[] }) {
  const { prefs, readPrefs, setPref } = usePrefs();
  const pendingScroll = useRef<string | null>(null);

  // A link to a row that the level filter hides resets the filter. The native hash scroll ran
  // before the row existed, so the row is scrolled into view after it renders (see the next effect).
  useEffect(() => {
    const onHash = () => {
      const level = readPrefs().level;
      if (levelForHash(items, level, window.location.hash) === level) return;
      pendingScroll.current = window.location.hash.slice(1);
      setPref("level", "all");
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [items, readPrefs, setPref]);

  useEffect(() => {
    if (pendingScroll.current === null) return;
    const row = document.getElementById(pendingScroll.current);
    if (!row) return;
    pendingScroll.current = null;
    row.scrollIntoView();
  });

  const shown = applyLevelFilter(items, prefs.level);
  if (shown.length === 0) {
    return <p className="text-text-dim">{items.length === 0 ? PREP_UI.areaEmpty : PREP_UI.levelEmpty}</p>;
  }
  const c = listClasses(prefs.view);
  return (
    <div className={c.wrapper}>
      <table className={c.table}>
        <thead className={c.head}>
          <tr>
            <th scope="col" className={`${c.th} w-[24%]`}>{PREP_UI.colQuestion}</th>
            <th scope="col" className={`${c.th} w-[24%]`}>{PREP_UI.colTemplate}</th>
            <th scope="col" className={`${c.th} w-[28%]`}>{PREP_UI.colExample}</th>
            <th scope="col" className={`${c.th} w-[24%]`}>{PREP_UI.colBehind}</th>
          </tr>
        </thead>
        <tbody className={c.body}>
          {shown.map((item) => (
            <tr key={item.id} id={item.id} className={c.row}>
              <td data-label={PREP_UI.colQuestion} className={c.cell}>
                <div className="flex items-start gap-3">
                  <DoneCheckbox id={item.id} title={item.question} />
                  <div className="min-w-0">
                    {item.level ? <LevelBadge level={item.level} /> : null}
                    <p className={`${TEXT} font-medium`}>{item.question}</p>
                  </div>
                </div>
              </td>
              <td data-label={PREP_UI.colTemplate} className={`${c.cell} ${TEXT}`}>
                {item.template}
              </td>
              <td data-label={PREP_UI.colExample} className={`${c.cell} ${TEXT}`}>
                {item.example}
              </td>
              <td data-label={PREP_UI.colBehind} className={c.cell}>
                <p className={TEXT}>{item.behind}</p>
                {item.source ? <SourceLink href={item.source} title={item.question} /> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
