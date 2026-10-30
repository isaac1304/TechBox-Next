import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  blogPosts,
  categoryLabels,
  formatDate,
  getPostBySlug,
  postLastModified,
  readingMinutes,
} from '@/data/blog';
import CTASection from '@/components/CTASection';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import JsonLd from '@/components/JsonLd';
import { blogPostingJsonLd, breadcrumbJsonLd, navLabel } from '@/lib/jsonLd';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((p) => ({ locale, slug: p.slug[locale] })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'BlogPost' });
  const post = getPostBySlug(slug, locale);
  if (!post) return { title: t('notFound') };
  return buildMetadata({
    locale,
    href: (l) => ({ pathname: '/blog/[slug]', params: { slug: post.slug[l] } }),
    title: post.metaTitle?.[locale] ?? post.title[locale],
    description: post.metaDescription[locale],
    ogType: 'article',
    publishedTime: post.date,
    modifiedTime: postLastModified(post),
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(slug, locale);
  if (!post) return notFound();

  const t = await getTranslations('BlogPost');

  const breadcrumbs = breadcrumbJsonLd(locale, [
    { name: navLabel('/', locale), href: '/' },
    { name: navLabel('/blog', locale), href: '/blog' },
    {
      name: post.title[locale],
      href: (l) => ({ pathname: '/blog/[slug]', params: { slug: post.slug[l] } }),
    },
  ]);

  return (
    <>
      <JsonLd data={blogPostingJsonLd(post, locale)} />
      <JsonLd data={breadcrumbs} />
      <article className="mx-auto w-full max-w-3xl px-4 py-16 md:py-20 lg:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] hover:text-[var(--brand-teal)]"
        >
          <ArrowLeft className="h-3 w-3" /> {t('backToBlog')}
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
          <span className="inline-flex items-center rounded-full bg-[image:var(--gradient-brand-soft)] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
            {categoryLabels[post.category][locale]}
          </span>
          <span className="text-[var(--text-soft)]">{formatDate(post.date, locale)}</span>
          <span className="inline-flex items-center gap-1 text-[var(--text-soft)]">
            <Clock className="h-3.5 w-3.5" /> {t('readingTime', { minutes: readingMinutes(post, locale) })}
          </span>
        </div>
        <h1 className="mt-4 text-[2rem] font-semibold leading-tight text-[var(--text)] md:text-[2.5rem]">
          {post.title[locale]}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
          {post.excerpt[locale]}
        </p>
        <div className="mt-10 flex flex-col gap-5 text-base leading-relaxed text-[var(--text)]">
          {post.content[locale].map((paragraph, idx) => (
            <p key={idx} className="text-[var(--text-muted)]">
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-sm">
          <p className="font-semibold text-[var(--text)]">— {site.founder.shortName}</p>
          <p className="leading-relaxed text-[var(--text-muted)]">{t('authorBio')}</p>
          <Link
            href={{ pathname: '/about', hash: 'fundador' }}
            className="inline-flex w-fit items-center gap-1.5 font-semibold text-[var(--brand-navy)] transition hover:gap-2.5 dark:text-[var(--brand-teal)]"
          >
            {t('authorLink')} <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </article>
      <section className="pb-24">
        <CTASection title={t('ctaTitle')} description={t('ctaDescription')} />
      </section>
    </>
  );
}
