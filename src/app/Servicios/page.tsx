import servicios from '@/data/servicios.json'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export default function ServiciosPage() {
    return (
        <main className="p-6 text-center">
            <AnimatedSection>
                <h1 className="text-3xl font-bold mb-10">Nuestros Servicios</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {servicios.map((servicio, index) => (
                        <Link
                            key={index}
                            href={`/Servicios/${servicio.slug}`}
                            className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
                        >
                            <Image
                                src={servicio.imagen}
                                alt={servicio.titulo}
                                width={80}
                                height={80}
                                className="mb-4"
                            />
                            <h2 className="text-lg font-semibold mb-2">{servicio.titulo}</h2>
                            <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
                        </Link>
                    ))}
                </div>
            </AnimatedSection>
        </main>
    )
}