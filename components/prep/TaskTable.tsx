"use client";

import type { TaskItem } from "@/lib/prep/types";
import { PREP_UI } from "@/lib/prep/ui";
import { DoneCheckbox, SourceLink, listClasses } from "./item-parts";
import { usePrefs } from "./usePrefs";

const TEXT = "whitespace-pre-line";

/** The tasks of an area. A table from `md` up, or cards, by the `view` preference. */
export function TaskTable({ items }: { items: readonly TaskItem[] }) {
  const { prefs } = usePrefs();
  if (items.length === 0) return <p className="text-text-dim">{PREP_UI.areaEmpty}</p>;
  const c = listClasses(prefs.view);
  return (
    <div className={c.wrapper}>
      <table className={c.table}>
        <thead className={c.head}>
          <tr>
            <th scope="col" className={`${c.th} w-[34%]`}>{PREP_UI.colTask}</th>
            <th scope="col" className={`${c.th} w-[66%]`}>{PREP_UI.colDetails}</th>
          </tr>
        </thead>
        <tbody className={c.body}>
          {items.map((item) => (
            <tr key={item.id} id={item.id} className={c.row}>
              <td data-label={PREP_UI.colTask} className={c.cell}>
                <div className="flex items-start gap-3">
                  <DoneCheckbox id={item.id} title={item.title} />
                  <p className={`${TEXT} font-medium`}>{item.title}</p>
                </div>
              </td>
              <td data-label={PREP_UI.colDetails} className={c.cell}>
                <p className={TEXT}>{item.details}</p>
                {item.source ? <SourceLink href={item.source} title={item.title} /> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
