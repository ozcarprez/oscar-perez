/**
 * Suscripción. Una sola línea, sin tarjeta ni modal.
 * Los correos llegan a beehiiv.
 */
export default function Suscribir() {
  return (
    <section className="border-t border-[var(--color-linea)] py-12">
      <p className="prosa">
        Escribo sobre cómo funcionan los negocios por dentro. Una entrada nueva
        cada semana, directo a tu correo.
      </p>

      <form
        action="https://oscars-newsletter-7fd1a8.beehiiv.com/subscribe"
        method="post"
        target="_blank"
        className="mt-6 flex max-w-md flex-wrap items-end gap-x-4 gap-y-3"
      >
        <label htmlFor="correo" className="sr-only">
          Tu correo
        </label>
        <input
          id="correo"
          name="email"
          type="email"
          required
          placeholder="tu@correo.com"
          className="min-w-0 flex-1 border-0 border-b border-[var(--color-tinta)] bg-transparent pb-1.5 placeholder:text-[var(--color-tinta-suave)] focus:border-[var(--color-rojo)] focus:outline-none"
        />
        <button
          type="submit"
          className="border-b border-[var(--color-rojo)] pb-1.5 text-[var(--color-rojo)] transition-colors hover:text-[var(--color-tinta)]"
        >
          Suscribirme
        </button>
      </form>
    </section>
  );
}
