import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Services' });
  return buildMetadata({
    locale,
    href: '/services',
    title: t('metaTitle'),
    description: t('metaDescription'),
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Services');

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20 lg:px-6">
        <SectionHeading
          as="h1"
          eyebrow={t('eyebrow')}
          title={
            <>
              {t('titleStart')}{' '}
              <span className="text-gradient-brand">{t('titleAccent')}</span>
            </>
          }
          description={t('description')}
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 lg:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} locale={locale} />
          ))}
        </div>
      </section>

      <section className="pb-24">
        <CTASection title={t('ctaTitle')} description={t('ctaDescription')} />
      </section>
    </>
  );
}
