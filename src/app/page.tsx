import Link from 'next/link';
import {
  Layers,
  TrendingUp,
  HandshakeIcon,
  Target,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import { LinkButton } from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ValueCard from '@/components/ValueCard';
import UseCaseCard from '@/components/UseCaseCard';
import ProcessStep from '@/components/ProcessStep';
import CTASection from '@/components/CTASection';
import PixelMosaic from '@/components/PixelMosaic';
import { services } from '@/data/services';
import { useCases } from '@/data/useCases';
import { site } from '@/lib/site';

const values = [
  {
    title: 'Soluciones a la medida',
    description:
      'Nada de plantillas genéricas. Armamos cada proyecto según cómo trabaja tu negocio en la vida real.',
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: 'Tecnología que crece con vos',
    description:
      'Construimos sobre bases modernas para que el software acompañe a tu empresa cuando le toque crecer.',
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: 'Acompañamiento cercano',
    description:
      'Hablamos claro, sin tecnicismos raros. Directo al grano y con foco en resultados de verdad.',
    icon: <HandshakeIcon className="h-5 w-5" />,
  },
  {
    title: 'Enfoque en resultados',
    description:
      'Medimos el impacto en horas ahorradas, errores reducidos y decisiones, no solo en entregables.',
    icon: <Target className="h-5 w-5" />,
  },
];

const painPoints = [
  'Procesos a mano que se llevan horas cada semana',
  'Sistemas que no se hablan entre ventas, operación y finanzas',
  'Poca visibilidad sobre lo que de verdad pasa en el negocio',
  'Riesgos de ciberseguridad sin un plan claro',
  'Sin un equipo técnico de planta que lidere el cambio',
];

const solutions = [
  'Automatizaciones que te devuelven tiempo desde la primera semana',
  'Sistemas y datos en una sola vista, sin saltar entre pantallas',
  'Tableros claros para gerencia y para quien opera el día a día',
  'Controles de seguridad básicos que sí se cumplen',
  'Un equipo externo que se acopla como si fuera tuyo',
];

const processSteps = [
  { title: 'Diagnóstico inicial', description: 'Te escuchamos y miramos juntos cómo opera tu negocio hoy.' },
  { title: 'Propuesta clara', description: 'Te dejamos por escrito alcance, plazos e inversión antes de arrancar.' },
  { title: 'Diseño y desarrollo', description: 'Iteramos con vos, con entregas cortas que podés ver y probar.' },
  { title: 'Implementación', description: 'Desplegamos, migramos los datos y capacitamos a tu equipo.' },
  { title: 'Soporte continuo', description: 'Te acompañamos cuando el sistema empieza a vivir y a evolucionar.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-6">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
              Consultoría tecnológica · Costa Rica
            </span>
            <h1 className="text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-[var(--text)] md:text-[3.25rem]">
              Software, nube y automatización{' '}
              <span className="text-gradient-brand">para pymes sin equipo técnico de planta</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
              Encontramos qué te está frenando la operación y lo resolvemos con
              tecnología que sí se usa. Sin tecnicismos, sin proyectos que no terminan nunca.
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href={site.calendly} external variant="primary">
                Agendá tu diagnóstico <ArrowRight className="h-4 w-4" />
              </LinkButton>
              <LinkButton href="/servicios" variant="secondary">
                Ver servicios
              </LinkButton>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-5 text-xs text-[var(--text-soft)]">
              <span>✓ Diagnóstico sin costo</span>
              <span>✓ Propuesta en 5 días hábiles</span>
              <span>✓ Sin amarres ni permanencia mínima</span>
            </div>
          </div>
          <div className="relative">
            <PixelMosaic size={6} className="max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 md:pb-16 lg:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <ValueCard key={v.title} {...v} />
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6">
        <SectionHeading
          eyebrow="Servicios"
          title={<>Soluciones tecnológicas <span className="text-gradient-brand">de punta a punta</span></>}
          description="Te acompañamos desde el diagnóstico hasta el soporte continuo, con servicios que se combinan a la medida de lo que tu negocio necesita."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* WHY TECHBOX */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:px-6">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
              ¿Por qué Techbox?
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-[var(--text)] md:text-[2.5rem]">
              Conocemos las{' '}
              <span className="text-gradient-brand">trabas de a de veras</span> de las pymes
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Las pymes suelen cargar con procesos a mano, sistemas que no se hablan entre
              sí y poca visibilidad. Sin un equipo técnico de planta, cada decisión
              tecnológica se siente arriesgada. Ese trabajo lo hacemos con vos.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="card flex flex-col gap-3 p-6">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <AlertTriangle className="h-4 w-4 text-[var(--brand-navy)] dark:text-[var(--brand-teal)]" />
                Lo que vemos
              </div>
              <ul className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
                {painPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-navy-300)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card flex flex-col gap-3 p-6">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-teal)]" />
                Lo que resolvemos
              </div>
              <ul className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="Casos de uso"
          title={<>Tecnología aplicada a <span className="text-gradient-brand">negocios de carne y hueso</span></>}
          description="Ejemplos inspirados en empresas como la tuya. Cada caso mezcla varios de nuestros servicios según el problema a resolver."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.slice(0, 3).map((u) => (
            <UseCaseCard key={u.id} useCase={u} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/casos-de-uso"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-navy)] transition hover:gap-2.5 dark:text-[var(--brand-teal)]"
          >
            Ver todos los casos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-6">
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title={<>Un proceso claro, <span className="text-gradient-brand">sin sorpresas a medio camino</span></>}
            description="Pocas fases, objetivos medibles y comunicación constante. Así nos ahorramos los proyectos eternos que nunca entregan nada."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, idx) => (
              <ProcessStep key={step.title} step={idx + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 pt-20">
        <CTASection />
      </section>
    </>
  );
}
