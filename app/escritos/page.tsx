import Link from "next/link";
import type { Metadata } from "next";
import { leerEntradas, formatearFecha } from "@/lib/entradas";

export const metadata: Metadata = {
  title: "Escritos",
  description: "Todas las entradas, de la más reciente a la más vieja.",
};

export default function Escritos() {
  const entradas = leerEntradas();

  return (
    <section className="py-12">
      <h1 className="text-[var(--text-entrada)] font-medium leading-tight">
        Escritos
      </h1>

      <ul className="mt-10">
        {entradas.map((e) => (
          <li
            key={e.slug}
            className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-b border-[var(--color-linea)] py-5 last:border-0"
          >
            <span className="folio pt-1.5">
              {String(e.folio).padStart(3, "0")}
            </span>
            <div>
              <Link
                href={`/escritos/${e.slug}`}
                className="text-[1.375rem] leading-snug no-underline"
              >
                {e.titulo}
              </Link>
              <p className="mt-1 text-[0.9375rem] text-[var(--color-tinta-suave)]">
                {formatearFecha(e.fecha)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
