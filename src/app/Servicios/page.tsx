import Link from "next/link";

import { services } from "@/lib/services";

export const dynamic = "force-static";

export default function ServiciosPage() {
    const primaryServices = services.slice(0, 8);
    const additionalServices = services.slice(8);

    return (
        <main className="relative min-h-[calc(100vh-var(--header-h))] overflow-hidden bg-slate-950 text-white">
            <section className="relative overflow-hidden py-20 sm:py-24">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#334155_1px,transparent_1px)] [background-size:18px_18px] opacity-90"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950"
                />

                <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white md:text-5xl">
                            <span className="text-blue-500">Nuestros</span>
                            <br />
                            Servicios
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
                            Soluciones que combinan ingeniería, datos y automatización para impulsar tus iniciativas
                            digitales con resultados medibles y sostenibles.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        {primaryServices.map((svc, idx) => (
                            <Link
                                key={svc.slug}
                                href={`/Servicios/${svc.slug}`}
                                className="group relative isolate flex aspect-[4/3] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.8)] transition-transform duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_35px_65px_-35px_rgba(14,116,144,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                            >
                                <div className="relative z-10 flex flex-1 flex-col justify-between p-8">
                                    <div className="transition-opacity duration-300 group-hover:opacity-0">
                                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400" aria-hidden>
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                        <h2 className="mt-3 text-2xl font-semibold text-white">{svc.name}</h2>
                                        <p className="mt-4 text-sm leading-relaxed text-slate-300">
                                            <span className="sr-only">{svc.longDescription}</span>
                                            {svc.includes.join(" · ")}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300/80 transition-all duration-300 group-hover:translate-y-4 group-hover:opacity-0">
                                        {svc.deliverables.map((item) => (
                                            <span key={item} className="rounded-full bg-white/5 px-3 py-1 tracking-wide text-slate-200/80">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                                />
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 bg-blue-950/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-8 text-center">
                                    <p className="text-sm leading-relaxed text-transparent opacity-0 transition-all duration-300 group-hover:text-white group-hover:opacity-100">
                                        {svc.longDescription}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {additionalServices.length > 0 && (
                        <div className="mt-20 grid gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-10 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.95)] lg:grid-cols-[3fr,2fr] lg:items-center">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">Transforma tu operación</p>
                                <h3 className="mt-4 text-3xl font-semibold text-white">Consultoría integral para una transformación digital completa</h3>
                                <p className="mt-4 text-base leading-relaxed text-slate-300">
                                    Acompañamos el cambio de punta a punta: desde la estrategia hasta la adopción. Creamos un
                                    plan accionable que prioriza iniciativas y habilita a tu equipo para sostener la
                                    evolución.
                                </p>
                            </div>

                            {additionalServices.map((svc) => (
                                <Link
                                    key={svc.slug}
                                    href={`/Servicios/${svc.slug}`}
                                    className="group relative isolate flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-[0_25px_60px_-40px_rgba(15,23,42,1)] transition-transform duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_35px_70px_-45px_rgba(14,116,144,0.95)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                                >
                                    <div className="relative z-10 flex flex-1 flex-col justify-between">
                                        <div>
                                            <h4 className="text-xl font-semibold text-white">{svc.name}</h4>
                                            <p className="mt-3 text-sm leading-relaxed text-slate-300">{svc.longDescription}</p>
                                        </div>
                                        <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300/80">
                                            {svc.includes.map((item) => (
                                                <span key={item} className="rounded-full bg-white/5 px-3 py-1 tracking-wide text-slate-200/80">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-cyan-500/40 to-sky-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
