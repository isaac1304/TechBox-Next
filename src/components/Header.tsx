'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-blue-900">
                    TechBox
                </Link>

                <button
                    className="sm:hidden text-gray-700 focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                <nav
                    className={`${
                        open ? 'block' : 'hidden'
                    } sm:flex space-x-6 text-gray-700 font-medium`}
                >
                    <Link href="/">Inicio</Link>
                    <Link href="/Servicios">Servicios</Link>
                    <Link href="/Contacto">Contacto</Link>
                    <Link href="/blog">Blog</Link>
                </nav>
            </div>
        </header>
    )
}