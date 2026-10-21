import { readFileSync } from "node:fs";
import { join } from "node:path";
import { CHAPTERS } from "@/lib/fundamentals/chapters";
import { STAGES } from "@/lib/linux/stages";
import type { FlatModule } from "@/lib/modules/flat";
import { ARCHITECTURE, SYSTEM_DESIGN } from "@/lib/modules/registry";
import { PAGES } from "@/lib/nav";
import {
  buildFlatSearchDocs,
  buildFundamentalsSearchDocs,
  buildLinuxSearchDocs,
  buildSearchDocs,
} from "@/lib/search";

export const dynamic = "force-static";

/** The docs of a flat module: one file content/<id>/<slug>.mdx for each page. */
function flatDocs(m: FlatModule) {
  return buildFlatSearchDocs(
    m,
    m.pages.map((item) => ({
      item,
      source: readFileSync(join(process.cwd(), "content", m.id, `${item.slug}.mdx`), "utf8"),
    })),
  );
}

export function GET() {
  const pages = PAGES.map((page) => ({
    page,
    source: readFileSync(join(process.cwd(), "content", page.group, `${page.slug}.mdx`), "utf8"),
  }));
  const linux = STAGES.map((stage) => ({
    stage,
    source: readFileSync(join(process.cwd(), "content", "linux", `${stage.slug}.mdx`), "utf8"),
  }));
  const fundamentals = CHAPTERS.map((chapter) => ({
    chapter,
    source: readFileSync(join(process.cwd(), "content", "fundamentals", `${chapter.slug}.mdx`), "utf8"),
  }));
  return Response.json([
    ...buildSearchDocs(pages),
    ...buildLinuxSearchDocs(linux),
    ...flatDocs(SYSTEM_DESIGN),
    ...buildFundamentalsSearchDocs(fundamentals),
    ...flatDocs(ARCHITECTURE),
  ]);
}
