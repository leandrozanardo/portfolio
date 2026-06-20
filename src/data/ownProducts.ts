import { IMAGES } from "./portfolioContent";

export type OwnProductId = "nexionCore" | "sprintdeck";

export type OwnProductMeta = {
  id: OwnProductId;
  url: string;
  variant: "featured" | "secondary";
  imageSrc: string;
  tagTone: "primary" | "secondary" | "tertiary";
  chipKeys: readonly string[];
};

export const OWN_PRODUCTS: OwnProductMeta[] = [
  {
    id: "nexionCore",
    url: "https://nexion-core.com/",
    variant: "featured",
    imageSrc: IMAGES.productNexionCore,
    tagTone: "primary",
    chipKeys: [
      "soloAuthored",
      "b2bSaas",
      "multiportal",
      "dashboards",
      "nr1",
      "riskManagement",
      "uxUi",
      "fullStack",
    ],
  },
  {
    id: "sprintdeck",
    url: "https://sprintdeck.net/",
    variant: "secondary",
    imageSrc: IMAGES.productSprintdeck,
    tagTone: "secondary",
    chipKeys: [
      "soloAuthored",
      "planningPoker",
      "scrum",
      "realTime",
      "agileTeams",
      "productDesign",
      "fullStack",
    ],
  },
];
