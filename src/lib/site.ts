import type { Locale } from '@/i18n/routing';

type LocalizedString = Record<Locale, string>;

/**
 * URL base canónica del sitio (con www, sin barra final). Es la única fuente
 * para metadataBase, canonicals, hreflang, og:url, sitemap, robots y JSON-LD.
 * Se puede sobreescribir con NEXT_PUBLIC_SITE_URL (por ejemplo en previews).
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.techbox.cr').replace(
  /\/+$/,
  '',
);

/** Convierte un pathname interno ("/", "/en/pricing") en URL absoluta canónica. */
export function absoluteUrl(path: string): string {
  return path === '/' || path === '' ? SITE_URL : `${SITE_URL}${path}`;
}

export type NavItem = {
  /** Pathname canónico interno (next-intl lo traduce al renderizar). */
  href: '/' | '/services' | '/pricing' | '/about' | '/use-cases' | '/blog' | '/contact';
  label: LocalizedString;
};

export const site = {
  name: 'Techbox',
  domain: new URL(SITE_URL).host,
  email: 'gerencia@techbox.cr',
  phone: '+506 7016-5606',
  whatsapp: 'https://wa.me/message/D56BK4UPJ5IDJ1',
  whatsappLabel: {
    es: 'Escribinos por WhatsApp',
    en: 'Message us on WhatsApp',
  } as LocalizedString,
  booking: 'https://cal.com/techbox',
  legalName: 'TechBox S.R.L.',
  address: { locality: 'Heredia', region: 'Heredia', country: 'CR' },
  areaServed: ['Costa Rica', 'Latin America'],
  /** Perfiles sociales oficiales para schema.org sameAs (vacío hasta tenerlos). */
  socialProfiles: [] as string[],
  founder: {
    name: 'Isaac Andrey Granados Gómez',
    shortName: 'Isaac Granados',
    jobTitle: {
      es: 'Fundador y SRE',
      en: 'Founder and SRE',
    } as LocalizedString,
  },
  location: {
    es: 'Heredia, Costa Rica',
    en: 'Heredia, Costa Rica',
  } as LocalizedString,
  nav: [
    { href: '/', label: { es: 'Inicio', en: 'Home' } },
    { href: '/services', label: { es: 'Servicios', en: 'Services' } },
    { href: '/pricing', label: { es: 'Precios', en: 'Pricing' } },
    { href: '/about', label: { es: 'Nosotros', en: 'About' } },
    { href: '/use-cases', label: { es: 'Casos de uso', en: 'Use cases' } },
    { href: '/blog', label: { es: 'Blog', en: 'Blog' } },
    { href: '/contact', label: { es: 'Contacto', en: 'Contact' } },
  ] satisfies NavItem[],
};
