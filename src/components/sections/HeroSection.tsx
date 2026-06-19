import { useTranslation } from "react-i18next";
import { CONTACT_MAILTO, getCvPath, SOCIAL_URLS } from "../../lib/constants";
import { IMAGES } from "../../data/portfolioContent";
import { WhatsAppGlyph } from "../ui/icons/WhatsAppGlyph";
import { LinkedInIcon } from "../ui/LinkedInIcon";
import { MaterialIcon } from "../ui/MaterialIcon";

export function HeroSection() {
  const { t, i18n } = useTranslation();
  const cvPath = getCvPath(i18n.language);

  return (
    <section
      className="relative flex min-h-[min(819px,100svh)] items-center overflow-hidden bg-surface-container-lowest px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
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
              href={cvPath}
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
                href={SOCIAL_URLS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-6 shrink-0 items-center justify-center text-on-surface-variant transition-colors hover:text-[rgb(var(--color-light-brand-primary))] dark:hover:text-[rgb(var(--color-dark-brand-primary))]"
                aria-label={t("a11y.linkedinProfile")}
              >
                <LinkedInIcon className="h-4 w-4 shrink-0" />
              </a>
              <a
                href={CONTACT_MAILTO}
                className="inline-flex size-6 shrink-0 items-center justify-center text-on-surface-variant transition-colors hover:text-[rgb(var(--color-light-brand-primary))] dark:hover:text-[rgb(var(--color-dark-brand-primary))]"
                aria-label={t("a11y.contactEmail")}
              >
                <MaterialIcon
                  name="mark_email_unread"
                  className="text-xl leading-none"
                />
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
