export default function ContactoPage() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 pt-8 pb-16">
            <h1 className="text-3xl font-extrabold text-[#0b1b2b]">Contacto</h1>
            <p className="mt-2 max-w-3xl text-[#334b68]">
                ¿Listo para hablar? Te respondemos en 1–2 días hábiles. Cuéntanos sobre tu proyecto y el resultado que quieres lograr.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
                {/* Expectativas (sin doble bullet) */}
                <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
                    <h2 className="text-xl font-bold text-[#0b1b2b]">¿Qué puedes esperar?</h2>
                    <ul className="mt-4 list-disc pl-5 text-[#334b68]">
                        <li>Reunión de 30 min por videollamada</li>
                        <li>Revisión de tu caso y propuesta de próximos pasos</li>
                        <li>Sin compromisos, 100% consultiva</li>
                    </ul>
                </div>

                {/* Formulario */}
                <form
                    action="https://formspree.io/f/mqaqvavn"
                    method="POST"
                    className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur"
                >
                    <div className="grid gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-[#0b1b2b]">Nombre</label>
                            <input
                                type="text" name="name" required
                                className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2 outline-none ring-0 focus:border-[#2EC4B6]"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#0b1b2b]">Email</label>
                            <input
                                type="email" name="email" required
                                className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2 outline-none ring-0 focus:border-[#2EC4B6]"
                                placeholder="tu@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#0b1b2b]">Mensaje</label>
                            <textarea
                                name="message" rows={6} required
                                className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none ring-0 focus:border-[#2EC4B6]"
                                placeholder="¿En qué te ayudamos?"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#2EC4B6] px-5 py-2.5 font-semibold text-white shadow hover:opacity-95"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
