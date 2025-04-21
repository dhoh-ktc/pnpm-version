'use client'

import useAuthStore from '@/store/authStore'

export default function Dashboard() {
  const { loginId } = useAuthStore()

  return (
    <div>
      <div>안녕하세요</div>
      {loginId}
    </div>
  )
}
