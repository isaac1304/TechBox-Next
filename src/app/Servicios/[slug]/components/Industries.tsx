type Industry = {
  name: string;
  description: string;
};

type IndustriesProps = {
  industries: Industry[];
};

export default function Industries({ industries }: IndustriesProps) {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Industrias que impulsamos
        </h2>
        <p className="text-base text-slate-300">
          Adaptamos marcos y aceleradores a la realidad de cada sector regulado o de alto crecimiento.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {industries.map((industry) => (
          <li
            key={industry.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_12px_28px_rgba(8,13,32,0.45)]"
          >
            <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
            <p className="mt-2 text-sm text-slate-300">{industry.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
