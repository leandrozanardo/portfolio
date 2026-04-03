import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDisclosureFocus } from "../../hooks/useDisclosureFocus";
import { CONTACT_MAILTO, CV_PATH, SOCIAL_URLS } from "../../lib/constants";
import { GitHubGlyph } from "../ui/icons/GitHubGlyph";
import { WhatsAppGlyph } from "../ui/icons/WhatsAppGlyph";
import { LinkedInIcon } from "../ui/LinkedInIcon";

type HeaderContactMenuProps = {
  /** Header dropdown vs full-width list inside the mobile drawer. */
  layout: "dropdown" | "stacked";
  /** Close mobile drawer after a link is activated. */
  onNavigate?: () => void;
};

type ContactItem = {
  id: string;
  href: string;
  labelKey:
    | "nav.resume"
    | "footer.linkedin"
    | "footer.email"
    | "footer.whatsapp"
    | "footer.github";
  ariaKey:
    | "a11y.downloadResume"
    | "a11y.linkedinProfile"
    | "a11y.contactEmail"
    | "a11y.openWhatsApp"
    | "a11y.githubProfile";
  external: boolean;
  download?: boolean;
  icon: "resume" | "linkedin" | "mail" | "whatsapp" | "github";
};

const CONTACT_ITEMS: ContactItem[] = [
  {
    id: "resume",
    href: CV_PATH,
    labelKey: "nav.resume",
    ariaKey: "a11y.downloadResume",
    external: false,
    download: true,
    icon: "resume",
  },
  {
    id: "linkedin",
    href: SOCIAL_URLS.linkedin,
    labelKey: "footer.linkedin",
    ariaKey: "a11y.linkedinProfile",
    external: true,
    icon: "linkedin",
  },
  {
    id: "email",
    href: CONTACT_MAILTO,
    labelKey: "footer.email",
    ariaKey: "a11y.contactEmail",
    external: false,
    icon: "mail",
  },
  {
    id: "whatsapp",
    href: SOCIAL_URLS.whatsapp,
    labelKey: "footer.whatsapp",
    ariaKey: "a11y.openWhatsApp",
    external: true,
    icon: "whatsapp",
  },
  {
    id: "github",
    href: SOCIAL_URLS.github,
    labelKey: "footer.github",
    ariaKey: "a11y.githubProfile",
    external: true,
    icon: "github",
  },
];

function ContactRowIcon({ kind }: { kind: ContactItem["icon"] }) {
  if (kind === "resume")
    return (
      <span
        className="material-symbols-outlined size-5 shrink-0 text-[22px] leading-none"
        aria-hidden
      >
        description
      </span>
    );
  if (kind === "linkedin") return <LinkedInIcon className="size-5 shrink-0" />;
  if (kind === "mail")
    return (
      <span
        className="material-symbols-outlined size-5 shrink-0 text-[22px] leading-none"
        aria-hidden
      >
        mail
      </span>
    );
  if (kind === "whatsapp") return <WhatsAppGlyph className="size-5 shrink-0" />;
  return <GitHubGlyph className="size-5 shrink-0" />;
}

export function HeaderContactMenu({ layout, onNavigate }: HeaderContactMenuProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const contactButtonId = useId();
  const { triggerRef, panelRef } = useDisclosureFocus(open);

  useEffect(() => {
    if (layout !== "dropdown" || !open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [layout, open]);

  useEffect(() => {
    if (layout !== "dropdown" || !open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [layout, open]);

  const linkClassStacked =
    "flex items-center gap-3 rounded-lg bg-surface-container-high px-4 py-3 text-sm font-semibold text-on-surface ghost-border transition-colors hover:text-primary";

  const linkClassMenu =
    "flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors focus:outline-none focus-visible:bg-surface-bright/40 text-on-surface-variant hover:bg-surface-bright/50";

  if (layout === "stacked") {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-outline">
          {t("nav.contact")}
        </p>
        <div className="flex flex-col gap-2">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={linkClassStacked}
              aria-label={t(item.ariaKey)}
              {...(item.download ? { download: true } : {})}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={() => onNavigate?.()}
            >
              <ContactRowIcon kind={item.icon} />
              <span>{t(item.labelKey)}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        id={contactButtonId}
        ref={triggerRef}
        type="button"
        className="flex h-9 items-center gap-1 rounded-lg bg-surface-container-high px-3 py-2 text-sm font-bold tracking-wide text-on-surface ghost-border transition-colors hover:bg-surface-bright/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary xl:px-4"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={open ? menuId : undefined}
        aria-label={open ? t("a11y.closeContactMenu") : t("a11y.openContactMenu")}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{t("nav.contact")}</span>
        <span
          className={`material-symbols-outlined text-on-surface-variant transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          expand_more
        </span>
      </button>

      {open ? (
        <div
          ref={panelRef}
          id={menuId}
          role="group"
          aria-labelledby={contactButtonId}
          className="absolute right-0 top-[calc(100%+6px)] z-[60] min-w-[13rem] rounded-lg border border-outline-variant/20 bg-surface-container-high py-1 shadow-lg ghost-border"
        >
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={linkClassMenu}
              aria-label={t(item.ariaKey)}
              {...(item.download ? { download: true } : {})}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={() => setOpen(false)}
            >
              <ContactRowIcon kind={item.icon} />
              <span className="min-w-0 flex-1 font-medium text-on-surface">
                {t(item.labelKey)}
              </span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
