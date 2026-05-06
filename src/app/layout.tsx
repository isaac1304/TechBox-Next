import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import { ThemeProvider } from '@/components/ThemeProvider';

const siteUrl = 'https://techbox.cr';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Techbox | Software, nube y automatización para pymes',
    template: '%s | Techbox',
  },
  description:
    'Consultora tecnológica que acompaña a pymes de Costa Rica y Latinoamérica a crear software, automatizar procesos, ordenar la nube, reforzar la ciberseguridad y tomar mejores decisiones con datos.',
  keywords: [
    'Techbox',
    'Costa Rica',
    'Latinoamérica',
    'software pymes',
    'automatización',
    'nube',
    'cloud',
    'ciberseguridad',
    'Power BI',
    'consultoría tecnológica',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: siteUrl,
    siteName: 'Techbox',
    title: 'Techbox | Software, nube y automatización para pymes',
    description:
      'Software, nube, automatización, ciberseguridad y datos para pymes. Precios accesibles y diagnóstico sin costo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techbox',
    description:
      'Software, nube y automatización para pymes. Precios accesibles y diagnóstico sin costo.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </ThemeProvider>
      </body>
    </html>
  );
}
