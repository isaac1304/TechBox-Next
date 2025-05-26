import { notFound } from 'next/navigation'
import servicios from '@/data/servicios.json'
import ServicioClientWrapper from '@/components/ServicioClientWrapper'

export async function generateStaticParams() {
    return servicios.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
    const servicio = servicios.find((s) => s.slug === slug)
    return {
        title: servicio?.titulo || 'Servicio no encontrado',
    }
}

export default async function ServicioPage(
    props: { params: Promise<{ slug: string }> }
) {
    const { slug } = await props.params
    const servicio = servicios.find((s) => s.slug === slug)
    if (!servicio) return notFound()

    return <ServicioClientWrapper servicio={servicio} />
}