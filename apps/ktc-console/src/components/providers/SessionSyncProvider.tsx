'use client'

import { useSession } from 'next-auth/react'
import useAuthStore, { AUTH_STATUS } from '@/store/authStore'
import { useEffect } from 'react'

export default function SessionSyncProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession() // next-auth가 새로고침 시 자동으로 쿠키에서 세션 재구성함
  console.log(session, status)
  const setAuth = useAuthStore((s) => s.setAuth)

  useEffect(() => {
    console.log('session', session)
    if (status === 'authenticated') {
      setAuth({
        user: session.user,
        name: session.name,
        loginId: session?.login_id,
        status: AUTH_STATUS.AUTHENTICATED,
      }) // 상태 복구
    } else if (status === 'unauthenticated') {
      // setAuth(null) // 세션 만료 등
    }
  }, [status, session])

  return <>{children}</>
}
