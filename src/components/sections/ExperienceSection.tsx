import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getExperienceEntries } from "../../data/experience";
import type { ExperienceEntry } from "../../data/experience";

/** Visible window height — cards slide vertically behind this clip (no inner scroll). */
const VIEWPORT_PX = 720;

/** Each experience card block height inside the sliding strip (px). */
const CARD_PX = 680;

/** Gap between stacked cards in the strip (px). */
const CARD_GAP_PX = 16;

/** Outer margin around each card slab (px); included in strip height math. */
const CARD_MARGIN_PX = 10;

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

/** Card block height in the strip (card + vertical margin). */
function cardBlockHeightPx(): number {
  return CARD_PX + 2 * CARD_MARGIN_PX;
}

/**
 * Vertical translate so the center of card `index` aligns with the viewport center (horizontal via items-center).
 * Replaces linear index/(n-1) interpolation — CHANGED: per-index centering for active card.
 */
function translateYToCenterCard(index: number, itemCount: number): number {
  if (itemCount <= 0) return 0;
  const block = cardBlockHeightPx();
  const step = block + CARD_GAP_PX;
  const cardCenterY = index * step + block / 2;
  return VIEWPORT_PX / 2 - cardCenterY;
}

function usePrefersReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

type ViewportCardProps = {
  entry: ExperienceEntry;
  index: number;
  activeIndex: number;
  labels: {
    responsibilities: string;
    keyResults: string;
    technologies: string;
  };
};

/** Single card slab in the vertical strip (fixed height; clipped by parent overflow-hidden). */
function ExperienceViewportCard({ entry, index, activeIndex, labels }: ViewportCardProps) {
  const isDominant = index === activeIndex; 

  return (
    <article
      className={`origin-center flex w-full max-w-4xl shrink-0 flex-col overflow-hidden rounded-2xl bg-surface-container-low p-4 sm:p-6 lg:p-8 dark:bg-surface-container-low will-change-[transform,opacity] transition-[transform,opacity] duration-500 ease-out ${
        isDominant
          ? "pointer-events-auto scale-100 opacity-100 shadow-[0_20px_50px_-24px_rgb(var(--c-primary)/0.18)]"
          : "pointer-events-none scale-90 opacity-0"
      }`}
      style={{
        height: CARD_PX,
        minHeight: CARD_PX,
        margin: CARD_MARGIN_PX,
      }}
      aria-hidden={!isDominant}
    >
      <div className="flex h-full min-h-0 flex-col">
        <ExperienceCardBody
          entry={entry}
          labels={labels}
          layout="pinned"
          titleId={`exp-title-${entry.id}`}
          hideTitleId={!isDominant}
        />
      </div>
    </article>
  );
}

function ExperienceCardBody({
  entry,
  labels,
  layout = "pinned",
  titleId,
  hideTitleId,
}: {
  entry: ExperienceEntry;
  labels: { responsibilities: string; keyResults: string; technologies: string };
  layout?: "pinned" | "relaxed";
  titleId: string;
  hideTitleId?: boolean;
}) {
  const isPinned = layout === "pinned";
  return (
    <div
      className={`flex min-h-0 flex-1 flex-col gap-4 ${isPinned ? "overflow-hidden" : "overflow-visible"}`}
    >
      <header className="shrink-0">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
          {entry.period}
        </p>
        <h3
          id={hideTitleId ? undefined : titleId}
          className="text-lg font-black tracking-tight text-on-surface sm:text-xl lg:text-2xl"
        >
          {entry.role}
        </h3>
        <p className="text-base font-semibold text-on-surface sm:text-lg">{entry.company}</p>
        <p className="text-xs text-on-surface-variant sm:text-sm">{entry.location}</p>
      </header>

      <div
        className={`grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 ${
          isPinned ? "overflow-hidden" : ""
        }`}
      >
        <section
          className={isPinned ? "min-h-0 overflow-hidden" : ""}
          aria-label={labels.responsibilities}
        >
          <h4 className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-outline">
            {labels.responsibilities}
          </h4>
          <ul
            className={`list-disc space-y-1.5 pl-4 text-[12px] leading-snug text-on-surface/95 sm:text-[13px] sm:leading-relaxed ${
              isPinned ? "overflow-hidden" : "space-y-3"
            }`}
          >
            {entry.responsibilities.map((line, i) => (
              <li key={`${entry.id}-r-${i}`}>{line}</li>
            ))}
          </ul>
        </section>

        <section
          className={isPinned ? "min-h-0 overflow-hidden" : ""}
          aria-label={labels.keyResults}
        >
          <h4 className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary">
            {labels.keyResults}
          </h4>
          <ul
            className={`list-disc space-y-1.5 pl-4 text-[12px] leading-snug text-on-surface/95 sm:text-[13px] sm:leading-relaxed ${
              isPinned ? "overflow-hidden" : "space-y-3"
            }`}
          >
            {entry.keyResults.map((line, i) => (
              <li key={`${entry.id}-k-${i}`}>{line}</li>
            ))}
          </ul>
        </section>
      </div>

      <section
        className={`shrink-0 pt-1 ${isPinned ? "overflow-hidden" : ""}`}
        aria-label={labels.technologies}
      >
        <h4 className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-outline">
          {labels.technologies}
        </h4>
        <ul
          className={`flex flex-wrap gap-1.5 ${isPinned ? "max-h-[4.5rem] overflow-hidden sm:max-h-[5rem]" : ""}`}
        >
          {entry.technologies.map((tech) => (
            <li key={tech}>
              <span className="inline-block rounded-full border border-outline-variant/25 bg-surface-container-high px-2 py-0.5 text-[10px] font-medium text-on-surface-variant sm:text-xs">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ReducedMotionExperienceList({
  entries,
  labels,
}: {
  entries: readonly ExperienceEntry[];
  labels: { responsibilities: string; keyResults: string; technologies: string };
}) {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      {entries.map((entry) => (
        <article
          key={entry.id}
          className="rounded-2xl border border-outline-variant/15 bg-surface-container-low p-6 ghost-border sm:p-8"
          aria-labelledby={`exp-title-${entry.id}`}
        >
          <ExperienceCardBody
            entry={entry}
            labels={labels}
            layout="relaxed"
            titleId={`exp-title-${entry.id}`}
          />
        </article>
      ))}
    </div>
  );
}

export function ExperienceSection() {
  const { t, i18n } = useTranslation();
  const entries = useMemo(() => getExperienceEntries(i18n.language), [i18n.language]);
  const reduceMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const activeIndexRef = useRef(0);
  const carouselEnabled = !reduceMotion && entries.length > 0;

  const n = entries.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const translateYPx = translateYToCenterCard(activeIndex, n);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  /** Reset slide when language or catalog size changes (avoid out-of-range index). */
  useEffect(() => {
    setActiveIndex((prev) => clamp(prev, 0, Math.max(0, n - 1)));
  }, [i18n.language, n]);

  const labels = useMemo(
    () => ({
      responsibilities: t("experience.labels.responsibilities"),
      keyResults: t("experience.labels.keyResults"),
      technologies: t("experience.labels.technologies"),
    }),
    [t],
  );

  /** Nav / keyboard: move strip inside viewport only — does not scroll the page. */
  const goToIndex = useCallback((index: number) => {
    if (n <= 0) return;
    setActiveIndex(clamp(Math.round(index), 0, Math.max(0, n - 1)));
  }, [n]);

  const stepBy = useCallback(
    (direction: 1 | -1) => {
      setActiveIndex((prev) => clamp(prev + direction, 0, Math.max(0, n - 1)));
    },
    [n],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      const sec = sectionRef.current;
      if (!sec) return;
      const r = sec.getBoundingClientRect();
      const visible = r.top < window.innerHeight * 0.88 && r.bottom > window.innerHeight * 0.12;
      if (!visible) return;
      e.preventDefault();
      stepBy(e.key === "ArrowDown" ? 1 : -1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [stepBy]);

  const stripTransitionClass = reduceMotion ? "" : "transition-transform duration-500 ease-out";

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="scroll-mt-24 bg-surface-container-lowest px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-8 max-w-3xl lg:mb-10">
          <h2
            id="experience-heading"
            className="mb-3 text-4xl font-black tracking-[-0.03em] text-on-surface sm:text-5xl"
          >
            {t("experience.title")}
          </h2>
          <p className="text-base leading-relaxed text-on-surface-variant sm:text-lg">
            {t("experience.subtitle")}
          </p>
          {!reduceMotion && n > 1 ? (
            <p className="mt-3 text-xs text-on-surface-variant/80 sm:text-sm">{t("experience.scrollHint")}</p>
          ) : null}
        </header>

        {carouselEnabled ? (
          <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
            <nav
              className="flex shrink-0 flex-row items-center justify-center gap-2 lg:w-12 lg:flex-col lg:justify-center lg:self-start"
              aria-label={t("experience.progressNavLabel")}
            >
              {entries.map((e, i) => {
                const filled = i === activeIndex;
                return (
                  <button
                    key={e.id}
                    type="button"
                    className={`size-2.5 rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:size-3 ${
                      filled
                        ? "scale-125 bg-primary shadow-[0_0_12px_rgb(var(--c-primary)/0.5)]"
                        : "bg-outline/40 hover:bg-outline/60"
                    }`}
                    aria-current={filled ? "step" : undefined}
                    aria-label={t("experience.jumpToLabel", { company: e.company })}
                    onClick={() => goToIndex(i)}
                  />
                );
              })}
            </nav>

            {/* Viewport: overflow hidden; strip translateY driven by nav state (no window scroll). */}
            <div
              className="relative min-w-0 flex-1 overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container/30"
              style={{
                height: VIEWPORT_PX,
                maxHeight: "min(720px, calc(100dvh - 5.5rem))",
              }}
            >
              <div
                className={`flex w-full min-w-0 flex-col items-center will-change-transform ${stripTransitionClass}`}
                style={{
                  gap: CARD_GAP_PX,
                  transform: `translate3d(0, ${translateYPx}px, 0)`,
                }}
              >
                {entries.map((entry, index) => (
                  <ExperienceViewportCard
                    key={entry.id}
                    entry={entry}
                    index={index}
                    activeIndex={activeIndex}
                    labels={labels}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <ReducedMotionExperienceList entries={entries} labels={labels} />
        )}

        {carouselEnabled ? (
          <span className="sr-only" aria-live="polite" aria-atomic="true">
            {t("experience.carouselStatus", {
              current: activeIndex + 1,
              total: n,
              company: entries[activeIndex]?.company ?? "",
            })}
          </span>
        ) : null}
      </div>
    </section>
  );
}
