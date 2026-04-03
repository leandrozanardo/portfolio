/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Production origin without trailing slash, e.g. https://www.example.com — CHANGED: SEO canonicals & sitemap */
  readonly VITE_SITE_URL?: string;
}
