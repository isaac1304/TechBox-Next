import blog from '@/data/blog.json'
import Link from 'next/link'

export default function BlogList() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-12 text-slate-700 dark:text-slate-200">
            <h1 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Nuestro Blog</h1>
            <ul className="space-y-6">
                {blog.map(post => (
                    <li key={post.slug}>
                        <Link href={`/Blog/${post.slug}`} className="card-hover-gradient block rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition dark:border-slate-700/80 dark:bg-slate-900/60">
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{post.titulo}</h2>
                            <p className="text-slate-600 dark:text-slate-300">{post.resumen}</p>
                            <span className="text-sm text-slate-500 dark:text-slate-400">{post.fecha}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}