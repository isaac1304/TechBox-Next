export default function Servicios() {
    const services = [
        {
            title: 'Soluciones llave en mano',
            description:
                'Implementamos soluciones integrales, desde la planificación hasta el despliegue, para acelerar tu impacto digital.',
        },
        {
            title: 'Transformación digital',
            description:
                'Llevamos tu negocio al siguiente nivel con experiencias conectadas, medibles y escalables en cada canal.',
        },
        {
            title: 'Expertos en Cloud',
            description:
                'Dominamos plataformas como Google Cloud y AWS para optimizar tus costos y automatizar tus procesos.',
        },
        {
            title: 'Ciberseguridad integrada',
            description:
                'Tu información y la de tus clientes protegida gracias a estrategias proactivas y monitoreo continuo.',
        },
    ]

    return (
        <section className="relative overflow-hidden bg-gray-900 py-20 px-6 sm:px-8">
            <div className="pointer-events-none absolute inset-0 -z-10 animate-float-pattern bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18)_1px,_transparent_1px)] bg-[length:22px_22px] opacity-60" />

            <div className="relative z-10 mx-auto max-w-6xl text-center">
                <p className="font-extrabold uppercase tracking-[0.3em] text-blue-500 text-xs md:text-sm">
                    Impulsa tu negocio
                </p>
                <h2 className="mt-6 text-4xl font-extrabold leading-tight text-center md:text-5xl">
                    <span className="block text-blue-500">Desbloquea el poder</span>
                    <span className="mt-2 block text-white">de la tecnología</span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg">
                    Creamos experiencias digitales memorables combinando estrategia, diseño e ingeniería para que tu
                    organización crezca sin límites.
                </p>
            </div>

            <div className="relative z-10 mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                    <article
                        key={service.title}
                        className="rounded-2xl bg-gray-800/60 p-8 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                    >
                        <span className="mb-5 inline-block h-3 w-3 rounded-full bg-blue-500" />
                        <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-300">{service.description}</p>
                    </article>
                ))}
            </div>

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -top-24 -right-24 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl" />
        </section>
    )
}
