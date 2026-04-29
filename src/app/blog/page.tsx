import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos prácticos sobre automatización, cloud, ciberseguridad y datos para pymes. Publicados por el equipo de TechBox.',
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20 lg:px-6">
        <SectionHeading
          eyebrow="Blog"
          title={<>Ideas prácticas para <span className="text-gradient-brand">operaciones que escalan</span></>}
          description="Escribimos sobre automatización, cloud, ciberseguridad y datos desde la práctica. Sin humo y sin lenguaje técnico innecesario."
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 lg:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <section className="pb-24">
        <CTASection
          title="¿Quieres ver un tema específico?"
          description="Escríbenos y lo ponemos en la lista. Respondemos consultas reales que llegan desde pymes."
        />
      </section>
    </>
  );
}
