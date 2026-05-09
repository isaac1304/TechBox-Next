import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { LinkButton } from '@/components/Button';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center md:py-32 lg:px-6">
      <span className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
        {t('errorBadge')}
      </span>
      <h1 className="text-[2rem] font-semibold leading-tight text-[var(--text)] md:text-[2.75rem]">
        {t('title')}
      </h1>
      <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)]">
        {t('description')}
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <LinkButton href="/services" variant="primary">
          {t('viewAllServices')} <ArrowRight className="h-4 w-4" />
        </LinkButton>
        <LinkButton href="/" variant="secondary">
          {t('goHome')}
        </LinkButton>
      </div>
    </section>
  );
}
