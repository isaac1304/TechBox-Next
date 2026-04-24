type Props = {
  step: number;
  title: string;
  description: string;
};

export default function ProcessStep({ step, title, description }: Props) {
  return (
    <article className="card relative flex flex-col gap-3 p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-brand)] text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(42,47,115,0.55)]">
          {String(step).padStart(2, '0')}
        </span>
        <h3 className="text-base font-semibold text-[var(--text)]">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
    </article>
  );
}
