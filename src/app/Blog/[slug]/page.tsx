// src/app/Blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import blogs from '@/data/blog.json'
import BlogContent from '@/components/BlogContent'

export async function generateStaticParams() {
    return blogs.map(b => ({ slug: b.slug }))
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> } // 👈 como PROMESA
) {
    const { slug } = await params
    const blog = blogs.find(b => b.slug === slug)
    return {
        title: blog?.titulo || 'Artículo no encontrado',
    }
}

export default async function BlogPage(
    props: { params: Promise<{ slug: string }> } // 👈 como PROMESA
) {
    const { slug } = await props.params
    const blog = blogs.find(b => b.slug === slug)

    if (!blog) return notFound()

    return <BlogContent blog={blog} />
}