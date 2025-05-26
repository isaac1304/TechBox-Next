// src/app/Servicios/[slug]/page.tsx

import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import servicios from '@/data/servicios.json'

// ✅ Import dinámico SOLO EN CLIENTE
const ServicioContent = dynamic(() => import('@/components/ServicioContent'), { ssr: false })

export async function generateStaticParams() {
    return servicios.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const servicio = servicios.find(s => s.slug === slug)
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
    const servicio = servicios.find(s => s.slug === slug)
    if (!servicio) return notFound()
    return <ServicioContent servicio={servicio} />
}