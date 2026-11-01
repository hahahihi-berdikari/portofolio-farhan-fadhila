import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";

export default function LocalNav() {
  const { lang, setLang, t } = useLanguage();
  const links = [
    { label: t.nav.education, href: "#education", id: "education" },
    { label: t.nav.experience, href: "#experience", id: "experience" },
    { label: t.nav.skills, href: "#skills", id: "skills" },
    { label: t.nav.certifications, href: "#certifications", id: "certifications" },
  ];
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 260 && y > lastY.current && !open);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const ids = ["top", "work", "about", "experience", "education", "skills", "certifications", "services", "faq", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-4 md:top-5">
      <div
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-500 ease-out ${
          hidden ? "-translate-y-[160%] opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <nav
          aria-label={t.nav.primary}
          className={`relative flex h-14 items-center justify-between gap-4 rounded-[20px] border border-hairline-silver bg-white/80 py-2 pl-3 pr-2 backdrop-blur-xl transition-all delay-100 duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <a href="#top" className="flex shrink-0 items-center gap-2.5">
            <img
              src="/avatar.svg"
              alt="Farhan Fadhila"
              className="h-9 w-9 rounded-full border border-hairline-silver bg-studio-mist object-cover"
            />
            <span className="font-sf-pro-display text-[17px] font-semibold tracking-[0.01em] text-ink">
              {profile.name}
            </span>
          </a>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 whitespace-nowrap lg:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id}
                  href={l.href}
                  className={`relative rounded-full px-3 py-2 text-[13px] transition-colors duration-300 ${
                    isActive ? "font-medium text-ink" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-studio-mist" />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border border-hairline-silver bg-white p-1">
              <button
                type="button"
                onClick={() => setLang("id")}
                aria-label={t.nav.languageIndonesian}
                title={t.nav.languageIndonesian}
                className={`flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-hairline-silver transition-all ${
                  lang === "id" ? "ring-2 ring-ink" : "opacity-60 hover:opacity-100"
                }`}
              >
                <svg
                  viewBox="0 0 60 30"
                  preserveAspectRatio="xMidYMid slice"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <rect width="60" height="15" fill="#CE1126" />
                  <rect y="15" width="60" height="15" fill="#fff" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-label={t.nav.languageEnglish}
                title={t.nav.languageEnglish}
                className={`flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-hairline-silver transition-all ${
                  lang === "en" ? "ring-2 ring-ink" : "opacity-60 hover:opacity-100"
                }`}
              >
                <svg
                  viewBox="0 0 60 30"
                  preserveAspectRatio="xMidYMid slice"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <rect width="60" height="30" fill="#012169" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
                  <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
                  <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
                </svg>
              </button>
            </div>
            <a
              href="/Farhan-Fadhila-CV.pdf"
              download="Farhan-Fadhila-CV.pdf"
              aria-label={t.nav.downloadCv}
              title={t.nav.downloadCv}
              className="hidden h-10 w-10 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-studio-mist hover:text-ink sm:flex"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M2.5 13.5h11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="hidden rounded-[8px] bg-black px-5 py-1.5 text-[13px] font-medium text-white transition-all hover:bg-neutral-800 active:scale-[0.97] sm:inline-block"
            >
              {t.nav.hireMe}
            </a>
            <button
              type="button"
              aria-label={t.nav.toggleMenu}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-studio-mist lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                {open ? (
                  <path
                    d="M4 4l10 10M14 4L4 14"
                    stroke="#1d1d1f"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M2.5 5h13M2.5 9h13M2.5 13h13"
                    stroke="#1d1d1f"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-[20px] border border-hairline-silver bg-white/95 p-2 backdrop-blur-xl lg:hidden">
            {links.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-[14px] px-4 py-3 text-[15px] ${
                  active === l.id ? "bg-studio-mist font-medium text-ink" : "text-ink/70"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-[14px] bg-black px-4 py-3 text-center text-[15px] font-medium text-white"
            >
              {t.nav.hireMe}
            </a>
            <a
              href="/Farhan-Fadhila-CV.pdf"
              download="Farhan-Fadhila-CV.pdf"
              className="mt-1 block rounded-[14px] border border-hairline-silver bg-white px-4 py-3 text-center text-[15px] font-medium text-ink"
            >
              {t.nav.downloadCv}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
