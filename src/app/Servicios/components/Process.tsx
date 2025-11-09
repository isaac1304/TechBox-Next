const steps = [
  {
    title: "Descubrimiento",
    description: "Metas, usuarios y restricciones claras.",
  },
  {
    title: "Diseño de solución",
    description: "Arquitectura, riesgos y plan de entrega.",
  },
  {
    title: "Construcción",
    description: "Sprints con demo y feedback continuo.",
  },
  {
    title: "Aseguramiento",
    description: "Pruebas, seguridad, observabilidad y hardening.",
  },
  {
    title: "Despliegue y éxito",
    description: "Go-live asistido, medición y mejora continua.",
  },
];

export function Process() {
  return (
    <section className="bg-slate-900 py-16 text-white" aria-labelledby="proceso-techbox">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl space-y-3">
          <h2 id="proceso-techbox" className="text-2xl font-semibold sm:text-3xl">
            Cómo trabajamos
          </h2>
          <p className="text-base text-slate-200">
            Modelo colaborativo que asegura entrega continua y adopción.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur"
            >
              <span className="text-sm font-semibold text-indigo-200">Paso {index + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-200">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
