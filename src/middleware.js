import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const user = request.cookies.get('user');

  if (pathname.startsWith('/auth')) {
    if (user) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else if (pathname === '/checkout') {
    if (!user) {
      return NextResponse.redirect(new URL(`/auth/signin`, request.url));
    }
    else if (pathname === '/orders') {
      if (!user)
        return NextResponse.redirect(new URL(`/`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*', '/checkout', '/orders'],
};
