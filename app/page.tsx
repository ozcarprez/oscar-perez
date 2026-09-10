import Link from "next/link";
import { leerEntradas } from "@/lib/entradas";
import Portada from "@/components/Portada";
import Frases from "@/components/Frases";
import Listado from "@/components/Listado";
import Suscribir from "@/components/Suscribir";

export default function Inicio() {
  const entradas = leerEntradas();
  const [reciente, ...resto] = entradas;

  if (!reciente) {
    return (
      <p className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        Todavía no hay entradas. Agrega un archivo .mdx en la carpeta content.
      </p>
    );
  }

  return (
    <>
      <Portada
        titulo={reciente.titulo}
        entrada={reciente.entrada}
        slug={reciente.slug}
      />

      <Frases />

      <section className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/10 py-10">
          <p className="text-[var(--color-papel-suave)]">
            También diseño y construyo páginas web y software a medida.
          </p>
          <Link
            href="/servicios"
            className="border-b border-[var(--color-rojo)] pb-1 text-[var(--color-rojo)] transition-colors hover:border-[var(--color-papel)] hover:text-[var(--color-papel)]"
          >
            Ver servicios →
          </Link>
        </div>
      </section>

      {resto.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
          <h2 className="mb-8 text-[var(--color-papel-suave)]">Más escritos</h2>
          <Listado entradas={resto.slice(0, 8)} oscuro />
        </section>
      )}

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Suscribir />
      </div>
    </>
  );
}
