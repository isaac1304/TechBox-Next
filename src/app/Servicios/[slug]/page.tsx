import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import servicios from '@/data/servicios.json'
import ServicioContent from '@/components/ServicioContent'

// Generación de rutas estáticas
export async function generateStaticParams() {
    return servicios.map((servicio) => ({
        slug: servicio.slug,
    }))
}

// Metadatos con tipado estricto para Vercel (Next.js 15+)
export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const servicio = servicios.find((s) => s.slug === params.slug)
    return {
        title: servicio?.titulo || 'Servicio no encontrado',
    }
}

// Página dinámica por slug
export default function ServicioPage({ params }: { params: { slug: string } }) {
    const servicio = servicios.find((s) => s.slug === params.slug)
    if (!servicio) return notFound()

    return <ServicioContent servicio={servicio} />
}