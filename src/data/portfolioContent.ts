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
  iconColorClass: string;
  dotClass: string;
};

export const STACK_CATEGORIES: StackCategoryMeta[] = [
  {
    id: "frontend",
    icon: "layers",
    iconColorClass: "text-primary",
    dotClass: "bg-primary/40",
  },
  {
    id: "backend",
    icon: "api",
    iconColorClass: "text-secondary",
    dotClass: "bg-secondary/40",
  },
  {
    id: "infra",
    icon: "cloud",
    iconColorClass: "text-tertiary",
    dotClass: "bg-tertiary/40",
  },
  {
    id: "database",
    icon: "database",
    iconColorClass: "text-outline",
    dotClass: "bg-outline/40",
  },
  {
    id: "design",
    icon: "draw",
    iconColorClass: "text-on-surface",
    dotClass: "bg-on-surface/40",
  },
];
