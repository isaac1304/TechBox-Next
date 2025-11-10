type Pillar = {
  title: string;
  description: string;
};

type ValuePillarsProps = {
  pillars: Pillar[];
};

export default function ValuePillars({ pillars }: ValuePillarsProps) {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Propuesta de valor
        </h2>
        <p className="text-base text-slate-300">
          Traducimos estrategia en ejecución con equipos senior, aceleradores y métricas claras desde el día uno.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.4)] backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{pillar.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
