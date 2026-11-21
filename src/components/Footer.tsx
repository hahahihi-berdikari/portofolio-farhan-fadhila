import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-hairline-silver bg-studio-mist">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-12">
        <p className="border-b border-hairline-silver pb-8 text-[13px] leading-[1.6] text-slate">
          {t.footer.ps}{" "}
          <a
            href="https://pagespeed.web.dev/analysis?url=https://portofolio.farhanfadhila.web.id/"
            target="_blank"
            rel="noreferrer"
            className="text-accent"
          >
            {t.footer.runTest} &rarr;
          </a>
        </p>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[12px] text-slate md:flex-row">
          <p>&copy; 2026 Farhan Fadhila. {t.footer.rights}</p>
          <a href="#top" className="text-accent">
            {t.footer.backToTop} &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
