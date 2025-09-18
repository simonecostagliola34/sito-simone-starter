// app/[locale]/head.tsx
export default function Head({ params }: { params: { locale: "it" | "en" } }) {
  const isIt = params.locale === "it";

  const base = isIt
    ? "https://www.ingcostagliolasimone.it"
    : "https://www.engcostagliolasimone.com";

  const title = isIt
    ? "Simone Costagliola — Ingegnere dell’Energia"
    : "Simone Costagliola — Energy Engineer";

  const description = isIt
    ? "Sito personale di Simone Costagliola: bio, curriculum, progetti e contatti. Ingegnere dell’energia, rinnovabili ed efficienza."
    : "Personal website of Simone Costagliola: bio, resume, projects, and contacts. Energy engineer focused on renewables and efficiency.";

  return (
    <>
      {/* SEO base (non compare nel contenuto della pagina) */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={base} />

      {/* Open Graph (facoltativo, utile per anteprime social) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={base} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* Se un giorno vuoi un’immagine anteprima (1200x630), togli il commento: */}
      {/* <meta property="og:image" content="/og-image.jpg" /> */}

      {/* Twitter (facoltativo) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="/og-image.jpg" /> */}
    </>
  );
}
