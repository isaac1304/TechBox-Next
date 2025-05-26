import { NextResponse } from 'next/server'
import blog from '@/data/blog.json'

export async function GET() {
    const baseUrl = 'https://www.techbox.cr' // cambia a tu dominio real

    const items = blog.map(post => `
    <item>
      <title>${post.titulo}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <pubDate>${new Date(post.fecha).toUTCString()}</pubDate>
      <description>${post.resumen}</description>
      <guid>${baseUrl}/blog/${post.slug}</guid>
    </item>
  `).join('\n')

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Blog de TechBox</title>
      <link>${baseUrl}/blog</link>
      <description>Artículos sobre tecnología para PYMEs</description>
      ${items}
    </channel>
  </rss>`

    return new NextResponse(rss, {
        headers: {
            'Content-Type': 'application/xml'
        }
    })
}