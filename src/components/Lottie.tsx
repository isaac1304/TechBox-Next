'use client';

import { useEffect, useState } from 'react';

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
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
        script.async = true;
        script.dataset.lottiePlayer = '1';
        script.setAttribute('data-lottie-player', '1');
        script.onload = () => setLoaded(true);
        document.body.appendChild(script);
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
