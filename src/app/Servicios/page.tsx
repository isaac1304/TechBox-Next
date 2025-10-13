import ServiceCard from "@/components/ServiceCard";
import serviciosData from "@/data/servicios.json";

type Servicio = {
  slug: string;
  titulo: string;
  descripcion: string;
};

const serviciosMap = new Map(
  (serviciosData as Servicio[]).map((item) => [item.slug, item] as const)
);

const services = [
  { id: "agentes", slug: "transformacion" },
  { id: "datos", slug: "bigdata" },
  { id: "automatiza", slug: "automatizacion" },
  { id: "nube", slug: "nube" },
  { id: "modelos", slug: "software" },
  { id: "analytics", slug: "analytics" },
  { id: "seguridad", slug: "ciberseguridad" },
  { id: "consultoria", slug: "consultoria" },
].map(({ id, slug }) => {
  const servicio = serviciosMap.get(slug);

  if (!servicio) {
    throw new Error(`Servicio con slug "${slug}" no encontrado.`);
  }

  return {
    id,
    title: servicio.titulo,
    desc: servicio.descripcion,
  };
});

export default function Page() {
  return (
    <main className="py-10">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E7EFFD] via-[#D0CFEF] to-[#D8E5FD] dark:bg-transparent rounded-2xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Nuestros Servicios</h1>
          <p className="mt-2 text-sm opacity-80">
            Soluciones que combinan ingeniería, datos y automatización con resultados medibles.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[10.5rem]">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>
    </main>
  );
}
