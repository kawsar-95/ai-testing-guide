import { readFileSync } from "node:fs";
import { join } from "node:path";
import { PAGES } from "@/lib/nav";
import { AREAS } from "@/lib/prep/areas";
import { itemsOf } from "@/lib/prep/items";
import { buildPrepSearchDocs, buildSearchDocs } from "@/lib/search";

export const dynamic = "force-static";

export function GET() {
  const pages = PAGES.map((page) => ({
    page,
    source: readFileSync(join(process.cwd(), "content", page.group, `${page.slug}.mdx`), "utf8"),
  }));
  const prep = AREAS.flatMap((area) => itemsOf(area.slug).map((item) => ({ area, item })));
  return Response.json([...buildSearchDocs(pages), ...buildPrepSearchDocs(prep)]);
}
