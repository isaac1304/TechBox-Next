import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { services, getServiceBySlug, getServiceById } from '@/data/services';
import { LinkButton } from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ServiceIcon from '@/components/ServiceIcon';
import CTASection from '@/components/CTASection';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { site } from '@/lib/site';

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services
      .filter((s) => !s.hasCustomPage)
      .map((s) => ({ locale, slug: s.slug[locale] })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'ServiceDetail' });
  const service = getServiceBySlug(slug, locale);
  if (!service) return { title: t('notFound') };
  return {
    title: service.title[locale],
    description: service.description[locale],
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getServiceBySlug(slug, locale);
  if (!service || service.hasCustomPage) return notFound();

  const t = await getTranslations('ServiceDetail');
  const tCommon = await getTranslations('Common');

  const related = service.relatedServices
    .map((id) => getServiceById(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const nextStepHref = service.nextStep
    ? service.nextStep.link.targetId === 'sre-gcp-kubernetes'
      ? ('/services/sre-gcp-kubernetes' as const)
      : ({
          pathname: '/services/[slug]' as const,
          params: {
            slug:
              getServiceById(service.nextStep.link.targetId)?.slug[locale] ?? '',
          },
        } as const)
    : null;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:px-6">
          <div className="flex flex-col gap-5">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] hover:text-[var(--brand-teal)]"
            >
              {t('backLink')}
            </Link>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
              <ServiceIcon name={service.icon} className="h-3.5 w-3.5" />
              {service.tagline[locale]}
            </span>
            <h1 className="text-[2.25rem] font-semibold leading-tight text-[var(--text)] md:text-[3rem]">
              {service.title[locale]}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
              {service.longDescription[locale]}
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={site.calendly} external variant="primary">
                {tCommon('scheduleDiagnosis')} <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href={site.whatsapp} external variant="whatsapp">
                {site.whatsappLabel[locale]}
              </LinkButton>
            </div>
          </div>
          <div className="relative">
            <div className="card flex flex-col gap-4 p-7">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-brand)] text-white shadow-[0_12px_30px_-12px_rgba(42,47,115,0.6)]">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                {t('includesHeading')}
              </h2>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {service.features[locale].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="mx-auto grid w-full max-w-6xl gap-5 px-4 pb-20 md:grid-cols-2 lg:px-6">
        <div className="card flex flex-col gap-4 p-7">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
            <AlertTriangle className="h-4 w-4 text-[var(--brand-navy)] dark:text-[var(--brand-teal)]" />
            {t('problemHeading')}
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            {service.problem[locale]}
          </p>
        </div>
        <div className="card flex flex-col gap-4 p-7">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
            <Sparkles className="h-4 w-4 text-[var(--brand-teal)]" />
            {t('solutionHeading')}
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            {service.solution[locale]}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
          <SectionHeading
            eyebrow={t('benefitsEyebrow')}
            title={
              <>
                {t('benefitsTitleStart')}{' '}
                <span className="text-gradient-brand">{t('benefitsTitleAccent')}</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.benefits[locale].map((b) => (
              <article key={b.title} className="card flex flex-col gap-3 p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-[var(--text)]">{b.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {b.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow={t('examplesEyebrow')}
          title={t('examplesTitle')}
          description={t('examplesDescription')}
        />
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {service.useCases[locale].map((u) => (
            <div
              key={u}
              className="card flex items-start gap-3 p-5 text-sm text-[var(--text-muted)]"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
              {u}
            </div>
          ))}
        </div>
      </section>

      {/* Next step */}
      {service.nextStep && nextStepHref && (
        <section className="mx-auto w-full max-w-6xl px-4 pb-20 lg:px-6">
          <div className="card relative overflow-hidden p-8 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand-teal)]/15 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
              <div className="flex flex-col gap-2 md:max-w-2xl">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                  {t('nextStepLabel')}
                </span>
                <h3 className="text-xl font-semibold text-[var(--text)] md:text-2xl">
                  {service.nextStep.title[locale]}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
                  {service.nextStep.description[locale]}
                </p>
              </div>
              <LinkButton href={nextStepHref} variant="primary">
                {service.nextStep.link.label[locale]} <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 pb-20 lg:px-6">
          <SectionHeading
            eyebrow={t('relatedEyebrow')}
            title={t('relatedTitle')}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ServiceCard key={r.id} service={r} locale={locale} />
            ))}
          </div>
        </section>
      )}

      <section className="pb-24">
        <CTASection />
      </section>
    </>
  );
}
