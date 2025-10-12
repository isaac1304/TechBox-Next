import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

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

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

                    <div className="mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {services.map((svc) => (
                            <Link
                                key={svc.slug}
                                href={`/Servicios/${svc.slug}`}
                                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-left shadow-[0_12px_40px_-24px_rgba(88,28,135,0.55)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b779ff]/45 hover:shadow-[0_25px_80px_-30px_rgba(123,63,184,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b779ff]"
                            >
                                <div className="relative z-10">
                                    <span className="mb-6 inline-flex h-3 w-3 rounded-full bg-[#a855f7]" aria-hidden />
                                    <div className="relative min-h-[68px]">
                                        <h2 className="absolute inset-0 text-xl font-semibold text-white transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
                                            {svc.name}
                                        </h2>
                                        <p className="absolute inset-0 mt-0 max-w-xs text-sm leading-relaxed text-slate-200 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                            {svc.longDescription}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-8 flex items-center justify-between gap-3">
                                    <div className="flex flex-wrap gap-2 text-xs text-slate-300/80">
                                        {svc.includes.slice(0, 3).map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-white/10 px-3 py-1 tracking-wide text-slate-200/80 transition-colors duration-300 group-hover:border-[#d0a8ff]/50 group-hover:text-[#f4eaff]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <span
                                        aria-hidden
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors duration-300 group-hover:border-[#cda0ff]/60 group-hover:text-[#f7ebff]"
                                    >
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </div>
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#542866]/0 via-[#6d2f8c]/35 to-[#3e236b]/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[#a855f7]/25 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
