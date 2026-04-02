import { useTranslation } from "react-i18next";
import { MaterialIcon } from "../ui/MaterialIcon";

const CARDS = [
  { key: "legacy" as const, icon: "upgrade" },
  { key: "maintainable" as const, icon: "settings_suggest" },
  { key: "ux" as const, icon: "visibility" },
];

export function ValuePropositionSection() {
  const { t } = useTranslation();

  return (
    <section
      className="bg-surface-container-lowest px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
      aria-labelledby="value-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <h2
          id="value-heading"
          className="mb-10 text-3xl font-black text-on-surface sm:mb-14 lg:mb-16"
        >
          {t("value.title")}
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {CARDS.map(({ key, icon }) => (
            <div key={key} className="space-y-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-surface-container-high text-primary ghost-border">
                <MaterialIcon name={icon} />
              </div>
              <h3 className="text-xl font-bold text-on-surface">
                {t(`value.${key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {t(`value.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
