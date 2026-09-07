import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--fuente-texto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oscarperez.mx"),
  title: {
    default: "Oscar Pérez",
    template: "%s — Oscar Pérez",
  },
  description:
    "Cómo funcionan los negocios por dentro, contados por alguien que estuvo adentro.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Oscar Pérez",
  },
  alternates: {
    types: { "application/rss+xml": "/rss.xml" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={newsreader.variable}>
      <body>
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 md:px-10">
          <header className="flex items-baseline justify-between py-8">
            <Link href="/" className="no-underline">
              Oscar Pérez
            </Link>
            <nav>
              <Link href="/escritos" className="text-[var(--color-tinta-suave)]">
                Escritos
              </Link>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-[var(--color-linea)] py-8 text-[0.9375rem] text-[var(--color-tinta-suave)]">
            <p>Tijuana, Baja California</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
