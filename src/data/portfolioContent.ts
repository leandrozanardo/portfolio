/** Hero uses legacy URL; case studies + about use public/images */

export const IMAGES = {
  heroWorkspace:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB-eEFXbdoQDYuG-p5SWC4POWWKAzJMhhpDwQ8ZE12KudWOOHnbMvpc5SPm_NjPW7toRpTDmWn3YyndYvhnPnNB58L2T2ypdyiiShyYOrxsnUcdWl4RowuHImItgfZ0MA5zCG60Q0qxgDW-TsX_lkLquvZZQn4AlMb9A1MMP2Gh95oQcHz54eTYSbLzxc4iJ-gHAlLUL2eNJpp5zmhDESa2VcgDdPYxK7EFtO6G409HsU23w4-vfr1kXOedwfrlyaZe8rfNrFa5zblA",
  /** Order: 1st pasted image — enterprise / modernization */
  caseEnterprise: "/images/case-enterprise.png",
  /** 2nd pasted image — fintech / global payments */
  caseFintech: "/images/case-fintech.png",
  /** 3rd pasted image — risk / real-time data */
  caseRisk: "/images/case-risk.png",
  /** Local asset: public/images/about-portrait.png */
  aboutPortrait: "/images/about-portrait.png",
} as const;

export type CaseStudyId = "enterprise" | "fintech" | "risk";

export type CaseStudyVisual = {
  id: CaseStudyId;
  imageSrc: string;
  tagTone: "primary" | "secondary" | "tertiary";
  detailKind: "challenge" | "outcome" | "challenge";
};

export const CASE_STUDIES: CaseStudyVisual[] = [
  {
    id: "enterprise",
    imageSrc: IMAGES.caseEnterprise,
    tagTone: "primary",
    detailKind: "challenge",
  },
  {
    id: "fintech",
    imageSrc: IMAGES.caseFintech,
    tagTone: "secondary",
    detailKind: "outcome",
  },
  {
    id: "risk",
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
