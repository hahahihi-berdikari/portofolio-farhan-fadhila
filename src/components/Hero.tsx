import WalkingFigure from "./WalkingFigure";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-gallery-white">
      <WalkingFigure />
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <p
          className="rise inline-flex items-center gap-2 rounded-full border border-hairline-silver bg-white px-2.5 py-1 text-[12px] font-semibold tracking-[-0.12px] text-ink"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-20" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
          </span>
          {t.hero.badge}
        </p>
        <h1
          className="rise mx-auto mt-4 max-w-4xl font-sf-pro-display text-[44px] font-semibold leading-[1.04] tracking-[-0.02em] text-ink sm:text-[60px] lg:text-hero-display"
          style={{ animationDelay: "190ms" }}
        >
          {t.hero.title}
        </h1>
        <p
          className="rise mx-auto mt-6 max-w-2xl text-[19px] leading-[1.4] tracking-[0.012em] text-slate md:text-[21px]"
          style={{ animationDelay: "300ms" }}
        >
          {t.hero.subtitle}
        </p>
        <div
          className="rise mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          style={{ animationDelay: "420ms" }}
        >
          <a
            href="#contact"
            className="rounded-[8px] bg-black px-5 py-1.5 text-[15px] font-medium text-white transition-all hover:scale-[1.03] hover:bg-neutral-800 active:scale-[0.98]"
          >
            {t.hero.hireMe}
          </a>
          <a
            href="/Farhan-Fadhila-CV.pdf"
            download="Farhan-Fadhila-CV.pdf"
            className="text-[17px] text-ink"
          >
            {t.hero.downloadCv} &darr;
          </a>
        </div>

      </div>
    </section>
  );
}
