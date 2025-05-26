// Dentro de ServicioAnimation.tsx (componente cliente)
'use client'
import { Player } from '@lottiefiles/react-lottie-player'

interface ServicioAnimationProps { slug: string }

export default function ServicioAnimation({ slug }: ServicioAnimationProps) {
    return (
        <Player
            autoplay  // 🔄 inicia automáticamente
            loop      // 🔁 repetición opcional
            src={`/lottie/${slug}.json`}
            style={{ height: '250px', width: '250px' }}
        />
    )
}