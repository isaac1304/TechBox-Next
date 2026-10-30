import { useTranslations } from 'next-intl';
import { formatPrice, isLaunchActive, type Offer } from '@/data/pricing';

export default function PriceTag({ offer }: { offer: Offer }) {
  const t = useTranslations('Pricing');
  const regular = formatPrice(offer.priceRegular);
  const cadence =
    offer.billing === 'monthly' ? (
      <span className="text-base font-medium text-[var(--text-muted)]">{t('perMonth')}</span>
    ) : null;

  if (isLaunchActive() && offer.priceLaunch !== undefined) {
    const launch = formatPrice(offer.priceLaunch);
    return (
      <div className="flex flex-col gap-1">
        <p className="sr-only">{t('priceFoundersSr', { regular, launch })}</p>
        <p aria-hidden className="flex flex-wrap items-baseline gap-2">
          <s className="text-base font-medium text-[var(--text-soft)]">{regular}</s>
          <span className="text-2xl font-semibold text-[var(--text)] md:text-[1.75rem]">
            {launch}
          </span>
          {cadence}
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
          {t('foundersPriceLabel')}
        </p>
      </div>
    );
  }

  return (
    <p className="text-2xl font-semibold text-[var(--text)] md:text-[1.75rem]">
      {regular}
      {cadence}
    </p>
  );
}
