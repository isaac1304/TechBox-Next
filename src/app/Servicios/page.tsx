import ServiceCard from "@/components/ServiceCard";

const services = [
  { title: "Agentes de IA", desc: "Asistentes y automatización inteligente.", href: "/servicios/agentes" },
  { title: "Datos para IA", desc: "Gobierno y features de datos.", href: "/servicios/datos" },
  { title: "Automatización", desc: "RPA, integraciones y orquestación.", href: "/servicios/automatizacion" },
  { title: "Nube híbrida", desc: "Arquitecturas multi-cloud y on-prem.", href: "/servicios/nube" },
  { title: "Modelos de IA", desc: "Entrenamiento, evaluación y MLOps.", href: "/servicios/modelos" },
  { title: "Analytics", desc: "ETL/ELT y dashboards para decisiones.", href: "/servicios/analytics" },
  { title: "Seguridad e identidad", desc: "Hardening, IAM y monitoreo.", href: "/servicios/seguridad" },
  { title: "Consultoría", desc: "Assessments y roadmaps pragmáticos.", href: "/servicios/consultoria" }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[11rem]">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>
    </main>
  );
}
