import { NextResponse } from 'next/server'

export function middleware(request) {
  const user = request.cookies.get('user')
  if (user)
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/auth/:path*',
}