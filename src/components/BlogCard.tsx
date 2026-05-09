import { ArrowRight, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { categoryLabels, formatDate, type BlogPost } from '@/data/blog';
import type { Locale } from '@/i18n/routing';

export default function BlogCard({
  post,
  locale,
}: {
  post: BlogPost;
  locale: Locale;
}) {
  const tCommon = useTranslations('Common');

  return (
    <Link
      href={{ pathname: '/blog/[slug]', params: { slug: post.slug[locale] } }}
      className="group card flex h-full flex-col gap-5 p-7"
    >
      <div className="flex items-center gap-3 text-xs">
        <span className="inline-flex items-center rounded-full bg-[var(--gradient-brand-soft)] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
          {categoryLabels[post.category][locale]}
        </span>
        <span className="inline-flex items-center gap-1 text-[var(--text-soft)]">
          <Clock className="h-3.5 w-3.5" /> {post.readingTime[locale]}
        </span>
      </div>
      <h3 className="text-lg font-semibold leading-snug text-[var(--text)]">
        {post.title[locale]}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--text-muted)] line-clamp-3">
        {post.excerpt[locale]}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-xs text-[var(--text-soft)]">{formatDate(post.date, locale)}</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-navy)] transition group-hover:gap-2.5 dark:text-[var(--brand-teal)]">
          {tCommon('readMore')} <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
