import { useTranslation } from "react-i18next";
import { IMAGES } from "../../data/portfolioContent";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="bg-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* portrait frame: fixed dark well + overlay base so filters match dark theme in light mode */}
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-[rgb(var(--c-case-study-thumb-bg))] ghost-border group sm:max-w-lg lg:mx-0 lg:max-w-none lg:aspect-[4/5]">
          <img
            src={IMAGES.aboutPortrait}
            alt={t("a11y.aboutPortrait")}
            className="h-full w-full object-cover object-top brightness-75 grayscale transition-transform duration-700 group-hover:scale-105"
            width={1024}
            height={1024}
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(var(--c-about-portrait-overlay-from))] to-transparent"
            aria-hidden
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <h2
              id="about-heading"
              className="text-4xl font-black tracking-tight text-on-surface sm:text-5xl"
            >
              {t("about.title")}
            </h2>
            <p className="text-lg font-bold text-[rgb(var(--c-about-subtitle-emphasis))] sm:text-xl">
              {t("about.subtitle")}
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
              {t("about.p1")}
            </p>
            {/* Education background paragraph (split from intro for clearer layout). */}
            <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
              {t("about.formation")}
            </p>
            <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
              {t("about.p2")}
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-6 sm:flex-row sm:gap-8 sm:pt-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold uppercase tracking-widest text-on-surface">
                {t("about.locationLabel")}
              </p>
              <p className="text-on-surface-variant">
                {t("about.locationValue")}{" "}
                <span className="text-xs text-outline">{t("about.locationGlobal")}</span>
              </p>
            </div>
            <div className="flex flex-col gap-1 border-t border-outline-variant/20 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <p className="text-sm font-bold uppercase tracking-widest text-on-surface">
                {t("about.availabilityLabel")}
              </p>
              <p className="text-on-surface-variant">{t("about.availabilityValue")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
