import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { suggestEdit } from "@/lib/ui";

/** The "Suggest an edit" link. It sits with the sources at the end of a page, where a reader who found a mistake looks next. */
export function EditLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-6 items-center font-mono text-xs text-text-dim underline decoration-border-strong underline-offset-4 hover:text-accent"
    >
      <T en={suggestEdit} bn={SHELL_BN.suggestEdit} />
    </a>
  );
}
