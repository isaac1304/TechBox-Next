import PricingCard from '@/components/PricingCard';
import { taxNote, type Offer } from '@/data/pricing';
import type { Locale } from '@/i18n/routing';

export default function PricingBlock({
  offers,
  notes,
  locale,
}: {
  offers: Offer[];
  notes: string[];
  locale: Locale;
}) {
  return (
    <>
      <div
        className={[
          'mt-12 grid gap-5',
          offers.length === 2 ? 'mx-auto max-w-4xl md:grid-cols-2' : 'md:grid-cols-3',
        ].join(' ')}
      >
        {offers.map((offer) => (
          <PricingCard key={offer.id} offer={offer} locale={locale} />
        ))}
      </div>
      <ul className="mx-auto mt-8 flex max-w-3xl flex-col gap-2 text-center text-xs leading-relaxed text-[var(--text-muted)]">
        {[...notes, taxNote[locale]].map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </>
  );
}
