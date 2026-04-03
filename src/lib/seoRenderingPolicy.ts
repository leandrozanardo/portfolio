/**
 * Documented SEO constraints for this Vite SPA + react-i18next setup (reference for hreflang / prerender).
 */

/** Locale is stored in localStorage, not in the URL — do not emit hreflang alternates for the same URL. */
export const HREFLANG_POLICY =
  "Single URL (/). Language switching is client-only; valid hreflang requires distinct URLs or server-driven variants (e.g. /pt, /en) plus matching HTML.";

/**
 * Crawlers that do not execute JS see Portuguese shell meta in index.html until hydration.
 * Options to align HTML with locale: prerender (e.g. react-snap, Playwright post-build), SSG (Astro/vite-ssg), or SSR (Remix/Next).
 */
export const PRERENDER_OR_SSG_OPTIONS =
  "For multilingual static HTML at first byte, add route-per-locale or prerender pipeline; current stack is acceptable if primary market is pt-BR shell + JS swap.";
