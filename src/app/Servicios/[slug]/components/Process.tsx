type Step = {
  title: string;
  description: string;
};

type ProcessProps = {
  steps: Step[];
};

export default function Process({ steps }: ProcessProps) {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Cómo trabajamos
        </h2>
        <p className="text-base text-slate-300">
          Co-diseñamos el plan con tu equipo y aseguramos seguimiento continuo con métricas y gobernanza.
        </p>
      </header>
      <ol className="grid gap-6 md:grid-cols-5">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-[0_10px_28px_rgba(8,13,32,0.45)]"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-400 text-sm font-semibold text-slate-950">
              {index + 1}
            </span>
            <div>
              <h3 className="text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
