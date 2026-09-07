"use client";

import { useEffect, useRef } from "react";

export default function Suscribir() {
  const contenedor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contenedor.current || contenedor.current.childElementCount > 0) return;
    const s = document.createElement("script");
    s.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    s.setAttribute(
      "data-beehiiv-form",
      "794e513b-abf5-448b-9844-0b7fce29995c"
    );
    s.async = true;
    contenedor.current.appendChild(s);
  }, []);

  return (
    <section className="border-t border-[var(--color-linea)] py-12">
      <p className="prosa mb-6">
        Escribo sobre cómo funcionan los negocios por dentro. Una entrada nueva
        cada semana, directo a tu correo.
      </p>
      <div ref={contenedor} />
    </section>
  );
}
