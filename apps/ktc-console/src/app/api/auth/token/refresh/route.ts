import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { access_token, refresh_token } = await req.json()
  const response = NextResponse.json({})

  response.cookies.set('accessToken' as any, access_token, {
    httpOnly: false,
    secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production', // https 적용
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 30, // 30분
  } as any)

  response.cookies.set('refreshToken' as any, refresh_token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production', // https 적용
    maxAge: 60 * 60 * 2, // 2시간
  } as any)

  return response
}
