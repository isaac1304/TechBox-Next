import styles from './WhyTechbox.module.css';

export default function WhyTechbox() {
    const items = [
        {
            k: 'Paso 1',
            t: 'Escuchamos',
            d: 'Profundizamos en tus retos operativos, clientes y métricas para mapear oportunidades reales.',
        },
        {
            k: 'Paso 2',
            t: 'Proponemos',
            d: 'Diseñamos un roadmap modular priorizando victorias tempranas y ROI tangible.',
        },
        {
            k: 'Paso 3',
            t: 'Ejecutamos',
            d: 'Co-creamos contigo: iteraciones cortas, automatizaciones y tableros desde el día uno.',
        },
        {
            k: 'Paso 4',
            t: 'Acompañamos',
            d: 'Monitoreo continuo, soporte y mejoras evolutivas para mantener el crecimiento.',
        },
    ];

    return (
        <section className="mx-auto w-full max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 shadow-[0_0_18px_rgba(103,225,255,0.32)] backdrop-blur">
                    Metodología
                </span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                    Impulsamos tus proyectos <span className="text-[var(--accent-ice)]">paso a paso</span>
                </h2>
            </div>
            <div className={`${styles.grid} mt-10`}>
                {items.map((it) => (
                    <article key={it.t} className={styles.card}>
                        <p className={styles.kicker}>{it.k}</p>
                        <h3 className={styles.h3}>{it.t}</h3>
                        <p className={styles.p}>{it.d}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
