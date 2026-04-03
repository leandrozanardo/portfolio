/** Hero + cases + about: self-hosted under public/images — CHANGED: local hero for LCP (same origin) */

export const IMAGES = {
  heroWorkspace: "/images/hero-workspace.jpg",
  /** 1st card — digital platforms / senior delivery */
  caseEnterprise: "/images/case-enterprise.png",
  /** 2nd card — headless commerce & integrations */
  caseFintech: "/images/case-fintech.png",
  /** 3rd card — APIs, reliability & operations */
  caseRisk: "/images/case-risk.png",
  /** Local asset: public/images/about-portrait.png */
  aboutPortrait: "/images/about-portrait.png",
} as const;

export type CaseStudyId = "platforms" | "commerce" | "apis";

export type CaseStudyVisual = {
  id: CaseStudyId;
  imageSrc: string;
  tagTone: "primary" | "secondary" | "tertiary";
  detailKind: "challenge" | "outcome" | "challenge";
};

export const CASE_STUDIES: CaseStudyVisual[] = [
  {
    id: "platforms",
    imageSrc: IMAGES.caseEnterprise,
    tagTone: "primary",
    detailKind: "challenge",
  },
  {
    id: "commerce",
    imageSrc: IMAGES.caseFintech,
    tagTone: "secondary",
    detailKind: "outcome",
  },
  {
    id: "apis",
    imageSrc: IMAGES.caseRisk,
    tagTone: "tertiary",
    detailKind: "challenge",
  },
];

export type StackCategoryId =
  | "frontend"
  | "backend"
  | "infra"
  | "database"
  | "design";

export type StackCategoryMeta = {
  id: StackCategoryId;
  icon: string;
  /** Icon + context paragraph color (matches stack accent slot). */
  accentTextClass: string;
  /** List marker fill using same hue as accentTextClass with alpha. */
  dotClass: string;
};

export const STACK_CATEGORIES: StackCategoryMeta[] = [
  {
    id: "frontend",
    icon: "layers",
    accentTextClass: "text-[rgb(var(--c-stack-accent-0))]",
    dotClass: "bg-[rgb(var(--c-stack-accent-0)/0.27)]",
  },
  {
    id: "backend",
    icon: "api",
    accentTextClass: "text-[rgb(var(--c-stack-accent-1))]",
    dotClass: "bg-[rgb(var(--c-stack-accent-1)/0.27)]",
  },
  {
    id: "infra",
    icon: "cloud",
    accentTextClass: "text-[rgb(var(--c-stack-accent-2))]",
    dotClass: "bg-[rgb(var(--c-stack-accent-2)/0.27)]",
  },
  {
    id: "database",
    icon: "database",
    accentTextClass: "text-[rgb(var(--c-stack-accent-3))]",
    dotClass: "bg-[rgb(var(--c-stack-accent-3)/0.27)]",
  },
  {
    id: "design",
    icon: "draw",
    accentTextClass: "text-[rgb(var(--c-stack-accent-4))]",
    dotClass: "bg-[rgb(var(--c-stack-accent-4)/0.27)]",
  },
];
