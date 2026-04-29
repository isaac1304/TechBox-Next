import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Servicios tecnológicos para pymes',
  description:
    'Software a la medida, cloud, automatización, ciberseguridad, análisis de datos y consultoría para pymes en Costa Rica y Latinoamérica.',
};

export default function ServiciosPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20 lg:px-6">
        <SectionHeading
          eyebrow="Servicios"
          title={<>Servicios tecnológicos <span className="text-gradient-brand">para pymes sin equipo técnico</span></>}
          description="Combinamos ingeniería, datos y estrategia para resolver los problemas reales que frenan el crecimiento de tu empresa. Te acompañamos desde el diagnóstico hasta el soporte continuo."
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 lg:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="pb-24">
        <CTASection
          title="¿No sabes por dónde empezar?"
          description="Agenda un diagnóstico gratuito de 30 minutos. Te ayudamos a identificar la primera mejora con impacto real en tu operación."
        />
      </section>
    </>
  );
}
