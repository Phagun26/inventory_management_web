import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userStr = request.cookies.get('user')?.value
  const pathname = request.nextUrl.pathname

  // Check if the path requires authentication
  if (pathname.startsWith('/admin') || pathname.startsWith('/users')) {
    if (!userStr) {
      // Not logged in
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const user = JSON.parse(userStr)
    if (!user.isAdmin) {
      // Not authorized
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/users/:path*']
} 