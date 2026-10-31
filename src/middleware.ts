import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

// URLs del sitio anterior (con /Blog en mayúscula) que siguen indexadas.
// Las que no tienen equivalente directo van al índice del blog.
const legacyBlogRedirects: Record<string, string> = {
  '/Blog/crm-gestion-clientes-pymes': '/blog',
};

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Comparación sensible a mayúsculas: /blog/* no entra aquí.
  if (pathname === '/Blog' || pathname.startsWith('/Blog/')) {
    const url = request.nextUrl.clone();
    url.pathname = legacyBlogRedirects[pathname] ?? pathname.replace(/^\/Blog/, '/blog');
    return NextResponse.redirect(url, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
