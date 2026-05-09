import { useTranslations, useLocale } from 'next-intl';
import { LinkButton } from './Button';
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';
import { MessageCircle, CalendarCheck } from 'lucide-react';

type Props = {
  title?: string;
  description?: string;
  className?: string;
};

export default function CTASection({ title, description, className = '' }: Props) {
  const t = useTranslations('Cta');
  const tCommon = useTranslations('Common');
  const locale = useLocale() as Locale;

  return (
    <section className={`mx-auto w-full max-w-6xl px-4 ${className}`.trim()}>
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)] p-10 md:p-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: 'var(--gradient-brand)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30 bg-grid-pattern"
        />
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--brand-teal)]/40 blur-3xl"
        />
        <div className="relative flex flex-col items-start gap-6 md:max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-[2.5rem]">
            {title ?? t('defaultTitle')}
          </h2>
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            {description ?? t('defaultDescription')}
          </p>
          <div className="flex flex-wrap gap-3">
            <LinkButton variant="whatsapp" href={site.whatsapp} external>
              <MessageCircle className="h-4 w-4" /> {site.whatsappLabel[locale]}
            </LinkButton>
            <LinkButton
              href={site.calendly}
              external
              variant="secondary"
              className="border-white/30 bg-white text-[var(--brand-navy)] hover:border-white hover:bg-white/90 hover:text-[var(--brand-navy)]"
            >
              <CalendarCheck className="h-4 w-4" /> {tCommon('scheduleDiagnosisCta')}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
