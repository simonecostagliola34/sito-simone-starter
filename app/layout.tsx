// app/[locale]/layout.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

// ⚠️ Immagine OG (commentata per ora):
// const OG_IMAGE = "/og-image.jpg";

// Metadati dinamici per SEO corretta su .it e .com (solo cookie tecnici: nessuno script di tracciamento).
export async function generateMetadata({
  params,
}: {
  params: { locale: "it" | "en" };
}): Promise<Metadata> {
  const { locale } = params;
  const isIt = locale === "it";

  const base = isIt
    ? new URL("https://www.ingcostagliolasimone.it")
    : new URL("https://www.engcostagliolasimone.com");

  const title = isIt
    ? "Simone Costagliola — Ingegnere dell’Energia"
    : "Simone Costagliola — Energy Engineer";
  const description = isIt
    ? "Sito personale di Simone Costagliola: bio, curriculum, progetti e contatti. Ingegnere dell’energia, rinnovabili ed efficienza."
    : "Personal website of Simone Costagliola: bio, resume, projects, and contacts. Energy engineer focused on renewables and efficiency.";

  return {
    metadataBase: base,
    title,
    description,
    alternates: {
      canonical: base.href.replace(/\/$/, ""),
      languages: {
        it: "https://www.ingcostagliolasimone.it",
        en: "https://www.engcostagliolasimone.com",
      },
    },
    openGraph: {
      type: "website",
      url: base.href,
      siteName: isIt ? "Simone Costagliola — Sito personale" : "Simone Costagliola — Personal Website",
      title,
      description,
      locale: isIt ? "it_IT" : "en_US",
      // images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "it" | "en" };
}) {
  const { locale } = params;
  const t = (it: string, en: string) => (locale === "it" ? it : en);
  const [open, setOpen] = useState(false);

  // Chiudi menu mobile quando cambia pagina
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Evidenziazione pagina attiva
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const isCV = pathname.startsWith(`/${locale}/curriculum`);
  const isPrivacy = pathname.startsWith(`/${locale}/privacy`);
  const isCookies = pathname.startsWith(`/${locale}/cookies`);

  const active = "underline font-semibold";
  const inactive = "opacity-80 hover:opacity-100";

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-neutral-900">
        {/* HEADER */}
        <header className="mx-auto max-w-6xl px-6 py-4">
          {/* ---- MOBILE HEADER ---- */}
          <div className="flex items-center justify-between md:hidden">
            <Link href={`/${locale}`} aria-label={t("Vai alla Home", "Go to Home")} className="leading-tight">
              <div className="text-xl font-bold">Simone Costagliola</div>
              <div className="text-sm text-neutral-600">
                {t("Ingegnere dell’Energia", "Energy Engineer — Junior")}
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-full overflow-hidden border bg-neutral-100">
                <Image
                  src="/Diagramma_senza_titolo.drawio-removebg-preview.png"
                  alt="Foto di Simone Costagliola"
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                  priority
                  sizes="56px"
                />
              </div>
              <button
                type="button"
                aria-label={open ? t("Chiudi menu", "Close menu") : t("Apri menu", "Open menu")}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="p-2 rounded-md border hover:bg-neutral-50"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu a tendina mobile */}
          <div
            className={`md:hidden transition-all duration-200 ${
              open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="rounded-2xl border shadow-sm p-4 space-y-3 text-center">
              <Link
                href={`/${locale}`}
                className={`block hover:underline ${isHome ? active : inactive}`}
                aria-current={isHome ? "page" : undefined}
              >
                {t("Home", "Home")}
              </Link>
              <Link
                href={`/${locale}/curriculum`}
                className={`block hover:underline ${isCV ? active : inactive}`}
                aria-current={isCV ? "page" : undefined}
              >
                {t("Curriculum", "CV")}
              </Link>

              {/* Divider */}
              <div className="border-t my-2" />

              {/* Link legali nel mobile (Privacy/Cookie) */}
              <Link
                href={`/${locale}/privacy`}
                className={`block hover:underline ${isPrivacy ? active : inactive}`}
                aria-current={isPrivacy ? "page" : undefined}
              >
                {t("Privacy", "Privacy")}
              </Link>
              <Link
                href={`/${locale}/cookies`}
                className={`block hover:underline ${isCookies ? active : inactive}`}
                aria-current={isCookies ? "page" : undefined}
              >
                {t("Cookie", "Cookies")}
              </Link>

              {/* Cambia lingua */}
              <div className="pt-2 text-sm">
                <Link href={`/it`} className={`px-1 ${locale === "it" ? active : inactive}`}>
                  IT
                </Link>
                <span className="mx-1">/</span>
                <Link href={`/en`} className={`px-1 ${locale === "en" ? active : inactive}`}>
                  EN
                </Link>
              </div>
            </div>
          </div>

          {/* ---- DESKTOP HEADER ---- */}
          <div className="hidden md:grid items-center gap-4 grid-cols-3 mt-2">
            <div className="justify-self-start">
              <Link href={`/${locale}`} className="leading-tight">
                <div className="text-2xl md:text-3xl font-bold">Simone Costagliola</div>
                <div className="text-base font-normal text-neutral-600">
                  {t("Ingegnere dell’Energia", "Energy Engineer — Junior")}
                </div>
              </Link>
            </div>

            <div className="justify-self-center">
              <div className="w-28 h-28 rounded-full overflow-hidden border shadow-sm bg-neutral-100">
                <Image
                  src="/Diagramma_senza_titolo.drawio-removebg-preview.png"
                  alt="Foto di Simone Costagliola"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                  priority
                  sizes="112px"
                />
              </div>
            </div>

            <nav className="justify-self-end flex items-center gap-6">
              <Link
                href={`/${locale}`}
                className={`${isHome ? active : "hover:underline"} text-neutral-700 hover:text-neutral-900`}
                aria-current={isHome ? "page" : undefined}
              >
                {t("Home", "Home")}
              </Link>
              <Link
                href={`/${locale}/curriculum`}
                className={`${isCV ? active : "hover:underline"} text-neutral-700 hover:text-neutral-900`}
                aria-current={isCV ? "page" : undefined}
              >
                {t("Curriculum", "CV")}
              </Link>

              {/* Link legali nel desktop */}
              <Link
                href={`/${locale}/privacy`}
                className={`${isPrivacy ? active : "hover:underline"} text-neutral-700 hover:text-neutral-900`}
                aria-current={isPrivacy ? "page" : undefined}
              >
                {t("Privacy", "Privacy")}
              </Link>
              <Link
                href={`/${locale}/cookies`}
                className={`${isCookies ? active : "hover:underline"} text-neutral-700 hover:text-neutral-900`}
                aria-current={isCookies ? "page" : undefined}
              >
                {t("Cookie", "Cookies")}
              </Link>

              {/* Selector lingua */}
              <div className="ml-1 text-sm">
                <Link href={`/it`} className={`px-1 ${locale === "it" ? active : inactive}`}>
                  IT
                </Link>
                <span className="mx-1">/</span>
                <Link href={`/en`} className={`px-1 ${locale === "en" ? active : inactive}`}>
                  EN
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="mx-auto max-w-6xl px-6 pb-16 pt-6">{children}</main>

        {/* FOOTER */}
        <footer className="border-t mt-16">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-neutral-500 flex flex-col md:flex-row justify-between gap-3">
            <div>
              © {new Date().getFullYear()} Simone Costagliola — {t("Sito personale", "Personal Website")}
            </div>
            <div className="flex gap-4">
              <Link href={`/${locale}/privacy`} className="hover:underline">
                {t("Privacy", "Privacy")}
              </Link>
              <Link href={`/${locale}/cookies`} className="hover:underline">
                {t("Cookie", "Cookies")}
              </Link>
              <Link href={`/${locale}/legal`} className="hover:underline">
                {t("Note Legali", "Legal Notice")}
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
