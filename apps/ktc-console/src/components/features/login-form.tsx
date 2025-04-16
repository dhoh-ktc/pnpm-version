'use client'

import { VLoginForm, VLoginFormProps } from '@/components/widgets/v-login-form'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LoginForm() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('로그인 성공')
  }

  const handleSignUp = (): void => {
    router.push('/signup')
  }

  const props: VLoginFormProps = {
    handleSubmit,
    handleSignUp,
  }

  return <VLoginForm vprops={props} />
}