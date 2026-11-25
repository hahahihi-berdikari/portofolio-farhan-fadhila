import Reveal from "./Reveal";
import { useEffect, useState } from "react";
import { experience, type ExperienceItem } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </svg>
);

const FlaskIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 2v7.5a2 2 0 0 1-.2.9L4.7 20.5a1 1 0 0 0 .9 1.5h12.8a1 1 0 0 0 .9-1.5L14.2 10.4a2 2 0 0 1-.2-.9V2" />
    <path d="M8.5 2h7" />
    <path d="M7 16h10" />
  </svg>
);

function TypeTag({ type, label }: { type: string; label: string }) {
  const styles =
    type === "Personal Project"
      ? "border-ink bg-ink text-white"
      : type === "Internship"
        ? "border-accent/30 bg-accent/10 text-accent-deep"
        : "border-hairline-silver bg-studio-mist text-ink";
  const Icon =
    type === "Personal Project"
      ? FlaskIcon
      : type === "Internship"
        ? GraduationCapIcon
        : ClockIcon;
  return (
    <span
      className={`mt-2 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-medium ${styles}`}
    >
      <Icon />
      {label}
    </span>
  );
}

export default function PowerChapter() {
  const [selected, setSelected] = useState<ExperienceItem | null>(null);
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!selected) return;
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected]);

  return (
    <section id="experience" className="border-t border-hairline-silver bg-gallery-white">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <Reveal className="text-center">
          <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-ink">
            {t.experience.eyebrow}
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-sf-pro-display text-[32px] font-semibold text-ink md:text-feature-heading">
            {t.experience.heading}
          </h2>
        </Reveal>

        <div className="mt-12">
          {experience.map((e, i) => (
            <Reveal key={`${e.role}-${e.company}`} delay={i * 60}>
              <div className="grid gap-2 border-t border-hairline-silver py-8 md:grid-cols-[160px_1fr] md:gap-8">
                <div className="md:pt-1">
                  <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-slate">
                    {e.period}
                  </p>
                  {e.type && (
                    <TypeTag
                      type={e.type}
                      label={t.experience.jobTypes[e.type]}
                    />
                  )}
                  {/* {e.experimental && (
                    <p className="mt-1 text-[12px] text-slate">
                      {t.experience.experiment}
                    </p>
                  )} */}
                </div>
                <div>
                  <h3 className="font-sf-pro-display text-[21px] font-semibold text-ink md:text-[24px]">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-[15px]">
                    <span className="text-accent">{e.company}</span>
                    {e.hasAi && (
                      <span className="text-slate"> — {t.experience.withAi}</span>
                    )}
                  </p>
                  {e.summary && (
                    <p className="mt-2 line-clamp-2 text-[15px] leading-[1.6] text-slate">
                      {lang === "id" ? e.summaryId ?? e.summary : e.summary}
                    </p>
                  )}
                  {e.techStack && e.techStack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {e.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-hairline-silver px-2.5 py-1 text-[12px] font-medium text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                      {e.techStack.length > 4 && (
                        <span className="rounded-full border border-hairline-silver px-2.5 py-1 text-[12px] font-medium text-ink">
                          +{e.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">

                    <div className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-2">
                      <button
                        type="button"
                        onClick={() => setSelected(e)}
                        className="cursor-pointer text-[13px] font-medium text-ink underline underline-offset-4"
                      >
                        {t.experience.viewJobDesk}
                      </button>
                      {e.url && (
                        <a
                          href={e.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[13px] font-medium text-ink underline underline-offset-4"
                        >
                          {t.experience.liveProduction}
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M3.5 8.5L8.5 3.5M8.5 3.5H5M8.5 3.5v3.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-hairline-silver" />
        </div>
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6"
            onClick={() => setSelected(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={t.experience.myJobDesk}
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[8px] border border-hairline-silver bg-white p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-sf-pro-display text-[21px] font-semibold text-ink md:text-[24px]">
                  {t.experience.myJobDesk}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label={t.experience.close}
                  className="shrink-0 cursor-pointer rounded-full bg-studio-mist p-2 text-ink"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 2l10 10M12 2L2 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <p className="mt-4 text-body-small text-slate">
                {lang === "id" ? selected.descriptionId ?? selected.description : selected.description}
              </p>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
