import type { Metadata } from 'next';
import Image from 'next/image';
import { Compass, Users, Target, Layers } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import ValueCard from '@/components/ValueCard';

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Techbox es una consultora tecnológica costarricense que acompaña a pymes de Latinoamérica con software, nube, automatización, ciberseguridad y datos.',
};

const values = [
  {
    icon: <Compass className="h-5 w-5" />,
    title: 'Tecnología con propósito',
    description:
      'No metemos tecnología por moda. Cada propuesta nace de un problema real y medible de tu negocio.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Cerca de tu equipo',
    description:
      'Trabajamos con la gerencia y con quienes usan los sistemas todos los días. Sin tecnicismos innecesarios.',
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Resultados antes que entregables',
    description:
      'Medimos el éxito en horas ahorradas, errores reducidos y decisiones mejor informadas.',
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Soluciones modulares',
    description:
      'Arrancamos pequeño, validamos y vamos creciendo junto con tu negocio. Sin sobrediseño ni sobreingeniería.',
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-6">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
              Sobre Techbox
            </span>
            <h1 className="text-[2.25rem] font-semibold leading-tight text-[var(--text)] md:text-[3rem]">
              Un socio tecnológico{' '}
              <span className="text-gradient-brand">pensado para pymes</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
              TechBox S.R.L. es una consultora costarricense que combina ingeniería
              de software, nube, automatización, ciberseguridad y análisis de datos.
              Trabajamos codo a codo con pymes de Latinoamérica que necesitan
              modernizar la operación sin complicarse.
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
                alt="Techbox"
                width={120}
                height={120}
                className="h-28 w-28 object-contain"
              />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
                Heredia, Costa Rica
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Atendemos pymes en Costa Rica y toda Latinoamérica.
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
            description="Queremos que cualquier empresa, sea grande o chica, pueda crecer con herramientas modernas, seguras y bien implementadas. Sin intermediarios. Sin tecnicismos innecesarios. Sin proyectos que nunca terminan."
          />
          <div className="card flex flex-col gap-4 p-8">
            <h3 className="text-lg font-semibold text-[var(--text)]">
              Tecnología con propósito empresarial
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Cada proyecto arranca con una pregunta sencilla: ¿qué va a cambiar en tu
              negocio cuando esto quede listo? Si no la podemos responder con claridad,
              no vale la pena construirlo.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Hacemos software, ordenamos la nube, automatizamos procesos y protegemos
              información con el mismo criterio: que el resultado se note en el día a
              día de la gente que trabaja con vos.
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
          title="Conversemos sobre tu negocio"
          description="Contános qué querés mejorar y te proponemos una primera ruta concreta en una reunión de 30 minutos."
        />
      </section>
    </>
  );
}
