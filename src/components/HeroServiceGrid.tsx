'use client';

import { useEffect, useMemo } from 'react';
import FlipCard from '@/components/FlipCard';
import styles from './HeroServiceGrid.module.css';
import { services } from '@/lib/services';

const heroServiceSlugs = ['software', 'automatizacion', 'analytics', 'nube'] as const;

const heroCopy: Record<(typeof heroServiceSlugs)[number], string> = {
    software: 'Productos web a medida con impacto medible desde el sprint uno.',
    automatizacion: 'RPA y flujos orquestados que liberan horas de tu equipo.',
    analytics: 'Datos accionables y tableros vivos para decidir con confianza.',
    nube: 'Infraestructura escalable y segura lista para crecer contigo.',
};

export default function HeroServiceGrid() {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const existing = document.querySelector('script[data-lottie-player]');
        if (existing) return;
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
        script.async = true;
        script.dataset.lottiePlayer = '1';
        script.setAttribute('data-lottie-player', '1');
        document.body.appendChild(script);
    }, []);

    const heroServices = useMemo(
        () =>
            heroServiceSlugs
                .map((slug) => services.find((svc) => svc.slug === slug))
                .filter((svc): svc is NonNullable<typeof svc> => Boolean(svc)),
        [],
    );

    return (
        <div className={styles.wrapper} aria-label="Servicios destacados con animaciones interactivas">
            <div className={styles.glow} aria-hidden />
            <div className={styles.grid}>
                {heroServices.map((svc, idx) => (
                    <div key={svc.slug} className={styles.cell}>
                        <FlipCard
                            title={svc.name}
                            text={heroCopy[svc.slug as (typeof heroServiceSlugs)[number]]}
                            lottieSrc={svc.lottie}
                            href={`/Servicios/${svc.slug}`}
                            square
                            variant={idx % 2 === 0 ? 'navy' : 'teal'}
                            className={styles.card}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
