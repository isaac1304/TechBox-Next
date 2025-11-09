const badges = ["AWS Partner", "Google Cloud Partner", "ISO 27001."];

export function Badges() {
  return (
    <section className="bg-slate-50 py-16" aria-labelledby="certificaciones">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <h2 id="certificaciones" className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Certificaciones &amp; partners
          </h2>
          <p className="text-base text-slate-600">
            Alineados con líderes tecnológicos para asegurar calidad y confianza.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
