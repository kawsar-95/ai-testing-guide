/** The nearest ancestor of `el` that scrolls vertically. */
function scrollParent(el: HTMLElement, mustOverflow = true): HTMLElement | null {
  for (let node = el.parentElement; node; node = node.parentElement) {
    const { overflowY } = getComputedStyle(node);
    if ((overflowY === "auto" || overflowY === "scroll") && (!mustOverflow || node.scrollHeight > node.clientHeight)) {
      return node;
    }
  }
  return null;
}

/**
 * Scrolls the current part into view inside its own scroll container.
 * It sets scrollTop on that container only, so the page does not scroll.
 * If the link is already in view, nothing moves. If the list has no current
 * link (for example on the Interview Prep home page), the container goes to
 * the top, so it does not keep the offset of the list that it showed before.
 */
export function scrollActiveIntoView(root: HTMLElement | null) {
  if (!root) return;
  const link = root.querySelector<HTMLElement>('[aria-current="page"]');
  if (!link) {
    // In the drawer the root is the scroller itself. In the sidebar it is a
    // wrapper inside the scroller.
    const { overflowY } = getComputedStyle(root);
    const own = overflowY === "auto" || overflowY === "scroll";
    const container = own ? root : scrollParent(root, false);
    if (container) container.scrollTop = 0;
    return;
  }
  const container = scrollParent(link);
  if (!container) return;
  const box = container.getBoundingClientRect();
  const rect = link.getBoundingClientRect();
  if (rect.top >= box.top && rect.bottom <= box.bottom) return;
  // Center the link in the container.
  container.scrollTop += rect.top - box.top - (box.height - rect.height) / 2;
}
