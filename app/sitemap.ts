import type { MetadataRoute } from "next";
import { LINUX_ROUTES } from "@/lib/linux/stages";
import { PAGES } from "@/lib/nav";
import { SITE_URL } from "@/lib/site";
import { SYSTEM_DESIGN_ROUTES } from "@/lib/system-design/cases";

export const dynamic = "force-static";

/** The home page, all the tutorial pages, the Linux pages, and the System Design pages. Empty without NEXT_PUBLIC_SITE_URL. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];
  return ["/", ...PAGES.map((page) => page.href), ...LINUX_ROUTES, ...SYSTEM_DESIGN_ROUTES].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
