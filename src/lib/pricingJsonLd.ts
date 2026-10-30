import { currency, currentPrice, expressOffers, planOffers, type Offer } from '@/data/pricing';
import type { Locale } from '@/i18n/routing';
import { SITE_URL, site } from '@/lib/site';

function serviceNode(offer: Offer, locale: Locale, url: string) {
  const price = currentPrice(offer);
  return {
    '@type': 'Service',
    name: `Techbox ${offer.name[locale]}`,
    description: offer.tagline[locale],
    provider: { '@type': 'Organization', name: site.name, url: SITE_URL },
    areaServed: ['Costa Rica', 'Latin America'],
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      url,
      ...(offer.billing === 'monthly' && {
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price,
          priceCurrency: currency,
          unitText: 'MONTH',
        },
      }),
    },
  };
}

/** JSON-LD de /precios, generado desde `pricing.ts`. */
export function buildPricingJsonLd(locale: Locale, url: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [...expressOffers, ...planOffers].map((offer) =>
      serviceNode(offer, locale, url),
    ),
  };
}
