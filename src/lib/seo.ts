import type { Metadata } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { absoluteUrl, site } from '@/lib/site';

export type Href = Parameters<typeof getPathname>[0]['href'];

/** Href fijo o, si el slug cambia por idioma, una función que lo arma por locale. */
export type LocalizedHref = Href | ((locale: Locale) => Href);

const ogLocales: Record<Locale, string> = { es: 'es_CR', en: 'en_US' };

// Al definir openGraph/twitter por página, Next deja de heredar las imágenes
// de app/opengraph-image.png y app/twitter-image.png: se declaran aquí.
const ogImage = { url: '/opengraph-image.png', width: 1200, height: 630, alt: site.name };
const twitterImage = { url: '/twitter-image.png', width: 1200, height: 630, alt: site.name };

function resolveHref(href: LocalizedHref, locale: Locale): Href {
  return typeof href === 'function' ? href(locale) : href;
}

/** URL absoluta (www) de una ruta interna en un idioma. */
export function pageUrl(href: LocalizedHref, locale: Locale): string {
  return absoluteUrl(getPathname({ locale, href: resolveHref(href, locale) }));
}

/** hreflang es/en/x-default (x-default = idioma por defecto) con URLs absolutas. */
export function languageAlternates(href: LocalizedHref): Record<string, string> {
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, pageUrl(href, l)]),
  );
  languages['x-default'] = pageUrl(href, routing.defaultLocale);
  return languages;
}

/** Agrega el sufijo de marca si el título no lo trae. */
export function withBrand(title: string): string {
  return /(^Techbox\s*\||\|\s*Techbox$)/.test(title) ? title : `${title} | ${site.name}`;
}

/**
 * Metadata de una página: title, description, canonical autorreferente,
 * hreflang, Open Graph y Twitter derivados del title/description propios.
 */
export function buildMetadata({
  locale,
  href,
  title,
  description,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  authors,
}: {
  locale: Locale;
  href: LocalizedHref;
  title: string;
  description: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}): Metadata {
  const fullTitle = withBrand(title);
  const url = pageUrl(href, locale);

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(href),
    },
    openGraph: {
      type: ogType,
      locale: ogLocales[locale],
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [ogImage],
      ...(ogType === 'article' && { publishedTime, modifiedTime, authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [twitterImage],
    },
  };
}
