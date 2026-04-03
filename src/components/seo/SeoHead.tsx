import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SOCIAL_URLS } from "../../lib/constants";
import {
  setJsonLdScript,
  setLinkCanonical,
  setMetaByName,
  setMetaByProperty,
} from "../../lib/documentMeta";
import { resolveSiteOrigin } from "../../lib/site";

/** Crawler and prerender trade-offs for this SPA are documented in `lib/seoRenderingPolicy.ts`. */
const JSON_LD_SCRIPT_ID = "portfolio-schema-jsonld";

/** Open Graph image served from `public/images` (1200×630). */
const OG_IMAGE_PATH = "/images/og.png";
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;
/** Person node in JSON-LD uses the same portrait as the About section (not the OG card artwork). */
const PERSON_IMAGE_PATH = "/images/about-portrait.png";

function localeToOgLocale(lng: string): string {
  if (lng === "pt-BR") return "pt_BR";
  if (lng === "es") return "es";
  return "en_US";
}

export function SeoHead() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const origin = resolveSiteOrigin();
    const pageUrl = origin ? `${origin}/` : "";
    const imageUrl = origin ? `${origin}${OG_IMAGE_PATH}` : OG_IMAGE_PATH;
    const personImageUrl = origin ? `${origin}${PERSON_IMAGE_PATH}` : PERSON_IMAGE_PATH;

    document.title = t("seo.title");

    setMetaByName("description", t("seo.description"));
    setMetaByName("keywords", t("seo.keywords"));
    setMetaByName("author", t("brand.fullName"));
    setMetaByName(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );

    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:title", t("seo.title"));
    setMetaByProperty("og:description", t("seo.description"));
    setMetaByProperty("og:locale", localeToOgLocale(i18n.language));
    if (pageUrl) setMetaByProperty("og:url", pageUrl);
    setMetaByProperty("og:image", imageUrl);
    setMetaByProperty("og:image:width", String(OG_IMAGE_WIDTH));
    setMetaByProperty("og:image:height", String(OG_IMAGE_HEIGHT));
    setMetaByProperty("og:image:alt", t("seo.ogImageAlt"));

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", t("seo.title"));
    setMetaByName("twitter:description", t("seo.description"));
    setMetaByName("twitter:image", imageUrl);

    if (pageUrl) setLinkCanonical(pageUrl);

    const sameAs = [SOCIAL_URLS.linkedin, SOCIAL_URLS.github].filter(Boolean);
    const knowsRaw = t("seo.knowsAbout", { returnObjects: true });
    const knowsAbout = Array.isArray(knowsRaw)
      ? (knowsRaw as string[]).filter((item) => typeof item === "string")
      : [];

    const description = t("seo.description");
    const inLanguage = ["pt-BR", "en", "es"];

    const graph: Record<string, unknown>[] = pageUrl
      ? (() => {
          const websiteId = `${pageUrl}#website`;
          const profileId = `${pageUrl}#profilepage`;
          const personId = `${pageUrl}#person`;
          const personImageAbsolute = personImageUrl.startsWith("http")
            ? personImageUrl
            : undefined;
          return [
            {
              "@type": "WebSite",
              "@id": websiteId,
              name: t("brand.fullName"),
              url: pageUrl,
              description,
              inLanguage,
            },
            {
              "@type": "ProfilePage",
              "@id": profileId,
              url: pageUrl,
              name: t("seo.title"),
              description,
              inLanguage,
              isPartOf: { "@id": websiteId },
              mainEntity: { "@id": personId },
            },
            {
              "@type": "Person",
              "@id": personId,
              name: t("brand.fullName"),
              url: pageUrl,
              ...(personImageAbsolute ? { image: personImageAbsolute } : {}),
              jobTitle: t("seo.jobTitle"),
              description,
              sameAs,
              knowsAbout,
            },
          ];
        })()
      : [
          {
            "@type": "WebSite",
            name: t("brand.fullName"),
            description,
            inLanguage,
          },
          {
            "@type": "Person",
            name: t("brand.fullName"),
            jobTitle: t("seo.jobTitle"),
            description,
            sameAs,
            knowsAbout,
          },
        ];

    setJsonLdScript(JSON_LD_SCRIPT_ID, {
      "@context": "https://schema.org",
      "@graph": graph,
    });
  }, [t, i18n.language]);

  return null;
}
