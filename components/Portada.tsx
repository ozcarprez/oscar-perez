"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pendiente = false;
    const alScroll = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => {
        const t = Math.min(window.scrollY / 700, 1);
        if (figura.current) {
          figura.current.style.transform = `translateY(${window.scrollY * 0.1}px)`;
          figura.current.style.opacity = String(1 - t * 0.7);
        }
        pendiente = false;
      });
    };

    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        ref={figura}
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 flex w-full items-end justify-center opacity-20 will-change-transform md:w-[46%] md:justify-end md:opacity-100"
      >
        <Image
          src="/oscar.jpg"
          alt=""
          width={620}
          height={597}
          priority
          className="retrato h-auto w-[min(30rem,92%)] object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="md:max-w-[54%]">
          <p className="aparece mb-5 text-[var(--color-papel-suave)]">
            Cómo funcionan los negocios por dentro
          </p>

          <h1 className="nombre aparece" style={{ animationDelay: "80ms" }}>
            Oscar
            <br />
            Pérez
          </h1>

          <div
            className="aparece mt-16 border-t border-white/15 pt-8"
            style={{ animationDelay: "220ms" }}
          >
            <p className="mb-3 text-[0.9375rem] text-[var(--color-papel-suave)]">
              Lo más reciente
            </p>
            <Link href={`/escritos/${slug}`} className="group block">
              <h2 className="entrada-titular">{titulo}</h2>
              <p className="mt-4 text-[var(--color-papel-suave)]">{entrada}</p>
              <span className="mt-5 inline-block border-b border-[var(--color-rojo)] pb-1 text-[var(--color-rojo)] transition-colors group-hover:border-[var(--color-papel)] group-hover:text-[var(--color-papel)]">
                Leer la entrada
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
