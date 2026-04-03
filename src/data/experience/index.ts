import { EXPERIENCES_EN } from "./en";
import { EXPERIENCES_ES } from "./es";
import { EXPERIENCES_PT_BR } from "./pt-BR";
import type { ExperienceEntry } from "./types";

export type { ExperienceEntry } from "./types";

/** Resolves the experience catalog for the active i18n language code. */
export function getExperienceEntries(language: string): readonly ExperienceEntry[] {
  const normalized = language.toLowerCase();
  if (normalized.startsWith("pt")) return EXPERIENCES_PT_BR;
  if (normalized.startsWith("es")) return EXPERIENCES_ES;
  return EXPERIENCES_EN;
}
