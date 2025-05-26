'use client'

import { useState } from 'react'

export default function Contacto() {
    const [estado, setEstado] = useState<'idle' | 'enviando' | 'exito' | 'error'>('idle')

    return (
        <div className="max-w-2xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6 text-blue-900">Contáctanos</h1>
            <p className="mb-8 text-gray-600">¿Tienes dudas o deseas una asesoría gratuita? Completa el formulario y nos pondremos en contacto contigo pronto.</p>

            {estado === 'exito' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">✅ ¡Mensaje enviado con éxito!</div>
            )}
            {estado === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">❌ Ocurrió un error. Intenta de nuevo.</div>
            )}

            <form
                action="https://formspree.io/f/mqaqvavn" // <-- cambia esto por tu ID real
                method="POST"
                onSubmit={() => setEstado('enviando')}
                className="space-y-6"
            >
                <div>
                    <label htmlFor="nombre" className="block mb-1 font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="mensaje" className="block mb-1 font-medium text-gray-700">Mensaje</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
                >
                    {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
            </form>
        </div>
    )
}