import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import Marco from "@/components/Marco";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--fuente-texto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oscar-perez.vercel.app"),
  title: { default: "Oscar Pérez", template: "%s — Oscar Pérez" },
  description:
    "Cómo funcionan los negocios por dentro, contados por alguien que estuvo adentro.",
  openGraph: { type: "website", locale: "es_MX", siteName: "Oscar Pérez" },
  alternates: { types: { "application/rss+xml": "/rss.xml" } },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={newsreader.variable}>
      <body>
        <Marco>{children}</Marco>
      </body>
    </html>
  );
}
