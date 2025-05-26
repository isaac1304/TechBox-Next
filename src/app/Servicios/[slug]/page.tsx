import { notFound } from 'next/navigation'
import servicios from '@/data/servicios.json'
import ServicioWrapper from '@/components/ServicioWrapper'

export async function generateStaticParams() {
    return servicios.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const servicio = servicios.find((s) => s.slug === slug)
    return {
        title: servicio?.titulo || 'Servicio no encontrado',
    }
}

export default async function ServicioPage({
                                               params,
                                           }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const servicio = servicios.find((s) => s.slug === slug)
    if (!servicio) return notFound()
    return <ServicioWrapper servicio={servicio} />
}