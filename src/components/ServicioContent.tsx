'use client'

import { Player } from '@lottiefiles/react-lottie-player'
import Link from 'next/link'

interface ServicioProps {
  servicio: {
    slug: string
    titulo: string
    descripcion: string
    descripcionLarga?: string
    beneficios?: string[]
  }
}

export default function ServicioContent({ servicio }: ServicioProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">{servicio.titulo}</h1>

      <div className="flex justify-center mb-10">
        <Player
          autoplay
          loop
          src={`/lottie/${servicio.slug}.json`}
          style={{ height: '250px', width: '250px' }}
        />
      </div>

      <p className="text-gray-700 mb-6 text-lg">
        {servicio.descripcionLarga || servicio.descripcion}
      </p>

      {servicio.beneficios && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Beneficios</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {servicio.beneficios.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-10">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">¿Por qué elegir TechBox?</h3>
        <p className="text-gray-700">
          A diferencia de otras consultoras, en TechBox combinamos experiencia en el sector
          tecnológico con un enfoque cercano, ágil y 100% adaptado a las PYMEs. Te acompañamos
          en todo el proceso y garantizamos soluciones funcionales, claras y medibles.
        </p>
      </div>

      <div className="text-center">
        <p className="text-gray-700 mb-4">
          ¿Listo para mejorar tu negocio con {servicio.titulo.toLowerCase()}?
        </p>
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