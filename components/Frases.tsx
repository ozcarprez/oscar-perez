/**
 * Carrusel de principios. Se detiene al pasar el cursor.
 * Salen de las notas; son la carta de presentación del sitio.
 */
const FRASES = [
  "La escasez no vive en las cosas. Vive en las condiciones de acceso.",
  "Si llegas a pedir de lo que ya está armado, eres un costo. Si llegas trayendo algo que no existía, eres una ganancia.",
  "No preguntes cuánto te pagan por resolverlo. Pregunta qué te queda en las manos después.",
  "Un problema se resuelve una vez. Una necesidad se sigue sintiendo.",
  "La pregunta no es qué tan rápido depositas. Es cuánto trabajo le eliminas.",
  "Quien crea el ecosistema, crea las reglas.",
  "Los números son una foto. El negocio es una película.",
  "El margen se hace al comprar, no al vender.",
  "Un producto mediocre con gran distribución le gana siempre a un gran producto sin canal.",
];

export default function Frases() {
  const doble = [...FRASES, ...FRASES];

  return (
    <section className="overflow-hidden border-y border-white/10 py-14">
      <div className="pista">
        {doble.map((frase, i) => (
          <blockquote
            key={i}
            aria-hidden={i >= FRASES.length}
            className="mr-16 w-[min(30rem,80vw)] shrink-0"
          >
            <span
              aria-hidden
              className="mb-1 block text-3xl leading-none text-[var(--color-rojo)]"
            >
              &ldquo;
            </span>
            <p className="text-[1.375rem] leading-snug">{frase}</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
