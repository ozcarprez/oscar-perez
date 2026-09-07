import type { MetadataRoute } from "next";
import { leerEntradas } from "@/lib/entradas";

const SITIO = "https://oscarperez.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const entradas = leerEntradas().map((e) => ({
    url: `${SITIO}/escritos/${e.slug}`,
    lastModified: new Date(e.fecha),
  }));

  return [
    { url: SITIO, lastModified: new Date() },
    { url: `${SITIO}/escritos`, lastModified: new Date() },
    ...entradas,
  ];
}
