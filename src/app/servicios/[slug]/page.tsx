import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { LinkButton } from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ServiceIcon from '@/components/ServiceIcon';
import CTASection from '@/components/CTASection';
import { site } from '@/lib/site';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Servicio no encontrado' };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicioDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  const related = service.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:px-6">
          <div className="flex flex-col gap-5">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] hover:text-[var(--brand-teal)]"
            >
              ← Servicios
            </Link>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
              <ServiceIcon name={service.icon} className="h-3.5 w-3.5" />
              {service.tagline}
            </span>
            <h1 className="text-[2.25rem] font-semibold leading-tight text-[var(--text)] md:text-[3rem]">
              {service.title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
              {service.longDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={site.calendly} external variant="primary">
                Agendar diagnóstico <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href={site.whatsapp} external variant="whatsapp">
                Escribir por WhatsApp
              </LinkButton>
            </div>
          </div>
          <div className="relative">
            <div className="card flex flex-col gap-4 p-7">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-brand)] text-white shadow-[0_12px_30px_-12px_rgba(42,47,115,0.6)]">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Qué incluye
              </h2>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="mx-auto grid w-full max-w-6xl gap-5 px-4 pb-20 md:grid-cols-2 lg:px-6">
        <div className="card flex flex-col gap-4 p-7">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
            <AlertTriangle className="h-4 w-4 text-[var(--brand-navy)] dark:text-[var(--brand-teal)]" />
            El problema
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            {service.problem}
          </p>
        </div>
        <div className="card flex flex-col gap-4 p-7">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
            <Sparkles className="h-4 w-4 text-[var(--brand-teal)]" />
            Cómo lo resolvemos
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            {service.solution}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
          <SectionHeading
            eyebrow="Beneficios"
            title={<>Lo que <span className="text-gradient-brand">gana tu negocio</span></>}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.benefits.map((b) => (
              <article key={b.title} className="card flex flex-col gap-3 p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-[var(--text)]">{b.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {b.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="Ejemplos"
          title="Cómo se ve en la práctica"
          description="Escenarios reales donde este servicio entrega valor desde las primeras semanas."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {service.useCases.map((u) => (
            <div
              key={u}
              className="card flex items-start gap-3 p-5 text-sm text-[var(--text-muted)]"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
              {u}
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 pb-20 lg:px-6">
          <SectionHeading
            eyebrow="Continúa"
            title="Servicios que suelen ir de la mano"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} />
            ))}
          </div>
        </section>
      )}

      <section className="pb-24">
        <CTASection />
      </section>
    </>
  );
}
