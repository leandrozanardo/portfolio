/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Production origin without trailing slash (canonical, OG, sitemap). */
  readonly VITE_SITE_URL?: string;
}
