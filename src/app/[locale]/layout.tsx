import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import { ThemeProvider } from '@/components/ThemeProvider';
import { routing } from '@/i18n/routing';

const siteUrl = 'https://techbox.cr';

// Las páginas son estáticas: revalidar a diario para que el fin del programa
// de fundadores (launchProgram.endsOn) se refleje sin un deploy nuevo.
export const revalidate = 86400;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t('siteTitleDefault'),
      template: t('siteTitleTemplate'),
    },
    description: t('siteDescription'),
    keywords: [
      'Techbox',
      'Costa Rica',
      'Latinoamérica',
      'Latin America',
      'software pymes',
      'SMB software',
      'automatización',
      'automation',
      'nube',
      'cloud',
      'ciberseguridad',
      'cybersecurity',
      'Power BI',
      'consultoría tecnológica',
      'tech consulting',
    ],
    alternates: {
      languages: {
        es: '/',
        en: '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: t('ogLocale'),
      url: locale === 'en' ? `${siteUrl}/en` : siteUrl,
      siteName: 'Techbox',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations('Common');

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWKWSZHN');`}
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWKWSZHN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-[var(--surface-raised)] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--text)]"
            >
              {t('skipToContent')}
            </a>
            <Header />
            <main id="main-content" tabIndex={-1} className="site-main outline-none">
              {children}
            </main>
            <Footer />
            <WhatsAppFloating />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
