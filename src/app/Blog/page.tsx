import blog from '@/data/blog.json'
import Link from 'next/link'

export default function BlogList() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">Nuestro Blog</h1>
            <ul className="space-y-6">
                {blog.map(post => (
                    <li key={post.slug}>
                        <Link href={`/Blog/${post.slug}`} className="block hover:underline">
                            <h2 className="text-xl font-semibold text-blue-800">{post.titulo}</h2>
                            <p className="text-gray-600">{post.resumen}</p>
                            <span className="text-sm text-gray-400">{post.fecha}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}