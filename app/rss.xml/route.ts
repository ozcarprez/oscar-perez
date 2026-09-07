import { leerEntradas } from "@/lib/entradas";

const SITIO = "https://oscarperez.mx";

function escapar(texto: string) {
  return texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET() {
  const items = leerEntradas()
    .map(
      (e) => `    <item>
      <title>${escapar(e.titulo)}</title>
      <link>${SITIO}/escritos/${e.slug}</link>
      <guid>${SITIO}/escritos/${e.slug}</guid>
      <description>${escapar(e.entrada)}</description>
      <pubDate>${new Date(`${e.fecha}T12:00:00`).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Oscar Pérez</title>
    <link>${SITIO}</link>
    <language>es-MX</language>
    <description>Cómo funcionan los negocios por dentro.</description>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
