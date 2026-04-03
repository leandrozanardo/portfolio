import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, "");
  const siteUrl = (env.VITE_SITE_URL ?? "").trim().replace(/\/$/, "");

  return {
    plugins: [
      react(),
      {
        name: "html-seo-placeholders",
        transformIndexHtml(html) {
          if (!siteUrl) {
            return html
              .replace(
                /<!-- built-seo-start -->[\s\S]*?<!-- built-seo-end -->\s*/g,
                ""
              )
              .replace(
                /<!-- fallback-seo-relative-start:[\s\S]*?-->\s*/g,
                ""
              )
              .replace(/\s*<!-- fallback-seo-relative-end -->\s*/g, "\n");
          }
          return html
            .replace(
              /<!-- fallback-seo-relative-start:[\s\S]*?<!-- fallback-seo-relative-end -->\s*/g,
              ""
            )
            .replace(/%SITE_URL%/g, siteUrl)
            .replace(/<!-- built-seo-start -->\s*/g, "")
            .replace(/\s*<!-- built-seo-end -->\s*/g, "\n");
        },
      },
      {
        name: "write-robots-and-sitemap",
        closeBundle() {
          const outDir = path.resolve(__dirname, "dist");
          if (!fs.existsSync(outDir)) return;

          const robots =
            siteUrl !== ""
              ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
              : "User-agent: *\nAllow: /\n";

          fs.writeFileSync(path.join(outDir, "robots.txt"), robots, "utf8");

          if (siteUrl !== "") {
            const lastmod = new Date().toISOString().slice(0, 10);
            const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
            fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap, "utf8");
          }
        },
      },
    ],
  };
});
