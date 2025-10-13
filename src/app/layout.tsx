// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import './overrides.css';
import Header from '@/components/Header';
import CalendlyBadge from '@/components/CalendlyBadge';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
    title: 'TechBox',
    description: 'Soluciones para PYMES: software, cloud y automatización',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body className="antialiased transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light" disableTransitionOnChange>
        <Header />
        <main className="site-main">{children}</main>
        {/* Badge flotante de Calendly */}
        <CalendlyBadge />
        </ThemeProvider>
        </body>
        </html>
    );
}
