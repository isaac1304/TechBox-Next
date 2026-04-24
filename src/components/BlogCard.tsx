import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import type { BlogPost } from '@/data/blog';
import { formatDate } from '@/data/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group card flex h-full flex-col gap-5 p-7"
    >
      <div className="flex items-center gap-3 text-xs">
        <span className="inline-flex items-center rounded-full bg-[var(--gradient-brand-soft)] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
          {post.category}
        </span>
        <span className="inline-flex items-center gap-1 text-[var(--text-soft)]">
          <Clock className="h-3.5 w-3.5" /> {post.readingTime}
        </span>
      </div>
      <h3 className="text-lg font-semibold leading-snug text-[var(--text)]">
        {post.title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--text-muted)] line-clamp-3">
        {post.excerpt}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-xs text-[var(--text-soft)]">{formatDate(post.date)}</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-navy)] transition group-hover:gap-2.5 dark:text-[var(--brand-teal)]">
          Leer <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
