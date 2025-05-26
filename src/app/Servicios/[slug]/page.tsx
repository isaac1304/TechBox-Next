import { notFound } from 'next/navigation'
import Image from 'next/image'
import servicios from '@/data/servicios.json'
import Link from 'next/link'

export async function generateStaticParams() {
    return servicios.map((servicio) => ({
        slug: servicio.slug,
    }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const servicio = servicios.find((s) => s.slug === params.slug)
    return {
        title: servicio?.titulo || 'Servicio no encontrado',
    }
}

export default function ServicioPage({ params }: { params: { slug: string } }) {
    const servicio = servicios.find((s) => s.slug === params.slug)

    if (!servicio) return notFound()

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">{servicio.titulo}</h1>

            <div className="mb-6 flex justify-center">
                <Image
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    width={400}
                    height={300}
                    className="rounded shadow"
                />
            </div>

            <p className="text-gray-700 mb-6 text-lg">{servicio.descripcionLarga || servicio.descripcion}</p>

            {servicio.beneficios && (
                <div className="mb-10">
                    <h2 className="text-xl font-semibold text-blue-800 mb-2">Beneficios</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {servicio.beneficios.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Diferencial de TechBox */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-10">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">¿Por qué elegir TechBox?</h3>
                <p className="text-gray-700">
                    A diferencia de otras consultoras, en TechBox combinamos experiencia en el sector
                    tecnológico con un enfoque cercano, ágil y 100% adaptado a las PYMEs.
                    Te acompañamos en todo el proceso y garantizamos soluciones funcionales, claras y medibles.
                </p>
            </div>

            {/* Llamado a la acción */}
            <div className="text-center">
                <p className="text-gray-700 mb-4">¿Listo para mejorar tu negocio con {servicio.titulo.toLowerCase()}?</p>
                <Link
                    href="/Contacto"
                    className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
                >
                    Hablemos sin compromiso
                </Link>
            </div>
        </div>
    )
}