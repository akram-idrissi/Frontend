import { NextResponse } from 'next/server'
 
export function middleware(request) {    
    if (request.cookies.has('user'))
        return NextResponse.redirect(new URL('/', request.url))
}
 
export const config = {
  matcher: '/auth/signin/',
}