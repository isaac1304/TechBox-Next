import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import { blogPosts, formatDate, getPostBySlug } from '@/data/blog';
import CTASection from '@/components/CTASection';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Artículo no encontrado' };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <>
      <article className="mx-auto w-full max-w-3xl px-4 py-16 md:py-20 lg:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] hover:text-[var(--brand-teal)]"
        >
          <ArrowLeft className="h-3 w-3" /> Blog
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
          <span className="inline-flex items-center rounded-full bg-[var(--gradient-brand-soft)] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]">
            {post.category}
          </span>
          <span className="text-[var(--text-soft)]">{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1 text-[var(--text-soft)]">
            <Clock className="h-3.5 w-3.5" /> {post.readingTime}
          </span>
        </div>
        <h1 className="mt-4 text-[2rem] font-semibold leading-tight text-[var(--text)] md:text-[2.5rem]">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]">
          {post.excerpt}
        </p>
        <div className="mt-10 flex flex-col gap-5 text-base leading-relaxed text-[var(--text)]">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="text-[var(--text-muted)]">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--text-soft)]">— {post.author}</p>
      </article>
      <section className="pb-24">
        <CTASection
          title="¿Te resonó el artículo?"
          description="Agenda una llamada de 30 minutos y conversemos cómo aplicarlo a tu empresa."
        />
      </section>
    </>
  );
}
