export default function Legal({ params }: { params: { locale: "it" | "en" } }) {
  const { locale } = params;
  const t = (it: string, en: string) => (locale === "it" ? it : en);

  return (
    <section className="mx-auto max-w-3xl py-10 px-6">
      <h1 className="text-2xl font-semibold mb-4">
        {t("Note Legali", "Legal Notice")}
      </h1>

      <p className="leading-7 mb-4">
        {t(
          "Il presente sito web è di proprietà di Simone Costagliola. Tutti i contenuti (testi, immagini, documenti PDF del CV) sono forniti a solo scopo informativo e personale.",
          "This website is owned by Simone Costagliola. All contents (texts, images, CV PDF documents) are provided for informational and personal purposes only."
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Limitazioni di responsabilità", "Limitation of liability")}
      </h2>
      <p className="leading-7 mb-4">
        {t(
          "Non si garantisce che le informazioni pubblicate siano prive di errori o sempre aggiornate. L’autore non è responsabile per usi impropri dei contenuti o per eventuali danni derivanti dall’accesso o utilizzo del sito.",
          "No guarantee is given that the information published is error-free or always up to date. The author is not responsible for misuse of the contents or for any damages arising from access to or use of the website."
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Diritti d’autore", "Copyright")}
      </h2>
      <p className="leading-7 mb-4">
        {t(
          "È vietata la riproduzione o diffusione, anche parziale, dei contenuti senza autorizzazione scritta dell’autore.",
          "Reproduction or distribution, even partial, of the contents is prohibited without the author’s written permission."
        )}
      </p>
    </section>
  );
}
