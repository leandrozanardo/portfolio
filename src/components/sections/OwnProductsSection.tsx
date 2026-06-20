import { useTranslation } from "react-i18next";
import { OWN_PRODUCTS } from "../../data/ownProducts";
import { ProductShowcaseCard } from "./ProductShowcaseCard";

export function OwnProductsSection() {
  const { t } = useTranslation();

  return (
    <section
      id="own-products"
      className="bg-surface-container-low px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
      aria-labelledby="own-products-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 lg:mb-20">
          <h2
            id="own-products-heading"
            className="text-4xl font-black tracking-[-0.03em] text-on-surface sm:text-5xl"
          >
            {t("ownProducts.title")}
          </h2>
          <p className="max-w-2xl text-base font-medium text-on-surface sm:text-lg">
            {t("ownProducts.subtitle")}
          </p>
          <p
            className="inline-flex w-fit items-center rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-primary"
          >
            {t("ownProducts.authorshipBadge")}
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
            {t("ownProducts.intro")}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:gap-10">
          {OWN_PRODUCTS.map((product) => (
            <ProductShowcaseCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
