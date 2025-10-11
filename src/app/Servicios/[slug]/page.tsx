import { notFound } from "next/navigation";
import Image from "next/image";

const services = [
    { slug: 'software',        name: 'Software',        img: '/services/software.png' },
    { slug: 'automatizacion',  name: 'Automatización',  img: '/services/automatizacion.png' },
    { slug: 'analytics',       name: 'Analytics',       img: '/services/analytics.png' },
    { slug: 'bigdata',         name: 'Big Data',        img: '/services/bigdata.png' },
    { slug: 'ciberseguridad',  name: 'Ciberseguridad',  img: '/services/seguridad.png' },
    { slug: 'consultoria',     name: 'Consultoría',     img: '/services/consultoria.png' },
    { slug: 'mantenimiento',   name: 'Mantenimiento',   img: '/services/mantenimiento.png' },
    { slug: 'nube',            name: 'Nube',            img: '/services/nube.png' },
    { slug: 'transformacion',  name: 'Transformación',  img: '/services/transformacion.png' },
];

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export default function ServicioDetallePage({ params }: { params: { slug: string } }) {
    const svc = services.find((s) => s.slug === params.slug);
    if (!svc) return notFound();

    return (
        <div>
            {/* HERO compacto con PNG controlado */}
            <div className="relative h-[160px] sm:h-[180px] md:h-[200px] w-full overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                        <Image src={svc.img} alt={svc.name} fill className="object-contain" />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(14,24,60,0.85)] via-[rgba(38,99,255,0.45)] to-[rgba(61,196,255,0.32)]" />
                <div className="absolute inset-0 mx-auto flex w-full max-w-6xl items-end px-4 pb-5">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-teal-300">Servicio</p>
                        <h1 className="mt-1 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                            {svc.name}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Contenido */}
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-10 text-white md:grid-cols-3">
                <article className="md:col-span-2">
                    <p className="text-base leading-relaxed text-white/[0.85]">
                        Creamos soluciones a medida apoyadas en buenas prácticas y automatización para que tu equipo gane tiempo.
                    </p>
                    <section className="mt-8">
                        <h2 className="text-xl font-semibold text-white">¿Qué haremos contigo?</h2>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/[0.85]">
                            <li>Levantamiento rápido y priorización de oportunidades.</li>
                            <li>Plan de implementación por sprints con entregas quincenales.</li>
                            <li>Métricas y tableros desde el primer sprint.</li>
                        </ul>
                    </section>
                </article>

                <aside className="md:sticky md:top-[calc(var(--header-h,96px)+24px)]">
                    <div className="rounded-3xl border border-white/[0.14] bg-[rgba(8,13,32,0.76)] p-6 shadow-[0_26px_52px_rgba(2,6,23,0.55)]">
                        <h3 className="text-lg font-semibold text-white">¿Listo para conversar?</h3>
                        <p className="mt-2 text-sm text-white/[0.85]">
                            Agenda una llamada de 30 minutos con nuestro equipo.
                        </p>
                        <a
                            href="/Contacto"
                            className="mt-4 inline-block rounded-full bg-gradient-to-r from-[var(--accent-ice)] to-[var(--accent-teal)] px-5 py-2 text-[#041520] font-semibold shadow-[0_18px_40px_rgba(64,194,255,0.35)] transition hover:-translate-y-[1px] hover:shadow-[0_22px_48px_rgba(64,194,255,0.45)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
                        >
                            Ir a Contacto
                        </a>
                    </div>
                </aside>
            </div>
        </div>
    );
}
