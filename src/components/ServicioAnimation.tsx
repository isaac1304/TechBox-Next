// src/components/ServicioAnimation.tsx
'use client';

import { Player } from '@lottiefiles/react-lottie-player';

interface ServicioAnimationProps {
    slug: string;
}

export default function ServicioAnimation({ slug }: ServicioAnimationProps) {
    return (
        <div className="flex justify-center mb-10">
            <Player
                autoplay
                loop
                src={`/lottie/${slug}.json`}
                style={{ height: '250px', width: '250px' }}
            />
        </div>
    );
}