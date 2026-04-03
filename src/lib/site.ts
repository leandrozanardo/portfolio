/**
 * Public site origin for canonical URLs and Open Graph absolute assets.
 * CHANGED: centralizes VITE_SITE_URL with safe runtime fallback for local preview.
 */

const trimTrailingSlash = (value: string): string =>
  value.endsWith("/") ? value.slice(0, -1) : value;

/** Build-time base URL (no trailing slash). Empty in dev if unset. */
export function getConfiguredSiteOrigin(): string {
  const raw = import.meta.env.VITE_SITE_URL;
  if (typeof raw !== "string" || raw.trim() === "") return "";
  return trimTrailingSlash(raw.trim());
}

/** Origin used for SEO tags: env first, then current location in the browser. */
export function resolveSiteOrigin(): string {
  const configured = getConfiguredSiteOrigin();
  if (configured) return configured;
  if (typeof window !== "undefined" && window.location?.origin) {
    return trimTrailingSlash(window.location.origin);
  }
  return "";
}
