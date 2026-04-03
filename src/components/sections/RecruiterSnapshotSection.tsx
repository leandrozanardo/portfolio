import { useTranslation } from "react-i18next";

const METRICS = [
  {
    labelKey: "snapshot.experience" as const,
    valueKey: "snapshot.experienceValue" as const,
    captionKey: "snapshot.experienceCaption" as const,
  },
  {
    labelKey: "snapshot.coreFocus" as const,
    valueKey: "snapshot.coreFocusValue" as const,
    captionKey: "snapshot.coreFocusCaption" as const,
  },
  {
    // Label "Base": pairs with engineering + design headline (swapped vs fourth column).
    labelKey: "snapshot.foundation" as const,
    valueKey: "snapshot.expertiseValue" as const,
    captionKey: "snapshot.expertiseCaption" as const,
  },
  {
    // Label "Expertise": pairs with legacy headline (swapped vs third column).
    labelKey: "snapshot.expertise" as const,
    valueKey: "snapshot.foundationValue" as const,
    captionKey: "snapshot.foundationCaption" as const,
  },
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
          {METRICS.map(({ labelKey, valueKey, captionKey }) => (
            <div key={labelKey} className="flex flex-col gap-1">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                {t(labelKey)}
              </p>
              <p className="text-2xl font-black tracking-tight text-on-surface sm:text-3xl">
                {t(valueKey)}
              </p>
              <p className="mt-1.5 text-[0.6875rem] font-medium leading-snug text-outline sm:text-xs">
                {t(captionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
