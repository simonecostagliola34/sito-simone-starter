# Sito Simone — Starter (Next.js + Tailwind + i18n by domain)

Questo progetto è pronto per essere pubblicato. Include:
- Next.js 14 (App Router)
- Tailwind CSS
- Routing IT/EN con cartella `[locale]`
- Middleware che imposta la lingua in base al dominio (.it → IT, .com → EN)
- Pagine: Home, Curriculum, Contatti

## Come usarlo (passi semplici)

1. **Scarica lo ZIP** e aprilo con VS Code.
2. Installa Node.js LTS (se non l'hai): https://nodejs.org/
3. Nel terminale (nella cartella del progetto):
   ```bash
   npm install
   npm run dev
   ```
   Apri http://localhost:3000 — il sito è attivo in locale.

## Pubblicazione su Vercel (gratuito)
1. Crea un account su https://vercel.com e installa la CLI (opzionale).
2. Clicca **New Project** → **Import** questo repository (o trascina la cartella).
3. Dopo il primo deploy, apri **Settings → Domains** e aggiungi **tuodominio.it** e **yourdomain.com**.
4. Lascia il middleware così com'è. Quando gli utenti visitano:
   - `tuodominio.it` → verranno reindirizzati a `/it/...`
   - `yourdomain.com` → a `/en/...`

> Quando mi darai i domini reali, modificheremo la mappa `DEFAULT_LOCALE_BY_HOST` in `middleware.ts`.

## Personalizzazioni rapide
- Testi: modifica i file in `app/[locale]/**`.
- Email: aggiorna `info@tuodominio.it` e l'endpoint Formspree in `contatti/page.tsx`.
- Stile: `app/globals.css` e classi Tailwind.
- CV PDF: possiamo aggiungere `/public/CV_Simone_IT.pdf` e un pulsante per il download.

## Requisiti
- Node.js 18+
- NPM 9+

Se preferisci, posso guidarti passo-passo al deploy o farlo per te in call.
