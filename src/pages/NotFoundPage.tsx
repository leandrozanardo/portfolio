import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { setMetaByName } from "../lib/documentMeta";

/**
 * 404 artwork: full canvas is NOT_FOUND_IMG_W × NOT_FOUND_IMG_H (px). The text sits in the bottom strip
 * TEXT_BAND_PX tall. When the image scales, that strip must stay TEXT_BAND_PX / NOT_FOUND_IMG_H of the
 * rendered height — i.e. the same percentage as on the asset (138 ÷ 1024 ≈ 13.48% of image height).
 */
const NOT_FOUND_IMG_W = 1536;
const NOT_FOUND_IMG_H = 1024;
const TEXT_BAND_PX = 138;
const NOT_FOUND_IMAGE_PATH = "/images/404.png";

/** Strip height: (138/1024) of the frame that matches the artwork (100% = rendered image height). */
const CAPTION_BAND_HEIGHT_CSS = `calc(100% * ${TEXT_BAND_PX} / ${NOT_FOUND_IMG_H})`;
/**
 * line-height cannot use % of parent height (CSS uses font-size). cqh is 1% of the size container’s
 * height here, so 100cqh * 138/1024 equals the same (138/1024) ratio as CAPTION_BAND_HEIGHT_CSS.
 */
const CAPTION_BAND_LINE_HEIGHT_CSS = `calc(100cqh * ${TEXT_BAND_PX} / ${NOT_FOUND_IMG_H})`;
const CAPTION_FONT_MAX_CSS = `calc(100cqh * ${TEXT_BAND_PX} / ${NOT_FOUND_IMG_H} * 0.46)`;

export function NotFoundPage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("notFound.seoTitle");
    setMetaByName("robots", "noindex, follow");
    return () => {
      setMetaByName(
        "robots",
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      );
    };
  }, [t, i18n.language]);

  return (
    <main
      id="main-content"
      lang={i18n.language === "pt-BR" ? "pt-BR" : i18n.language === "es" ? "es" : "en"}
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#0b1628]"
    >
      <div
        className="relative mx-auto aspect-[1536/1024] w-[min(100vw,calc(100dvh*1536/1024))] max-w-none shrink-0 shadow-2xl [container-type:size]"
      >
        <img
          src={NOT_FOUND_IMAGE_PATH}
          width={NOT_FOUND_IMG_W}
          height={NOT_FOUND_IMG_H}
          alt=""
          decoding="async"
          fetchPriority="high"
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 box-border w-full overflow-hidden px-3 sm:px-4"
          style={{ height: CAPTION_BAND_HEIGHT_CSS }}
        >
          <div
            className="flex h-full w-full min-w-0 max-w-full flex-row flex-wrap items-center justify-center gap-x-2 gap-y-0 font-body font-medium text-white/95 [text-shadow:0_1px_2px_rgb(0_0_0/0.65)] sm:gap-x-3"
            style={{
              lineHeight: CAPTION_BAND_LINE_HEIGHT_CSS,
              fontSize: `clamp(0.625rem, ${CAPTION_FONT_MAX_CSS}, 0.9375rem)`,
            }}
            role="status"
            aria-live="polite"
          >
            <span className="min-w-0 max-w-full shrink truncate text-center" title={t("notFound.headline")}>
              {t("notFound.headline")}
            </span>
            <span className="shrink-0 opacity-80" aria-hidden>
              ·
            </span>
            <Link
              to="/"
              className="shrink-0 text-center underline decoration-white/70 underline-offset-2 outline-none ring-offset-[#0b1628] transition hover:text-white hover:decoration-white focus-visible:ring-2 focus-visible:ring-white/80"
            >
              {t("notFound.ctaHome")}
            </Link>
          </div>
        </div>
      </div>
      <span className="sr-only">{t("a11y.notFoundIllustration")}</span>
    </main>
  );
}
