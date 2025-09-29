'use client';

import { useEffect, useState } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                src?: string;
                background?: string;
                speed?: number;
                loop?: boolean;
                autoplay?: boolean;
                style?: React.CSSProperties;
            };
        }
    }
}

type LottieProps = {
    src: string;
    className?: string;
    style?: React.CSSProperties;
};

export default function Lottie({ src, className, style }: LottieProps) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const existing = document.querySelector('script[data-lottie-player]');
        if (existing) { setLoaded(true); return; }
        const s = document.createElement('script');
        s.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
        s.async = true;
        (s as any).dataset = { lottiePlayer: '1' };
        s.setAttribute('data-lottie-player', '1');
        s.onload = () => setLoaded(true);
        document.body.appendChild(s);
    }, []);

    if (!loaded) return null;

    return (
        <lottie-player
            src={src}
            background="transparent"
            speed={1}
            loop
            autoplay
            className={className}
            style={style}
        />
    );
}
