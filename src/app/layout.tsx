import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CalendlyBadge from '@/components/CalendlyBadge'

export const metadata = {
    title: 'TechBox | Soluciones IT para PYMEs',
    description: 'Tecnología, desarrollo y asesoría digital llave en mano.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CalendlyBadge />
        </body>
        </html>
    )
}