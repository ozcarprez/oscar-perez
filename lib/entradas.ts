import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIRECTORIO = path.join(process.cwd(), "content");

export type Entrada = {
  slug: string;
  folio: number;
  titulo: string;
  entrada: string; // primer párrafo, se usa en portada y metadatos
  fecha: string; // ISO: 2026-09-12
  cuerpo: string;
};

export function leerEntradas(): Entrada[] {
  if (!fs.existsSync(DIRECTORIO)) return [];

  return fs
    .readdirSync(DIRECTORIO)
    .filter((archivo) => archivo.endsWith(".mdx"))
    .map((archivo) => {
      const crudo = fs.readFileSync(path.join(DIRECTORIO, archivo), "utf8");
      const { data, content } = matter(crudo);
      return {
        slug: archivo.replace(/\.mdx$/, ""),
        folio: Number(data.folio),
        titulo: String(data.titulo),
        entrada: String(data.entrada),
        fecha: String(data.fecha),
        cuerpo: content,
      };
    })
    .sort((a, b) => b.fecha.localeCompare(a.fecha));
}

export function leerEntrada(slug: string): Entrada | undefined {
  return leerEntradas().find((e) => e.slug === slug);
}

export function formatearFecha(iso: string): string {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00`));
}
