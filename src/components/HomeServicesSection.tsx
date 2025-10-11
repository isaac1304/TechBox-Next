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
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--tech-navy-600)]/35 to-[var(--tech-teal)]/35 p-0.5 shadow-[0_16px_48px_-18px_rgba(2,6,23,.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_72px_-24px_rgba(2,6,23,.42)]"
                    >
                        <div className="relative flex h-36 items-center justify-between overflow-hidden rounded-[1.6rem] border border-white/12 bg-[radial-gradient(circle_at_top,rgba(103,225,255,0.18),rgba(7,14,36,0.9))] px-6 py-6 text-white shadow-[0_20px_48px_rgba(4,10,28,0.5)] transition duration-300 before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_at_top_right,rgba(103,225,255,0.35),transparent_55%)] before:opacity-70 before:transition before:duration-300 before:content-[''] group-hover:shadow-[0_26px_62px_rgba(4,10,28,0.56)] group-hover:before:opacity-100">
                            {/* Texto a la izquierda */}
                            <div className="pr-16">
                                <h3 className="text-lg font-semibold text-white md:text-xl">{s!.name}</h3>
                                <p className="mt-1 line-clamp-2 text-sm text-white/75">
                                    {s!.short}
                                </p>
                                <span className="mt-3 inline-block text-sm font-medium text-[var(--accent-ice)] transition group-hover:text-white">
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
