import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';

const roleRoutes: Record<string, string> = {
  admin: '/admin',
  student: '/student',
};

export default function middleware(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname;

    const token = request.cookies.get('token')?.value;

    if (!token && path !== '/login') {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const decodedToken = jwt.decode(token!) as JwtPayload;

    if (token && path === '/login') {
      if (decodedToken.role === 'admin') {
        return NextResponse.redirect(new URL('/admin', request.url));
      } else if (decodedToken.role === 'student') {
        return NextResponse.redirect(new URL('/student', request.url));
      }
    }

    if (decodedToken) {
      for (const [role, rolePrefix] of Object.entries(roleRoutes)) {
        if (path.startsWith(rolePrefix) && decodedToken.role !== role) {
          return NextResponse.redirect(new URL('/', request.url));
        }
      }
    }

    return NextResponse.next();
  } catch (error) {
    request.cookies.delete('token');
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
