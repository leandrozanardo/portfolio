import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CONTACT_MAILTO, CV_PATH, SOCIAL_URLS } from "../../lib/constants";
import { LinkedInIcon } from "../ui/LinkedInIcon";

type HeaderContactMenuProps = {
  /** Dropdown in header vs stacked links in mobile drawer — CHANGED: single contact entry point. */
  layout: "dropdown" | "stacked";
  /** Close mobile drawer after a link is activated. */
  onNavigate?: () => void;
};

type ContactItem = {
  id: string;
  href: string;
  labelKey: "nav.resume" | "footer.linkedin" | "footer.email" | "footer.whatsapp" | "footer.github";
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
      <span className="material-symbols-outlined size-5 shrink-0 text-[22px] leading-none" aria-hidden>
        picture_as_pdf
      </span>
    );
  if (kind === "linkedin") return <LinkedInIcon className="size-5 shrink-0" />;
  if (kind === "mail")
    return (
      <span className="material-symbols-outlined size-5 shrink-0 text-[22px] leading-none" aria-hidden>
        mail
      </span>
    );
  if (kind === "whatsapp") return <WhatsAppGlyph className="size-5 shrink-0" />;
  return <GitHubGlyph className="size-5 shrink-0" />;
}

function GitHubGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function HeaderContactMenu({ layout, onNavigate }: HeaderContactMenuProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (layout !== "dropdown" || !open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
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
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-outline">{t("nav.contact")}</p>
        <div className="flex flex-col gap-2">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={linkClassStacked}
              aria-label={t(item.ariaKey)}
              {...(item.download ? { download: true } : {})}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
        type="button"
        className="flex h-9 items-center gap-1 rounded-lg bg-surface-container-high px-3 py-2 text-sm font-bold tracking-wide text-on-surface ghost-border transition-colors hover:bg-surface-bright/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary xl:px-4"
        aria-expanded={open}
        aria-haspopup="menu"
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
          id={menuId}
          role="menu"
          aria-label={t("a11y.contactOptions")}
          className="absolute right-0 top-[calc(100%+6px)] z-[60] min-w-[13rem] rounded-lg border border-outline-variant/20 bg-surface-container-high py-1 shadow-lg ghost-border"
        >
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              role="menuitem"
              className={linkClassMenu}
              aria-label={t(item.ariaKey)}
              {...(item.download ? { download: true } : {})}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setOpen(false)}
            >
              <ContactRowIcon kind={item.icon} />
              <span className="min-w-0 flex-1 font-medium text-on-surface">{t(item.labelKey)}</span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
