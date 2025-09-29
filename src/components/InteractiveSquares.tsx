"use client";

import Link from "next/link";
import { services } from "@/lib/services";

type Tone = "navy" | "teal" | "aqua";
const toneClass = (t: Tone) =>
    t === "navy" ? "bg-brand-navy text-white"
        : t === "teal" ? "bg-brand-teal text-white"
            : "bg-brand-aqua text-brand-navy";

/** Layout con spans explícitos (sin clases dinámicas purgadas) */
const layout = [
    { slug: "consultoria",    base: ["col-span-2","row-span-2"], sm: ["sm:col-span-2","sm:row-span-2"], lg: ["lg:col-span-2","lg:row-span-2"], tone: "teal"  as Tone },
    { slug: "cloud",          base: ["col-span-2","row-span-2"], sm: ["sm:col-span-3","sm:row-span-2"], lg: ["lg:col-span-3","lg:row-span-2"], tone: "navy"  as Tone },
    { slug: "seguridad",      base: ["col-span-2","row-span-2"], sm: ["sm:col-span-2","sm:row-span-2"], lg: ["lg:col-span-2","lg:row-span-2"], tone: "teal"  as Tone },
    { slug: "transformacion", base: ["col-span-2","row-span-2"], sm: ["sm:col-span-2","sm:row-span-2"], lg: ["lg:col-span-2","lg:row-span-2"], tone: "navy"  as Tone },
    { slug: "software",       base: ["col-span-2","row-span-2"], sm: ["sm:col-span-2","sm:row-span-2"], lg: ["lg:col-span-2","lg:row-span-2"], tone: "aqua"  as Tone },
    { slug: "automatizacion", base: ["col-span-2","row-span-2"], sm: ["sm:col-span-3","sm:row-span-2"], lg: ["lg:col-span-3","lg:row-span-2"], tone: "navy"  as Tone },
    { slug: "bigdata",        base: ["col-span-2","row-span-2"], sm: ["sm:col-span-2","sm:row-span-2"], lg: ["lg:col-span-2","lg:row-span-2"], tone: "teal"  as Tone },
    { slug: "analytics",      base: ["col-span-2","row-span-2"], sm: ["sm:col-span-2","sm:row-span-2"], lg: ["lg:col-span-2","lg:row-span-2"], tone: "aqua"  as Tone },
];

export default function InteractiveSquares() {
    return (
        <div
            className="grid auto-rows-[110px] grid-cols-4 gap-5 sm:auto-rows-[130px] sm:grid-cols-6 lg:auto-rows-[160px]"
            aria-label="Servicios"
            role="list"
        >
            {layout.map((item) => {
                const s = services.find((x) => x.slug === item.slug);
                if (!s) return null;

                return (
                    <Link
                        key={item.slug}
                        href={`/Servicios/${item.slug}`}
                        className={["group relative", ...item.base, ...item.sm, ...item.lg].join(" ")}
                        role="listitem"
                    >
                        <div className="tile h-full w-full">
                            <div
                                className={
                                    `tile-inner rounded-3xl ${toneClass(item.tone)} 
                   shadow-[0_16px_48px_-18px_rgba(2,6,23,.28)] 
                   transition-shadow duration-500 ease-[cubic-bezier(.2,.8,.2,1)] 
                   group-hover:shadow-[0_28px_72px_-24px_rgba(2,6,23,.42)]`
                                }
                            >
                                {/* Frente */}
                                <div className="tile-front">
                                    <div className="flex h-full w-full items-center justify-center p-6 text-center">
                                        <div className="text-lg font-semibold md:text-xl">{s.name}</div>
                                    </div>
                                </div>
                                {/* Dorso */}
                                <div className="tile-back bg-gradient-to-br from-black/10 to-black/25">
                                    <div className="flex h-full w-full items-center justify-center p-6">
                                        <div className="text-center">
                                            <div className="text-sm opacity-95">Ver servicio</div>
                                            <div className="mt-1 text-xs opacity-80">Detalles y contacto</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
