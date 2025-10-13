import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/services";

export const dynamic = "force-static";

export default function ServiciosPage() {
    return (
        <main className="relative min-h-[calc(100vh-var(--header-h))] overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
            <section className="relative overflow-hidden py-20 sm:py-24">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#c7d2fe_1px,transparent_1px)] opacity-80 [background-size:18px_18px] dark:bg-[radial-gradient(circle,#334155_1px,transparent_1px)] dark:opacity-90"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/95 via-white/88 to-slate-100/95 dark:from-slate-950/70 dark:via-slate-950/40 dark:to-slate-950"
                />

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-slate-900 transition-colors duration-300 dark:text-white md:text-5xl">
                            <span className="text-blue-500">Nuestros</span>
                            <br />
                            Servicios
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 transition-colors duration-300 dark:text-slate-300 md:text-lg">
                            Soluciones que combinan ingeniería, datos y automatización para impulsar tus iniciativas
                            digitales con resultados medibles y sostenibles.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {services.map((svc) => (
                            <Link
                                key={svc.slug}
                                href={`/Servicios/${svc.slug}`}
                                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-6 text-left shadow-[0_18px_48px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#8b5cf6]/60 hover:shadow-[0_32px_80px_rgba(76,29,149,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5cf6] dark:border-slate-800 dark:bg-slate-950/78 dark:shadow-[0_18px_48px_rgba(17,24,39,0.45)] dark:hover:border-[#b779ff]/45 dark:hover:shadow-[0_30px_88px_rgba(123,63,184,0.45)]"
                            >
                                <div className="relative z-10">
                                    <span className="mb-6 inline-flex h-3 w-3 rounded-full bg-gradient-to-br from-[#7dd3fc] via-[#60a5fa] to-[#818cf8] shadow-[0_0_12px_rgba(96,165,250,0.65)]" aria-hidden />
                                    <div className="relative min-h-[68px]">
                                        <h2 className="absolute inset-0 text-xl font-semibold text-slate-900 transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0 dark:text-white">
                                            {svc.name}
                                        </h2>
                                        <p className="absolute inset-0 mt-0 max-w-xs text-sm leading-relaxed text-slate-600 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:text-slate-200">
                                            {svc.longDescription}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-8 flex items-center justify-between gap-3">
                                    <div className="flex flex-wrap gap-2 text-xs text-slate-500/90 transition-colors duration-300 dark:text-slate-300/80">
                                        {svc.includes.slice(0, 3).map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-slate-200/80 bg-white/60 px-3 py-1 tracking-wide text-slate-600 transition-colors duration-300 group-hover:border-[#9a7bff]/60 group-hover:bg-white/80 group-hover:text-[#3b1b73] dark:border-white/10 dark:bg-white/5 dark:text-slate-200/80 dark:group-hover:border-[#d0a8ff]/55 dark:group-hover:text-[#f4eaff]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <span
                                        aria-hidden
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 text-slate-500 transition-colors duration-300 group-hover:border-transparent group-hover:bg-[#4338ca] group-hover:text-white dark:border-white/10 dark:text-slate-300 dark:group-hover:border-[#cda0ff]/60 dark:group-hover:bg-transparent dark:group-hover:text-[#f7ebff]"
                                    >
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </div>
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                >
                                    <div className="absolute inset-[8%] rounded-[1.25rem] bg-[linear-gradient(135deg,#f8fafc_0%,#e2e8f0_40%,#111827_100%)] shadow-[inset_0_0_45px_rgba(30,41,59,0.4)] transition-transform duration-300 group-hover:scale-[1.03] dark:bg-[linear-gradient(135deg,#38bdf8_0%,#6366f1_45%,#22c55e_100%)] dark:shadow-[inset_0_0_55px_rgba(59,7,141,0.45)]" />
                                </div>
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -left-20 -top-24 h-48 w-48 rounded-full bg-[#60a5fa]/30 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-[#a855f7]/25"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
