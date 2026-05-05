import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Cloud,
  MessageCircle,
  Network,
  Server,
  ServerCog,
  ShieldCheck,
  Sparkles,
  XCircle,
} from 'lucide-react';
import { LinkButton } from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import { site } from '@/lib/site';

const canonicalPath = '/servicios/sre-gcp-kubernetes';

export const metadata: Metadata = {
  title: 'SRE y Cloud Engineering en GCP y Kubernetes',
  description:
    'SRE fraccional especializado en GCP, Kubernetes e Istio para empresas con producto digital. 11+ años de experiencia, certificaciones CKA e ICA. Costa Rica y LatAm.',
  keywords: [
    'SRE Costa Rica',
    'Cloud Engineer GCP',
    'consultor Kubernetes',
    'Istio LatAm',
    'DevOps fraccional',
    'GKE Costa Rica',
    'SRE LatAm',
  ],
  alternates: { canonical: canonicalPath },
  openGraph: {
    type: 'website',
    title: 'SRE y Cloud Engineering en GCP y Kubernetes | TechBox',
    description:
      'SRE fraccional con CKA e ICA. Especialización en GCP, GKE e Istio para SaaS, fintechs y empresas escalando microservicios.',
    url: canonicalPath,
  },
};

const trustItems = [
  '11+ años de experiencia',
  'CKA',
  'ICA',
  'Terraform Associate',
  'SOC2 / PCI hands-on',
];

const differentiators = [
  {
    icon: Cloud,
    title: 'Especialización en GCP y GKE',
    description: 'No generalistas que tocan todo. Operamos GCP y Google Kubernetes Engine como foco principal.',
  },
  {
    icon: Network,
    title: 'Certificación Istio (ICA)',
    description: 'Uno de los pocos profesionales en LatAm con la credencial Istio Certified Associate de la CNCF.',
  },
  {
    icon: ShieldCheck,
    title: 'Experiencia en entorno regulado',
    description: 'SOC2 y PCI hands-on operando producción para una Fortune 500 financiera. No es teoría.',
  },
  {
    icon: Clock,
    title: 'Modelo fraccional',
    description: 'Pagás solo las horas que necesitás. Sin headcount, sin onboarding largo, sin cargas sociales.',
  },
];

const plans = [
  {
    name: 'Esencial',
    price: '$1,200',
    cadence: '/mes',
    hours: '~8 horas mensuales',
    popular: false,
    description: 'Supervisión profesional para infra que ya está estable.',
    features: [
      'Monitoreo y alertas',
      'Revisión mensual de costos cloud',
      'Parches y mantenimiento de rutina',
      '1 cambio menor por mes',
      'Soporte L–V horario laboral CR',
    ],
    idealFor: 'Equipos con infra estable que necesitan supervisión profesional.',
    cta: { label: 'Agendar llamada', variant: 'secondary' as const },
  },
  {
    name: 'Estándar',
    price: '$2,200',
    cadence: '/mes',
    hours: '~16 horas mensuales',
    popular: true,
    description: 'Confiabilidad activa para producto en producción.',
    features: [
      'Todo lo de Esencial',
      'Infraestructura como código (Terraform)',
      'Hardening de seguridad continuo',
      'On-call horario laboral',
      'Revisiones de arquitectura trimestrales',
    ],
    idealFor: 'SaaS y startups con producto en producción.',
    cta: { label: 'Agendar llamada', variant: 'primary' as const },
  },
  {
    name: 'Pro',
    price: 'Cotización a medida',
    cadence: '',
    hours: '24+ horas mensuales',
    popular: false,
    description: 'Acompañamiento profundo para escalar microservicios.',
    features: [
      'Todo lo de Estándar',
      'Proyectos pequeños incluidos',
      'SLA personalizado',
      'On-call extendido (opcional)',
    ],
    idealFor: 'Empresas escalando microservicios o con compliance estricto.',
    cta: { label: 'Solicitar cotización', variant: 'secondary' as const },
  },
];

const oneOffs = [
  {
    icon: Sparkles,
    title: 'Auditoría GCP gratuita',
    duration: '90 minutos',
    price: 'Sin costo',
    description:
      'Revisión de costos, confiabilidad y seguridad de tu cuenta GCP. Entrega un PDF con hallazgos priorizados y un plan de 90 días. Sin compromiso.',
    cta: { label: 'Agendar auditoría', href: site.calendly, external: true },
  },
  {
    icon: Network,
    title: 'Service Mesh Readiness Assessment',
    duration: '1–2 semanas',
    price: 'Desde $2,000',
    description:
      'Evaluación para empresas considerando Istio o Linkerd. Análisis del stack actual y roadmap de implementación.',
    cta: { label: 'Solicitar info', href: site.whatsapp, external: true },
  },
];

const turnkeyImplementations = [
  { title: 'Migración a Terraform', price: 'Desde $5,000' },
  { title: 'Implementación Istio + observabilidad', price: 'Desde $9,000' },
  { title: 'Setup GKE producción-ready', price: 'Desde $6,000' },
];

const stackItems = [
  'GCP',
  'Kubernetes',
  'Istio',
  'Terraform',
  'HashiCorp Vault',
  'Jenkins',
  'GitHub Actions',
  'Argo CD',
  'Docker',
  'Python',
  'Bash',
  'Linux',
];

const certifications = [
  {
    badgeId: 'c120126b-dc33-445a-a4f8-182200dfe425',
    label: 'Certified Kubernetes Administrator',
  },
  {
    badgeId: '8f5e3a3a-e21f-4e42-b7f4-42409d431f33',
    label: 'Istio Certified Associate',
  },
  {
    badgeId: '96c63672-58a8-494c-98cf-0f11ff492b46',
    label: 'Google Cloud Digital Leader',
  },
  {
    badgeId: 'b1dc57b5-52d7-4eb1-a685-c09094343ccc',
    label: 'HashiCorp Certified: Terraform Associate',
  },
];

const fitYes = [
  'SaaS B2B con producto en producción',
  'Empresas con microservicios en Kubernetes',
  'Startups que migraron a GCP y necesitan governance',
  'Software houses que necesitan especialista de cloud para sus proyectos',
  'Empresas con requerimientos de compliance (SOC2, PCI, regulación local)',
];

export default function SREServicePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:px-6">
          <div className="flex flex-col gap-5">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] hover:text-[var(--brand-teal)]"
            >
              ← Servicios
            </Link>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
              <ServerCog className="h-3.5 w-3.5" />
              SRE / Cloud Engineering
            </span>
            <h1 className="text-[2.25rem] font-semibold leading-tight text-[var(--text)] md:text-[3rem]">
              SRE y Cloud Engineering en{' '}
              <span className="text-gradient-brand">GCP y Kubernetes</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
              Confiabilidad de nivel enterprise para tu producto digital, sin contratar un equipo
              completo. SRE fraccional especializado en GCP, GKE e Istio.
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={site.calendly} external variant="primary">
                Agendá una auditoría gratuita <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="#planes" variant="secondary">
                Ver planes
              </LinkButton>
            </div>
            <ul className="mt-2 flex flex-wrap gap-2">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-muted)]/70 px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-teal)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="card flex flex-col gap-4 p-7">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-brand)] text-white shadow-[0_12px_30px_-12px_rgba(42,47,115,0.6)]">
                <ServerCog className="h-7 w-7" />
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Lo que opero a diario
              </h2>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  'GCP / GKE en producción',
                  'Service mesh con Istio',
                  'Terraform e IaC',
                  'CI/CD con Jenkins y Argo CD',
                  'Observabilidad y SLOs',
                  'Compliance SOC2 / PCI',
                ].map((f) => (
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

      {/* DIFERENCIADORES */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
          <SectionHeading
            eyebrow="Diferenciadores"
            title={<>Por qué un <span className="text-gradient-brand">SRE especializado</span></>}
            description="Cloud genérico es para empezar. Cuando tu producto crece — microservicios, Kubernetes, múltiples regiones, compliance — necesitás a alguien con experiencia real operando producción a escala. No un generalista, un especialista."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <article key={d.title} className="card flex flex-col gap-3 p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-[var(--text)]">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {d.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="Planes"
          title={<>Modelo fraccional, <span className="text-gradient-brand">pagás por horas</span></>}
          description="Tres niveles de acompañamiento mensual. Si necesitás algo distinto, vemos un esquema a medida."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={[
                'card relative flex flex-col gap-5 p-7',
                plan.popular
                  ? 'border-[var(--brand-teal)] shadow-[0_24px_60px_-24px_rgba(46,196,182,0.45)]'
                  : '',
              ]
                .join(' ')
                .trim()}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-[var(--brand-teal)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_20px_-8px_rgba(46,196,182,0.7)]">
                  <Sparkles className="h-3 w-3" />
                  Más popular
                </span>
              )}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-[var(--text)]">{plan.name}</h3>
                <p className="text-sm text-[var(--text-muted)]">{plan.description}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-semibold text-[var(--text)] md:text-[1.75rem]">
                  {plan.cadence ? `Desde ${plan.price}` : plan.price}
                  {plan.cadence && (
                    <span className="text-base font-medium text-[var(--text-muted)]">
                      {plan.cadence}
                    </span>
                  )}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-teal)]">
                  {plan.hours}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 border-t border-[var(--border)] pt-5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs italic leading-relaxed text-[var(--text-soft)]">
                Ideal para: {plan.idealFor}
              </p>
              <LinkButton
                href={site.calendly}
                external
                variant={plan.cta.variant}
                className="mt-auto justify-center"
              >
                {plan.cta.label}
              </LinkButton>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICIOS PUNTUALES */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
          <SectionHeading
            eyebrow="Sin retainer"
            title={<>Servicios <span className="text-gradient-brand">puntuales</span></>}
            description="¿Aún no estás listo para un acompañamiento mensual? Estos servicios son por proyecto."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {oneOffs.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="card flex flex-col gap-4 p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      {s.duration}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-[var(--text)]">{s.title}</h3>
                    <p className="text-sm font-semibold text-[var(--brand-teal)]">{s.price}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{s.description}</p>
                  <LinkButton
                    href={s.cta.href}
                    external={s.cta.external}
                    variant="secondary"
                    className="mt-auto w-fit"
                  >
                    {s.cta.label} <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                </article>
              );
            })}
          </div>

          <div className="mt-10 card p-7">
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5 text-[var(--brand-teal)]" />
              <h3 className="text-base font-semibold text-[var(--text)]">
                Implementaciones llave en mano
              </h3>
            </div>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Proyectos cerrados con alcance, plazo y entregables definidos.
            </p>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {turnkeyImplementations.map((p) => (
                <li
                  key={p.title}
                  className="flex flex-col gap-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <span className="text-sm font-semibold text-[var(--text)]">{p.title}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-teal)]">
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STACK Y CERTIFICACIONES */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="Stack & credenciales"
          title={<>Especialización <span className="text-gradient-brand">certificada</span></>}
          description="Herramientas que opero en producción y certificaciones verificables que respaldan la práctica."
        />

        <div className="mt-12 flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              Stack
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {stackItems.map((tool) => (
                <li
                  key={tool}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-4 py-2 text-sm font-medium text-[var(--text)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              Certificaciones verificables
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Click en cada badge para verificar el credencial en Credly.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert.badgeId}
                  className="card flex flex-col items-center justify-center gap-3 p-5"
                  aria-label={cert.label}
                >
                  <div
                    data-iframe-width="380"
                    data-iframe-height="340"
                    data-share-badge-id={cert.badgeId}
                    data-share-badge-host="https://www.credly.com"
                  />
                </div>
              ))}
            </div>
            <Script
              src="https://cdn.credly.com/assets/utilities/embed.js"
              strategy="afterInteractive"
            />
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES / NO ES */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
          <SectionHeading
            eyebrow="Filtro honesto"
            title={<>Para quién <span className="text-gradient-brand">sí</span> y para quién <span className="text-gradient-brand">no</span></>}
            description="Preferimos perder un cliente al inicio que entregar algo fuera de nuestra especialidad."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="card flex flex-col gap-4 p-7">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <CheckCircle2 className="h-5 w-5 text-[var(--brand-teal)]" />
                Para quién es
              </div>
              <ul className="flex flex-col gap-2.5">
                {fitYes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="card flex flex-col gap-4 p-7">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <XCircle className="h-5 w-5 text-[var(--brand-navy)] dark:text-[var(--text-muted)]" />
                Para quién NO es
              </div>
              <ul className="flex flex-col gap-2.5 text-sm text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-soft)]" />
                  <span>
                    Empresas que aún no están en la nube → recomendamos empezar con nuestro
                    servicio de{' '}
                    <Link
                      href="/servicios/infraestructura-cloud"
                      className="font-semibold text-[var(--brand-navy)] underline-offset-4 hover:underline dark:text-[var(--brand-teal)]"
                    >
                      Infraestructura Cloud
                    </Link>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-soft)]" />
                  <span>
                    Operaciones que requieren on-call 24/7 dedicado → necesitás un equipo interno o
                    un MSP.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--text-soft)]" />
                  <span>
                    Stacks fuera de nuestra especialidad: Azure como principal, AWS profundo o
                    on-premise puro.
                  </span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-strong)] p-10 md:p-14">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{ background: 'var(--gradient-brand)' }}
            />
            <div aria-hidden className="absolute inset-0 -z-10 opacity-30 bg-grid-pattern" />
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--brand-teal)]/40 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-6 md:max-w-2xl">
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-[2.5rem]">
                ¿Tu infraestructura ya se siente grande para una sola persona? Hablemos.
              </h2>
              <p className="text-base leading-relaxed text-white/90 md:text-lg">
                90 minutos por videollamada. Salimos con un PDF de hallazgos priorizados y un plan
                de 90 días, sin compromiso.
              </p>
              <div className="flex flex-wrap gap-3">
                <LinkButton
                  href={site.calendly}
                  external
                  variant="secondary"
                  className="border-white/30 bg-white text-[var(--brand-navy)] hover:border-white hover:bg-white/90 hover:text-[var(--brand-navy)]"
                >
                  Agendar auditoría gratuita <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton variant="whatsapp" href={site.whatsapp} external>
                  <MessageCircle className="h-4 w-4" /> {site.whatsappLabel}
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
