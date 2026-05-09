import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blog';
import { routing, type Locale } from '@/i18n/routing';
import { getPathname } from '@/i18n/navigation';

const siteUrl = 'https://techbox.cr';

function url(path: string) {
  return `${siteUrl}${path === '/' ? '' : path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const buildAlternates = (
    href: Parameters<typeof getPathname>[0]['href'],
  ) => ({
    languages: Object.fromEntries(
      routing.locales.map((locale) => [locale, url(getPathname({ locale, href }))]),
    ),
  });

  const staticHrefs = [
    { href: '/' as const, freq: 'monthly' as const, priority: 1.0 },
    { href: '/services' as const, freq: 'monthly' as const, priority: 0.9 },
    { href: '/about' as const, freq: 'yearly' as const, priority: 0.5 },
    { href: '/use-cases' as const, freq: 'monthly' as const, priority: 0.6 },
    { href: '/blog' as const, freq: 'weekly' as const, priority: 0.7 },
    { href: '/contact' as const, freq: 'yearly' as const, priority: 0.5 },
  ];

  const staticRoutes: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    staticHrefs.map(({ href, freq, priority }) => ({
      url: url(getPathname({ locale, href })),
      lastModified: now,
      changeFrequency: freq,
      priority,
      alternates: buildAlternates(href),
    })),
  );

  const serviceRoutes: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    services.map((s) => {
      if (s.hasCustomPage) {
        const href = '/services/sre-gcp-kubernetes' as const;
        return {
          url: url(getPathname({ locale, href })),
          lastModified: now,
          changeFrequency: 'monthly' as const,
          priority: 0.8,
          alternates: buildAlternates(href),
        };
      }
      const href = {
        pathname: '/services/[slug]' as const,
        params: { slug: s.slug[locale] },
      };
      return {
        url: url(getPathname({ locale, href })),
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              url(
                getPathname({
                  locale: l as Locale,
                  href: {
                    pathname: '/services/[slug]',
                    params: { slug: s.slug[l as Locale] },
                  },
                }),
              ),
            ]),
          ),
        },
      };
    }),
  );

  const blogRoutes: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    blogPosts.map((post) => {
      const href = {
        pathname: '/blog/[slug]' as const,
        params: { slug: post.slug[locale] },
      };
      return {
        url: url(getPathname({ locale, href })),
        lastModified: new Date(post.date),
        changeFrequency: 'yearly' as const,
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              url(
                getPathname({
                  locale: l as Locale,
                  href: {
                    pathname: '/blog/[slug]',
                    params: { slug: post.slug[l as Locale] },
                  },
                }),
              ),
            ]),
          ),
        },
      };
    }),
  );

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
