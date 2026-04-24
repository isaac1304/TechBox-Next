import type { UseCase } from '@/data/useCases';
import { getServiceBySlug } from '@/data/services';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function UseCaseCard({ useCase }: { useCase: UseCase }) {
  const service = getServiceBySlug(useCase.relatedService);
  return (
    <article className="card flex h-full flex-col gap-5 p-7">
      <span className="inline-flex w-fit items-center rounded-full bg-[var(--gradient-brand-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
        {useCase.industry}
      </span>
      <h3 className="text-lg font-semibold text-[var(--text)]">{useCase.title}</h3>
      <div className="flex flex-col gap-4 text-sm leading-relaxed">
        <div>
          <p className="font-semibold text-[var(--text)]">Problema</p>
          <p className="text-[var(--text-muted)]">{useCase.problem}</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--text)]">Solución</p>
          <p className="text-[var(--text-muted)]">{useCase.solution}</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--text)]">Impacto</p>
          <p className="text-[var(--text-muted)]">{useCase.impact}</p>
        </div>
      </div>
      {service && (
        <Link
          href={`/servicios/${service.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-navy)] transition hover:gap-2.5 dark:text-[var(--brand-teal)]"
        >
          Servicio relacionado: {service.shortTitle}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </article>
  );
}
