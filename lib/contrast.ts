/** The relative luminance of a `#rrggbb` color (WCAG 2). */
function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** The WCAG 2 contrast ratio of two `#rrggbb` colors, from 1 to 21. */
export function contrastRatio(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/**
 * The tokens of one theme in app/globals.css: the name without `--` to its
 * value. Dark is the `:root, :root[data-theme="dark"]` block, light is the
 * `:root[data-theme="light"]` block.
 */
export function parseTokens(css: string, theme: "light" | "dark"): Record<string, string> {
  const start = css.indexOf(`:root[data-theme="${theme}"]`);
  if (start === -1) throw new Error(`no token block for the ${theme} theme`);
  const block = css.slice(css.indexOf("{", start) + 1, css.indexOf("}", start));
  const tokens: Record<string, string> = {};
  for (const match of block.matchAll(/--([a-z0-9-]+):\s*([^;]+);/g)) tokens[match[1]] = match[2].trim();
  return tokens;
}
