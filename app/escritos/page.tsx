import type { Metadata } from "next";
import { leerEntradas } from "@/lib/entradas";
import Listado from "@/components/Listado";

export const metadata: Metadata = {
  title: "Escritos",
  description: "Todas las entradas, de la más reciente a la más vieja.",
};

export default function Escritos() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-12 md:px-10">
      <h1 className="text-[2.25rem] font-medium leading-tight">Escritos</h1>
      <div className="mt-10">
        <Listado entradas={leerEntradas()} />
      </div>
    </section>
  );
}
