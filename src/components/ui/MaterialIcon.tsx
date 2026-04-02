type MaterialIconProps = {
  name: string;
  /** When false, icon is announced — use for decorative icons only */
  decorative?: boolean;
  className?: string;
  filled?: boolean;
};

export function MaterialIcon({
  name,
  decorative = true,
  className = "",
  filled = false,
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      style={
        filled
          ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
          : undefined
      }
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
    >
      {name}
    </span>
  );
}
