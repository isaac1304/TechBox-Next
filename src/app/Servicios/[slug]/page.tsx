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

export default async function ServicioDetallePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const svc = services.find((s) => s.slug === slug);
    if (!svc) return notFound();

    return (
        <div className="pb-16">
            {/* HERO compacto con PNG controlado */}
            <div className="relative w-full overflow-hidden bg-gradient-to-tr from-[rgba(234,242,255,0.9)] via-[rgba(210,230,255,0.72)] to-[rgba(203,244,255,0.62)] dark:from-[rgba(14,24,60,0.85)] dark:via-[rgba(38,99,255,0.45)] dark:to-[rgba(61,196,255,0.32)]">
                <div className="relative mx-auto flex h-[160px] w-full max-w-6xl items-end gap-5 px-4 pb-6 sm:h-[180px] md:h-[200px] md:gap-6">
                    <div className="mr-3 flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white/65 p-4 shadow-[0_18px_38px_rgba(15,23,42,0.16)] backdrop-blur-md dark:bg-white/10 dark:shadow-[0_22px_48px_rgba(2,6,23,0.45)] sm:hidden">
                        <div className="relative h-full w-full">
                            <Image src={svc.img} alt={svc.name} fill className="object-contain" />
                        </div>
                    </div>
                    <div className="relative -mb-4 hidden h-32 w-32 shrink-0 sm:block">
                        <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white/65 p-5 shadow-[0_18px_38px_rgba(15,23,42,0.16)] backdrop-blur-md dark:bg-white/10 dark:shadow-[0_22px_48px_rgba(2,6,23,0.45)]">
                            <div className="relative h-full w-full">
                                <Image src={svc.img} alt={svc.name} fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-600 dark:text-teal-200/90">Servicio</p>
                        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            {svc.name}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Contenido */}
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 pt-10 text-slate-700 dark:text-white md:grid-cols-3">
                <article className="md:col-span-2">
                    <p className="text-base leading-relaxed text-slate-600 dark:text-white/85">
                        Creamos soluciones a medida apoyadas en buenas prácticas y automatización para que tu equipo gane tiempo.
                    </p>
                    <section className="mt-8">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">¿Qué haremos contigo?</h2>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 marker:text-slate-400 dark:text-white/82 dark:marker:text-white/60">
                            <li>Levantamiento rápido y priorización de oportunidades.</li>
                            <li>Plan de implementación por sprints con entregas quincenales.</li>
                            <li>Métricas y tableros desde el primer sprint.</li>
                        </ul>
                    </section>
                </article>

                <aside className="md:sticky md:top-[calc(var(--header-h,96px)+24px)]">
                    <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 text-slate-700 shadow-[0_20px_44px_rgba(15,23,42,0.12)] backdrop-blur-sm dark:border-white/14 dark:bg-[rgba(8,13,32,0.76)] dark:text-white dark:shadow-[0_26px_52px_rgba(2,6,23,0.55)]">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">¿Listo para conversar?</h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-white/85">
                            Agenda una llamada de 30 minutos con nuestro equipo.
                        </p>
                        <a
                            href="/Contacto"
                            className="mt-4 inline-block rounded-full bg-gradient-to-r from-[var(--accent-ice)] to-[var(--accent-teal)] px-5 py-2 text-slate-900 font-semibold shadow-[0_18px_40px_rgba(64,194,255,0.32)] transition hover:-translate-y-[1px] hover:shadow-[0_22px_48px_rgba(64,194,255,0.45)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] dark:text-[#041520]"
                        >
                            Ir a Contacto
                        </a>
                    </div>
                </aside>
            </div>
        </div>
    );
}
