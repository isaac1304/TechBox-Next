const differentiators = [
  "Seniority comprobable, governance técnica y calidad medible.",
  "Seguridad desde el diseño y cumplimiento práctico.",
  "Entregas frecuentes con foco en impacto.",
  "Co-creación con tu equipo: transferencia de conocimiento real.",
];

export function Differentiators() {
  return (
    <section className="bg-white py-16" aria-labelledby="diferenciales">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <h2 id="diferenciales" className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Diferenciales de Techbox
          </h2>
          <p className="text-base text-slate-600">
            Capacidades que nos permiten acompañar desafíos complejos con claridad.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((item) => (
            <li key={item} className="rounded-2xl border border-slate-200 p-5 text-sm text-slate-700 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
