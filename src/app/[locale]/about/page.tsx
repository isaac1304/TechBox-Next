import type { Metadata } from 'next';
import Image from 'next/image';
import { Compass, Users, Target, Layers } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import ValueCard from '@/components/ValueCard';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  return { title: t('metaTitle'), description: t('metaDescription') };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('About');

  const values = [
    {
      icon: <Compass className="h-5 w-5" />,
      title: t('valueTitle1'),
      description: t('valueDesc1'),
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: t('valueTitle2'),
      description: t('valueDesc2'),
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: t('valueTitle3'),
      description: t('valueDesc3'),
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: t('valueTitle4'),
      description: t('valueDesc4'),
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-6">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
              {t('heroBadge')}
            </span>
            <h1 className="text-[2.25rem] font-semibold leading-tight text-[var(--text)] md:text-[3rem]">
              {t('heroTitleStart')}{' '}
              <span className="text-gradient-brand">{t('heroTitleAccent')}</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
              {t('heroLead')}
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute inset-0 rounded-[2rem] opacity-40 blur-3xl"
              style={{ background: 'var(--gradient-brand)' }}
            />
            <div className="card relative flex flex-col items-center gap-5 p-8 text-center">
              <Image
                src="/brand/techbox-mark.png"
                alt="Techbox"
                width={120}
                height={120}
                className="h-28 w-28 object-contain"
              />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                {t('cardLocation')}
              </p>
              <p className="text-sm text-[var(--text-muted)]">{t('cardCoverage')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:px-6">
          <SectionHeading
            align="left"
            eyebrow={t('missionEyebrow')}
            title={
              <>
                {t('missionTitleStart')}{' '}
                <span className="text-gradient-brand">{t('missionTitleAccent')}</span>{' '}
                {t('missionTitleEnd')}
              </>
            }
            description={t('missionDescription')}
          />
          <div className="card flex flex-col gap-4 p-8">
            <h3 className="text-lg font-semibold text-[var(--text)]">
              {t('missionCardTitle')}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {t('missionCardP1')}
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {t('missionCardP2')}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
        <SectionHeading eyebrow={t('valuesEyebrow')} title={t('valuesTitle')} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <ValueCard key={v.title} {...v} />
          ))}
        </div>
      </section>

      <section className="pb-24">
        <CTASection title={t('ctaTitle')} description={t('ctaDescription')} />
      </section>
    </>
  );
}
