import { NextResponse } from 'next/server'

export async function POST() {
  const response = NextResponse.json({})

  response.cookies.set(
    'accessToken' as never,
    '' as never,
    {
      httpOnly: false,
      secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production', // https 적용
      sameSite: 'Lax',
      path: '/',
      maxAge: 0,
    } as never,
  )

  response.cookies.set(
    'refreshToken' as never,
    '' as never,
    {
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production', // https 적용
      sameSite: 'Lax',
      path: '/',
      maxAge: 0,
    } as never,
  )
  return response
}
