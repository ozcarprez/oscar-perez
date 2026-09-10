import type { Metadata } from "next";
import Link from "next/link";
import Credenciales from "@/components/Credenciales";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Páginas web y software a medida. Diseño y construyo herramientas que le quitan trabajo a tu negocio.",
};

const SERVICIOS = [
  {
    numero: "01",
    nombre: "Páginas web",
    detalle: "Sitios de marca, landing pages y blogs editoriales — como este.",
    incluye: [
      "Rápidos de verdad, sin plugins acumulados",
      "Diseño a medida, no una plantilla con tu logo encima",
      "Código tuyo: sin mensualidad de por vida a una plataforma",
    ],
  },
  {
    numero: "02",
    nombre: "Software a medida",
    detalle: "Sistemas internos, paneles y automatizaciones.",
    incluye: [
      "Se conecta con lo que ya usas: correo, hojas de cálculo, WhatsApp",
      "Se construye para tu proceso, no al revés",
      "Pensado para quitarte trabajo repetitivo, no para agregarlo",
    ],
  },
  {
    numero: "03",
    nombre: "Consultoría técnica",
    detalle: "Una segunda opinión antes de gastar en desarrollo.",
    incluye: [
      "Auditoría de lo que ya tienes",
      "Qué vale la pena construir y qué no",
      "Sin conflicto de interés: a veces la respuesta es 'no lo hagas'",
    ],
  },
];

const PROCESO = [
  {
    numero: "01",
    nombre: "Entender",
    detalle:
      "Antes de tocar una línea de código, entiendo qué haces, para quién, y qué te está costando no tenerlo resuelto.",
  },
  {
    numero: "02",
    nombre: "Diseñar",
    detalle:
      "Definimos qué se construye, en qué orden y qué se queda fuera. Sin eso, cualquier proyecto se alarga.",
  },
  {
    numero: "03",
    nombre: "Construir",
    detalle:
      "Código propio, avances que puedes ver mientras se hace, sin sorpresas al final.",
  },
  {
    numero: "04",
    nombre: "Entregar",
    detalle:
      "Se publica, funciona, y queda en tus manos — con documentación, no con dependencia de mí.",
  },
];

const CONTACTO =
  "mailto:ozcarprez@gmail.com?subject=Quiero%20platicar%20un%20proyecto";

export default function Servicios() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="aparece mb-5 text-[var(--color-papel-suave)]">
            Servicios
          </p>
          <h1
            className="aparece text-balance text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.03em]"
            style={{ animationDelay: "80ms" }}
          >
            Páginas web y software que se pagan solos.
          </h1>
          <p
            className="aparece mt-8 max-w-2xl text-[1.25rem] text-[var(--color-papel-suave)]"
            style={{ animationDelay: "160ms" }}
          >
            No vendo diseño. Vendo la parte del negocio que dejas de hacer a
            mano en cuanto esto existe.
          </p>
          <div className="aparece mt-10" style={{ animationDelay: "240ms" }}>
            <a
              href={CONTACTO}
              className="inline-block border-b border-[var(--color-rojo)] pb-1 text-[var(--color-rojo)] transition-colors hover:border-[var(--color-papel)] hover:text-[var(--color-papel)]"
            >
              Cuéntame tu proyecto →
            </a>
          </div>
        </div>
      </section>

      <Credenciales />

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <h2 className="mb-12 text-[var(--color-papel-suave)]">Qué hago</h2>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {SERVICIOS.map((s) => (
            <div key={s.numero}>
              <span className="text-[0.9375rem] tabular-nums text-[var(--color-rojo)]">
                {s.numero}
              </span>
              <h3 className="mt-3 text-[1.75rem] leading-snug">{s.nombre}</h3>
              <p className="mt-2 text-[var(--color-papel-suave)]">
                {s.detalle}
              </p>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                {s.incluye.map((linea) => (
                  <li key={linea} className="text-[0.9375rem] leading-relaxed">
                    {linea}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
          <h2 className="mb-12 text-[var(--color-papel-suave)]">
            Cómo trabajo
          </h2>
          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {PROCESO.map((p) => (
              <div key={p.numero}>
                <span className="text-[0.9375rem] tabular-nums text-[var(--color-rojo)]">
                  {p.numero}
                </span>
                <h3 className="mt-3 text-[1.375rem] leading-snug">
                  {p.nombre}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-papel-suave)]">
                  {p.detalle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
          <h2 className="mb-12 text-[var(--color-papel-suave)]">
            Prueba, no promesa
          </h2>
          <Link href="/" className="group block max-w-xl">
            <h3 className="text-[1.75rem] leading-snug">oscarperez.mx</h3>
            <p className="mt-2 text-[var(--color-papel-suave)]">
              Este mismo sitio. Next.js, MDX, animaciones hechas a mano —
              cero plantillas.
            </p>
            <span className="mt-4 inline-block border-b border-[var(--color-rojo)] pb-1 text-[var(--color-rojo)] transition-colors group-hover:border-[var(--color-papel)] group-hover:text-[var(--color-papel)]">
              Ver el sitio
            </span>
          </Link>
          <p className="mt-10 max-w-xl text-[0.9375rem] text-[var(--color-papel-suave)]">
            Los proyectos de clientes se enseñan en la llamada — la mayoría
            son confidenciales.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 text-center md:px-10">
          <h2 className="mx-auto max-w-2xl text-balance text-[clamp(2rem,5vw,3.5rem)] font-medium leading-tight tracking-[-0.02em]">
            ¿Tienes algo que construir?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[var(--color-papel-suave)]">
            Escríbeme y platicamos qué necesitas y si tiene sentido que lo
            haga yo.
          </p>
          <a
            href={CONTACTO}
            className="mt-8 inline-block border-b border-[var(--color-rojo)] pb-1 text-[1.125rem] text-[var(--color-rojo)] transition-colors hover:border-[var(--color-papel)] hover:text-[var(--color-papel)]"
          >
            ozcarprez@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}
