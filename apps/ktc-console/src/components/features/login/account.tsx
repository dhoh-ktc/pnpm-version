'use client'

import VLoginForm, { VLoginFormProps } from '@/components/widgets/organisms/v-login-form'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  LOGIN_ACCOUNT_KEY,
  ZLoginAccountInput,
  ZLoginAccountSchema,
} from '@/components/features/login/schemas'
import { signIn } from 'next-auth/react'
import { LOGIN_TYPE } from '@/_core/entities/identity/login'

export default function LoginAccount() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ZLoginAccountInput>({
    resolver: zodResolver(ZLoginAccountSchema),
    mode: 'onSubmit',
    shouldFocusError: true,
  })

  const onSubmit: SubmitHandler<ZLoginAccountInput> = (data) => {
    signIn('loginCredentials', {
      loginType: LOGIN_TYPE.ACCOUNT,
      loginId: data.loginId,
      password: data.password,
      clientId: 'console',
      redirect: false,
    }).then((res) => {
      if (res && res.ok) {
        router.push('/dashboard')
      } else {
        alert(res?.error)
      }
    })
  }

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

  return <VLoginForm className="mt-1" vprops={props} />
}
