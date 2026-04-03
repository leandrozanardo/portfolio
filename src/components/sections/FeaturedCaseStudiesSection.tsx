import { useTranslation } from "react-i18next";
import {
  CASE_STUDIES,
  type CaseStudyId,
  type CaseStudyVisual,
} from "../../data/portfolioContent";

const TAG_STYLES = {
  primary: "text-primary border-primary/30",
  secondary: "text-secondary border-secondary/30",
  tertiary: "text-tertiary border-tertiary/30",
} as const;

export function FeaturedCaseStudiesSection() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="bg-surface px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 lg:mb-20">
          <h2
            id="projects-heading"
            className="text-4xl font-black tracking-[-0.03em] text-on-surface sm:text-5xl"
          >
            {t("caseStudies.title")}
          </h2>
          <p className="max-w-2xl text-base text-on-surface-variant sm:text-lg">
            {t("caseStudies.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study }: { study: CaseStudyVisual }) {
  const { t } = useTranslation();
  const id = study.id as CaseStudyId;
  const base = `caseStudies.${id}` as const;
  const detailLabel =
    study.detailKind === "outcome"
      ? t("caseStudies.outcome")
      : t("caseStudies.challenge");

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-low ghost-border transition-all hover:bg-surface-bright">
      {/* case study thumb: fixed dark well so half-opacity image matches dark-theme blend in light mode */}
      <div className="aspect-[16/10] overflow-hidden bg-[rgb(var(--c-case-study-thumb-bg))]">
        <img
          src={study.imageSrc}
          alt=""
          className="h-full w-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-105"
          width={640}
          height={400}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span
              className={`rounded border px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] ${TAG_STYLES[study.tagTone]}`}
            >
              {t(`${base}.tag`)}
            </span>
          </div>
          <h3 className="text-xl font-bold text-on-surface sm:text-2xl">
            {t(`${base}.title`)}
          </h3>
          <p className="text-sm leading-relaxed text-on-surface-variant">
            {t(`${base}.description`)}
          </p>
        </div>
        <div className="space-y-4 border-t border-outline-variant/10 pt-4">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-outline">
              {detailLabel}
            </p>
            <p className="text-xs text-on-surface-variant">{t(`${base}.detail`)}</p>
          </div>
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-outline">
              {t("caseStudies.stack")}
            </p>
            <p className="text-xs font-medium text-on-surface">
              {t(`${base}.stack`)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
