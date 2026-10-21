import { CONTENT_PAGES, type ContentPage } from "./reading-state.ts";

const BY_HREF = new Map(CONTENT_PAGES.map((page) => [page.href, page]));

/** The page of "Continue reading": the last page if it is a content page, else the first tutorial page. */
export function continueTarget(last: string | null): ContentPage {
  return (last ? BY_HREF.get(last) : undefined) ?? CONTENT_PAGES[0];
}

/** The known content page of a route, or undefined for an old or unknown route. */
export function contentPage(href: string): ContentPage | undefined {
  return BY_HREF.get(href);
}

/** Pages read and total per module, in the order of CONTENT_PAGES. Unknown routes are not counted. */
export function readByModule(read: readonly string[]): { module: ContentPage["module"]; read: number; total: number }[] {
  const done = new Set(read);
  const rows: { module: ContentPage["module"]; read: number; total: number }[] = [];
  for (const page of CONTENT_PAGES) {
    let row = rows.find((r) => r.module === page.module);
    if (!row) rows.push((row = { module: page.module, read: 0, total: 0 }));
    row.total += 1;
    if (done.has(page.href)) row.read += 1;
  }
  return rows;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** The name of the Export file: `progress-YYYY-MM-DD.json`, in local time. */
export function exportFileName(now: Date): string {
  return `progress-${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}.json`;
}
