import { NextResponse } from 'next/server';

export function middleware(request) {
  // For CSS files, set the correct content type
  if (request.nextUrl.pathname.includes('.css')) {
    const response = NextResponse.next();
    response.headers.set('Content-Type', 'text/css');
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 