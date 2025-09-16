// app/[locale]/page.tsx
export default function Home({ params }: { params: { locale: "it" | "en" } }) {
  const { locale } = params;
  const t = (it: string, en: string) => (locale === "it" ? it : en);

  return (
    <section className="mx-auto max-w-4xl py-12 text-center">
      <h1 className="sr-only">
        Simone Costagliola — {t("Home", "Home")}
      </h1>

      {/* Sottotitolo elegante */}
      <div className="mb-6">
        <h2 className="text-xl font-bold">{t("Bio", "Bio")}</h2>
        <div className="mx-auto mt-1 h-[2px] w-12 bg-neutral-300 rounded"></div>
      </div>

      {/* Testo in due paragrafi */}
      <div className="space-y-4 text-[16px] leading-7 text-neutral-800">
        <p>
          {t(
            "Laureato in Ingegneria dell’Energia, unisco competenze tecniche nei settori tradizionali e nelle energie rinnovabili a una forte motivazione verso soluzioni innovative e sostenibili. Mi caratterizzano spirito di squadra, dinamicità e orientamento ai risultati.",
            "Graduated in Energy Engineering, I combine technical expertise in both traditional and renewable energy sectors with a strong motivation for innovative and sustainable solutions. I am characterised by teamwork, proactivity, and a results-driven mindset."
          )}
        </p>
        <p>
          {t(
            "Sono convinto che il futuro dell’energia dipenda dall’integrazione di competenze diverse e dalla capacità di trasformare le idee in soluzioni concrete. Pronto a contribuire a una transizione energetica tecnologicamente avanzata, efficiente e sostenibile, capace di generare valore per le persone e per l’ambiente.",
            "I believe the future of energy relies on the integration of diverse skills and the ability to turn ideas into practical solutions. Ready to contribute to an energy transition that is technologically advanced, efficient, and sustainable, creating value for both people and the environment."
          )}
        </p>
      </div>
    </section>
  );
}
