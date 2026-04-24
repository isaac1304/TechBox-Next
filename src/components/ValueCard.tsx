import type { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ValueCard({ icon, title, description }: Props) {
  return (
    <article className="card flex flex-col gap-4 p-6">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
        {icon}
      </span>
      <h3 className="text-base font-semibold text-[var(--text)]">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
    </article>
  );
}
