'use client';

import { useEffect, useRef } from 'react';

type Props = {
    src: string;              // e.g. /lottie/software.json
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
    style?: React.CSSProperties;
};

export default function Lottie({ src, className, loop = true, autoplay = true, style }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let anim: any;
        let disposed = false;

        async function boot() {
            try {
                const [lottie, json] = await Promise.all([
                    import('lottie-web'),
                    fetch(src).then(r => r.json()),
                ]);
                if (disposed || !ref.current) return;
                anim = lottie.default.loadAnimation({
                    container: ref.current,
                    renderer: 'svg',
                    loop,
                    autoplay,
                    animationData: json,
                    rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
                });
            } catch (e) {
                // Silenciar: si falla, simplemente no muestra animación
                // console.warn('Lottie failed', e);
            }
        }
        boot();

        return () => {
            disposed = true;
            try { anim?.destroy(); } catch {}
        };
    }, [src, loop, autoplay]);

    return <div ref={ref} className={className} style={style} />;
}
