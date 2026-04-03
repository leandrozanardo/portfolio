/** Canonical experience shape for the scroll narrative section. */
export type ExperienceEntry = {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly location: string;
  readonly responsibilities: readonly string[];
  readonly keyResults: readonly string[];
  readonly technologies: readonly string[];
};
