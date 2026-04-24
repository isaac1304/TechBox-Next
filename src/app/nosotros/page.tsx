import type { Metadata } from 'next';
import Image from 'next/image';
import { Compass, Users, Target, Layers } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import ValueCard from '@/components/ValueCard';

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'TechBox es una empresa costarricense de consultoría tecnológica que ayuda a pymes con software, cloud, automatización, ciberseguridad y datos.',
};

const values = [
  {
    icon: <Compass className="h-5 w-5" />,
    title: 'Tecnología con propósito',
    description:
      'No creemos en tecnología por moda. Cada propuesta nace de un problema real y medible.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Cerca de tu equipo',
    description:
      'Trabajamos con la gerencia y con quienes usan los sistemas todos los días. Sin lenguaje técnico innecesario.',
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Resultados antes que entregables',
    description:
      'Medimos éxito en tiempo ahorrado, errores reducidos y decisiones mejor informadas.',
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Soluciones modulares',
    description:
      'Empezamos pequeño, validamos, y crecemos con tu negocio. Sin sobrediseño ni sobreingeniería.',
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-6">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
              Sobre TechBox
            </span>
            <h1 className="text-[2.25rem] font-semibold leading-tight text-[var(--text)] md:text-[3rem]">
              Un socio tecnológico{' '}
              <span className="text-gradient-brand">hecho para pymes</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
              TechBox S.R.L. es una empresa costarricense de consultoría tecnológica
              que combina ingeniería de software, cloud, automatización, ciberseguridad
              y análisis de datos. Trabajamos junto a pequeñas y medianas empresas que
              necesitan modernizar su operación sin complicarse.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute inset-0 rounded-[2rem] opacity-40 blur-3xl"
              style={{ background: 'var(--gradient-brand)' }}
            />
            <div className="card relative flex flex-col items-center gap-5 p-8 text-center">
              <Image
                src="/brand/techbox-mark.png"
                alt="TechBox"
                width={120}
                height={120}
                className="h-28 w-28 object-contain"
              />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                Heredia, Costa Rica
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Atendemos clientes en Costa Rica y toda Latinoamérica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:px-6">
          <SectionHeading
            align="left"
            eyebrow="Nuestra misión"
            title={<>Hacer la tecnología <span className="text-gradient-brand">accesible</span> para las pymes</>}
            description="Queremos que cualquier empresa, sin importar su tamaño, pueda crecer con herramientas modernas, seguras y bien implementadas. Sin intermediarios. Sin lenguaje técnico innecesario. Sin proyectos que no terminan."
          />
          <div className="card flex flex-col gap-4 p-8">
            <h3 className="text-lg font-semibold text-[var(--text)]">
              Tecnología con propósito empresarial
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Cada proyecto empieza con una pregunta simple: ¿qué cambia en tu negocio
              cuando esto esté listo? Si no podemos responderla con claridad, no vale la
              pena construir.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Construimos software, configuramos nube, automatizamos procesos y
              protegemos información con el mismo criterio: que se note el resultado
              en el día a día de las personas que trabajan contigo.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Cuatro principios, cero humo"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <ValueCard key={v.title} {...v} />
          ))}
        </div>
      </section>

      <section className="pb-24">
        <CTASection
          title="Hablemos de tu negocio"
          description="Cuéntanos qué quieres mejorar y te proponemos la primera ruta concreta en una reunión de 30 minutos."
        />
      </section>
    </>
  );
}
