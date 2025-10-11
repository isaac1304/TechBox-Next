'use client';

import { useEffect, useMemo } from 'react';
import FlipCard from '@/components/FlipCard';
import styles from './HeroServiceGrid.module.css';
import { services } from '@/lib/services';

const heroShowcase = [
    { slug: 'software', variant: 'teal', layout: 'software', profile: 'profileLarge', square: true },
    { slug: 'automatizacion', variant: 'navy', layout: 'automatizacion', profile: 'profileWide', square: false },
    { slug: 'analytics', variant: 'teal', layout: 'analytics', profile: 'profileCompact', square: true },
    { slug: 'nube', variant: 'navy', layout: 'nube', profile: 'profileCompact', square: true },
    { slug: 'bigdata', variant: 'navy', layout: 'bigdata', profile: 'profileWide', square: false },
    { slug: 'ciberseguridad', variant: 'teal', layout: 'ciberseguridad', profile: 'profileCompact', square: true },
    { slug: 'consultoria', variant: 'navy', layout: 'consultoria', profile: 'profileTall', square: false },
    { slug: 'mantenimiento', variant: 'teal', layout: 'mantenimiento', profile: 'profileCompact', square: true },
    { slug: 'transformacion', variant: 'navy', layout: 'transformacion', profile: 'profileWide', square: false },
] as const;

type HeroSlug = (typeof heroShowcase)[number]['slug'];
type ShowcaseEntry = (typeof heroShowcase)[number];
type HeroService = ShowcaseEntry & { service: (typeof services)[number] };

const heroCopy: Record<HeroSlug, string> = {
    software: 'Productos web a medida con impacto medible desde el sprint uno.',
    automatizacion: 'RPA y flujos orquestados que liberan horas de tu equipo.',
    analytics: 'Datos accionables y tableros vivos para decidir con confianza.',
    nube: 'Infraestructura escalable y segura lista para crecer contigo.',
    bigdata: 'Pipelines masivos y storage optimizado para crecer sin fricciones.',
    ciberseguridad: 'Hardening, backups y respuesta ágil ante incidentes críticos.',
    consultoria: 'Estrategia y roadmap alineados a tus objetivos de negocio.',
    mantenimiento: 'Soporte evolutivo con métricas claras y mejoras continuas.',
    transformacion: 'Procesos digitales que conectan equipos, datos y clientes.',
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
            heroShowcase
                .map((item): HeroService | null => {
                    const svc = services.find((service) => service.slug === item.slug);
                    if (!svc) return null;
                    return { ...item, service: svc };
                })
                .filter((entry): entry is HeroService => Boolean(entry)),
        [],
    );

    return (
        <div className={styles.wrapper} aria-label="Servicios destacados con animaciones interactivas">
            <div className={styles.glow} aria-hidden />
            <div className={styles.grid}>
                {heroServices.map(({ slug, service, variant, layout, profile, square }) => (
                    <div key={service.slug} className={`${styles.cell} ${styles[layout]}`}>
                        <FlipCard
                            title={service.name}
                            text={heroCopy[slug]}
                            lottieSrc={service.lottie}
                            href={`/Servicios/${slug}`}
                            square={square}
                            variant={variant}
                            className={`${styles.card} ${styles[profile]}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
