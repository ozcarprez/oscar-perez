import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { leerEntradas, leerEntrada, formatearFecha } from "@/lib/entradas";
import Suscribir from "@/components/Suscribir";

export function generateStaticParams() {
  return leerEntradas().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entrada = leerEntrada(slug);
  if (!entrada) return {};

  return {
    title: entrada.titulo,
    description: entrada.entrada,
    openGraph: {
      title: entrada.titulo,
      description: entrada.entrada,
      type: "article",
      publishedTime: entrada.fecha,
    },
  };
}

export default async function Entrada({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entrada = leerEntrada(slug);
  if (!entrada) notFound();

  return (
    <>
      <article className="mx-auto w-full max-w-3xl px-6 py-12 md:px-10">
        <header className="mb-12">
          <p className="folio text-[0.9375rem]">{String(entrada.folio).padStart(3, "0")}</p>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-tight text-balance">
            {entrada.titulo}
          </h1>
          <p className="mt-4 text-[0.9375rem] text-[var(--color-tinta-suave)]">
            {formatearFecha(entrada.fecha)}
          </p>
        </header>

        <div className="prosa">
          <MDXRemote source={entrada.cuerpo} />
        </div>
      </article>

      <div className="mx-auto w-full max-w-3xl px-6 md:px-10">
        <Suscribir />
      </div>
    </>
  );
}
