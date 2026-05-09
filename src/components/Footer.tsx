import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { site } from '@/lib/site';
import { services } from '@/data/services';
import LocaleSwitcher from './LocaleSwitcher';
import type { Locale } from '@/i18n/routing';

export default async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('Footer');

  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--surface-muted)]/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-4 md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/brand/techbox-mark.png"
              alt="Techbox"
              width={40}
              height={40}
              className="h-10 w-10 rounded-md object-contain"
            />
            <span className="text-lg font-semibold text-[var(--text)]">
              Tech<span className="text-[var(--brand-teal)]">box</span>
            </span>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
            {t('tagline')}
          </p>
          <ul className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--brand-teal)]" /> {site.location[locale]}
            </li>
            <li className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-[var(--brand-teal)]" />
              <a href={`mailto:${site.email}`} className="hover:text-[var(--text)]">
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-[var(--brand-teal)]" /> {site.phone}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
            {t('servicesHeading')}
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-[var(--text-muted)]">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={
                    s.hasCustomPage
                      ? '/services/sre-gcp-kubernetes'
                      : { pathname: '/services/[slug]', params: { slug: s.slug[locale] } }
                  }
                  className="hover:text-[var(--brand-teal)]"
                >
                  {s.shortTitle[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
            {t('companyHeading')}
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/about" className="hover:text-[var(--brand-teal)]">
                {site.nav.find((n) => n.href === '/about')!.label[locale]}
              </Link>
            </li>
            <li>
              <Link href="/use-cases" className="hover:text-[var(--brand-teal)]">
                {site.nav.find((n) => n.href === '/use-cases')!.label[locale]}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[var(--brand-teal)]">
                {site.nav.find((n) => n.href === '/blog')!.label[locale]}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--brand-teal)]">
                {site.nav.find((n) => n.href === '/contact')!.label[locale]}
              </Link>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--brand-teal)]"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 py-5 text-xs text-[var(--text-soft)] md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {new Date().getFullYear()} {t('rightsHolder')} — {site.domain}
          </p>
          <p>{t('madeWith')}</p>
          <LocaleSwitcher />
        </div>
      </div>
    </footer>
  );
}
