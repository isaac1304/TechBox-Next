import Link from "next/link";
import { services } from "@/lib/services";

export const dynamic = "force-static";

export default function ServiciosPage() {
    return (
        <main className="relative overflow-hidden bg-slate-950 text-slate-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,116,144,0.2),_transparent_50%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(148,163,184,0.3)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_top_left,rgba(0,0,0,0.6),transparent_65%)] [mask-repeat:no-repeat]" />

            <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-20 md:px-8 lg:pt-28">
                <header className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Servicios</p>
                    <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                        Desbloquea el poder de la tecnología
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-slate-300">
                        Diseñamos soluciones integrales que conectan estrategia, software e infraestructura para acelerar tu negocio. Explora cómo podemos acompañarte desde la consultoría hasta la operación continua.
                    </p>
                </header>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => (
                        <Link
                            key={service.slug}
                            href={`/Servicios/${service.slug}`}
                            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-400/60 hover:shadow-[0_25px_70px_-35px_rgba(56,189,248,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                        >
                            <span
                                className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-blue-900/40 text-2xl font-semibold text-cyan-200 ring-1 ring-inset ring-white/10 transition group-hover:scale-110 group-hover:from-cyan-400/60 group-hover:text-white"
                                aria-hidden="true"
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h2 className="text-2xl font-semibold text-white transition group-hover:text-cyan-100">
                                {service.name}
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-300">
                                {service.longDescription}
                            </p>
                            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:translate-x-1 group-hover:text-cyan-200">
                                Ver servicio
                                <svg
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 8h9m0 0-4-4m4 4-4 4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
