/** Icon fill for Material Symbol (tile stays neutral); RGB via CSS vars — light/dark in global.css. */
export type ValuePropositionIconAccent = {
  iconColor: string;
};

/** Value proposition cards — single source of truth so all six render in the section grid. */
export const VALUE_PROPOSITION_CARDS = [
  { key: "alignment" as const, icon: "handshake" },
  { key: "fullstack" as const, icon: "layers" },
  { key: "ux" as const, icon: "design_services" },
  { key: "reliability" as const, icon: "verified_user" },
  { key: "observability" as const, icon: "monitoring" },
  { key: "legacy" as const, icon: "upgrade" },
] as const;

export type ValuePropositionCardKey = (typeof VALUE_PROPOSITION_CARDS)[number]["key"];

/** Maps card key to theme token (space-separated R G B in :root / .dark). */
const ICON_CSS_VARS: Record<ValuePropositionCardKey, string> = {
  alignment: "--c-value-prop-icon-alignment",
  fullstack: "--c-value-prop-icon-fullstack",
  ux: "--c-value-prop-icon-ux",
  reliability: "--c-value-prop-icon-reliability",
  observability: "--c-value-prop-icon-observability",
  legacy: "--c-value-prop-icon-legacy",
};

/** Resolves icon color for the card glyph (inline style rgb(var(--token))). */
export function getValuePropositionIconAccent(
  key: ValuePropositionCardKey,
): ValuePropositionIconAccent {
  const token = ICON_CSS_VARS[key];
  return { iconColor: `rgb(var(${token}))` };
}
