'use client'

import VLoginForm, { VLoginFormProps } from '@/components/widgets/v-login-form'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginWithAccountSchema, ZLoginWithAccount } from '@/components/features/login/schemas'

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

  const onSubmit: SubmitHandler<ZLoginWithAccount> = (data) => console.log(data)

  const props: VLoginFormProps = {
    loginId: register('loginId'),
    password: register('password'),
    errorMessages: {
      email: errors.loginId?.message ?? '',
      password: errors.password?.message ?? '',
    },
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      handleSubmit(onSubmit)()
    },
  }

  return <VLoginForm vprops={props} />
}
