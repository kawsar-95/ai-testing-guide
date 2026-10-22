/**
 * One UI text in two languages. Both spans are in the HTML. CSS shows one of
 * them from data-voice-default on <html>, so the text is right before
 * hydration and the component works in server components. For an attribute
 * (aria-label, title, placeholder) use useBn.
 */
export function T({ en, bn }: { en: string; bn: string }) {
  return (
    <>
      <span className="i18n-en">{en}</span>
      <span className="i18n-bn" lang="bn">
        {bn}
      </span>
    </>
  );
}
