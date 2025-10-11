'use client'

interface BlogProps {
    blog: {
        slug: string
        titulo: string
        fecha: string
        autor: string
        resumen: string
        contenido: string
        fuentes: string[]
    }
}

export default function BlogContent({ blog }: BlogProps) {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12 text-slate-700 dark:text-slate-200">
            <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">{blog.titulo}</h1>
            <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                Publicado el {blog.fecha} por {blog.autor}
            </p>

            <div className="prose prose-slate mb-6 max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: blog.contenido }} />

            <div className="mt-8 border-t border-slate-200 pt-4 dark:border-slate-700/60">
                <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Fuentes consultadas</h2>
                <ul className="list-inside list-disc text-sm text-slate-600 dark:text-slate-300">
                    {blog.fuentes.map((url, index) => (
                        <li key={index}>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-sky)] underline hover:text-[var(--accent-ice)]">
                                {url}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
