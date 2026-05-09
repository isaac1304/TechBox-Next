import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { UseCase } from '@/data/useCases';
import { getServiceById } from '@/data/services';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

export default function UseCaseCard({
  useCase,
  locale,
}: {
  useCase: UseCase;
  locale: Locale;
}) {
  const t = useTranslations('UseCases');
  const service = getServiceById(useCase.relatedService);

  return (
    <article className="card flex h-full flex-col gap-5 p-7">
      <span className="inline-flex w-fit items-center rounded-full bg-[var(--gradient-brand-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
        {useCase.industry[locale]}
      </span>
      <h3 className="text-lg font-semibold text-[var(--text)]">{useCase.title[locale]}</h3>
      <div className="flex flex-col gap-4 text-sm leading-relaxed">
        <div>
          <p className="font-semibold text-[var(--text)]">{t('cardProblem')}</p>
          <p className="text-[var(--text-muted)]">{useCase.problem[locale]}</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--text)]">{t('cardSolution')}</p>
          <p className="text-[var(--text-muted)]">{useCase.solution[locale]}</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--text)]">{t('cardImpact')}</p>
          <p className="text-[var(--text-muted)]">{useCase.impact[locale]}</p>
        </div>
      </div>
      {service && (
        <Link
          href={
            service.hasCustomPage
              ? '/services/sre-gcp-kubernetes'
              : { pathname: '/services/[slug]', params: { slug: service.slug[locale] } }
          }
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-navy)] transition hover:gap-2.5 dark:text-[var(--brand-teal)]"
        >
          {t('cardRelated')}: {service.shortTitle[locale]}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </article>
  );
}
