import Link from "next/link";
import { leerEntradas, formatearFecha } from "@/lib/entradas";
import Suscribir from "@/components/Suscribir";

export default function Portada() {
  const entradas = leerEntradas();
  const [reciente, ...resto] = entradas;

  if (!reciente) {
    return (
      <p className="py-24 text-[var(--color-tinta-suave)]">
        Todavía no hay entradas. Agrega un archivo .mdx en la carpeta content.
      </p>
    );
  }

  return (
    <>
      {/* El único elemento ruidoso: la afirmación de la entrada más reciente. */}
      <section className="py-16 md:py-24">
        <Link href={`/escritos/${reciente.slug}`} className="no-underline">
          <h1 className="titular">{reciente.titulo}</h1>
        </Link>
        <p className="prosa mt-8 text-[var(--color-tinta-suave)]">
          {reciente.entrada}
        </p>
        <p className="mt-6">
          <Link href={`/escritos/${reciente.slug}`}>Leer la entrada</Link>
        </p>
      </section>

      {resto.length > 0 && (
        <section className="border-t border-[var(--color-linea)] py-10">
          <ul>
            {resto.slice(0, 8).map((e) => (
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
      )}

      <Suscribir />
    </>
  );
}
