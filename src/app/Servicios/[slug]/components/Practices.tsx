type Practice = {
  title: string;
  description: string;
  results: string[];
};

type PracticesProps = {
  practices: Practice[];
};

export default function Practices({ practices }: PracticesProps) {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Prácticas y servicios
        </h2>
        <p className="text-base text-slate-300">
          Cada iniciativa se conecta a resultados de negocio medibles y a una hoja de ruta priorizada.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {practices.map((practice) => (
          <article
            key={practice.title}
            className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_12px_32px_rgba(8,13,32,0.55)]"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">{practice.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{practice.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {practice.results.map((result) => (
                  <li key={result} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-400" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#cta"
                className="text-sm font-semibold text-teal-300 underline-offset-4 transition hover:text-teal-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
              >
                Conocer más
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
