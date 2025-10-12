const services = [
    {
        title: 'Soluciones llave en mano',
        badge: 'Estrategia 360°',
        description:
            'Implementamos plataformas a medida, conectando procesos críticos y brindando acompañamiento continuo para sostener el crecimiento.',
        highlights: ['Arquitecturas escalables', 'Gobierno de proyecto ágil'],
        accent: 'from-blue-500/40 via-blue-500/10 to-transparent',
    },
    {
        title: 'Transformación digital',
        badge: 'Experiencias',
        description:
            'Rediseñamos journeys digitales centrados en la persona con descubrimientos UX, analítica avanzada y experimentación constante.',
        highlights: ['Investigación con usuarios', 'Dashboards en tiempo real'],
        accent: 'from-cyan-400/40 via-cyan-400/10 to-transparent',
    },
    {
        title: 'Expertos en cloud',
        badge: 'Infraestructura',
        description:
            'Modernizamos tus cargas en la nube con automatización CI/CD, observabilidad unificada y optimización de costos.',
        highlights: ['Landing zones seguras', 'Automatización con IaC'],
        accent: 'from-indigo-400/40 via-indigo-400/10 to-transparent',
    },
    {
        title: 'Ciberseguridad integrada',
        badge: 'Confianza digital',
        description:
            'Blindamos tus datos con monitoreo inteligente, respuesta ante incidentes y cumplimiento normativo continuo.',
        highlights: ['SOC 24/7', 'Evaluaciones de cumplimiento'],
        accent: 'from-sky-400/40 via-sky-400/10 to-transparent',
    },
]

export default function Servicios() {
    return (
        <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-24">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.28),transparent_60%)] opacity-70 blur-3xl animate-pulse-glow" />
                <div className="absolute inset-0 bg-[url('/patterns/floating-dots.svg')] bg-[length:420px_420px] bg-center opacity-50 mix-blend-screen animate-float-pattern" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-2xl text-center">
                    <h2 className="mb-12 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                        <span className="block text-blue-500">Desbloquea el poder</span>
                        <span className="block text-white">de la tecnología</span>
                    </h2>
                </header>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <article
                            key={service.title}
                            className="group relative overflow-hidden rounded-2xl bg-gray-900/60 p-6 shadow-xl shadow-blue-900/20 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20"
                        >
                            <div
                                className={`pointer-events-none absolute inset-px rounded-[1.05rem] bg-gradient-to-br opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 ${service.accent}`}
                                aria-hidden="true"
                            />
                            <div className="relative space-y-5">
                                <span className="inline-flex h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" aria-hidden="true" />
                                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-blue-100/90">
                                    {service.badge}
                                </span>
                                <div>
                                    <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-300">{service.description}</p>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-300/90">
                                    {service.highlights.map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-blue-400/80" aria-hidden="true" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
