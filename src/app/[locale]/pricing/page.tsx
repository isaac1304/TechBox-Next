import type { Metadata } from 'next';
import { ArrowRight, ChevronDown, MessageCircle, Scale } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LinkButton } from '@/components/Button';
import FoundersBanner from '@/components/FoundersBanner';
import JsonLd from '@/components/JsonLd';
import PricingBlock from '@/components/PricingBlock';
import SectionHeading from '@/components/SectionHeading';
import {
  expressNotes,
  expressOffers,
  formatPrice,
  planNotes,
  planOffers,
  sreNotes,
  sreOffers,
} from '@/data/pricing';
import type { Locale } from '@/i18n/routing';
import { buildPricingJsonLd } from '@/lib/pricingJsonLd';
import { buildMetadata, pageUrl } from '@/lib/seo';
import { site } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pricing' });
  return buildMetadata({
    locale,
    href: '/pricing',
    title: t('metaTitle'),
    description: t('metaDescription', {
      express: formatPrice(expressOffers[0].priceRegular),
      plan: formatPrice(planOffers[0].priceRegular),
    }),
  });
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Pricing');

  const faqs = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
    question: t(`faq${n}Question`),
    answer: t(`faq${n}Answer`),
  }));


  return (
    <>
      <JsonLd data={buildPricingJsonLd(locale, pageUrl('/pricing', locale))} />

      {/* HEADER */}
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-12 pt-16 md:pt-20 lg:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <span className="inline-flex w-fit items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
            {t('eyebrow')}
          </span>
          <h1 className="text-[2.25rem] font-semibold leading-tight text-[var(--text)] md:text-[3rem]">
            {t('titleStart')}{' '}
            <span className="text-gradient-brand">{t('titleAccent')}</span>
          </h1>
          <p className="text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
            {t('lead')}
          </p>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <FoundersBanner />
        </div>
      </section>

      {/* EXPRESS */}
      <section id="express" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-12 lg:px-6">
        <SectionHeading
          eyebrow={t('expressEyebrow')}
          title={t('expressTitle')}
          description={t('expressDescription')}
        />
        <PricingBlock offers={expressOffers} notes={expressNotes[locale]} locale={locale} />
      </section>

      {/* PLAN TECHBOX */}
      <section id="plan" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-12 lg:px-6">
        <SectionHeading
          eyebrow={t('planEyebrow')}
          title={t('planTitle')}
          description={t('planDescription')}
        />
        <PricingBlock offers={planOffers} notes={planNotes[locale]} locale={locale} />
      </section>

      {/* HIRE OR OUTSOURCE */}
      <section className="mx-auto w-full max-w-3xl px-4 py-12 lg:px-6">
        <div className="card flex flex-col gap-3 p-7">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-[var(--text)]">
            <Scale className="h-5 w-5 text-[var(--brand-teal)]" />
            {t('compareTitle')}
          </h2>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">{t('compareBody')}</p>
        </div>
      </section>

      {/* SRE */}
      <section
        id="sre"
        className="relative mt-8 scroll-mt-28 border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20"
      >
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
          <SectionHeading
            eyebrow={t('sreEyebrow')}
            title={t('sreTitle')}
            description={t('sreDescription')}
          />
          <PricingBlock offers={sreOffers} notes={sreNotes[locale]} locale={locale} />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-3xl px-4 py-20 lg:px-6">
        <SectionHeading eyebrow={t('faqEyebrow')} title={t('faqTitle')} />
        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="card group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-[var(--text)] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-[var(--border-strong)] p-10 md:p-14">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{ background: 'var(--gradient-brand)' }}
            />
            <div aria-hidden className="absolute inset-0 -z-10 opacity-30 bg-grid-pattern" />
            <div className="relative flex flex-col items-start gap-6 md:max-w-2xl">
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-[2.5rem]">
                {t('finalCtaTitle')}
              </h2>
              <div className="flex flex-wrap gap-3">
                <LinkButton href={site.booking} external variant="light">
                  {t('finalCtaButton')} <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton href={site.whatsapp} external variant="whatsapp">
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
