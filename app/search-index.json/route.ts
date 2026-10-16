import { readFileSync } from "node:fs";
import { join } from "node:path";
import { STAGES } from "@/lib/linux/stages";
import { PAGES } from "@/lib/nav";
import { AREAS } from "@/lib/prep/areas";
import { itemsOf } from "@/lib/prep/items";
import { buildLinuxSearchDocs, buildPrepSearchDocs, buildSearchDocs } from "@/lib/search";

export const dynamic = "force-static";

export function GET() {
  const pages = PAGES.map((page) => ({
    page,
    source: readFileSync(join(process.cwd(), "content", page.group, `${page.slug}.mdx`), "utf8"),
  }));
  const prep = AREAS.flatMap((area) => itemsOf(area.slug).map((item) => ({ area, item })));
  const linux = STAGES.map((stage) => ({
    stage,
    source: readFileSync(join(process.cwd(), "content", "linux", `${stage.slug}.mdx`), "utf8"),
  }));
  return Response.json([...buildSearchDocs(pages), ...buildPrepSearchDocs(prep), ...buildLinuxSearchDocs(linux)]);
}
