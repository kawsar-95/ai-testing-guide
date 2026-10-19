import type { MetadataRoute } from "next";
import { sitemapPaths } from "@/lib/sitemap";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/** One entry for each path of `sitemapPaths()`. Empty without NEXT_PUBLIC_SITE_URL. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];
  return sitemapPaths().map((path) => ({ url: `${SITE_URL}${path}` }));
}
