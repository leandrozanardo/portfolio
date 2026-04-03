import { useTranslation } from "react-i18next";
import {
  getValuePropositionIconAccent,
  VALUE_PROPOSITION_CARDS,
} from "../../data/valuePropositionCards"; // per-card pastel icon color on glyph only
import { MaterialIcon } from "../ui/MaterialIcon";

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
        <ul
          id="value-proposition-list"
          className="m-0 grid list-none grid-cols-1 gap-10 p-0 sm:grid-cols-2 xl:grid-cols-3 xl:gap-12"
        >
          {VALUE_PROPOSITION_CARDS.map(({ key, icon }) => {
            const { iconColor } = getValuePropositionIconAccent(key); // theme token → rgb(var(--...))
            return (
              <li key={key} className="space-y-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-surface-container-high ghost-border">
                  <MaterialIcon name={icon} color={iconColor} />
                </div>
                <h3 className="text-xl font-bold text-on-surface">
                  {t(`value.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {t(`value.${key}.body`)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
