/**
 * The site mark: a loop arrow (the agent loop) around a check mark. app/icon.svg
 * and the PWA icons use the same drawing on a dark tile. It is decorative. With
 * `mono`, all strokes take the current text color, for the teal tile of the
 * header and the footer.
 */
export function BrandMark({ className = "", mono = false }: { className?: string; mono?: boolean }) {
  const ring = mono ? "stroke-current" : "stroke-accent";
  const check = mono ? "stroke-current" : "stroke-good";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20.5 12a8.5 8.5 0 1 1-2.5-6l2.5 2.5" className={ring} />
      <path d="M20.5 3.5v5h-4" className={ring} />
      <path d="m7.6 12.6 2.6 2.6 4.6-4.8" className={check} />
    </svg>
  );
}
