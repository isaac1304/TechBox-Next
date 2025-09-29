import styles from './WhyTechbox.module.css';

export default function WhyTechbox() {
    const items = [
        {
            k: 'Tiempo de salida',
            t: 'Semanas, no meses',
            d: 'Plantillas, pipelines y librerías propias para acelerar desde el día uno.',
        },
        {
            k: 'Seguridad primero',
            t: 'Backups y monitoreo',
            d: 'Hardening, alertas y copias automatizadas sin costo sorpresa.',
        },
        {
            k: 'Medimos resultados',
            t: 'KPIs claros',
            d: 'Tableros de horas ahorradas, conversión y SLA para decidir con datos.',
        },
        {
            k: 'Entrega ágil',
            t: 'Iteraciones cortas',
            d: 'Hitos pequeños y visibles en cada sprint, con valor real para el negocio.',
        },
    ];

    return (
        <section className="mx-auto w-full max-w-6xl px-4">
            <h2 className="mb-6 text-center text-2xl font-bold text-[#0b1b2b]">¿Por qué TechBox?</h2>
            <div className={styles.grid}>
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
