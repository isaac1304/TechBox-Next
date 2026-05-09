import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'] as const,
  defaultLocale: 'es',
  localePrefix: 'as-needed',
  // Spanish stays the default for everyone; we don't auto-redirect English
  // browsers to /en. The cookie still remembers the choice once a user picks
  // a language from the footer switcher.
  localeDetection: false,
  localeCookie: {
    name: 'NEXT_LOCALE',
    maxAge: 60 * 60 * 24 * 365,
  },
  pathnames: {
    '/': '/',
    '/services': { es: '/servicios', en: '/services' },
    '/services/[slug]': { es: '/servicios/[slug]', en: '/services/[slug]' },
    '/services/sre-gcp-kubernetes': {
      es: '/servicios/sre-gcp-kubernetes',
      en: '/services/sre-gcp-kubernetes',
    },
    '/about': { es: '/nosotros', en: '/about' },
    '/use-cases': { es: '/casos-de-uso', en: '/use-cases' },
    '/contact': { es: '/contacto', en: '/contact' },
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
  },
});

export type Locale = (typeof routing.locales)[number];
