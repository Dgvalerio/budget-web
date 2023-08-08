import { NextRequest, NextResponse } from 'next/server';

import { routes } from '@/lib/routes';

// const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

export const middleware = (request: NextRequest): NextResponse => {
  const token = request.cookies.get('token')?.value;

  if (token) {
    if (
      request.nextUrl.pathname === routes.signIn ||
      request.nextUrl.pathname === routes.signUp
    ) {
      return NextResponse.redirect(new URL(routes.home, request.url));
    }
  }

  if (!token) {
    if (request.nextUrl.pathname === routes.home) {
      return NextResponse.redirect(new URL(routes.signIn, request.url));
    }
  }

  // if (!token) {
  //   return NextResponse.redirect(signInURL, {
  //     headers: {
  //       'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20`,
  //     },
  //   });
  // }

  return NextResponse.next();
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
