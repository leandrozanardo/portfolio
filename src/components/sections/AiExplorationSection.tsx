import { useTranslation } from "react-i18next";
import { MaterialIcon } from "../ui/MaterialIcon";

const REPERTOIRE_CARDS = [
  { key: "llm" as const, icon: "smart_toy" },
  { key: "assisted" as const, icon: "terminal" },
  { key: "mcpRules" as const, icon: "account_tree" },
  { key: "agentEcosystems" as const, icon: "groups" },
  { key: "image" as const, icon: "image_search" },
  { key: "productDirection" as const, icon: "trending_up" },
];

export function AiExplorationSection() {
  const { t } = useTranslation();

  return (
    <section
      id="ai-exploration"
      className="bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
      aria-labelledby="ai-exploration-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12 lg:mb-14">
          <div className="flex items-center gap-3">
            <span className="size-2 shrink-0 rounded-full bg-primary" aria-hidden />
            <h2
              id="ai-exploration-heading"
              className="text-3xl font-black tracking-tight text-on-surface sm:text-4xl lg:text-5xl lg:tracking-[-0.03em]"
            >
              {t("aiExploration.title")}
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
            {t("aiExploration.intro")}
          </p>
          <p className="max-w-3xl text-base font-medium leading-relaxed text-on-surface sm:text-lg">
            {t("aiExploration.introBridge")}
          </p>
        </div>

        <div className="mb-12 sm:mb-14 lg:mb-16">
          <div className="rounded-2xl bg-surface-container-low p-6 ghost-border sm:p-8 lg:p-10">
            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-on-surface sm:mb-8 sm:text-2xl">
              <span className="inline-flex text-primary" aria-hidden>
                <MaterialIcon name="psychology" />
              </span>
              {t("aiExploration.usageTitle")}
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {t("aiExploration.dailyLabel")}
                </p>
                <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
                  {t("aiExploration.dailyBody")}
                </p>
              </div>
              <div className="space-y-3 border-outline-variant/20 md:border-l md:pl-10 lg:pl-12">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {t("aiExploration.studyLabel")}
                </p>
                <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
                  {t("aiExploration.studyBody")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <h4 className="text-lg font-bold tracking-tight text-on-surface sm:text-xl">
            {t("aiExploration.repertoireTitle")}
          </h4>
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-6">
            {REPERTOIRE_CARDS.map(({ key, icon }) => (
              <li
                key={key}
                className="glass-card flex flex-col gap-3 rounded-xl p-5 transition-all hover:border-primary/30 sm:gap-4 sm:p-6"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-surface-container-high text-primary">
                  <MaterialIcon name={icon} />
                </div>
                <div>
                  <h5 className="mb-1.5 text-base font-bold text-on-surface">
                    {t(`aiExploration.cards.${key}.title`)}
                  </h5>
                  <p className="text-xs leading-relaxed text-on-surface-variant">
                    {t(`aiExploration.cards.${key}.body`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 border-t border-outline-variant/10 pt-8 text-center sm:mt-16 sm:pt-10">
          <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-on-surface sm:text-lg">
            {t("aiExploration.quote")}
          </p>
        </div>
      </div>
    </section>
  );
}
