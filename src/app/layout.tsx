// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import CalendlyBadge from '@/components/CalendlyBadge';

export const metadata: Metadata = {
    title: 'TechBox',
    description: 'Soluciones para PYMES: software, cloud y automatización',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body suppressHydrationWarning>
        <Header />
        {/* margen para que el header no tape nada */}
        <div className="pt-[110px]">{children}</div>
        {/* Badge flotante de Calendly */}
        <CalendlyBadge />
        </body>
        </html>
    );
}
