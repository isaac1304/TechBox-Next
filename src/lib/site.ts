import type { Locale } from '@/i18n/routing';

type LocalizedString = Record<Locale, string>;

export type NavItem = {
  /** Pathname canónico interno (next-intl lo traduce al renderizar). */
  href: '/' | '/services' | '/about' | '/use-cases' | '/blog' | '/contact';
  label: LocalizedString;
};

export const site = {
  name: 'Techbox',
  domain: 'techbox.cr',
  email: 'gerencia@techbox.cr',
  phone: '+506 7016-5606',
  whatsapp: 'https://wa.me/message/D56BK4UPJ5IDJ1',
  whatsappLabel: {
    es: 'Escribinos por WhatsApp',
    en: 'Message us on WhatsApp',
  } as LocalizedString,
  calendly: 'https://calendly.com/isaacxdd/30min',
  location: {
    es: 'Heredia, Costa Rica',
    en: 'Heredia, Costa Rica',
  } as LocalizedString,
  nav: [
    { href: '/', label: { es: 'Inicio', en: 'Home' } },
    { href: '/services', label: { es: 'Servicios', en: 'Services' } },
    { href: '/about', label: { es: 'Nosotros', en: 'About' } },
    { href: '/use-cases', label: { es: 'Casos de uso', en: 'Use cases' } },
    { href: '/blog', label: { es: 'Blog', en: 'Blog' } },
    { href: '/contact', label: { es: 'Contacto', en: 'Contact' } },
  ] satisfies NavItem[],
};
