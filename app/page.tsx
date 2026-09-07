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
