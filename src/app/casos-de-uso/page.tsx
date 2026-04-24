import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import UseCaseCard from '@/components/UseCaseCard';
import CTASection from '@/components/CTASection';
import { useCases } from '@/data/useCases';

export const metadata: Metadata = {
  title: 'Casos de uso',
  description:
    'Escenarios reales donde TechBox aplica software, cloud, automatización, ciberseguridad y datos para resolver problemas concretos en pymes.',
};

export default function CasosDeUsoPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20 lg:px-6">
        <SectionHeading
          eyebrow="Casos de uso"
          title={<>Soluciones aplicadas a <span className="text-gradient-brand">negocios reales</span></>}
          description="Cada caso combina varios de nuestros servicios según el problema. No son promesas: son el tipo de proyectos que hacemos."
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 lg:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <UseCaseCard key={u.id} useCase={u} />
          ))}
        </div>
      </section>

      <section className="pb-24">
        <CTASection
          title="¿Tu caso no está aquí?"
          description="Agenda una llamada y conversemos. Probablemente ya resolvimos algo parecido, o podemos diseñarlo contigo desde cero."
        />
      </section>
    </>
  );
}
