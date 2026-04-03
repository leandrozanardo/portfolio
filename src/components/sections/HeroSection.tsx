import { useTranslation } from "react-i18next";
import { CONTACT_MAILTO, CV_PATH, SOCIAL_URLS } from "../../lib/constants";
import { IMAGES } from "../../data/portfolioContent";
import { MaterialIcon } from "../ui/MaterialIcon";

/** WhatsApp brand glyph; uses currentColor for theme-aware hover on parent link. */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex min-h-[min(819px,100svh)] items-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="hero-glow absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-8 lg:col-span-7 lg:gap-10">
          <div className="space-y-6">
            <h1
              id="hero-heading"
              className="text-4xl font-black leading-[1.1] tracking-[-0.04em] text-on-surface sm:text-5xl lg:text-6xl"
            >
              {t("hero.titleBefore")}{" "}
              <span className="text-primary">{t("hero.titleHighlight")}</span>{" "}
              {t("hero.titleAfter")}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant sm:text-xl">
              {t("hero.subtitle")}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-6 py-3.5 text-base font-bold tracking-wide text-on-primary transition-all hover:shadow-[0_0_25px_rgba(179,197,255,0.4)] sm:px-8 sm:py-4"
            >
              {t("hero.ctaCaseStudies")}
            </a>
            <a
              href={CV_PATH}
              download
              className="rounded-lg bg-surface-container-high px-6 py-3.5 text-base font-bold tracking-wide text-on-surface ghost-border transition-all sm:px-8 sm:py-4"
            >
              {t("hero.ctaResume")}
            </a>
            <div className="ml-0 flex flex-wrap items-center gap-x-3 gap-y-1 sm:ml-4">
              <span className="text-xs font-bold uppercase tracking-widest text-outline">
                {t("hero.connect")}
              </span>
              <a
                href={SOCIAL_URLS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-6 shrink-0 items-center justify-center text-on-surface-variant transition-colors hover:text-[rgb(var(--color-light-brand-primary))] dark:hover:text-[rgb(var(--color-dark-brand-primary))]"
                aria-label={t("a11y.openWhatsApp")}
              >
                <WhatsAppGlyph className="h-4 w-4 shrink-0" />
              </a>
              <a
                href={CONTACT_MAILTO}
                className="inline-flex size-6 shrink-0 items-center justify-center text-on-surface-variant transition-colors hover:text-[rgb(var(--color-light-brand-primary))] dark:hover:text-[rgb(var(--color-dark-brand-primary))]"
                aria-label={t("a11y.contactEmail")}
              >
                <MaterialIcon name="mark_email_unread" className="text-xl leading-none" />
              </a>
              <a
                href={SOCIAL_URLS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-6 shrink-0 items-center justify-center text-on-surface-variant transition-colors hover:text-[rgb(var(--color-light-brand-primary))] dark:hover:text-[rgb(var(--color-dark-brand-primary))]"
                aria-label={t("a11y.githubProfile")}
              >
                <MaterialIcon name="terminal" filled className="text-xl leading-none" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="aspect-square w-full rounded-full border border-outline-variant/20 p-6 sm:p-8">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-surface-container-low ghost-border">
              <div
                className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest to-transparent opacity-60"
                aria-hidden
              />
              <img
                src={IMAGES.heroWorkspace}
                alt={t("a11y.heroWorkspace")}
                className="h-full w-full object-cover opacity-80 grayscale"
                width={600}
                height={600}
                sizes="(max-width: 1024px) 90vw, 600px"
                decoding="async"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 left-0 flex items-center gap-4 rounded-xl bg-surface-container-high/80 px-4 py-3 ghost-border backdrop-blur-md sm:-bottom-6 sm:-left-2 sm:px-6 sm:py-4 lg:-left-6">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary-container/30 text-primary">
              <MaterialIcon name="verified" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-tight text-on-surface">
                {t("hero.badgeTitle")}
              </p>
              <p className="text-xs font-medium text-outline">
                {t("hero.badgeSubtitle")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
