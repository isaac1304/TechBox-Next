'use client'
import { Player } from '@lottiefiles/react-lottie-player'

export default function HeroAnimation() {
    return (
        <div className="flex justify-center py-8">
            <Player
                autoplay
                loop
                src="/lottie/hero-animation.json"
                style={{ height: '350px', width: '350px' }}
            />
        </div>
    )
}