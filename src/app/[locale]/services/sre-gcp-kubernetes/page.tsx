import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Cloud,
  MessageCircle,
  Network,
  Server,
  ServerCog,
  ShieldCheck,
  Sparkles,
  XCircle,
} from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LinkButton } from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import { Link, getPathname } from '@/i18n/navigation';
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServiceSRE' });
  const canonicalPath = getPathname({
    locale,
    href: '/services/sre-gcp-kubernetes',
  });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: [
      'SRE Costa Rica',
      'Cloud Engineer GCP',
      'consultor Kubernetes',
      'Istio LatAm',
      'DevOps fraccional',
      'GKE Costa Rica',
      'SRE LatAm',
    ],
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: 'website',
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonicalPath,
    },
  };
}

export default async function SREServicePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ServiceSRE');
  const tCommon = await getTranslations('Common');

  const trustItems = [t('trust1'), t('trust2'), t('trust3'), t('trust4'), t('trust5')];
  const dailyItems = [
    t('daily1'),
    t('daily2'),
    t('daily3'),
    t('daily4'),
    t('daily5'),
    t('daily6'),
  ];

  const differentiators = [
    { icon: Cloud, title: t('diff1Title'), description: t('diff1Desc') },
    { icon: Network, title: t('diff2Title'), description: t('diff2Desc') },
    { icon: ShieldCheck, title: t('diff3Title'), description: t('diff3Desc') },
    { icon: Clock, title: t('diff4Title'), description: t('diff4Desc') },
  ];

  const plans = [
    {
      name: t('planEssentialName'),
      price: t('planEssentialPrice'),
      cadence: t('planEssentialCadence'),
      hours: t('planEssentialHours'),
      popular: false,
      description: t('planEssentialDesc'),
      features: [
        t('planEssentialF1'),
        t('planEssentialF2'),
        t('planEssentialF3'),
        t('planEssentialF4'),
        t('planEssentialF5'),
      ],
      idealFor: t('planEssentialIdeal'),
      cta: { label: t('scheduleCallCta'), variant: 'secondary' as const },
    },
    {
      name: t('planStandardName'),
      price: t('planStandardPrice'),
      cadence: t('planStandardCadence'),
      hours: t('planStandardHours'),
      popular: true,
      description: t('planStandardDesc'),
      features: [
        t('planStandardF1'),
        t('planStandardF2'),
        t('planStandardF3'),
        t('planStandardF4'),
        t('planStandardF5'),
      ],
      idealFor: t('planStandardIdeal'),
      cta: { label: t('scheduleCallCta'), variant: 'primary' as const },
    },
    {
      name: t('planProName'),
      price: t('planProPrice'),
      cadence: t('planProCadence'),
      hours: t('planProHours'),
      popular: false,
      description: t('planProDesc'),
      features: [
        t('planProF1'),
        t('planProF2'),
        t('planProF3'),
        t('planProF4'),
      ],
      idealFor: t('planProIdeal'),
      cta: { label: t('requestQuoteCta'), variant: 'secondary' as const },
    },
  ];

  const oneOffs = [
    {
      icon: Sparkles,
      title: t('auditTitle'),
      duration: t('auditDuration'),
      price: t('auditPrice'),
      description: t('auditDesc'),
      cta: { label: t('auditCta'), href: site.calendly, external: true as const },
    },
    {
      icon: Network,
      title: t('meshTitle'),
      duration: t('meshDuration'),
      price: t('meshPrice'),
      description: t('meshDesc'),
      cta: { label: t('meshCta'), href: site.whatsapp, external: true as const },
    },
  ];

  const turnkeyImplementations = [
    { title: t('turnkey1Title'), price: t('turnkey1Price') },
    { title: t('turnkey2Title'), price: t('turnkey2Price') },
    { title: t('turnkey3Title'), price: t('turnkey3Price') },
  ];

  const stackItems = [
    'GCP',
    'Kubernetes',
    'Istio',
    'Terraform',
    'HashiCorp Vault',
    'Jenkins',
    'GitHub Actions',
    'Argo CD',
    'Docker',
    'Python',
    'Bash',
    'Linux',
  ];

  const certifications = [
    {
      badgeId: 'c120126b-dc33-445a-a4f8-182200dfe425',
      label: 'Certified Kubernetes Administrator',
      issuer: 'The Linux Foundation',
      image: '/badges/cka.png',
    },
    {
      badgeId: '8f5e3a3a-e21f-4e42-b7f4-42409d431f33',
      label: 'Istio Certified Associate',
      issuer: 'The Linux Foundation',
      image: '/badges/istio-ica.png',
    },
    {
      badgeId: '96c63672-58a8-494c-98cf-0f11ff492b46',
      label: 'Cloud Digital Leader',
      issuer: 'Google Cloud',
      image: '/badges/gcp-digital-leader.png',
    },
    {
      badgeId: 'b1dc57b5-52d7-4eb1-a685-c09094343ccc',
      label: 'HashiCorp Certified: Terraform Associate (003)',
      issuer: 'HashiCorp',
      image: '/badges/terraform-associate.png',
      expired: true,
    },
  ];

  const fitYes = [
    t('fitYes1'),
    t('fitYes2'),
    t('fitYes3'),
    t('fitYes4'),
    t('fitYes5'),
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:px-6">
          <div className="flex flex-col gap-5">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] hover:text-[var(--brand-teal)]"
            >
              {t('backLink')}
            </Link>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
              <ServerCog className="h-3.5 w-3.5" />
              {t('heroBadge')}
            </span>
            <h1 className="text-[2.25rem] font-semibold leading-tight text-[var(--text)] md:text-[3rem]">
              {t('heroTitleStart')}{' '}
              <span className="text-gradient-brand">{t('heroTitleAccent')}</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
              {t('heroLead')}
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={site.calendly} external variant="primary">
                {t('ctaAudit')} <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <a href="#plans" className="btn btn-secondary">
                {t('ctaPlans')}
              </a>
            </div>
            <ul className="mt-2 flex flex-wrap gap-2">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-muted)]/70 px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-teal)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="card flex flex-col gap-4 p-7">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-brand)] text-white shadow-[0_12px_30px_-12px_rgba(42,47,115,0.6)]">
                <ServerCog className="h-7 w-7" />
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                {t('dailyHeading')}
              </h2>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {dailyItems.map((f) => (
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

      {/* DIFFERENTIATORS */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
          <SectionHeading
            eyebrow={t('diffsEyebrow')}
            title={
              <>
                {t('diffsTitleStart')}{' '}
                <span className="text-gradient-brand">{t('diffsTitleAccent')}</span>
              </>
            }
            description={t('diffsDescription')}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <article key={d.title} className="card flex flex-col gap-3 p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-[var(--text)]">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {d.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow={t('plansEyebrow')}
          title={
            <>
              {t('plansTitleStart')}{' '}
              <span className="text-gradient-brand">{t('plansTitleAccent')}</span>
            </>
          }
          description={t('plansDescription')}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={[
                'card relative flex flex-col gap-5 p-7',
                plan.popular
                  ? 'border-[var(--brand-teal)] shadow-[0_24px_60px_-24px_rgba(46,196,182,0.45)]'
                  : '',
              ]
                .join(' ')
                .trim()}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-[var(--brand-teal)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_20px_-8px_rgba(46,196,182,0.7)]">
                  <Sparkles className="h-3 w-3" />
                  {t('popularBadge')}
                </span>
              )}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-[var(--text)]">{plan.name}</h3>
                <p className="text-sm text-[var(--text-muted)]">{plan.description}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-semibold text-[var(--text)] md:text-[1.75rem]">
                  {plan.cadence ? `${t('fromPrefix')} ${plan.price}` : plan.price}
                  {plan.cadence && (
                    <span className="text-base font-medium text-[var(--text-muted)]">
                      {plan.cadence}
                    </span>
                  )}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-teal)]">
                  {plan.hours}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 border-t border-[var(--border)] pt-5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs italic leading-relaxed text-[var(--text-soft)]">
                {t('idealForPrefix')} {plan.idealFor}
              </p>
              <LinkButton
                href={site.calendly}
                external
                variant={plan.cta.variant}
                className="mt-auto justify-center"
              >
                {plan.cta.label}
              </LinkButton>
            </article>
          ))}
        </div>
      </section>

      {/* ONE-OFFS */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
          <SectionHeading
            eyebrow={t('oneOffsEyebrow')}
            title={
              <>
                {t('oneOffsTitleStart')}{' '}
                <span className="text-gradient-brand">{t('oneOffsTitleAccent')}</span>
              </>
            }
            description={t('oneOffsDescription')}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {oneOffs.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="card flex flex-col gap-4 p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      {s.duration}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-[var(--text)]">{s.title}</h3>
                    <p className="text-sm font-semibold text-[var(--brand-teal)]">{s.price}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{s.description}</p>
                  <LinkButton
                    href={s.cta.href}
                    external={s.cta.external}
                    variant="secondary"
                    className="mt-auto w-fit"
                  >
                    {s.cta.label} <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                </article>
              );
            })}
          </div>

          <div className="mt-10 card p-7">
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5 text-[var(--brand-teal)]" />
              <h3 className="text-base font-semibold text-[var(--text)]">
                {t('turnkeyHeading')}
              </h3>
            </div>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {t('turnkeyDescription')}
            </p>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {turnkeyImplementations.map((p) => (
                <li
                  key={p.title}
                  className="flex flex-col gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <span className="text-sm font-semibold text-[var(--text)]">{p.title}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-teal)]">
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STACK & CERTS */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow={t('stackEyebrow')}
          title={
            <>
              {t('stackTitleStart')}{' '}
              <span className="text-gradient-brand">{t('stackTitleAccent')}</span>
            </>
          }
          description={t('stackDescription')}
        />

        <div className="mt-12 flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              {t('stackHeading')}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {stackItems.map((tool) => (
                <li
                  key={tool}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-4 py-2 text-sm font-medium text-[var(--text)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              {t('certsHeading')}
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              {t('certsHelp')}
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {certifications.map((cert) => (
                <a
                  key={cert.badgeId}
                  href={`https://www.credly.com/badges/${cert.badgeId}/public_url`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('certVerifyAria', { name: cert.label })}
                  className="card group flex flex-col items-center gap-4 p-6 text-center transition-transform hover:-translate-y-0.5 hover:border-[var(--brand-teal)]"
                >
                  <div className="relative h-32 w-32 shrink-0">
                    <Image
                      src={cert.image}
                      alt={cert.label}
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[var(--text)]">{cert.label}</p>
                    <p className="text-xs text-[var(--text-muted)]">{cert.issuer}</p>
                    {cert.expired && (
                      <span className="mt-1 inline-flex w-fit self-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                        {t('certExpired')}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIT */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
          <SectionHeading
            eyebrow={t('fitEyebrow')}
            title={
              <>
                {t('fitTitleStart')}{' '}
                <span className="text-gradient-brand">{t('fitTitleYes')}</span>{' '}
                {t('fitTitleAnd')}{' '}
                <span className="text-gradient-brand">{t('fitTitleNo')}</span>
              </>
            }
            description={t('fitDescription')}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="card flex flex-col gap-4 p-7">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <CheckCircle2 className="h-5 w-5 text-[var(--brand-teal)]" />
                {t('fitYesHeading')}
              </div>
              <ul className="flex flex-col gap-2.5">
                {fitYes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card flex flex-col gap-4 p-7">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <XCircle className="h-5 w-5 text-[var(--brand-navy)] dark:text-[var(--text-muted)]" />
                {t('fitNoHeading')}
              </div>
              <ul className="flex flex-col gap-2.5 text-sm text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-soft)]" />
                  <span>
                    {t('fitNoCloudBefore')}{' '}
                    <Link
                      href={{
                        pathname: '/services/[slug]',
                        params: {
                          slug:
                            locale === 'es' ? 'infraestructura-cloud' : 'cloud-infrastructure',
                        },
                      }}
                      className="font-semibold text-[var(--brand-navy)] underline-offset-4 hover:underline dark:text-[var(--brand-teal)]"
                    >
                      {t('fitNoCloudLink')}
                    </Link>
                    {t('fitNoCloudAfter')}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-soft)]" />
                  <span>{t('fitNo24x7')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-soft)]" />
                  <span>{t('fitNoStack')}</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)] p-10 md:p-14">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{ background: 'var(--gradient-brand)' }}
            />
            <div aria-hidden className="absolute inset-0 -z-10 opacity-30 bg-grid-pattern" />
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--brand-teal)]/40 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-6 md:max-w-2xl">
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-[2.5rem]">
                {t('finalCtaTitle')}
              </h2>
              <p className="text-base leading-relaxed text-white/90 md:text-lg">
                {t('finalCtaDescription')}
              </p>
              <div className="flex flex-wrap gap-3">
                <LinkButton
                  href={site.calendly}
                  external
                  variant="secondary"
                  className="border-white/30 bg-white text-[var(--brand-navy)] hover:border-white hover:bg-white/90 hover:text-[var(--brand-navy)]"
                >
                  {t('finalCtaSchedule')} <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton variant="whatsapp" href={site.whatsapp} external>
                  <MessageCircle className="h-4 w-4" /> {site.whatsappLabel[locale]}
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
