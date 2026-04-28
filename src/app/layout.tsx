import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SiteChromeGate } from '@/components/SiteChrome';

const siteUrl = 'https://techbox.cr';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TechBox | Software, cloud y automatización para pymes',
    template: '%s | TechBox',
  },
  description:
    'TechBox ayuda a pequeñas y medianas empresas en Costa Rica a crear software, automatizar procesos, implementar infraestructura cloud, mejorar su ciberseguridad y tomar mejores decisiones con datos.',
  keywords: [
    'TechBox',
    'Costa Rica',
    'software pymes',
    'automatización',
    'cloud',
    'ciberseguridad',
    'Power BI',
    'consultoría tecnológica',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: siteUrl,
    siteName: 'TechBox',
    title: 'TechBox | Software, cloud y automatización para pymes',
    description:
      'Tecnología práctica para hacer crecer tu negocio. Software, cloud, automatización, ciberseguridad y datos para pymes en Costa Rica.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechBox',
    description:
      'Tecnología práctica para hacer crecer tu negocio en Costa Rica y LatAm.',
  },
  icons: { icon: '/favicon.ico' },
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
          <SiteChromeGate>
            <Header />
          </SiteChromeGate>
          <main className="site-main">{children}</main>
          <SiteChromeGate>
            <Footer />
            <WhatsAppFloating />
          </SiteChromeGate>
        </ThemeProvider>
      </body>
    </html>
  );
}
