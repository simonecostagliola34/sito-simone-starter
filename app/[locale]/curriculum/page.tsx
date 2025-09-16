import EmailLink from "../../../components/EmailLink";
import PhoneLink from "../../../components/PhoneLink";

export default function CV({ params }: { params: { locale: "it" | "en" } }) {
  const { locale } = params;
  const t = (it: string, en: string) => (locale === "it" ? it : en);

  return (
    <section className="mx-auto max-w-6xl">
      <h1 className="sr-only">{t("Curriculum", "CV")}</h1>

      <div className="grid gap-8 md:grid-cols-[1fr_300px]">
        {/* Contenuti principali */}
        <article className="space-y-10">
          {/* Profilo */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
              {t("Profilo", "Profile")}
            </h2>
            <p className="text-[15.5px] leading-7 text-neutral-800">
              {t(
                "Laureato in Ingegneria dell’Energia presso l’Università di Pisa (2024). Professionista motivato e orientato ai risultati, con una preparazione che abbraccia sia i settori tradizionali dell’energia (Oil & Gas, nucleare) sia le tecnologie per la sostenibilità (rinnovabili, efficienza energetica). Abituato a gestire problemi complessi, integrare competenze multidisciplinari e proporre soluzioni concrete e innovative. Aperto a opportunità in R&D, consulenza e project management in contesti dinamici e internazionali.",
                "Graduated with a Bachelor's Degree in Energy Engineering — Junior Engineer from the University of Pisa (2024). Motivated and results-oriented professional with a solid background in both traditional energy sectors (Oil & Gas, nuclear) and innovative sustainable technologies (renewables, energy efficiency). Skilled at handling complex problems, integrating multidisciplinary knowledge, and delivering practical, innovative solutions. Open to opportunities in R&D, consultancy, and project management within dynamic, international environments."
              )}
            </p>
          </section>

          {/* Formazione */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
              {t("Formazione", "Education")}
            </h2>
            <div className="rounded-2xl border p-5">
              <div className="flex items-baseline justify-between gap-2 flex-wrap">
                <h3 className="font-semibold">
                  {t(
                    "Laurea triennale in Ingegneria dell’Energia",
                    "Bachelor’s Degree in Energy Engineering"
                  )}
                </h3>
                <span className="text-sm text-neutral-500">
                  {t("Università di Pisa · 2024", "University of Pisa · 2024")}
                </span>
              </div>
              <p className="mt-2 text-[15px] text-neutral-700">
                {t(
                  "Principali materie: Sistemi energetici, Energie rinnovabili, Termodinamica, Impianti energetici, Oil & Gas Engineering",
                  "Main subjects: Energy Systems, Renewable Energy, Thermodynamics, Energy Plants, Oil & Gas Engineering"
                )}
              </p>
            </div>
          </section>

          {/* Esperienze */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-3">
              {t("Esperienze e Progetti Accademici", "Academic Projects")}
            </h2>
            <ul className="grid gap-3 text-[15px] leading-7 list-disc pl-5">
              <li>
                {t(
                  "Sviluppato progetti di gruppo su Sistemi Energetici Integrati negli Edifici e Conversione Ibrida di un Motore Nautico Diesel con Impianto Fotovoltaico di Ricarica a Terra.",
                  "Developed group projects on Integrated Energy Systems in Buildings and Hybrid Conversion of a Naval Diesel Engine with Shore-Based Photovoltaic Charging."
                )}
              </li>
              <li>
                {t(
                  "Collaborato con l’Università di Siena in attività di ricerca per il miglioramento della qualità dell’aria, riducendo emissioni di CO₂ e polveri sottili da motori endotermici.",
                  "Collaborated with the University of Siena on research to improve air quality by reducing CO₂ and particulate emissions from internal combustion engines (awarded 2nd place)."
                )}
              </li>
              <li>
                {t(
                  "Ricercato e analizzato soluzioni innovative per l’energia sostenibile nella tesi di laurea.",
                  "Researched and analyzed innovative solutions for sustainable energy in the Bachelor’s thesis."
                )}
              </li>
            </ul>
          </section>

          {/* Competenze */}
          <section className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-3">
                {t("Competenze tecniche", "Technical Skills")}
              </h2>
              <ul className="space-y-2 text-[15px] leading-7 list-disc pl-5">
                <li>{t("Design e analisi di sistemi energetici", "Design and analysis of energy systems")}</li>
                <li>{t("Valutazione degli impatti ambientali", "Environmental impact assessment")}</li>
                <li>
                  {t(
                    "Progettazione, ottimizzazione e gestione per le rinnovabili (solare, eolico, idroelettrica, biomassa e geotermica)",
                    "Design, optimisation and management for renewables (solar, wind, hydropower, biomass and geothermal)"
                  )}
                </li>
                <li>{t("Modellazione di sistemi energetici", "Energy system modelling")}</li>
                <li>{t("Ottimizzazione con obiettivi multipli e contrastanti", "Design optimisation with multiple/conflicting objectives")}</li>
                <li>{t("Analisi dati e rappresentazioni grafiche", "Data analysis and graphical representation")}</li>
                <li>{t("Analisi di incertezza e sensibilità", "Uncertainty and sensitivity assessment")}</li>
                <li>{t("Gestione e sicurezza di impianti nucleari", "Nuclear plant management and safety")}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-3">
                {t("Competenze Software", "Software Skills")}
              </h2>
              <ul className="space-y-2 text-[15px] leading-7 list-disc pl-5">
                <li>MATLAB</li>
                <li>AutoCAD</li>
                <li>Excel, Word, PowerPoint</li>
              </ul>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-3">
                {t("Competenze Trasversali", "Soft Skills")}
              </h2>
              <ul className="space-y-2 text-[15px] leading-7 list-disc pl-5">
                <li>{t("Comunicazione efficace in inglese", "Effective communication in English")}</li>
                <li>{t("Lavoro di squadra e collaborazione", "Teamwork and collaboration")}</li>
                <li>{t("Relazione con stakeholder e interpretazione dei requisiti", "Stakeholder communication and requirement interpretation")}</li>
                <li>{t("Redazione di report tecnici", "Technical report writing")}</li>
                <li>{t("Presentazione e difesa di progetti", "Project presentation and defence")}</li>
              </ul>
            </div>
          </section>
        </article>

        {/* Sidebar DESTRA */}
        <aside className="md:sticky md:top-6 h-max space-y-6">
          {/* Contatti */}
          <div className="rounded-2xl border shadow-sm p-5">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {t("Contatti", "Contacts")}
            </h2>
            <div className="mt-3 text-[15px] leading-relaxed space-y-1">
              <div className="font-medium">Simone Costagliola</div>
              <div>Monte Argentario (GR), Italy</div>
              <div>
                <PhoneLink
                  country="+39"
                  number="3663476417"
                  display="+39 366 347 6417"
                  className="text-blue-600 hover:underline"
                />
              </div>
              <div>
                <EmailLink
                  user="contact"
                  domain="engcostagliolasimone.com"
                  className="text-blue-600 hover:underline"
                />
              </div>
            </div>
          </div>

          {/* Lingue */}
          <div className="rounded-2xl border shadow-sm p-5">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {t("Lingue", "Languages")}
            </h2>
            <ul className="mt-3 space-y-1 text-[15px] leading-relaxed list-disc pl-5">
              <li>{t("Italiano: Madrelingua", "Italian: Native")}</li>
              <li>{t("Inglese: B2 (CLI)", "English: B2 (CLI)")}</li>
              <li>{t("Cinese: Conoscenze di base", "Chinese: Basic knowledge")}</li>
              <li>{t("Spagnolo: Conoscenze di base", "Spanish: Basic knowledge")}</li>
            </ul>
          </div>

          {/* Scarica CV */}
          <div className="rounded-2xl border shadow-sm p-5">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {t("Scarica Curriculum", "Download CV")}
            </h2>
            <div className="mt-4">
              <a
                href={locale === "it" ? "/cv/cv_Ing_Simone_Costagliola.pdf" : "/cv/cv_Eng_Simone_Costagliola.pdf"}
                download
                target="_blank"
                rel="noopener noreferrer"
                type="application/pdf"
                aria-label={t("Scarica il CV in PDF", "Download the CV as PDF")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t("Scarica PDF", "Download PDF")}
              </a>
              <p className="mt-2 text-xs text-neutral-500"></p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
