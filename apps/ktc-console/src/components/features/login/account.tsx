'use client'

import VLoginForm, { VLoginFormProps } from '@/components/widgets/v-login-form'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginWithAccountSchema, ZLoginWithAccount } from '@/components/features/login/schemas'
import { signIn } from 'next-auth/react'

export default function LoginAccount() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ZLoginWithAccount>({
    resolver: zodResolver(loginWithAccountSchema),
    mode: 'onSubmit',
    shouldFocusError: true,
  })

  const singInWithUser = (data: ZLoginWithAccount) => {
    signIn('loginCredentials', {
      loginType: data.loginType,
      loginId: data.loginId,
      password: data.password,
      clientId: 'console',
      redirect: false,
    }).then((res) => {
      if (res && res.ok) {
        router.push('/')
      } else {
        alert(res?.error)
      }
    })
  }

  const props: VLoginFormProps = {
    email: { ...register('loginId') },
    password: { ...register('password') },
    errorMessages: {
      email: errors.loginId?.message ?? '',
      password: errors.password?.message ?? '',
    },
    handleSubmit: () => handleSubmit(singInWithUser),
  }

  return <VLoginForm vprops={props} />
}
