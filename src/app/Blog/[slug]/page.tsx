import { notFound } from 'next/navigation'
import blog from '@/data/blog.json'

export async function generateStaticParams() {
    return blog.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = blog.find(p => p.slug === params.slug)
    return {
        title: post?.titulo || 'Post no encontrado',
    }
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const post = blog.find(p => p.slug === params.slug)
    if (!post) return notFound()

    return (
        <main className="max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-4 text-blue-900">{post.titulo}</h1>
            <p className="text-gray-500 mb-2">Publicado el {post.fecha} por {post.autor}</p>
            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.contenido }}
            />
            {post.fuentes?.length > 0 && (
                <section className="mt-6">
                    <h2 className="text-lg font-semibold text-blue-800 mb-2">Fuentes:</h2>
                    <ul className="list-disc list-inside text-blue-600 underline">
                        {post.fuentes.map((fuente, i) => (
                            <li key={i}>
                                <a href={fuente} target="_blank" rel="noopener noreferrer">
                                    {fuente}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </main>
    )
}
