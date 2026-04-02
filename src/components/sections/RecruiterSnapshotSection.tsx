import { useTranslation } from "react-i18next";

const METRICS = [
  { labelKey: "snapshot.experience" as const, valueKey: "snapshot.experienceValue" as const },
  { labelKey: "snapshot.coreFocus" as const, valueKey: "snapshot.coreFocusValue" as const },
  { labelKey: "snapshot.expertise" as const, valueKey: "snapshot.expertiseValue" as const },
  { labelKey: "snapshot.foundation" as const, valueKey: "snapshot.foundationValue" as const },
];

export function RecruiterSnapshotSection() {
  const { t } = useTranslation();

  return (
    <section
      className="border-y border-outline-variant/10 bg-surface-container-low"
      aria-label={t("a11y.recruiterSnapshot")}
    >
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {METRICS.map(({ labelKey, valueKey }) => (
            <div key={labelKey} className="flex flex-col gap-1">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                {t(labelKey)}
              </p>
              <p className="text-2xl font-black tracking-tight text-on-surface sm:text-3xl">
                {t(valueKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
