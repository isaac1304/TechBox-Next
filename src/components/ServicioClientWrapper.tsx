'use client'

import ServicioContent from './ServicioContent'

interface Props {
    servicio: {
        slug: string
        titulo: string
        descripcion: string
        descripcionLarga?: string
        beneficios?: string[]
    }
}

export default function ServicioClientWrapper({ servicio }: Props) {
    return <ServicioContent servicio={servicio} />
}