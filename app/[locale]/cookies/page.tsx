// app/[locale]/cookies/page.tsx
export default function Cookies({ params }: { params: { locale: "it" | "en" } }) {
  const { locale } = params;
  const t = (it: string, en: string) => (locale === "it" ? it : en);

  return (
    <section className="mx-auto max-w-3xl py-10 px-6">
      <h1 className="text-2xl font-semibold mb-4">
        {t("Cookie Policy", "Cookie Policy")}
      </h1>

      <p className="leading-7">
        {t(
          "Questo sito non utilizza cookie di profilazione o analitici di terze parti. Possiamo utilizzare esclusivamente cookie tecnici essenziali al funzionamento del sito. Navigando, accetti l’uso dei soli cookie tecnici.",
          "This website does not use third-party analytics or profiling cookies. We may use only strictly necessary technical cookies to run the site. By browsing, you agree to the use of technical cookies only."
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Cosa sono i cookie tecnici", "What are technical cookies")}
      </h2>
      <p className="leading-7">
        {t(
          "Sono cookie necessari per erogare le pagine e garantire funzionalità di base (es. sicurezza, bilanciamento del carico).",
          "They are necessary cookies to serve pages and ensure basic functionality (e.g., security, load balancing)."
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Gestione dei cookie", "Managing cookies")}
      </h2>
      <p className="leading-7">
        {t(
          "Puoi gestire o cancellare i cookie dalle impostazioni del tuo browser. Disabilitando i cookie tecnici, il sito potrebbe non funzionare correttamente.",
          "You can manage or delete cookies in your browser settings. Disabling technical cookies may impair the website."
        )}
      </p>
    </section>
  );
}
