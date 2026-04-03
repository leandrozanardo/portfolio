type LogoMarkProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

const LOGO_SRC = "/images/logo.png"; // Public asset; replaces former SVG mark

export function LogoMark({ className = "size-6", "aria-hidden": ariaHidden = true }: LogoMarkProps) {
  return (
    <img
      src={LOGO_SRC}
      alt=""
      decoding="async"
      className={`block shrink-0 object-contain ${className}`.trim()}
      aria-hidden={ariaHidden}
    />
  );
}
