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
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#cbd5f5_1px,transparent_1px)] [background-size:18px_18px] opacity-50 dark:opacity-90"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-950/70 dark:via-slate-950/40 dark:to-slate-950"
                />

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
                            <span className="text-blue-600 dark:text-blue-500">Nuestros</span>
                            <br />
                            Servicios
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300 md:text-lg">
                            Soluciones que combinan ingeniería, datos y automatización para impulsar tus iniciativas
                            digitales con resultados medibles y sostenibles.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {services.map((svc) => (
                            <Link
                                key={svc.slug}
                                href={`/Servicios/${svc.slug}`}
                                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-left shadow-[0_12px_40px_-30px_rgba(30,64,175,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-[#8262ff]/70 hover:shadow-[0_30px_90px_-35px_rgba(71,97,255,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8262ff] dark:border-slate-800 dark:bg-slate-950/80 dark:hover:border-[#b779ff]/55 dark:hover:shadow-[0_25px_80px_-30px_rgba(123,63,184,0.65)]"
                            >
                                <div className="relative z-10">
                                    <span className="mb-6 inline-flex h-3 w-3 rounded-full bg-[#7c5bff]" aria-hidden />
                                    <div className="relative min-h-[68px]">
                                        <h2 className="absolute inset-0 text-xl font-semibold text-slate-900 transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0 dark:text-white">
                                            {svc.name}
                                        </h2>
                                        <p className="absolute inset-0 mt-0 max-w-xs text-sm leading-relaxed text-slate-700 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:text-slate-200">
                                            {svc.longDescription}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-8 flex items-center justify-between gap-3">
                                    <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300/80">
                                        {svc.includes.slice(0, 3).map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-slate-300/70 px-3 py-1 tracking-wide text-slate-600 transition-colors duration-300 group-hover:border-transparent group-hover:bg-[#5f6bff] group-hover:text-white dark:border-white/10 dark:text-slate-200/80 dark:group-hover:border-[#d0a8ff]/60 dark:group-hover:bg-transparent dark:group-hover:text-[#f4eaff]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <span
                                        aria-hidden
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 text-slate-500 transition-colors duration-300 group-hover:border-transparent group-hover:bg-[#5f6bff] group-hover:text-white dark:border-white/10 dark:text-slate-300 dark:group-hover:border-[#cda0ff]/60 dark:group-hover:bg-transparent dark:group-hover:text-[#f7ebff]"
                                    >
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </div>
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-[opacity,transform] duration-300 group-hover:scale-105 group-hover:opacity-100"
                                >
                                    <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_35%_30%,rgba(123,97,255,0.3)_0%,rgba(93,70,220,0.55)_32%,rgba(32,24,120,0.78)_68%,rgba(15,12,55,0.85)_100%)] opacity-90 mix-blend-normal" />
                                    <div className="absolute inset-[12%] rounded-[inherit] bg-[radial-gradient(circle_at_65%_40%,rgba(94,245,255,0.4)_0%,rgba(80,140,255,0.6)_35%,rgba(53,37,135,0.75)_65%,transparent_92%)]" />
                                </div>
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[#7c5bff]/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
