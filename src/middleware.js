import { NextResponse } from 'next/server';

export function middleware(request) {
  // Handle static assets
  const url = request.nextUrl.clone();
  
  if (url.pathname.startsWith('/_next/static/css/')) {
    // Ensure CSS is served with correct headers
    const response = NextResponse.next();
    response.headers.set('Content-Type', 'text/css');
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/_next/static/css/:path*'
  ],
}; 