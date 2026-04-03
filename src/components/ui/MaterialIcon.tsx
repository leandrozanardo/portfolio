import type { CSSProperties } from "react";

type MaterialIconProps = {
  name: string;
  /** When false, icon is announced — use for decorative icons only */
  decorative?: boolean;
  className?: string;
  filled?: boolean;
  /** Glyph color only (e.g. pastel rgb); does not affect parent box. */
  color?: string;
};

export function MaterialIcon({
  name,
  decorative = true,
  className = "",
  filled = false,
  color,
}: MaterialIconProps) {
  const style: CSSProperties | undefined =
    filled || color
      ? {
          ...(filled
            ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" as const }
            : {}),
          ...(color ? { color } : {}),
        }
      : undefined;

  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      style={style}
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
    >
      {name}
    </span>
  );
}
