import { useTranslation } from "react-i18next";

const JOBS = ["job1", "job2"] as const;

export function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="bg-surface-container-lowest px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
            <h2
              id="experience-heading"
              className="mb-4 text-4xl font-black tracking-[-0.03em] text-on-surface sm:text-5xl lg:mb-6"
            >
              {t("experience.title")}
            </h2>
            <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
              {t("experience.subtitle")}
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:col-span-8 lg:gap-12">
            {JOBS.map((jobKey, index) => (
              <div key={jobKey} className="group flex gap-6 sm:gap-8">
                <div className="flex flex-col items-center">
                  <div
                    className={`mt-3 size-3 rounded-full transition-all ${
                      index === 0
                        ? "bg-primary group-hover:shadow-[0_0_10px_#b3c5ff]"
                        : "bg-outline group-hover:bg-primary"
                    }`}
                    aria-hidden
                  />
                  <div className="mt-3 h-full w-px flex-1 bg-outline-variant/30" />
                </div>
                <div className="flex-1 pb-8 sm:pb-12">
                  <p
                    className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${
                      index === 0 ? "text-primary" : "text-outline"
                    }`}
                  >
                    {t(`experience.${jobKey}.period`)}
                  </p>
                  <h3 className="mb-1 text-xl font-black text-on-surface sm:text-2xl">
                    {t(`experience.${jobKey}.role`)}
                  </h3>
                  <p className="mb-4 text-base text-on-surface-variant sm:text-lg">
                    {t(`experience.${jobKey}.company`)}
                  </p>
                  <p className="max-w-2xl text-sm leading-relaxed text-on-surface-variant/80">
                    {t(`experience.${jobKey}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
