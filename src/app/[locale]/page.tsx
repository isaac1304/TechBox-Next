import {
  Layers,
  TrendingUp,
  HandshakeIcon,
  Target,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LinkButton } from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ValueCard from '@/components/ValueCard';
import UseCaseCard from '@/components/UseCaseCard';
import ProcessStep from '@/components/ProcessStep';
import CTASection from '@/components/CTASection';
import PixelMosaic from '@/components/PixelMosaic';
import { Link } from '@/i18n/navigation';
import { services } from '@/data/services';
import { useCases } from '@/data/useCases';
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Home');
  const tCommon = await getTranslations('Common');

  const values = [
    { icon: <Layers className="h-5 w-5" />, title: t('valuesTitle1'), description: t('valuesDesc1') },
    { icon: <TrendingUp className="h-5 w-5" />, title: t('valuesTitle2'), description: t('valuesDesc2') },
    { icon: <HandshakeIcon className="h-5 w-5" />, title: t('valuesTitle3'), description: t('valuesDesc3') },
    { icon: <Target className="h-5 w-5" />, title: t('valuesTitle4'), description: t('valuesDesc4') },
  ];

  const painPoints = [
    t('painPoint1'),
    t('painPoint2'),
    t('painPoint3'),
    t('painPoint4'),
    t('painPoint5'),
  ];

  const solutions = [
    t('solution1'),
    t('solution2'),
    t('solution3'),
    t('solution4'),
    t('solution5'),
  ];

  const processSteps = [
    { title: t('step1Title'), description: t('step1Desc') },
    { title: t('step2Title'), description: t('step2Desc') },
    { title: t('step3Title'), description: t('step3Desc') },
    { title: t('step4Title'), description: t('step4Desc') },
    { title: t('step5Title'), description: t('step5Desc') },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-6">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
              {t('heroBadge')}
            </span>
            <h1 className="text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-[var(--text)] md:text-[3.25rem]">
              {t('heroTitleStart')}{' '}
              <span className="text-gradient-brand">{t('heroTitleAccent')}</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
              {t('heroLead')}
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={site.calendly} external variant="primary">
                {tCommon('scheduleDiagnosisCta')} <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="/services" variant="secondary">
                {tCommon('viewServices')}
              </LinkButton>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-5 text-xs text-[var(--text-soft)]">
              <span>{t('trust1')}</span>
              <span>{t('trust2')}</span>
              <span>{t('trust3')}</span>
              <span>{t('trust4')}</span>
            </div>
          </div>
          <div className="relative">
            <PixelMosaic size={6} className="max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 md:pb-16 lg:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <ValueCard key={v.title} {...v} />
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6">
        <SectionHeading
          eyebrow={t('servicesEyebrow')}
          title={
            <>
              {t('servicesTitleStart')}{' '}
              <span className="text-gradient-brand">{t('servicesTitleAccent')}</span>
            </>
          }
          description={t('servicesDescription')}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} locale={locale} />
          ))}
        </div>
      </section>

      {/* WHY TECHBOX */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:px-6">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
              {t('whyEyebrow')}
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-[var(--text)] md:text-[2.5rem]">
              {t('whyTitleStart')}{' '}
              <span className="text-gradient-brand">{t('whyTitleAccent')}</span>{' '}
              {t('whyTitleEnd')}
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              {t('whyLead')}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="card flex flex-col gap-3 p-6">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <AlertTriangle className="h-4 w-4 text-[var(--brand-navy)] dark:text-[var(--brand-teal)]" />
                {t('whatWeSeeHeading')}
              </div>
              <ul className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
                {painPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-navy-300)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card flex flex-col gap-3 p-6">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-teal)]" />
                {t('whatWeSolveHeading')}
              </div>
              <ul className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow={t('useCasesEyebrow')}
          title={
            <>
              {t('useCasesTitleStart')}{' '}
              <span className="text-gradient-brand">{t('useCasesTitleAccent')}</span>
            </>
          }
          description={t('useCasesDescription')}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.slice(0, 3).map((u) => (
            <UseCaseCard key={u.id} useCase={u} locale={locale} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/use-cases"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-navy)] transition hover:gap-2.5 dark:text-[var(--brand-teal)]"
          >
            {tCommon('viewAllCases')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
          <SectionHeading
            eyebrow={t('processEyebrow')}
            title={
              <>
                {t('processTitleStart')}{' '}
                <span className="text-gradient-brand">{t('processTitleAccent')}</span>
              </>
            }
            description={t('processDescription')}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, idx) => (
              <ProcessStep key={step.title} step={idx + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 pt-20">
        <CTASection />
      </section>
    </>
  );
}
