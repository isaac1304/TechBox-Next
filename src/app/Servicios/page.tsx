import Link from "next/link";

import { services } from "@/lib/services";

export const dynamic = "force-static";

export default function ServiciosPage() {
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

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((svc) => (
                            <Link
                                key={svc.slug}
                                href={`/Servicios/${svc.slug}`}
                                className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-left shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                            >
                                <span className="mb-4 inline-flex h-3 w-3 rounded-full bg-blue-500" aria-hidden />
                                <h2 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-200">
                                    {svc.name}
                                </h2>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                    {svc.longDescription}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300/80">
                                    {svc.includes.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full bg-white/5 px-3 py-1 tracking-wide text-slate-200/80"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-200 group-hover:opacity-70"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
