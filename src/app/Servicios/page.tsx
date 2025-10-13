import ServiceCard from "@/components/ServiceCard";

const services = [
  { id: "agentes",     title: "Agentes de IA",          desc: "Asistentes y automatización inteligente." },
  { id: "datos",       title: "Datos para IA",          desc: "Gobierno y features de datos." },
  { id: "automatiza",  title: "Automatización",         desc: "RPA, integraciones y orquestación." },
  { id: "nube",        title: "Nube híbrida",           desc: "Arquitecturas multi-cloud y on-prem." },
  { id: "modelos",     title: "Modelos de IA",          desc: "Entrenamiento, evaluación y MLOps." },
  { id: "analytics",   title: "Analytics",              desc: "ETL/ELT y dashboards para decisiones." },
  { id: "seguridad",   title: "Seguridad e identidad",  desc: "Hardening, IAM y monitoreo." },
  { id: "consultoria", title: "Consultoría",            desc: "Assessments y roadmaps pragmáticos." },
];

export default function Page() {
  return (
    <main className="py-10">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Nuestros Servicios</h1>
          <p className="mt-2 text-sm opacity-80">
            Soluciones que combinan ingeniería, datos y automatización con resultados medibles.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[10.5rem]">
          {services.map((s) => <ServiceCard key={s.id} {...s} />)}
        </div>
      </section>
    </main>
  );
}
