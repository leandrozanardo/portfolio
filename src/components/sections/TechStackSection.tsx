import { useTranslation } from "react-i18next";
import { STACK_CATEGORIES, type StackCategoryMeta } from "../../data/portfolioContent";
import { MaterialIcon } from "../ui/MaterialIcon";

export function TechStackSection() {
  const { t } = useTranslation();

  return (
    <section
      id="stack"
      className="bg-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2
            id="stack-heading"
            className="mb-3 text-4xl font-black tracking-[-0.03em] text-on-surface sm:text-5xl lg:mb-4"
          >
            {t("stack.title")}
          </h2>
          <p className="text-base text-on-surface-variant sm:text-lg">
            {t("stack.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {STACK_CATEGORIES.map((cat) => (
            <StackCategoryCard key={cat.id} meta={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCategoryCard({ meta }: { meta: StackCategoryMeta }) {
  const { t } = useTranslation();
  const id = meta.id;
  const raw = t(`stack.${id}.items`, { returnObjects: true });
  const items = Array.isArray(raw) ? (raw as string[]) : [];

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-surface-container-low p-6 ghost-border sm:p-8">
      <div className="flex items-center gap-3">
        <MaterialIcon name={meta.icon} className={meta.iconColorClass} />
        <h3 className="text-lg font-bold tracking-tight text-on-surface">
          {t(`stack.${id}.title`)}
        </h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center justify-between text-sm text-on-surface-variant"
          >
            <span>{item}</span>
            <span
              className={`size-1.5 shrink-0 rounded-full ${meta.dotClass}`}
              aria-hidden
            />
          </li>
        ))}
      </ul>
      {/* One-line usage context below skill list (italic, not a list item). */}
      <p className="text-xs italic leading-relaxed text-outline">
        {t(`stack.${id}.context`)}
      </p>
    </div>
  );
}
