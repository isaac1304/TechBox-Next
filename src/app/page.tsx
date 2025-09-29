// app/page.tsx
import Link from 'next/link';
import HeroPixels from '@/components/HeroPixels';
import WhyTechbox from '@/components/WhyTechbox';

export default function HomePage() {
    return (
        <main>
            {/* HERO */}
            <section className="relative mx-auto w-full max-w-6xl px-4 pt-2 pb-10">
                <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_300px]">
                    {/* Texto */}
                    <div>
            <span className="inline-flex items-center rounded-full border border-[#2EC4B6] bg-[#2EC4B6]/15 px-3 py-1 text-[12px] font-semibold uppercase tracking-[.20em] text-[#106d66] shadow-sm">
              SOLUCIONES PARA PYMES EN CRECIMIENTO
            </span>

                        <h1 className="mt-3 text-4xl font-extrabold leading-tight text-[#0b1b2b] md:text-6xl">
                            Menos planillas, más ventas: software, cloud y automatización
                        </h1>

                        <p className="mt-4 max-w-3xl text-[#334b68]">
                            Quitamos tareas repetitivas, conectamos tus sistemas y te damos visibilidad en un mismo tablero.
                            Pasas de “apagar incendios” a operar con datos y procesos claros.
                        </p>

                        <div className="mt-7">
                            <Link
                                href="/Servicios"
                                className="inline-flex items-center gap-2 rounded-full bg-[#2EC4B6] px-5 py-3 font-extrabold text-[#0b1b2b] shadow-[0_12px_24px_rgba(46,196,182,.28)] transition hover:-translate-y-[1px] hover:shadow-[0_16px_28px_rgba(46,196,182,.34)]"
                            >
                                Ver servicios
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Animación de píxeles (derecha, siempre visible) */}
                    <div className="flex w-full justify-end">
                        <HeroPixels />
                    </div>
                </div>
            </section>

            {/* Cajotas estilo Notion */}
            <div className="pb-16">
                <WhyTechbox />
            </div>
        </main>
    );
}
