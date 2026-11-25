import { useState } from "react";
import Reveal from "./Reveal";
import WalkingFigure from "./WalkingFigure";
import { profile } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const socials = [
  { label: "@FARHANFADHILA", href: profile.github, Icon: GithubIcon },
  { label: "@frhan_fdh", href: profile.instagram, Icon: InstagramIcon },
];

export default function FinalCta() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard tidak tersedia */
    }
  };

  return (
    <section id="contact" className="relative border-t border-hairline-silver bg-gallery-white">
      <WalkingFigure
        variant="wave"
        className="bottom-6 left-4 hidden w-[95px] sm:block md:bottom-10 md:left-12 md:w-[135px]"
      />
      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-[140px]">
        <Reveal>
          <h2 className="font-sf-pro-display text-[40px] font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-[56px] md:text-[80px]">
            {t.contact.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[19px] leading-[1.4] text-slate md:text-[21px]">
            {t.contact.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-1.5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-[16px] font-semibold text-ink underline underline-offset-4 md:text-[17px]"
              >
                <MailIcon />
                {profile.email}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                aria-label={t.contact.copyEmail}
                title={t.contact.copyEmail}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline-silver bg-white text-ink transition-colors hover:bg-studio-mist active:scale-[0.97]"
              >
                {copied ? (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[16px] font-medium text-ink hover:underline hover:underline-offset-4 md:text-[17px]"
              >
                <s.Icon />
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
