/**
 * Suscripción. Una sola línea, sin tarjeta ni modal.
 *
 * Conectar con Beehiiv: reemplaza action por la URL de tu formulario
 * (Beehiiv > Audience > Subscribe Forms > Embed) o pega su iframe aquí.
 */
export default function Suscribir() {
  return (
    <section className="border-t border-[var(--color-linea)] py-12">
      <p className="prosa">
        Escribo sobre cómo funcionan los negocios por dentro. Una entrada nueva
        cada semana, directo a tu correo.
      </p>

      <form
        action="REEMPLAZAR_CON_URL_DE_BEEHIIV"
        method="post"
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
          className="min-w-0 flex-1 border-0 border-b border-[var(--color-tinta)] bg-transparent pb-1.5 placeholder:text-[var(--color-tinta-suave)] focus:outline-none focus:border-[var(--color-rojo)]"
        />
        <button
          type="submit"
          className="border-b border-[var(--color-rojo)] pb-1.5 text-[var(--color-rojo)] transition-colors hover:bg-[var(--color-rojo)] hover:px-2 hover:text-[var(--color-papel)]"
        >
          Suscribirme
        </button>
      </form>
    </section>
  );
}
