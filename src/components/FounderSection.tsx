import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/SectionHeading';
import { activeCertifications, credlyUrl } from '@/data/certifications';

// TODO(Isaac): confirmar si se mencionan los nombres de empresas anteriores.
// TODO(Isaac): confirmar foto del fundador.
export default function FounderSection({
  showProfile = false,
}: {
  /** En /nosotros: nombre, bio y enlaces a Credly (ancla #fundador). */
  showProfile?: boolean;
}) {
  const t = useTranslations('Founder');
  const facts = [t('fact1'), t('fact2'), t('fact3')];

  return (
    <section
      id={showProfile ? 'fundador' : undefined}
      className="relative scroll-mt-28 border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-6">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow={t('eyebrow')}
            title={t('title')}
            description={t('quote')}
          />
          {showProfile && (
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold text-[var(--text)]">
                {t('name')} · <span className="text-[var(--text-muted)]">{t('role')}</span>
              </p>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{t('bio')}</p>
            </div>
          )}
          <ul className="flex flex-col gap-2.5">
            {facts.map((fact) => (
              <li key={fact} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
                {fact}
              </li>
            ))}
          </ul>
          {showProfile && <p className="text-xs text-[var(--text-soft)]">{t('credlyHelp')}</p>}
        </div>
        <ul className="grid gap-4 sm:grid-cols-3">
          {activeCertifications.map((cert) => {
            const badge = (
              <>
                <div className="relative h-24 w-24">
                  <Image
                    src={cert.image}
                    alt={cert.shortLabel}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-semibold text-[var(--text)]">{cert.shortLabel}</p>
              </>
            );
            return (
              <li key={cert.badgeId}>
                {showProfile ? (
                  <a
                    href={credlyUrl(cert)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('credlyAria', { name: cert.shortLabel })}
                    className="card flex h-full flex-col items-center gap-3 p-5 text-center transition-transform hover:-translate-y-0.5 hover:border-[var(--brand-teal)]"
                  >
                    {badge}
                  </a>
                ) : (
                  <div className="card flex h-full flex-col items-center gap-3 p-5 text-center">
                    {badge}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
