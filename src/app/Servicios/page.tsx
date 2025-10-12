import Link from "next/link";
import { services } from "@/lib/services";

export const dynamic = "force-static";

export default function ServiciosPage() {
    return (
        <main className="relative overflow-visible bg-slate-950 text-slate-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,116,144,0.2),_transparent_50%)]" />

            <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-20 md:px-10 lg:pt-28">
                <header className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Servicios</p>
                    <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                        Desbloquea el poder de la tecnología
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-slate-300">
                        Diseñamos soluciones integrales que conectan estrategia, software e infraestructura para acelerar tu negocio. Explora cómo podemos acompañarte desde la consultoría hasta la operación continua.
                    </p>
                </header>

                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3 xl:gap-10">
                    {services.map((service, index) => (
                        <Link
                            key={service.slug}
                            href={`/Servicios/${service.slug}`}
                            className="group block h-full focus-visible:outline-none"
                        >
                            <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur transition duration-300 ease-out [transform-origin:center] [will-change:transform] group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:border-cyan-400/60 group-hover:shadow-[0_25px_70px_-35px_rgba(56,189,248,0.75)] group-focus-visible:-translate-y-2 group-focus-visible:scale-[1.02] group-focus-visible:border-cyan-400/60 group-focus-visible:shadow-[0_25px_70px_-35px_rgba(56,189,248,0.75)] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-cyan-300">
                                <span
                                    className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-blue-900/40 text-2xl font-semibold text-cyan-200 ring-1 ring-inset ring-white/10 transition group-hover:scale-110 group-hover:from-cyan-400/60 group-hover:text-white group-focus-visible:scale-110 group-focus-visible:from-cyan-400/60 group-focus-visible:text-white"
                                    aria-hidden="true"
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h2 className="text-2xl font-semibold text-white transition group-hover:text-cyan-100 group-focus-visible:text-cyan-100">
                                    {service.name}
                                </h2>
                                <p className="mt-4 text-base leading-relaxed text-slate-300">
                                    {service.longDescription}
                                </p>
                                <ul className="mt-6 space-y-2 text-sm text-slate-200">
                                    {service.includes.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span
                                                aria-hidden="true"
                                                className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-300 transition group-hover:bg-cyan-200 group-focus-visible:bg-cyan-200"
                                            />
                                            <span className="leading-6 text-slate-300 transition group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:translate-x-1 group-hover:text-cyan-200 group-focus-visible:translate-x-1 group-focus-visible:text-cyan-200">
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
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
