type BadgesProps = {
  badges: string[];
};

export default function Badges({ badges }: BadgesProps) {
  return (
    <div className="mt-12">
      <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-200">
        Certificaciones & partners
      </h3>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-teal-300/40 bg-teal-300/10 px-4 py-2"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
