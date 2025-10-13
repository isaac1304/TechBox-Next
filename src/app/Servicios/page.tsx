import ServiceCard from "@/components/ServiceCard";
import serviciosData from "@/data/servicios.json";

type Servicio = {
  slug: string;
  titulo: string;
  descripcion: string;
};

const services = (serviciosData as Servicio[]).map(({ slug, titulo, descripcion }) => ({
  id: slug,
  title: titulo,
  desc: descripcion,
  href: `/Servicios/${slug}`,
}));

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
