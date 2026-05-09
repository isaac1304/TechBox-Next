import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ServiceIcon from './ServiceIcon';
import type { Service } from '@/data/services';
import type { Locale } from '@/i18n/routing';

type Props = {
  service: Pick<Service, 'id' | 'slug' | 'title' | 'description' | 'icon' | 'tagline' | 'hasCustomPage'>;
  locale: Locale;
};

export default function ServiceCard({ service, locale }: Props) {
  const tCommon = useTranslations('Common');

  return (
    <Link
      href={
        service.hasCustomPage
          ? '/services/sre-gcp-kubernetes'
          : { pathname: '/services/[slug]', params: { slug: service.slug[locale] } }
      }
      className="group card relative flex h-full flex-col gap-5 overflow-hidden p-7"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] rounded-t-[1.25rem] bg-gradient-to-r from-[var(--brand-navy)] via-[var(--brand-navy-500)] to-[var(--brand-teal)] opacity-70 transition group-hover:opacity-100" />
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] transition group-hover:scale-105 dark:text-[var(--brand-teal)]">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </span>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-teal)]">
          {service.tagline[locale]}
        </span>
        <h3 className="text-lg font-semibold text-[var(--text)]">{service.title[locale]}</h3>
        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
          {service.description[locale]}
        </p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-navy)] transition group-hover:gap-2.5 dark:text-[var(--brand-teal)]">
        {tCommon('viewService')}
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
