/**
 * The `##` sections of a module page with a fixed shape (SHAPE), when a long section may be split.
 * A split section is followed by a continuation section with its own heading and <Voices> block.
 * `kept` are the headings of the shape; `extras` counts the continuation sections. A continuation
 * comes after the first section of the shape and before the last (Key words), never around them.
 */
export function sectionsWithSplits(headings: string[], shape: readonly string[]): { kept: string[]; extras: number } {
  const kept = headings.filter((h) => shape.includes(h));
  const first = headings.indexOf(shape[0]);
  const last = headings.lastIndexOf(shape[shape.length - 1]);
  const outside = headings.filter((h, i) => !shape.includes(h) && (i < first || i > last));
  if (outside.length) throw new Error(`sections outside the shape: ${outside.join(", ")}`);
  return { kept, extras: headings.length - kept.length };
}
