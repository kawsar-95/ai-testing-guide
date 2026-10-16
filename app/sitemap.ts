import type { MetadataRoute } from "next";
import { LINUX_ROUTES } from "@/lib/linux/stages";
import { PAGES } from "@/lib/nav";
import { PREP_ROUTES } from "@/lib/prep/areas";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/** The home page, all the tutorial pages, the prep pages, and the Linux pages. Empty without NEXT_PUBLIC_SITE_URL. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];
  return ["/", ...PAGES.map((page) => page.href), ...PREP_ROUTES, ...LINUX_ROUTES].map((path) => ({ url: `${SITE_URL}${path}` }));
}
