import blog from '@/data/blog.json'
import Link from 'next/link'

export default function BlogList() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-12 text-slate-700 dark:text-slate-200">
            <h1 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Nuestro Blog</h1>
            <ul className="space-y-6">
                {blog.map(post => (
                    <li key={post.slug}>
                        <Link href={`/Blog/${post.slug}`} className="card-surface block rounded-2xl border border-slate-700/40 px-4 py-3 shadow-sm transition">
                            <h2 className="text-xl font-semibold text-[var(--card-text)]">{post.titulo}</h2>
                            <p className="text-slate-200/80">{post.resumen}</p>
                            <span className="text-sm text-slate-200/60">{post.fecha}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}