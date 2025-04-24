/**
 * 사용자 인증 여부에 따른 Next.js Server-Side 접근제어(리다이렉션) 관리 파일
 */
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

const protectedPaths = ['/project', '/vpc', '/subnet'] // 보호할 경로 목록

export async function middleware(request: NextRequest) {
  console.log('현재 환경 : ', process.env.NEXT_PUBLIC_NODE_ENV)

  const { pathname } = request.nextUrl

  // 보호된 경로인지 확인
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path))
  if (!isProtected) return NextResponse.next()

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    const signinUrl = new URL('/signin', request.url)
    signinUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(signinUrl)
  }

  // 세션 토큰 만료 시, /signin 리다이렉트
  if (!token && pathname !== '/signin') {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  // 인증 상태에서 /signin 접근 시, / 강제 라우팅
  // if (pathname === '/signin' && sessionToken) {
  //   console.log('✅ Already authenticated - Redirecting to /')
  //   return NextResponse.redirect(new URL('/dashboard', request.url))
  // }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|api/auth|signup|_next/static|_next/image|favicon.ico).*)',
    '/dashboard/:path*',
  ],
}
