type CaseStudy = {
  title: string;
  result: string;
};

type CaseStudiesProps = {
  caseStudies: CaseStudy[];
};

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Casos de éxito
        </h2>
        <p className="text-base text-slate-300">
          Entregamos resultados tangibles en semanas, manteniendo cumplimiento y gobernanza técnica.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((item) => (
          <article
            key={item.title}
            className="h-full rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_12px_32px_rgba(8,13,32,0.55)]"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{item.result}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
