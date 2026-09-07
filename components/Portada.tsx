"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

/**
 * Portada: nombre enorme, retrato fundido con el fondo, y la afirmación
 * de la entrada más reciente. El retrato se aleja levemente al hacer scroll.
 */
export default function Portada({
  titulo,
  entrada,
  slug,
}: {
  titulo: string;
  entrada: string;
  slug: string;
}) {
  const figura = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducido.matches) return;

    let pendiente = false;
    const alScroll = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const t = Math.min(y / 700, 1);
        if (figura.current) {
          figura.current.style.transform = `translateY(${y * 0.12}px) scale(${1 - t * 0.06})`;
          figura.current.style.opacity = String(1 - t * 0.55);
        }
        pendiente = false;
      });
    };

    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  return (
    <section className="relative flex min-h-[88vh] flex-col justify-end overflow-hidden">
      {/* Retrato */}
      <div
        ref={figura}
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center will-change-transform"
      >
        <Image
          src="/oscar.jpg"
          alt="Oscar Pérez"
          width={1280}
          height={1232}
          priority
          className="retrato h-auto w-[min(560px,88vw)] object-contain"
        />
      </div>

      {/* Nombre */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <p className="aparece mb-4 text-[var(--color-papel-suave)]">
          Cómo funcionan los negocios por dentro
        </p>
        <h1
          className="nombre aparece"
          style={{ animationDelay: "80ms" }}
        >
          Oscar Pérez
        </h1>
      </div>

      {/* Entrada más reciente */}
      <div
        className="aparece relative z-10 mx-auto mt-14 w-full max-w-6xl px-6 pb-16 md:px-10"
        style={{ animationDelay: "220ms" }}
      >
        <div className="max-w-2xl border-t border-white/15 pt-8">
          <p className="mb-3 text-[0.9375rem] text-[var(--color-papel-suave)]">
            Lo más reciente
          </p>
          <Link href={`/escritos/${slug}`} className="group block">
            <h2 className="entrada-titular">{titulo}</h2>
            <p className="mt-4 text-[var(--color-papel-suave)]">{entrada}</p>
            <span className="mt-5 inline-block border-b border-[var(--color-rojo)] pb-1 text-[var(--color-rojo)] transition-colors group-hover:text-[var(--color-papel)] group-hover:border-[var(--color-papel)]">
              Leer la entrada
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
