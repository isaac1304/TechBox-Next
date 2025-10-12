const services = [
    {
        title: 'Soluciones llave en mano',
        description:
            'Implementamos soluciones integrales que se adaptan a tu operación para acelerar la innovación de forma medible y escalable.',
    },
    {
        title: 'Transformación digital',
        description:
            'Llevamos tu negocio al siguiente nivel mediante experiencias digitales centradas en el usuario y optimizadas con datos.',
    },
    {
        title: 'Expertos en cloud',
        description:
            'Dominamos plataformas como Google Cloud y AWS para optimizar tus cargas de trabajo y automatizar tus procesos.',
    },
    {
        title: 'Ciberseguridad integrada',
        description:
            'Tu información y la de tus clientes se mantienen protegidas gracias a arquitecturas seguras y monitoreo continuo.',
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
                            className="group rounded-xl bg-gray-800/50 p-6 shadow-lg shadow-blue-900/30 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
                        >
                            <span className="mb-5 inline-flex h-3 w-3 rounded-full bg-blue-500" aria-hidden="true" />
                            <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-300">{service.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
