import { readFileSync } from "node:fs";
import { join } from "node:path";
import { STAGES } from "@/lib/linux/stages";
import { PAGES } from "@/lib/nav";
import { buildLinuxSearchDocs, buildSearchDocs, buildSystemDesignSearchDocs } from "@/lib/search";
import { CASES } from "@/lib/system-design/cases";

export const dynamic = "force-static";

export function GET() {
  const pages = PAGES.map((page) => ({
    page,
    source: readFileSync(join(process.cwd(), "content", page.group, `${page.slug}.mdx`), "utf8"),
  }));
  const linux = STAGES.map((stage) => ({
    stage,
    source: readFileSync(join(process.cwd(), "content", "linux", `${stage.slug}.mdx`), "utf8"),
  }));
  const systemDesign = CASES.map((item) => ({
    item,
    source: readFileSync(join(process.cwd(), "content", "system-design", `${item.slug}.mdx`), "utf8"),
  }));
  return Response.json([
    ...buildSearchDocs(pages),
    ...buildLinuxSearchDocs(linux),
    ...buildSystemDesignSearchDocs(systemDesign),
  ]);
}
