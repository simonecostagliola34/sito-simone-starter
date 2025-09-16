"use client";

type Props = {
  country?: string;            // es. "+39"
  number: string;              // es. "3663476417" (solo cifre, niente spazi)
  display?: string;            // es. "+39 366 347 6417" (testo che vedi)
  className?: string;
};

export default function PhoneLink({ country = "", number, display, className }: Props) {
  // Ricomponiamo il numero in runtime per i bot più semplici
  const a = country ?? "";
  const b = number.slice(0, 3);
  const c = number.slice(3, 6);
  const d = number.slice(6);
  const href = `tel:${a}${b}${c}${d}`;

  return (
    <a href={href} className={className} aria-label={`Chiama ${a} ${b} ${c} ${d}`}>
      {display ?? `${a} ${b} ${c} ${d}`}
    </a>
  );
}
