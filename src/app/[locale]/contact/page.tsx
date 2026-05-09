import type { Metadata } from 'next';
import { Mail, MapPin, Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { LinkButton } from '@/components/Button';
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return { title: t('metaTitle'), description: t('metaDescription') };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Contact');
  const tCommon = await getTranslations('Common');

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20 lg:px-6">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={
            <>
              <span className="text-gradient-brand">{t('titleAccent')}</span>{' '}
              {t('titleEnd')}
            </>
          }
          description={t('description')}
        />
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-6">
        <div className="flex flex-col gap-6">
          <div className="card flex flex-col gap-4 p-7">
            <h3 className="text-lg font-semibold text-[var(--text)]">
              {t('expectHeading')}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-teal)]" />
                {t('expect1')}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-teal)]" />
                {t('expect2')}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-teal)]" />
                {t('expect3')}
              </li>
            </ul>
            <div className="mt-2 flex flex-col gap-2">
              <LinkButton href={site.calendly} external variant="primary">
                <CalendarCheck className="h-4 w-4" /> {tCommon('scheduleDiagnosisCta')}
              </LinkButton>
              <LinkButton href={site.whatsapp} external variant="whatsapp">
                <MessageCircle className="h-4 w-4" /> {site.whatsappLabel[locale]}
              </LinkButton>
            </div>
          </div>
          <div className="card flex flex-col gap-4 p-7">
            <h3 className="text-lg font-semibold text-[var(--text)]">
              {t('infoHeading')}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[var(--text-muted)]">
              <li className="inline-flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                  <Mail className="h-4 w-4" />
                </span>
                <a href={`mailto:${site.email}`} className="hover:text-[var(--text)]">
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                  <Phone className="h-4 w-4" />
                </span>
                {site.phone}
              </li>
              <li className="inline-flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                  <MapPin className="h-4 w-4" />
                </span>
                {site.location[locale]}
              </li>
            </ul>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
