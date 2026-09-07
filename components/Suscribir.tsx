"use client";

import Script from "next/script";

/**
 * Suscripción vía el embed oficial de beehiiv.
 */
export default function Suscribir() {
  return (
    <section className="border-t border-[var(--color-linea)] py-12">
      <p className="prosa mb-6">
        Escribo sobre cómo funcionan los negocios por dentro. Una entrada nueva
        cada semana, directo a tu correo.
      </p>

      <div id="beehiiv-form" />

      <Script
        src="https://subscribe-forms.beehiiv.com/v3/loader.js"
        data-beehiiv-form="794e513b-abf5-448b-9844-0b7fce29995c"
        strategy="afterInteractive"
      />
    </section>
  );
}
