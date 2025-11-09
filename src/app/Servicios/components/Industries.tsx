const industries = [
  "Retail & eCommerce — Conversión, OMS, personalización y fidelización.",
  "Servicios Financieros — Cumplimiento, scoring, antifraude y apps seguras.",
  "Salud — Interoperabilidad, privacidad y experiencias del paciente.",
  "Manufactura — IoT, trazabilidad y mantenimiento predictivo.",
  "Telecom — Provisionamiento, billing y experiencia digital.",
];

export function Industries() {
  return (
    <section className="bg-slate-50 py-16" aria-labelledby="industrias">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <h2 id="industrias" className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Industrias
          </h2>
          <p className="text-base text-slate-600">
            Experiencia probada en sectores donde la tecnología mueve métricas clave.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {industries.map((industry) => (
            <li
              key={industry}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm"
            >
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
