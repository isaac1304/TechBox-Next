import type { Metadata } from 'next';
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

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <NextIntlClientProvider>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
