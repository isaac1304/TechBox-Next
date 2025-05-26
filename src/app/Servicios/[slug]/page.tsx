import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import servicios from '@/data/servicios.json'
import ServicioContent from '@/components/ServicioContent'
import type { Metadata } from 'next'
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export async function generateStaticParams() {
    return servicios.map((servicio) => ({
        slug: servicio.slug,
    }))
}

interface Props {
    params: Params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const servicio = servicios.find((s) => s.slug === params.slug)
    return {
        title: servicio?.titulo || 'Servicio no encontrado',
    }
}

export default function ServicioPage({ params }: { params: { slug: string } }) {
    const servicio = servicios.find((s) => s.slug === params.slug)
    if (!servicio) return notFound()

    return <ServicioContent servicio={servicio} />
}