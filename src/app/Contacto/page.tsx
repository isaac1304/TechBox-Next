export default function ContactoPage() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 pt-8 pb-16 text-white">
            <h1 className="text-3xl font-extrabold text-white">Contacto</h1>
            <p className="mt-2 max-w-3xl text-white/[0.85]">
                ¿Listo para hablar? Te respondemos en 1–2 días hábiles. Cuéntanos sobre tu proyecto y el resultado que quieres lograr.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
                {/* Expectativas (sin doble bullet) */}
                <div className="rounded-3xl border border-white/[0.12] bg-[rgba(8,13,32,0.72)] p-6 backdrop-blur">
                    <h2 className="text-xl font-bold text-white">¿Qué puedes esperar?</h2>
                    <ul className="mt-4 list-disc pl-5 text-white/[0.85]">
                        <li>Reunión de 30 min por videollamada</li>
                        <li>Revisión de tu caso y propuesta de próximos pasos</li>
                        <li>Sin compromisos, 100% consultiva</li>
                    </ul>
                </div>

                {/* Formulario */}
                <form
                    action="https://formspree.io/f/mqaqvavn"
                    method="POST"
                    className="rounded-3xl border border-white/[0.12] bg-[rgba(8,13,32,0.72)] p-6 backdrop-blur"
                >
                    <div className="grid gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-white/[0.88]">Nombre</label>
                            <input
                                type="text" name="name" required
                                className="mt-1 w-full rounded-xl border border-white/20 bg-[rgba(6,10,28,0.9)] px-4 py-2 text-white outline-none ring-0 placeholder:text-white/40 focus:border-[var(--accent-ice)] focus:ring-0"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-white/[0.88]">Email</label>
                            <input
                                type="email" name="email" required
                                className="mt-1 w-full rounded-xl border border-white/20 bg-[rgba(6,10,28,0.9)] px-4 py-2 text-white outline-none ring-0 placeholder:text-white/40 focus:border-[var(--accent-ice)] focus:ring-0"
                                placeholder="tu@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-white/[0.88]">Mensaje</label>
                            <textarea
                                name="message" rows={6} required
                                className="mt-1 w-full rounded-xl border border-white/20 bg-[rgba(6,10,28,0.9)] px-4 py-3 text-white outline-none ring-0 placeholder:text-white/40 focus:border-[var(--accent-ice)] focus:ring-0"
                                placeholder="¿En qué te ayudamos?"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent-ice)] to-[var(--accent-teal)] px-5 py-2.5 font-semibold text-[#041520] shadow-[0_16px_38px_rgba(64,194,255,0.35)] transition hover:-translate-y-[1px] hover:shadow-[0_22px_48px_rgba(64,194,255,0.45)]"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
