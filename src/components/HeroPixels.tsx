'use client';

import { useEffect, useMemo, useState, CSSProperties } from 'react';
import styles from './HeroPixels.module.css';

type Props = {
    /** Tamaño del cuadrado final (px) */
    size?: number;
    /** Número de columnas/filas */
    cols?: number;
    /** Tamaño de cada píxel (px) */
    dot?: number;
    /** Espacio entre píxeles (px) */
    gap?: number;
    /** Color del píxel */
    color?: string;
    className?: string;
};

export default function HeroPixels({
                                       size = 320,
                                       cols = 14,
                                       dot = 8,
                                       gap = 6,
                                       color = '#2EC4B6',
                                       className,
                                   }: Props) {
    // Geometría del grid destino (se calcula igual en servidor y cliente)
    const cell = Math.floor((size - gap * (cols - 1)) / cols);
    const safeDot = Math.min(dot, cell);
    const grid = useMemo(() => {
        const out: { tx: number; ty: number; delay: number }[] = [];
        for (let r = 0; r < cols; r++) {
            for (let c = 0; c < cols; c++) {
                const tx = c * (cell + gap);
                const ty = r * (cell + gap);
                // Pequeño “wave” en la entrada
                const delay = (r + c) * 14; // ms
                out.push({ tx, ty, delay });
            }
        }
        return out;
    }, [cols, cell, gap]);

    // Estado "play" solo en cliente para disparar transición
    const [play, setPlay] = useState(false);

    // Posiciones de salida (solo cliente para evitar hydration)
    const [starts, setStarts] = useState<{ sx: number; sy: number }[]>([]);
    useEffect(() => {
        const s: { sx: number; sy: number }[] = [];
        for (let i = 0; i < grid.length; i++) {
            const rand = Math.random();
            const side = i % 4; // reparte entre 4 lados
            if (side === 0) s.push({ sx: -size * 0.7 - rand * 120, sy: rand * size });
            else if (side === 1) s.push({ sx: size * 1.1 + rand * 120, sy: rand * size });
            else if (side === 2) s.push({ sx: rand * size, sy: -size * 0.7 - rand * 120 });
            else s.push({ sx: rand * size, sy: size * 1.1 + rand * 120 });
        }
        setStarts(s);
        const t = setTimeout(() => setPlay(true), 60);
        return () => clearTimeout(t);
    }, [grid.length, size]);

    const wrapStyle = {
        '--size': `${size}px`,
        '--dot': `${safeDot}px`,
        '--color': color,
    } as CSSProperties;

    return (
        <div
            className={`${styles.wrap} ${className ?? ''}`}
            style={wrapStyle}
            aria-hidden
        >
            {/* mientras no haya “starts” (en SSR), no pintamos nada → sin hydration error */}
            {starts.length > 0 &&
                grid.map((g, i) => {
                    const { sx, sy } = starts[i];
                    const to = `translate3d(${g.tx}px, ${g.ty}px, 0)`;
                    const from = `translate3d(${sx}px, ${sy}px, 0)`;
                    const style: CSSProperties = {
                        transform: play ? to : from,
                        transition: `transform 900ms cubic-bezier(.23,1,.32,1) ${g.delay}ms`,
                    };
                    return <span key={i} className={styles.dot} style={style} />;
                })}
        </div>
    );
}
