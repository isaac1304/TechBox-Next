const caseStudies = [
  {
    title: "Checkout 3× más rápido",
    description: "Redujimos TTFB 42% y mejoramos conversión 18% en 8 semanas.",
  },
  {
    title: "Migración a nube segura",
    description: "De monolito a microservicios con 99.95% uptime y -27% costos.",
  },
  {
    title: "Analítica accionable",
    description: "Dashboard ejecutivo con KPIs en tiempo real; decisiones semanales basadas en datos.",
  },
];

export function CaseStudies() {
  return (
    <section id="casos" className="bg-white py-16" aria-labelledby="casos-exito">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl space-y-3">
          <h2 id="casos-exito" className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Casos de éxito
          </h2>
          <p className="text-base text-slate-600">
            Resultados medibles que validan nuestra forma de trabajar.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
