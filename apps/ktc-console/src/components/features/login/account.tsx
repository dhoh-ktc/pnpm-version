'use client'

import VLoginForm, { VLoginFormProps } from '@/components/widgets/v-login-form'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  LOGIN_ACCOUNT_KEY,
  loginWithAccountSchema,
  ZLoginWithAccount,
} from '@/components/features/login/schemas'

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
    loginId: register(LOGIN_ACCOUNT_KEY.LOGIN_ID),
    password: register(LOGIN_ACCOUNT_KEY.PASSWORD),
    errorMsg: {
      loginId: errors[LOGIN_ACCOUNT_KEY.LOGIN_ID]?.message ?? '',
      password: errors[LOGIN_ACCOUNT_KEY.PASSWORD]?.message ?? '',
    },
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      handleSubmit(onSubmit)()
    },
  }

  return <VLoginForm vprops={props} />
}
