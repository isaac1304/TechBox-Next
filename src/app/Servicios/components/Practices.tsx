import Link from "next/link";

const practices = [
  {
    title: "Estrategia y Descubrimiento",
    description: "Alineamos objetivos, medimos impacto y definimos roadmap priorizado.",
    results: "Resultados: backlog priorizado, prototipos, estimaciones y métricas de éxito.",
  },
  {
    title: "Desarrollo de Productos Digitales",
    description: "Frontend, backend y mobile con CI/CD, testing y performance desde el día uno.",
    results: "Resultados: releases frecuentes, deuda técnica controlada, UX medible.",
  },
  {
    title: "Modernización y Cloud",
    description: "Migraciones, contenedores, observabilidad, seguridad y costes optimizados.",
    results: "Resultados: resiliencia, escalabilidad y time-to-market reducido.",
  },
  {
    title: "Data, Analytics & AI",
    description: "Data pipelines, gobernanza, dashboards y casos de ML generativos/classic.",
    results: "Resultados: decisiones con datos, automatización y crecimiento eficiente.",
  },
];

export function Practices() {
  return (
    <section className="bg-white py-16" aria-labelledby="practicas">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 id="practicas" className="text-2xl font-semibold sm:text-3xl text-slate-900">
              Prácticas y servicios
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Equipos multidisciplinarios que convierten estrategia en ejecución medible.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {practices.map((practice) => (
            <article key={practice.title} className="flex h-full flex-col rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">{practice.title}</h3>
                <p className="text-sm text-slate-600">{practice.description}</p>
                <p className="text-sm font-medium text-slate-900">{practice.results}</p>
              </div>
              <div className="mt-6">
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Conocer más
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
