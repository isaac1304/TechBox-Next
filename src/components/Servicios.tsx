const services = [
  {
    title: 'Soluciones llave en mano',
    description:
      'Implementamos soluciones integrales que abarcan desde la consultoría hasta el despliegue final, con soporte continuo.',
  },
  {
    title: 'Transformación digital',
    description:
      'Llevamos tu negocio al siguiente nivel con estrategias digitales que optimizan procesos y mejoran la experiencia del cliente.',
  },
  {
    title: 'Expertos en cloud',
    description:
      'Dominamos plataformas como Google Cloud y AWS para modernizar tu infraestructura y escalar tus operaciones.',
  },
  {
    title: 'Ciberseguridad integrada',
    description:
      'Protegemos tus datos con soluciones proactivas que garantizan continuidad operativa y confianza en cada interacción.',
  },
] as const;

export default function Servicios() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:28px_28px] opacity-70" />
        <div className="absolute -inset-[10%] animate-drift bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.2)_1px,transparent_0)] bg-[size:36px_36px] opacity-30" />
      </div>
      <div className="relative mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          <span className="block text-blue-500">Desbloquea el poder</span>
          <span className="block text-white">de la tecnología</span>
        </h2>
        <p className="mt-6 text-base text-gray-300 sm:text-lg">
          Impulsamos tu estrategia digital con soluciones innovadoras, diseñadas para llevar tu negocio al siguiente nivel.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-2xl bg-gray-800/60 p-8 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{service.description}</p>
              <div className="absolute inset-0 -z-10 rounded-2xl border border-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
