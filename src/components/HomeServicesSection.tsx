"use client";

import Link from "next/link";
import { services } from "@/lib/services";

/**
 * Cards modulares estilo PDF:
 * - Texto del servicio (izquierda)
 * - Mosaico de “pixeles” navy/teal (derecha)
 * - Borde degradado y sombra moderna
 */
export default function HomeServicesSection() {
    // orden sugerido
    const featured = [
        "consultoria",
        "nube",
        "seguridad",
        "software",
        "transformacion",
        "automatizacion",
        "bigdata",
        "analytics",
    ];
    const items = featured
        .map((slug) => services.find((s) => s.slug === slug))
        .filter(Boolean)!;

    return (
        <section className="mx-auto w-full max-w-6xl px-4 pb-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((s, i) => (
                    <Link
                        key={s!.slug}
                        href={`/Servicios/${s!.slug}`}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--tech-navy-600)]/30 to-[var(--tech-teal)]/30 p-0.5 shadow-[0_16px_48px_-18px_rgba(2,6,23,.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_72px_-24px_rgba(2,6,23,.42)]"
                    >
                        <div className="relative flex h-36 items-center justify-between rounded-2xl bg-white/90 px-6 backdrop-blur dark:bg-slate-900/85">
                            {/* Texto a la izquierda */}
                            <div className="pr-16">
                                <h3 className="text-lg font-semibold md:text-xl">{s!.name}</h3>
                                <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                                    {s!.short}
                                </p>
                                <span className="mt-3 inline-block text-sm font-medium text-teal-700 group-hover:underline dark:text-teal-400">
                  Ver más →
                </span>
                            </div>

                            {/* Mosaico de pixeles a la derecha */}
                            <div
                                aria-hidden
                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                            >
                                <div className="pixel-grid">
                                    {Array.from({ length: 12 }).map((_, idx) => (
                                        <span
                                            key={idx}
                                            className={`pixel ${
                                                (i + idx) % 2 === 0 ? "pixel-teal" : "pixel-navy"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
