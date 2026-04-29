import { LinkButton } from './Button';
import { site } from '@/lib/site';
import { MessageCircle, CalendarCheck } from 'lucide-react';

type Props = {
  title?: string;
  description?: string;
  className?: string;
};

export default function CTASection({
  title = 'Cuéntanos qué quieres resolver',
  description = '30 minutos por videollamada. Salimos con una primera idea concreta de cómo abordarlo, no con una propuesta de venta.',
  className = '',
}: Props) {
  return (
    <section className={`mx-auto w-full max-w-6xl px-4 ${className}`.trim()}>
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)] p-10 md:p-14">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: 'var(--gradient-brand)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-30 bg-grid-pattern"
        />
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--brand-teal)]/40 blur-3xl"
        />
        <div className="relative flex flex-col items-start gap-6 md:max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-[2.5rem]">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-white/90 md:text-lg">{description}</p>
          <div className="flex flex-wrap gap-3">
            <LinkButton variant="whatsapp" href={site.whatsapp} external>
              <MessageCircle className="h-4 w-4" /> {site.whatsappLabel}
            </LinkButton>
            <LinkButton
              href={site.calendly}
              external
              variant="secondary"
              className="border-white/30 bg-white text-[var(--brand-navy)] hover:border-white hover:bg-white/90 hover:text-[var(--brand-navy)]"
            >
              <CalendarCheck className="h-4 w-4" /> Agendar diagnóstico
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
