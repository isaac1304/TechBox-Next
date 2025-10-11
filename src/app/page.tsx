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

            {/* HERO GRID */}
            <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 pb-24 pt-28 text-center lg:px-6">
                <div className="max-w-3xl space-y-4">
                    <span className="inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-white/70 px-4 py-1 text-[12px] font-semibold uppercase tracking-[0.24em] text-slate-600 dark:border-white/[0.18] dark:bg-white/[0.12] dark:text-white/80">
                        Explora nuestras soluciones
                    </span>
                    <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-[3.25rem] md:leading-[1.05]">
                        Interactúa con nuestras{' '}
                        <span className="bg-gradient-to-r from-[#67e1ff] via-[#8fd3ff] to-[#9e8aff] bg-clip-text text-transparent">
                            experiencias digitales
                        </span>
                    </h1>
                    <p className="text-lg leading-relaxed text-slate-600 dark:text-white/85">
                        Cada tarjeta revela cómo la automatización, los datos y la nube pueden impulsar tu empresa. Haz hover o toca para descubrir el impacto de cada servicio.
                    </p>
                </div>

                <HeroServiceGrid />

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/Contacto"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-ice)] via-[#6ff3ff] to-[var(--accent-teal)] px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_20px_48px_rgba(64,194,255,0.35)] transition hover:translate-y-[-2px] hover:shadow-[0_24px_56px_rgba(64,194,255,0.45)]"
                    >
                        Agendar una cita
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link
                        href="/Servicios"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/20 px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-slate-900/40 hover:text-slate-900 dark:border-white/25 dark:text-white/90 dark:hover:border-white/45 dark:hover:text-white"
                    >
                        Ver servicios
                    </Link>
                </div>
            </section>

            {/* Narrativa */}
            <section className="relative border-y border-slate-200/80 bg-white/80 py-20 backdrop-blur-sm dark:border-white/12 dark:bg-[rgba(7,11,30,0.72)]">
                <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center">
                    <div>
                        <h2 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
                            Descubre cómo podemos <span className="text-[var(--accent-ice)]">ayudar</span> a tu negocio
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-white/85">
                            Impulsamos el crecimiento, la eficiencia y la competitividad de tu empresa a través de soluciones tecnológicas innovadoras. Con automatizaciones, tableros y equipos enfocados, transformamos la forma en que las personas interactúan con tu negocio.
                        </p>
                        <Link
                            href="/Blog"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-ice)] transition hover:text-slate-900 dark:hover:text-white"
                        >
                            Mira más
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-indigo-50/70 p-8 shadow-[0_24px_48px_rgba(15,23,42,0.12)] dark:border-white/12 dark:bg-gradient-to-br dark:from-[rgba(12,19,48,0.55)] dark:to-[rgba(8,13,34,0.92)] dark:shadow-[0_32px_60px_rgba(2,6,23,0.5)]">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Lo que obtienes</h3>
                        <ul className="mt-6 space-y-4 text-slate-600 dark:text-white/85">
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
                    <h2 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-[2.7rem]">
                        Desbloquea el poder de la <span className="text-transparent bg-gradient-to-r from-[#67e1ff] via-[#53b6ff] to-[#9e8aff] bg-clip-text">tecnología</span>
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/82">
                        Diseñamos y ejecutamos soluciones adaptadas a cada etapa de tu empresa, manteniendo foco en valor y velocidad.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {solutionCards.map((card) => (
                        <article
                            key={card.title}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_24px_48px_rgba(15,23,42,0.12)] transition hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_30px_60px_rgba(15,23,42,0.16)] dark:border-white/15 dark:bg-[rgba(12,19,48,0.68)] dark:shadow-[0_28px_54px_rgba(2,6,23,0.52)] dark:hover:border-white/35 dark:hover:shadow-[0_36px_68px_rgba(2,6,23,0.65)]"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white">
                                <span className="h-3 w-3 rounded-full bg-[var(--accent-ice)]" />
                            </span>
                            <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-white/85">{card.desc}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="pb-24">
                <WhyTechbox />

                <div className="mx-auto mt-16 w-full max-w-6xl px-4">
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-indigo-50/70 p-10 shadow-[0_28px_54px_rgba(15,23,42,0.12)] dark:border-white/15 dark:bg-gradient-to-br dark:from-[rgba(8,14,36,0.92)] dark:to-[rgba(10,18,44,0.74)] dark:shadow-[0_34px_64px_rgba(2,6,23,0.56)]">
                            <h3 className="text-[1.9rem] font-semibold leading-tight text-slate-900 dark:text-white">
                                Da un paso al <span className="text-[var(--accent-ice)]">futuro</span> con nosotros
                            </h3>
                            <p className="mt-4 text-slate-600 dark:text-white/88">
                                Agenda una sesión estratégica de 30 minutos para mapear oportunidades de automatización, data y productos digitales en tu empresa.
                            </p>
                            <Link
                                href="/Contacto"
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-ice)] to-[var(--accent-teal)] px-6 py-3 font-semibold text-slate-900 shadow-[0_18px_46px_rgba(64,194,255,0.38)] transition hover:translate-y-[-1px] hover:shadow-[0_24px_54px_rgba(64,194,255,0.48)]"
                            >
                                Agendar una cita
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white/90 p-10 text-sm text-slate-600 shadow-[0_24px_48px_rgba(15,23,42,0.12)] dark:border-white/15 dark:bg-[rgba(7,11,30,0.72)] dark:text-white/85 dark:shadow-none">
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-600 dark:text-white/75">TechBox</h4>
                                <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">2023 San José, Costa Rica</p>
                                <p className="mt-1">jmoroco@techboxmail.com</p>
                                <p className="mt-1">8888-8888</p>
                            </div>
                            <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                                <div>
                                    <h5 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-white/72">Links rápidos</h5>
                                    <ul className="mt-3 space-y-2 text-slate-600 dark:text-white/82">
                                        <li><Link href="/Servicios" className="transition hover:text-slate-900 dark:hover:text-white">Servicios</Link></li>
                                        <li><Link href="/Contacto" className="transition hover:text-slate-900 dark:hover:text-white">Agenda una cita</Link></li>
                                        <li><Link href="/Blog" className="transition hover:text-slate-900 dark:hover:text-white">Blog</Link></li>
                                        <li><Link href="/Contacto" className="transition hover:text-slate-900 dark:hover:text-white">FAQ</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-white/72">Legal</h5>
                                    <ul className="mt-3 space-y-2 text-slate-600 dark:text-white/82">
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
