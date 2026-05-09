'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { Check } from 'lucide-react';
import { usePathname as useNextPathname } from 'next/navigation';
import { getPathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blog';

/** Compute the localized URL for the target locale based on the current visible
 * URL. Translates dynamic slugs (services, blog posts) so that switching from
 * /servicios/desarrollo-software lands on /en/services/software-development. */
function buildAlternateUrl(
  rawPath: string,
  currentLocale: Locale,
  targetLocale: Locale,
): string {
  // Strip the optional locale prefix to get the path as it appears for that locale.
  const prefix = '/' + currentLocale;
  const pathForCurrentLocale =
    rawPath === prefix
      ? '/'
      : rawPath.startsWith(prefix + '/')
        ? rawPath.slice(prefix.length)
        : rawPath;

  const serviceMatch = pathForCurrentLocale.match(
    /^\/(?:servicios|services)\/([^/]+)$/,
  );
  if (serviceMatch) {
    const slug = serviceMatch[1];
    if (slug === 'sre-gcp-kubernetes') {
      return getPathname({ locale: targetLocale, href: '/services/sre-gcp-kubernetes' });
    }
    const service = services.find((s) => s.slug[currentLocale] === slug);
    if (service) {
      return getPathname({
        locale: targetLocale,
        href: {
          pathname: '/services/[slug]',
          params: { slug: service.slug[targetLocale] },
        },
      });
    }
  }

  const blogMatch = pathForCurrentLocale.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    const post = blogPosts.find((p) => p.slug[currentLocale] === slug);
    if (post) {
      return getPathname({
        locale: targetLocale,
        href: {
          pathname: '/blog/[slug]',
          params: { slug: post.slug[targetLocale] },
        },
      });
    }
  }

  // Static routes: reverse the localized path back to its canonical form, then
  // ask next-intl to render it for the target locale.
  const staticReverseMap: Record<string, '/' | '/services' | '/about' | '/use-cases' | '/contact' | '/blog'> = {
    '/': '/',
    '/servicios': '/services',
    '/services': '/services',
    '/nosotros': '/about',
    '/about': '/about',
    '/casos-de-uso': '/use-cases',
    '/use-cases': '/use-cases',
    '/contacto': '/contact',
    '/contact': '/contact',
    '/blog': '/blog',
  };
  const canonical = staticReverseMap[pathForCurrentLocale];
  if (canonical) {
    return getPathname({ locale: targetLocale, href: canonical });
  }

  // Fallback: just prefix with target locale if needed.
  return targetLocale === routing.defaultLocale
    ? pathForCurrentLocale
    : '/' + targetLocale + pathForCurrentLocale;
}

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const current = useLocale() as Locale;
  const rawPath = useNextPathname();
  const [isPending, startTransition] = useTransition();

  const change = (next: Locale) => {
    if (next === current) return;
    const url = buildAlternateUrl(rawPath, current, next);
    startTransition(() => {
      window.location.assign(url);
    });
  };

  const labels: Record<Locale, string> = {
    es: t('spanish'),
    en: t('english'),
  };

  return (
    <nav aria-label={t('label')} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      {routing.locales.map((loc, idx) => {
        const isCurrent = loc === current;
        return (
          <span key={loc} className="inline-flex items-center gap-3">
            {idx > 0 && (
              <span aria-hidden className="text-[var(--text-soft)]">
                |
              </span>
            )}
            <button
              type="button"
              onClick={() => change(loc)}
              disabled={isPending || isCurrent}
              aria-current={isCurrent ? 'true' : undefined}
              className={[
                'inline-flex items-center gap-1.5 rounded-full px-1 py-0.5 transition disabled:cursor-default',
                isCurrent
                  ? 'font-semibold text-[var(--text)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]',
              ].join(' ')}
            >
              {isCurrent && (
                <Check className="h-3.5 w-3.5 text-[var(--brand-teal)]" aria-hidden />
              )}
              {labels[loc]}
            </button>
          </span>
        );
      })}
    </nav>
  );
}
