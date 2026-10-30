import { CheckCircle2, Sparkles, XCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LinkButton } from '@/components/Button';
import PriceTag from '@/components/PriceTag';
import type { Offer } from '@/data/pricing';
import type { Locale } from '@/i18n/routing';

export default function PricingCard({ offer, locale }: { offer: Offer; locale: Locale }) {
  const t = useTranslations('Pricing');

  return (
    <article
      className={[
        'card relative flex flex-col gap-5 p-7',
        offer.featured
          ? 'border-[var(--brand-teal)] shadow-[0_24px_60px_-24px_rgba(46,196,182,0.45)]'
          : '',
      ]
        .join(' ')
        .trim()}
    >
      {offer.featured && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-[var(--brand-navy)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_20px_-8px_rgba(46,196,182,0.7)]">
          <Sparkles className="h-3 w-3" />
          {t('recommendedBadge')}
        </span>
      )}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-[var(--text)]">{offer.name[locale]}</h3>
        <p className="text-sm text-[var(--text-muted)]">{offer.tagline[locale]}</p>
      </div>
      <div className="flex flex-col gap-2">
        <PriceTag offer={offer} />
        {offer.deliveryTime && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            {offer.deliveryTime[locale]}
          </p>
        )}
      </div>
      <ul className="flex flex-col gap-2.5 border-t border-[var(--border)] pt-5">
        {offer.includes[locale].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
            {item}
          </li>
        ))}
        {offer.notIncluded?.[locale].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-soft)]">
            <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <LinkButton
        href={offer.ctaHref}
        external
        variant={offer.featured ? 'primary' : 'secondary'}
        className="mt-auto justify-center"
      >
        {offer.ctaLabel[locale]}
      </LinkButton>
    </article>
  );
}
