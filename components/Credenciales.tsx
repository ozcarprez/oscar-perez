/**
 * Franja de credenciales. Mismo carrusel que Frases, con etiquetas cortas.
 */
const CREDENCIALES = [
  "Next.js + TypeScript",
  "Diseño a medida — cero plantillas",
  "Un solo responsable, sin intermediarios",
  "Este sitio lo hice yo",
  "Con sede en Tijuana",
  "Entrega con código, no con candado",
];

export default function Credenciales() {
  const doble = [...CREDENCIALES, ...CREDENCIALES];

  return (
    <section className="overflow-hidden border-y border-white/10 py-8">
      <div className="pista">
        {doble.map((texto, i) => (
          <span
            key={i}
            aria-hidden={i >= CREDENCIALES.length}
            className="mr-12 flex shrink-0 items-center whitespace-nowrap text-[1rem] text-[var(--color-papel-suave)]"
          >
            <span aria-hidden className="mr-3 text-[var(--color-rojo)]">
              ✦
            </span>
            {texto}
          </span>
        ))}
      </div>
    </section>
  );
}
