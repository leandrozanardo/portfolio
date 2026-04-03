import { useEffect, useLayoutEffect, useRef } from "react";

/**
 * When `open` becomes true, focuses the first actionable control inside `panelRef`.
 * When `open` becomes false after having been open, restores focus to `triggerRef`.
 */
export function useDisclosureFocus(open: boolean) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  useLayoutEffect(() => {
    if (!open || !panelRef.current) return;
    const first = panelRef.current.querySelector<HTMLElement>(
      'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])',
    );
    first?.focus();
  }, [open]);

  useEffect(() => {
    if (wasOpen.current && !open) {
      triggerRef.current?.focus({ preventScroll: true });
    }
    wasOpen.current = open;
  }, [open]);

  return { triggerRef, panelRef };
}
