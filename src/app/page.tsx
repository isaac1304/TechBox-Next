'use client'

import Link from 'next/link'
import {
    GlobeIcon,
    LockIcon,
    WrenchIcon,
    CloudIcon,
    EarIcon,
    LightbulbIcon,
    CodeIcon,
    HandshakeIcon,
} from 'lucide-react'

export default function HomePage() {
    return (
        <>
            {/* Hero principal */}
            <section className="text-center py-20 px-6 bg-gradient-to-b from-white to-blue-50">
                <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
                    Soluciones tecnológicas para tu PYME
                </h1>
                <p className="text-gray-700 text-lg mb-8">
                    Innovación, automatización y seguridad para tu negocio.
                </p>
                <Link
                    href="/Servicios"
                    className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
                >
                    Explorar Servicios
                </Link>
            </section>

            {/* Sección de beneficios */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
                    ¿Por qué elegir TechBox?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <WrenchIcon className="mx-auto text-blue-700 w-10 h-10 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Soluciones llave en mano</h3>
                        <p className="text-gray-600">
                            Implementamos soluciones completas, listas para usar y adaptadas a tu negocio.
                        </p>
                    </div>
                    <div>
                        <GlobeIcon className="mx-auto text-blue-700 w-10 h-10 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Transformación digital</h3>
                        <p className="text-gray-600">
                            Llevamos tu negocio al siguiente nivel con tecnología moderna y escalable.
                        </p>
                    </div>
                    <div>
                        <CloudIcon className="mx-auto text-blue-700 w-10 h-10 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Expertos en nube</h3>
                        <p className="text-gray-600">
                            Dominamos plataformas como Google Cloud y AWS para optimizar tus procesos.
                        </p>
                    </div>
                    <div>
                        <LockIcon className="mx-auto text-blue-700 w-10 h-10 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Ciberseguridad integrada</h3>
                        <p className="text-gray-600">
                            Tu información y la de tus clientes protegida desde el diseño.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección Cómo trabajamos */}
            <section className="bg-gray-50 py-20 px-6">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
                    ¿Cómo trabajamos?
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                    <div>
                        <EarIcon className="mx-auto text-blue-700 w-10 h-10 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">1. Escuchamos</h3>
                        <p className="text-gray-600">
                            Entendemos tus necesidades y objetivos empresariales.
                        </p>
                    </div>
                    <div>
                        <LightbulbIcon className="mx-auto text-blue-700 w-10 h-10 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">2. Proponemos</h3>
                        <p className="text-gray-600">
                            Diseñamos soluciones estratégicas a medida.
                        </p>
                    </div>
                    <div>
                        <CodeIcon className="mx-auto text-blue-700 w-10 h-10 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">3. Ejecutamos</h3>
                        <p className="text-gray-600">
                            Desarrollamos e implementamos la tecnología en tu empresa.
                        </p>
                    </div>
                    <div>
                        <HandshakeIcon className="mx-auto text-blue-700 w-10 h-10 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">4. Acompañamos</h3>
                        <p className="text-gray-600">
                            Brindamos soporte y mejora continua en cada etapa.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}