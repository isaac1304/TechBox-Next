'use client'

import dynamic from 'next/dynamic'

// ✅ Carga dinámica del Lottie Player solo en cliente
const ServicioContent = dynamic(() => import('./ServicioContent'), { ssr: false })

interface Props {
    servicio: {
        slug: string
        titulo: string
        descripcion: string
        descripcionLarga?: string
        beneficios?: string[]
    }
}

export default function ServicioWrapper({ servicio }: Props) {
    return <ServicioContent servicio={servicio} />
}