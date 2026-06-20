import { useTranslation } from "react-i18next";
import type { OwnProductMeta } from "../../data/ownProducts";
import { MaterialIcon } from "../ui/MaterialIcon";

/** Tag colors from global.css (--c-case-tag-*). */
const TAG_STYLES = {
  primary:
    "text-[rgb(var(--c-case-tag-primary))] border-[rgb(var(--c-case-tag-primary)_/_0.35)]",
  secondary:
    "text-[rgb(var(--c-case-tag-secondary))] border-[rgb(var(--c-case-tag-secondary)_/_0.35)]",
  tertiary:
    "text-[rgb(var(--c-case-tag-tertiary))] border-[rgb(var(--c-case-tag-tertiary)_/_0.35)]",
} as const;

const CARD_GRID_CLASS = "flex flex-col lg:grid lg:grid-cols-12 lg:items-stretch";

type ProductShowcaseCardProps = {
  product: OwnProductMeta;
};

export function ProductShowcaseCard({ product }: ProductShowcaseCardProps) {
  const { t } = useTranslation();
  const base = `ownProducts.${product.id}` as const;
  const isFeatured = product.variant === "featured";
  const imageSide = isFeatured ? "left" : "right";

  return (
    <article
      className={`group overflow-hidden rounded-xl bg-surface-container-low ghost-border transition-all hover:bg-surface-bright ${CARD_GRID_CLASS}`}
    >
      <ProductCardContent
        product={product}
        base={base}
        isFeatured={isFeatured}
        imageSide={imageSide}
        t={t}
      />

      <ProductVisualPanel
        imageSrc={product.imageSrc}
        imageAlt={t(`${base}.imageAlt`)}
        imageSide={imageSide}
      />
    </article>
  );
}

function ProductCardContent({
  product,
  base,
  isFeatured,
  imageSide,
  t,
}: {
  product: OwnProductMeta;
  base: `ownProducts.${OwnProductMeta["id"]}`;
  isFeatured: boolean;
  imageSide: "left" | "right";
  t: ReturnType<typeof useTranslation>["t"];
}) {
  const desktopContentClass =
    imageSide === "left"
      ? "lg:col-span-7 lg:col-start-6 lg:row-start-1"
      : "lg:col-span-7 lg:col-start-1 lg:row-start-1";

  return (
    <div
      className={`order-1 flex flex-col gap-6 bg-surface-container-low p-6 sm:p-8 lg:justify-center ${desktopContentClass}`}
    >
      <div className="space-y-3">
        <span
          className={`inline-block rounded border px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] ${TAG_STYLES[product.tagTone]}`}
        >
          {t(`${base}.tag`)}
        </span>
        <h3 className="text-xl font-bold text-on-surface sm:text-2xl">{t(`${base}.name`)}</h3>
        <p className="text-base font-semibold leading-snug text-on-surface sm:text-lg">
          {t(`${base}.headline`)}
        </p>
        <p className="text-sm leading-relaxed text-on-surface-variant">
          {t(`${base}.description`)}
        </p>
      </div>

      <div
        className={`grid gap-4 border-t border-outline-variant/10 pt-4 ${
          isFeatured ? "sm:grid-cols-3" : "sm:grid-cols-2 xl:grid-cols-3"
        }`}
      >
        <MetaBlock label={t("ownProducts.roleLabel")} body={t(`${base}.role`)} />
        <MetaBlock label={t("ownProducts.techFocusLabel")} body={t(`${base}.techFocus`)} />
        <MetaBlock
          label={t("ownProducts.valueLabel")}
          body={t(`${base}.value`)}
          className={isFeatured ? "" : "sm:col-span-2 xl:col-span-1"}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {product.chipKeys.map((chipKey) => (
          <span
            key={chipKey}
            className={
              chipKey === "soloAuthored"
                ? "rounded-md border border-primary/35 bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary"
                : "rounded-md border border-outline-variant/20 bg-surface-container-high px-2.5 py-1 text-[11px] font-medium text-on-surface-variant"
            }
          >
            {t(`${base}.chips.${chipKey}`)}
          </span>
        ))}
      </div>

      <div className="pt-1">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-bold tracking-wide text-on-primary transition-all hover:shadow-[0_0_25px_rgba(179,197,255,0.4)] motion-reduce:transition-none"
        >
          {t("ownProducts.cta")}
          <MaterialIcon name="open_in_new" className="text-lg" />
        </a>
      </div>
    </div>
  );
}

function ProductVisualPanel({
  imageSrc,
  imageAlt,
  imageSide,
}: {
  imageSrc: string;
  imageAlt: string;
  imageSide: "left" | "right";
}) {
  const layoutClass =
    imageSide === "left"
      ? "order-2 border-t border-outline-variant/10 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:border-r lg:border-t-0"
      : "order-2 border-t border-outline-variant/10 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:border-l lg:border-t-0";

  return (
    <div
      className={`relative flex min-h-[220px] items-center justify-center overflow-hidden bg-surface-container-low p-4 sm:p-6 lg:min-h-full lg:self-stretch lg:p-8 ${layoutClass} aspect-[16/10] lg:aspect-auto`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="relative max-h-full max-w-full object-contain object-center opacity-90 transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
        loading="lazy"
      />
    </div>
  );
}

function MetaBlock({
  label,
  body,
  className = "",
}: {
  label: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-outline">
        {label}
      </p>
      <p className="text-xs leading-relaxed text-on-surface-variant">{body}</p>
    </div>
  );
}
