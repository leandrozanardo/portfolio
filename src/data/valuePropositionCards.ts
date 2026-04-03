/** Pastel RGB for the Material Symbol glyph only (tile stays neutral). */
export type ValuePropositionIconAccent = {
  iconColor: string;
};

/** Value proposition cards — single source of truth so all six render in the section grid. */
export const VALUE_PROPOSITION_CARDS = [
  { key: "legacy" as const, icon: "upgrade" },
  { key: "reliability" as const, icon: "verified_user" },
  { key: "observability" as const, icon: "monitoring" },
  { key: "fullstack" as const, icon: "layers" },
  { key: "alignment" as const, icon: "handshake" },
  { key: "ux" as const, icon: "design_services" },
] as const;

export type ValuePropositionCardKey = (typeof VALUE_PROPOSITION_CARDS)[number]["key"];

/** Thematic pastel icon hues — legacy, trust, monitoring, stack, people, design. */
const ICON_ACCENTS: Record<ValuePropositionCardKey, ValuePropositionIconAccent> = {
  legacy: { iconColor: "rgb(88, 108, 178)" },
  reliability: { iconColor: "rgb(56, 142, 136)" },
  observability: { iconColor: "rgb(44, 132, 205)" },
  fullstack: { iconColor: "rgb(98, 88, 195)" },
  alignment: { iconColor: "rgb(188, 124, 98)" },
  ux: { iconColor: "rgb(158, 108, 176)" },
};

/** Resolves pastel color for the card icon glyph. */
export function getValuePropositionIconAccent(key: ValuePropositionCardKey): ValuePropositionIconAccent {
  return ICON_ACCENTS[key];
}
