import Link from "next/link";
import type { Entrada } from "@/lib/entradas";
import { formatearFecha } from "@/lib/entradas";

/**
 * Índice de entradas. Folio en el margen, como anotación de libreta.
 */
export default function Listado({
  entradas,
  oscuro = false,
}: {
  entradas: Entrada[];
  oscuro?: boolean;
}) {
  const raya = oscuro ? "border-white/10" : "border-[var(--color-linea)]";
  const tenue = oscuro
    ? "text-[var(--color-papel-suave)]"
    : "text-[var(--color-tinta-suave)]";

  return (
    <ul>
      {entradas.map((e) => (
        <li key={e.slug} className={`border-b ${raya} last:border-0`}>
          <Link
            href={`/escritos/${e.slug}`}
            className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 py-6 transition-opacity hover:opacity-70"
          >
            <span className="folio text-[0.9375rem]">
              {String(e.folio).padStart(3, "0")}
            </span>
            <div>
              <h3 className="text-[1.5rem] leading-snug">{e.titulo}</h3>
              <p className={`mt-1 text-[0.9375rem] ${tenue}`}>
                {formatearFecha(e.fecha)}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
