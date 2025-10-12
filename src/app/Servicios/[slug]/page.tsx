import { notFound } from "next/navigation";
import Image from "next/image";

import { services, type Service } from "@/lib/services";

const illustrationBySlug: Record<Service["slug"], string> = {
    software: "/services/software.png",
    automatizacion: "/services/automatizacion.png",
    analytics: "/services/analytics.png",
    bigdata: "/services/bigdata.png",
    ciberseguridad: "/services/seguridad.png",
    consultoria: "/services/consultoria.png",
    mantenimiento: "/services/mantenimiento.png",
    nube: "/services/nube.png",
    transformacion: "/services/transformacion.png",
};

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicioDetallePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const svc = services.find((s) => s.slug === slug);
    if (!svc) return notFound();

    return (
        <div className="pb-16 text-[color:var(--text-main)]">
            <div className="relative isolate overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(247,249,255,0.96)] via-[rgba(223,236,255,0.86)] to-[rgba(210,244,255,0.78)] dark:from-[rgba(12,19,45,0.92)] dark:via-[rgba(32,71,160,0.68)] dark:to-[rgba(52,176,255,0.4)]" />
                <div className="absolute inset-0 bg-[radial-gradient(1200px_420px_at_-8%_-10%,rgba(99,102,241,0.22),transparent_65%)] dark:bg-[radial-gradient(1200px_520px_at_-8%_-12%,rgba(91,117,255,0.32),transparent_70%)]" />
                <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:py-14">
                    <div className="order-last flex flex-1 flex-col sm:order-first">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.36em] text-[color:var(--text-muted)] shadow-[0_10px_28px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-white/20 dark:bg-white/10">
                            Servicio
                        </span>
                        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[color:var(--text-main)] sm:text-4xl md:text-[2.75rem]">
                            {svc.name}
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm text-[color:var(--text-muted)]">
                            {svc.longDescription}
                        </p>
                    </div>
                    <div className="relative mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border border-slate-200/70 bg-white/85 p-5 shadow-[0_18px_44px_rgba(15,23,42,0.14)] backdrop-blur-md dark:border-white/12 dark:bg-white/10 dark:shadow-[0_24px_60px_rgba(2,6,23,0.55)] sm:h-32 sm:w-32">
                        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(83,182,255,0.28),transparent_72%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(64,194,255,0.45),transparent_78%)]" />
                        <div className="relative h-full w-full">
                            <Image src={illustrationBySlug[svc.slug]} alt={svc.name} fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                <article className="space-y-6">
                    <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-white/12 dark:bg-[rgba(8,13,32,0.82)] dark:shadow-[0_26px_52px_rgba(2,6,23,0.48)] sm:p-8">
                        <h2 className="text-xl font-semibold text-[color:var(--text-main)]">¿Qué incluye?</h2>
                        <ul className="mt-5 space-y-3 text-sm text-[color:var(--text-soft)]">
                            {svc.includes.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/95 px-4 py-3 text-[color:var(--text-soft)] shadow-[0_12px_26px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.08]"
                                >
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent-sky)] dark:bg-[var(--accent-ice)]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-white/12 dark:bg-[rgba(8,13,32,0.82)] dark:shadow-[0_26px_52px_rgba(2,6,23,0.48)] sm:p-8">
                        <h2 className="text-xl font-semibold text-[color:var(--text-main)]">Entregables</h2>
                        <ul className="mt-5 space-y-3 text-sm text-[color:var(--text-soft)]">
                            {svc.deliverables.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/95 px-4 py-3 text-[color:var(--text-soft)] shadow-[0_12px_26px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.08]"
                                >
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--accent-teal)] dark:bg-[var(--accent-ice)]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </article>

                <aside className="md:sticky md:top-[calc(var(--header-h,96px)+24px)]">
                    <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-slate-200/70 bg-white/90 p-6 text-[color:var(--text-soft)] shadow-[0_20px_44px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-white/12 dark:bg-[rgba(8,13,32,0.82)] dark:shadow-[0_26px_52px_rgba(2,6,23,0.5)] sm:p-8">
                        <div>
                            <h3 className="text-lg font-semibold text-[color:var(--text-main)]">¿Listo para conversar?</h3>
                            <p className="mt-3 text-sm text-[color:var(--text-muted)]">
                                Agenda una llamada de 30 minutos con nuestro equipo para aterrizar el siguiente paso.
                            </p>
                        </div>
                        <a
                            href="/Contacto"
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent-ice)] to-[var(--accent-teal)] px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(64,194,255,0.28)] transition hover:-translate-y-[1px] hover:shadow-[0_22px_48px_rgba(64,194,255,0.38)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] dark:text-[#041520]"
                        >
                            Ir a Contacto
                        </a>
                    </div>
                </aside>
            </div>
        </div>
    );
}
