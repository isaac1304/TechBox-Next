import { Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { isLaunchActive, launchProgram } from '@/data/pricing';

export default function FoundersBanner() {
  const t = useTranslations('Pricing');
  if (!isLaunchActive()) return null;

  return (
    <div className="card flex items-start gap-3 border-[var(--brand-teal)] p-5 text-sm leading-relaxed text-[var(--text-muted)]">
      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
      <p>
        {t('foundersBanner', {
          total: launchProgram.spotsTotal,
          left: launchProgram.spotsLeft,
        })}
      </p>
    </div>
  );
}
