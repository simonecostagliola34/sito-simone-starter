// components/EmailLink.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  user: string;           // es. "contact"
  domain: string;         // es. "engcostagliolasimone.com"
  className?: string;
  children?: React.ReactNode; // testo visibile; se assente, mostra l'email completa
};

export default function EmailLink({ user, domain, className, children }: Props) {
  const [ready, setReady] = useState(false);

  // Montiamo l'email solo sul client (JS), non nell'HTML statico
  const email = useMemo(() => `${user}@${domain}`, [user, domain]);

  useEffect(() => {
    setReady(true);
  }, []);

  // Fallback senza JS: mostra offuscata ma leggibile
  if (!ready) {
    return (
      <span className={className}>
        {user} [at] {domain.replace(/\./g, " [dot] ")}
      </span>
    );
  }

  // Con JS: link mailto normale
  return (
    <a href={`mailto:${email}`} className={className}>
      {children ?? email}
    </a>
  );
}
