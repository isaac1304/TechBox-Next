import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { blogPosts, postLastModified } from '@/data/blog';
import { routing } from '@/i18n/routing';
import { languageAlternates, pageUrl, type LocalizedHref } from '@/lib/seo';

type Entry = {
  href: LocalizedHref;
  freq: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
  /** Fecha real del contenido (YYYY-MM-DD). Sin fecha conocida se omite lastmod. */
  lastModified?: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = blogPosts.map(postLastModified).sort().at(-1);

  const entries: Entry[] = [
    { href: '/', freq: 'monthly', priority: 1.0 },
    { href: '/services', freq: 'monthly', priority: 0.9 },
    { href: '/pricing', freq: 'monthly', priority: 0.9 },
    { href: '/about', freq: 'yearly', priority: 0.5 },
    { href: '/use-cases', freq: 'monthly', priority: 0.6 },
    { href: '/blog', freq: 'weekly', priority: 0.7, lastModified: latestPost },
    { href: '/contact', freq: 'yearly', priority: 0.5 },
    ...services.map(
      (s): Entry => ({
        href: s.hasCustomPage
          ? '/services/sre-gcp-kubernetes'
          : (locale) => ({ pathname: '/services/[slug]', params: { slug: s.slug[locale] } }),
        freq: 'monthly',
        priority: 0.8,
      }),
    ),
    ...blogPosts.map(
      (post): Entry => ({
        href: (locale) => ({ pathname: '/blog/[slug]', params: { slug: post.slug[locale] } }),
        freq: 'yearly',
        priority: 0.6,
        lastModified: postLastModified(post),
      }),
    ),
  ];

  return entries.flatMap(({ href, freq, priority, lastModified }) =>
    routing.locales.map((locale) => ({
      url: pageUrl(href, locale),
      ...(lastModified && { lastModified }),
      changeFrequency: freq,
      priority,
      alternates: { languages: languageAlternates(href) },
    })),
  );
}
