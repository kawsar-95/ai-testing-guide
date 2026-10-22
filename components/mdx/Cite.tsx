import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { citeLabel } from "@/lib/ui";

/**
 * A small `[n]` link to the n-th entry of `page.sources` (1-based). Style: `.mdx a.cite`.
 * Cite is a server component, so the name "Source n" is hidden text (T), not an aria-label.
 */
export function Cite({ n }: { n: number }) {
  return (
    <sup>
      <a className="cite" href={`#src-${n}`}>
        <span aria-hidden="true">[{n}]</span>
        <span className="sr-only">
          <T en={citeLabel(n)} bn={SHELL_BN.citeLabel(n)} />
        </span>
      </a>
    </sup>
  );
}
