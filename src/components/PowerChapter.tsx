import Reveal from "./Reveal";
import { useEffect, useState } from "react";
import { experience, type ExperienceItem } from "../data/portfolio";

export default function PowerChapter() {
  const [selected, setSelected] = useState<ExperienceItem | null>(null);

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
            ♨️ Experience
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-sf-pro-display text-[32px] font-semibold text-ink md:text-feature-heading">
            Power on full display.
          </h2>
        </Reveal>

        <div className="mt-12">
          {experience.map((e, i) => (
            <Reveal key={`${e.role}-${e.company}`} delay={i * 60}>
              <div className="grid gap-2 border-t border-hairline-silver py-8 md:grid-cols-[160px_1fr] md:gap-8">
                <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-slate md:pt-1">
                  {e.period}
                  {e.current && (
                    <span className="ml-2 font-semibold normal-case tracking-[-0.12px] text-launch-orange">
                      Current
                    </span>
                  )}
                </p>
                <div>
                  <h3 className="font-sf-pro-display text-[21px] font-semibold text-ink md:text-[24px]">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-[15px]">
                    <span className="text-accent">{e.company}</span>
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    {e.type && (
                      <span className="rounded-full bg-studio-mist px-3 py-1 text-[12px] font-medium text-ink">
                        {e.type}
                      </span>
                    )}
                    <div className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-2">
                      <button
                        type="button"
                        onClick={() => setSelected(e)}
                        className="cursor-pointer text-[13px] font-medium text-ink underline underline-offset-4"
                      >
                        View job desk
                      </button>
                      {e.url && (
                        <a
                          href={e.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[13px] font-medium text-ink underline underline-offset-4"
                        >
                          Live production
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
              aria-label="My Job Desk"
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[8px] border border-hairline-silver bg-white p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-sf-pro-display text-[21px] font-semibold text-ink md:text-[24px]">
                  My Job Desk
                </h3>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close"
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
                {selected.description}
              </p>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
