import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import UseCaseCard from '@/components/UseCaseCard';
import CTASection from '@/components/CTASection';
import { useCases } from '@/data/useCases';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'UseCases' });
  return { title: t('metaTitle'), description: t('metaDescription') };
}

export default async function UseCasesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('UseCases');

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20 lg:px-6">
        <SectionHeading
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
          {useCases.map((u) => (
            <UseCaseCard key={u.id} useCase={u} locale={locale} />
          ))}
        </div>
      </section>

      <section className="pb-24">
        <CTASection title={t('ctaTitle')} description={t('ctaDescription')} />
      </section>
    </>
  );
}
