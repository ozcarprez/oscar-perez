"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Cabecera y pie. La portada va sobre verde; la lectura sobre papel.
 */
export default function Marco({ children }: { children: React.ReactNode }) {
  const ruta = usePathname();
  const oscuro = ruta === "/";

  const fondo = oscuro
    ? "bg-[var(--color-verde)] text-[var(--color-papel)]"
    : "bg-[var(--color-papel)] text-[var(--color-tinta)]";
  const tenue = oscuro
    ? "text-[var(--color-papel-suave)]"
    : "text-[var(--color-tinta-suave)]";
  const raya = oscuro ? "border-white/10" : "border-[var(--color-linea)]";

  return (
    <div className={`flex min-h-screen flex-col ${fondo}`}>
      <header className="mx-auto flex w-full max-w-6xl items-baseline justify-between px-6 py-6 md:px-10">
        <Link href="/">Oscar Pérez</Link>
        <nav className="flex gap-6">
          <Link href="/escritos" className={tenue}>
            Escritos
          </Link>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer
        className={`mx-auto w-full max-w-6xl border-t px-6 py-8 text-[0.9375rem] md:px-10 ${raya} ${tenue}`}
      >
        <p>Tijuana, Baja California</p>
      </footer>
    </div>
  );
}
