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
        <main className="max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-4 text-blue-900">{blog.titulo}</h1>
            <p className="text-gray-500 mb-2">
                Publicado el {blog.fecha} por {blog.autor}
            </p>

            <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: blog.contenido }} />

            <div className="mt-8 border-t pt-4">
                <h2 className="text-lg font-semibold text-blue-800 mb-2">Fuentes consultadas</h2>
                <ul className="list-disc list-inside text-sm text-gray-700">
                    {blog.fuentes.map((url, index) => (
                        <li key={index}>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                {url}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
