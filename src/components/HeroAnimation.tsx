'use client'

import { Player } from '@lottiefiles/react-lottie-player'

export default function HeroAnimation() {
    return (
        <div className="flex justify-center mb-10">
            <Player
                autoplay
                loop
                src="https://assets7.lottiefiles.com/packages/lf20_kyu7xb1v.json" // Ejemplo
                style={{ height: '250px', width: '250px' }}
            />
        </div>
    )
}