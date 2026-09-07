# oscarperez

Sitio de escritos. Next.js 15 + Tailwind v4 + MDX.

## Correr en local

    npm install
    npm run dev

## Publicar una entrada

Crea un archivo en `content/` con extensión `.mdx`. El nombre del archivo es la URL.

    ---
    folio: 2
    titulo: El título, que es la afirmación
    entrada: El primer párrafo. Sale en portada y en la tarjeta de LinkedIn.
    fecha: "2026-09-15"
    ---

    Aquí va el cuerpo, en markdown. ## para subtítulos.

Commit, push, y Vercel hace deploy solo.

## Deploy

1. Sube el repo a GitHub.
2. En Vercel: New Project, importa el repo, deploy. No hay que configurar nada.
3. Agrega tu dominio en Settings > Domains.

## Pendientes

- En `components/Suscribir.tsx`, reemplaza `REEMPLAZAR_CON_URL_DE_BEEHIIV` con la URL
  de tu formulario (Beehiiv > Audience > Subscribe Forms > Embed).
- En `app/layout.tsx`, `app/sitemap.ts` y `app/rss.xml/route.ts`, cambia
  `https://oscarperez.mx` por tu dominio real.
- Agrega `app/opengraph-image.tsx` si quieres una imagen propia al compartir.

## Diseño

Papel frío verde-gris, tinta azul, rojo de marcar. Una sola tipografía (Newsreader).
Las entradas van numeradas con folio, en el margen. Lo único grande es el titular
de portada; todo lo demás es quieto a propósito.

Los tokens viven en `app/globals.css`, dentro de `@theme`.
