import { activeCertifications, credlyUrl } from '@/data/certifications';
import { postLastModified, type BlogPost } from '@/data/blog';
import type { Locale } from '@/i18n/routing';
import { pageUrl, type LocalizedHref } from '@/lib/seo';
import { SITE_URL, absoluteUrl, site } from '@/lib/site';

export const organizationId = `${SITE_URL}/#organization`;
export const founderId = `${SITE_URL}/#founder`;

/** ProfessionalService de Techbox: se declara en todo el sitio desde el layout. */
export function organizationNode() {
  return {
    '@type': 'ProfessionalService',
    '@id': organizationId,
    name: site.name,
    legalName: site.legalName,
    url: SITE_URL,
    logo: absoluteUrl('/brand/techbox-logo.png'),
    image: absoluteUrl('/opengraph-image.png'),
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.areaServed,
    founder: { '@id': founderId },
    ...(site.socialProfiles.length > 0 && { sameAs: site.socialProfiles }),
  };
}

/** Person del fundador, solo con certificaciones vigentes. */
export function founderNode(locale: Locale) {
  return {
    '@type': 'Person',
    '@id': founderId,
    name: site.founder.name,
    alternateName: site.founder.shortName,
    jobTitle: site.founder.jobTitle[locale],
    url: pageUrl('/about', locale),
    worksFor: { '@id': organizationId },
    hasCredential: activeCertifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.label,
      credentialCategory: 'certification',
      url: credlyUrl(cert),
      recognizedBy: { '@type': 'Organization', name: cert.issuer },
    })),
  };
}

export function siteJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationNode(), founderNode(locale)],
  };
}

/** Nombre visible de una entrada del menú, para breadcrumbs. */
export function navLabel(href: (typeof site.nav)[number]['href'], locale: Locale): string {
  return site.nav.find((n) => n.href === href)!.label[locale];
}

/** BreadcrumbList a partir de pares nombre/href (el último es la página actual). */
export function breadcrumbJsonLd(
  locale: Locale,
  items: { name: string; href: LocalizedHref }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: pageUrl(item.href, locale),
    })),
  };
}

export function blogPostingJsonLd(post: BlogPost, locale: Locale) {
  const url = pageUrl(
    (l) => ({ pathname: '/blog/[slug]', params: { slug: post.slug[l] } }),
    locale,
  );
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: post.title[locale],
    description: post.metaDescription[locale],
    image: absoluteUrl('/opengraph-image.png'),
    inLanguage: locale,
    datePublished: post.date,
    dateModified: postLastModified(post),
    author: {
      '@type': 'Person',
      '@id': founderId,
      name: site.founder.name,
      url: pageUrl('/about', locale),
    },
    publisher: { '@id': organizationId },
  };
}
