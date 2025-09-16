// app/[locale]/privacy/page.tsx
export default function Privacy({ params }: { params: { locale: "it" | "en" } }) {
  const { locale } = params;
  const t = (it: string, en: string) => (locale === "it" ? it : en);

  return (
    <section className="mx-auto max-w-3xl py-10 px-6">
      <h1 className="text-2xl font-semibold mb-4">
        {t("Informativa Privacy", "Privacy Notice")}
      </h1>
      <p className="text-sm text-neutral-500 mb-8">
        {t("Ultimo aggiornamento:", "Last updated:")} {new Date().toLocaleDateString(locale)}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Titolare del trattamento", "Data Controller")}
      </h2>
      <p className="leading-7">
        {t(
          "Simone Costagliola. Contatti: contact@engcostagliolasimone.com",
          "Simone Costagliola. Contact: contact@engcostagliolasimone.com"
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Dati trattati e finalità", "Data processed and purposes")}
      </h2>
      <p className="leading-7">
        {t(
          "Il sito non utilizza cookie di profilazione né servizi di tracciamento. Non raccogliamo dati personali durante la semplice navigazione. Se ci invii un’email o ci contatti telefonicamente, tratteremo i dati che decidi di comunicarci (es. nome, email, numero di telefono, contenuto del messaggio) per rispondere alla tua richiesta.",
          "This website does not use profiling cookies nor tracking services. We do not collect personal data during simple browsing. If you email or call us, we will process the data you choose to share (e.g., name, email, phone number, message content) solely to reply to your request."
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Base giuridica", "Lawful basis")}
      </h2>
      <p className="leading-7">
        {t(
          "Legittimo interesse a gestire le richieste e/o esecuzione di misure precontrattuali.",
          "Legitimate interest to handle enquiries and/or performance of pre-contractual steps."
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Conservazione", "Retention")}
      </h2>
      <p className="leading-7">
        {t(
          "I dati contenuti nelle comunicazioni sono conservati per il tempo necessario a gestire la richiesta e, se del caso, per adempiere a obblighi di legge.",
          "Data contained in communications are retained for the time necessary to handle the request and, where applicable, to comply with legal obligations."
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Destinatari", "Recipients")}
      </h2>
      <p className="leading-7">
        {t(
          "I dati possono essere trattati dai fornitori tecnici strettamente necessari all’erogazione del sito (es. hosting).",
          "Data may be processed by technical providers strictly necessary to run the website (e.g., hosting)."
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Trasferimenti extra-UE", "International transfers")}
      </h2>
      <p className="leading-7">
        {t(
          "Non effettuiamo trasferimenti sistematici fuori dallo SEE. Eventuali trasferimenti incidentali (es. instradamento email) avverranno adottando garanzie adeguate ove richiesto.",
          "We do not carry out systematic transfers outside the EEA. Any incidental transfers (e.g., email routing) will take place with appropriate safeguards where required."
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Diritti dell’interessato", "Your rights")}
      </h2>
      <p className="leading-7">
        {t(
          "Puoi esercitare i diritti di accesso, rettifica, cancellazione, limitazione, portabilità e opposizione scrivendo a contact@engcostagliolasimone.com.",
          "You can exercise your rights of access, rectification, erasure, restriction, portability and objection by emailing contact@engcostagliolasimone.com."
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Minori", "Children")}
      </h2>
      <p className="leading-7">
        {t(
          "Il sito non è destinato a minori di 14 anni.",
          "This website is not intended for children under the age of 14."
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {t("Modifiche", "Changes")}
      </h2>
      <p className="leading-7">
        {t(
          "Potremmo aggiornare questa informativa. Le modifiche saranno pubblicate su questa pagina.",
          "We may update this notice. Any changes will be posted on this page."
        )}
      </p>
    </section>
  );
}
