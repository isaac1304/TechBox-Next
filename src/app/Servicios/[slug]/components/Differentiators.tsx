type DifferentiatorsProps = {
  differentiators: string[];
};

export default function Differentiators({
  differentiators,
}: DifferentiatorsProps) {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Diferenciales de Techbox
        </h2>
        <p className="text-base text-slate-300">
          Garantizamos equipos senior, seguridad incorporada y acompañamiento ejecutivo para sostener el ritmo.
        </p>
      </header>
      <ul className="space-y-4 text-sm text-slate-300">
        {differentiators.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span aria-hidden="true" className="mt-1 inline-flex h-2 w-8 rounded-full bg-teal-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
