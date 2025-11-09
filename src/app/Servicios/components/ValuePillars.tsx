const pillars = [
  {
    title: "Velocidad con calidad",
    description: "Entregamos valor en ciclos cortos, con estándares de ingeniería modernos.",
  },
  {
    title: "Arquitectura segura",
    description: "Diseño con seguridad por defecto, cumplimiento y observabilidad.",
  },
  {
    title: "Datos accionables",
    description: "Métricas, analítica y ML alineados a KPIs de negocio.",
  },
  {
    title: "Equipo a tu medida",
    description: "Células cross-funcionales que se integran con tu organización.",
  },
];

export function ValuePillars() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold sm:text-3xl">Propuesta de valor</h2>
          <p className="text-base text-slate-200">
            Pilares que aceleran resultados tangibles para tu negocio.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:border-white/20"
            >
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-200">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
