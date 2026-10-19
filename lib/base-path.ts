import { BASE_PATH } from "./site.ts";

/**
 * Adds the base path of the site to a path that starts with "/".
 * `next/link` does this for links. A plain `<img>` or `<a>` does not.
 * `base` is "" or "/<repo-name>". External URLs, anchors, and relative paths stay unchanged.
 */
export function withBasePath(path: string, base: string = BASE_PATH): string {
  const prefix = base.replace(/\/+$/, "");
  if (!prefix || !path.startsWith("/") || path.startsWith("//")) return path;
  if (path === prefix || path.startsWith(`${prefix}/`)) return path;
  return `${prefix}${path}`;
}
