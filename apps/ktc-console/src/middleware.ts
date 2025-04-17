/**
 * 사용자 인증 여부에 따른 Next.js Server-Side 접근제어(리다이렉션) 관리 파일
 */
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  console.log('현재 환경 : ', process.env.NEXT_PUBLIC_NODE_ENV)
  const { pathname } = request.nextUrl
  const sessionToken = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  // const token = request.cookies.get('token' as never)?.value
  // const refreshToken = request.cookies.get('refreshToken' as never)?.value

  // 세션 토큰 만료 시, /signin 리다이렉트
  // if (!sessionToken && pathname !== '/signin') {
  //   return NextResponse.redirect(new URL('/signin', request.url))
  // }

  // root 경로 접근 시, 세션 토큰 여부에 따라 리다이렉트 처리
  // if (pathname === '/') {
  //   if (sessionToken) {
  //     return NextResponse.redirect(new URL('/dashboard', request.url))
  //   } else {
  //     return NextResponse.redirect(new URL('/signin', request.url))
  //   }
  // }

  // 인증 상태에서 /signin 접근 시, / 강제 라우팅
  // if (pathname === '/signin' && sessionToken) {
  //   console.log('✅ Already authenticated - Redirecting to /')
  //   return NextResponse.redirect(new URL('/dashboard', request.url))
  // }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api/auth|signup|_next/static|_next/image|favicon.ico).*)'],
}
