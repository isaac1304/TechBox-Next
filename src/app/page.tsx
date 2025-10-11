import Link from 'next/link';
import WhyTechbox from '@/components/WhyTechbox';
import HeroServiceGrid from '@/components/HeroServiceGrid';

const solutionCards = [
    {
        title: 'Soluciones llave en mano',
        desc: 'Implementamos soluciones escalables listas para operar, con soporte continuo y monitoreo.',
    },
    {
        title: 'Transformación Digital',
        desc: 'Llevamos tu negocio al siguiente nivel conectando procesos, personas y tecnología en un roadmap claro.',
    },
    {
        title: 'Expertos en Cloud',
        desc: 'Diseñamos plataformas sobre Google Cloud y AWS para escalar sin fricciones y con costos controlados.',
    },
    {
        title: 'Ciberseguridad integrada',
        desc: 'Tu información y la de tus clientes protegida desde el primer sprint con protocolos certificados.',
    },
];

export default function HomePage() {
    return (
        <main className="relative isolate overflow-hidden">
            <div className="pointer-events-none absolute -left-[25%] top-[-10%] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(83,182,255,0.3),transparent_60%)] blur-3xl" />
            <div className="pointer-events-none absolute -right-[20%] top-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(125,123,255,0.32),transparent_60%)] blur-3xl" />

            {/* HERO */}
            <section className="relative mx-auto w-full max-w-6xl px-4 pt-6 pb-24 lg:px-6">
                <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_1fr]">
                    <div className="relative z-10">
                        <span className="inline-flex items-center rounded-full border border-white/[0.15] bg-white/[0.15] px-4 py-1 text-[12px] font-semibold uppercase tracking-[0.24em] text-white/[0.85]">
                            Soluciones para PYMES en crecimiento
                        </span>
                        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-[3.25rem] md:leading-[1.05]">
                            Soluciones digitales que llevan tu PYME al{' '}
                            <span className="text-transparent bg-gradient-to-r from-[#67e1ff] via-[#8fd3ff] to-[#9e8aff] bg-clip-text">
                                siguiente nivel
                            </span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/[0.85]">
                            Automatizamos tus procesos, conectamos tus sistemas y construimos tableros accionables. Dejas de apagar incendios y empiezas a decidir con datos.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Link
                                href="/Contacto"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-ice)] via-[#6ff3ff] to-[var(--accent-teal)] px-6 py-3 text-base font-semibold text-[#041520] shadow-[0_20px_48px_rgba(64,194,255,0.35)] transition hover:translate-y-[-2px] hover:shadow-[0_24px_56px_rgba(64,194,255,0.45)]"
                            >
                                Agendar una cita
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link
                                href="/Servicios"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.25] px-6 py-3 text-base font-semibold text-white/90 transition hover:border-white/[0.45] hover:text-white"
                            >
                                Ver servicios
                            </Link>
                        </div>

                        <div className="mt-12 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/20 bg-[linear-gradient(160deg,rgba(8,14,36,0.92),rgba(9,18,48,0.62))] p-5 shadow-[0_18px_42px_rgba(4,10,28,0.42)] transition-transform duration-200 hover:-translate-y-1 hover:border-white/35">
                                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/80">+300h</p>
                                <p className="mt-2 text-white/90">Horas automatizadas al año en operaciones para nuestros clientes.</p>
                            </div>
                            <div className="rounded-2xl border border-white/20 bg-[linear-gradient(160deg,rgba(8,14,36,0.92),rgba(9,18,48,0.62))] p-5 shadow-[0_18px_42px_rgba(4,10,28,0.42)] transition-transform duration-200 hover:-translate-y-1 hover:border-white/35">
                                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/80">2-4 sem</p>
                                <p className="mt-2 text-white/90">Tiempo promedio para entregar el primer módulo con resultados visibles.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/20 via-white/5 to-transparent blur-3xl" aria-hidden />
                        <div className="relative flex w-full max-w-[500px] flex-col gap-5">
                            <HeroServiceGrid />
                            <div className="overflow-hidden rounded-3xl border border-white/12 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_70%)] p-6 shadow-[0_30px_60px_rgba(5,10,28,0.45)]">
                                <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-[rgba(12,19,48,0.65)] to-[rgba(12,27,64,0.92)] p-6">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/[0.75]">Visión</p>
                                    <p className="mt-4 text-lg font-medium leading-relaxed text-white/80">
                                        Tecnología, diseño y datos alineados para hacer crecer tu negocio sin aumentar la planilla.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Narrativa */}
            <section className="relative border-y border-white/[0.12] bg-[rgba(7,11,30,0.72)] py-20">
                <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center">
                    <div>
                        <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                            Descubre cómo podemos <span className="text-[var(--accent-ice)]">ayudar</span> a tu negocio
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-white/[0.85]">
                            Impulsamos el crecimiento, la eficiencia y la competitividad de tu empresa a través de soluciones tecnológicas innovadoras. Con automatizaciones, tableros y equipos enfocados, transformamos la forma en que las personas interactúan con tu negocio.
                        </p>
                        <Link
                            href="/Blog"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-ice)] transition hover:text-white"
                        >
                            Mira más
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                    <div className="rounded-3xl border border-white/12 bg-gradient-to-br from-[rgba(12,19,48,0.55)] to-[rgba(8,13,34,0.92)] p-8 shadow-[0_32px_60px_rgba(2,6,23,0.5)]">
                        <h3 className="text-xl font-semibold text-white">Lo que obtienes</h3>
                        <ul className="mt-6 space-y-4 text-white/[0.85]">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent-ice)]" />
                                <span>Equipos senior que hablan negocio y tecnología, sin intermediarios.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent-ice)]" />
                                <span>Integraciones, automatizaciones y analítica construidas para escalar.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent-ice)]" />
                                <span>KPIs y tableros en vivo para tomar decisiones con confianza.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Servicios destacados */}
            <section className="mx-auto w-full max-w-6xl px-4 py-24 lg:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold leading-tight text-white md:text-[2.7rem]">
                        Desbloquea el poder de la <span className="text-transparent bg-gradient-to-r from-[#67e1ff] via-[#53b6ff] to-[#9e8aff] bg-clip-text">tecnología</span>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-white/[0.82]">
                        Diseñamos y ejecutamos soluciones adaptadas a cada etapa de tu empresa, manteniendo foco en valor y velocidad.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {solutionCards.map((card) => (
                        <article
                            key={card.title}
                            className="group relative overflow-hidden rounded-3xl border border-white/[0.15] bg-[rgba(12,19,48,0.68)] p-7 shadow-[0_28px_54px_rgba(2,6,23,0.52)] transition hover:-translate-y-2 hover:border-white/[0.35] hover:shadow-[0_36px_68px_rgba(2,6,23,0.65)]"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                                <span className="h-3 w-3 rounded-full bg-[var(--accent-ice)]" />
                            </span>
                            <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                            <p className="mt-4 text-sm leading-relaxed text-white/[0.85]">{card.desc}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="pb-24">
                <WhyTechbox />

                <div className="mx-auto mt-16 w-full max-w-6xl px-4">
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                        <div className="rounded-3xl border border-white/[0.15] bg-gradient-to-br from-[rgba(8,14,36,0.92)] to-[rgba(10,18,44,0.74)] p-10 shadow-[0_34px_64px_rgba(2,6,23,0.56)]">
                            <h3 className="text-[1.9rem] font-semibold leading-tight text-white">
                                Da un paso al <span className="text-[var(--accent-ice)]">futuro</span> con nosotros
                            </h3>
                            <p className="mt-4 text-white/[0.88]">
                                Agenda una sesión estratégica de 30 minutos para mapear oportunidades de automatización, data y productos digitales en tu empresa.
                            </p>
                            <Link
                                href="/Contacto"
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-ice)] to-[var(--accent-teal)] px-6 py-3 font-semibold text-[#041520] shadow-[0_18px_46px_rgba(64,194,255,0.38)] transition hover:translate-y-[-1px] hover:shadow-[0_24px_54px_rgba(64,194,255,0.48)]"
                            >
                                Agendar una cita
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid gap-8 rounded-3xl border border-white/[0.15] bg-[rgba(7,11,30,0.72)] p-10 text-sm text-white/[0.85]">
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/[0.75]">TechBox</h4>
                                <p className="mt-3 text-lg font-semibold text-white">2023 San José, Costa Rica</p>
                                <p className="mt-1">jmoroco@techboxmail.com</p>
                                <p className="mt-1">8888-8888</p>
                            </div>
                            <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                                <div>
                                    <h5 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.72]">Links rápidos</h5>
                                    <ul className="mt-3 space-y-2 text-white/[0.82]">
                                        <li><Link href="/Servicios" className="transition hover:text-white">Servicios</Link></li>
                                        <li><Link href="/Contacto" className="transition hover:text-white">Agenda una cita</Link></li>
                                        <li><Link href="/Blog" className="transition hover:text-white">Blog</Link></li>
                                        <li><Link href="/Contacto" className="transition hover:text-white">FAQ</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.72]">Legal</h5>
                                    <ul className="mt-3 space-y-2 text-white/[0.82]">
                                        <li><span>Términos de servicio</span></li>
                                        <li><span>Política de privacidad</span></li>
                                        <li><span>Uso de cookies</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
