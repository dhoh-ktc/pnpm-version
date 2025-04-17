import { z } from 'zod'
import { LOGIN_TYPE } from '@/_core/entities/identity/login'

export const loginWithAccountSchema = z.object({
  loginType: z.literal(LOGIN_TYPE.ACCOUNT),
  loginId: z
    .string({ required_error: '아이디(이메일)을 입력해주세요.' })
    .email({ message: '이메일 형식에 맞지 않습니다.' }),
  password: z
    .string({ required_error: '비밀번호를 입력해주세요.' })
    .refine((val) => /^[a-zA-Z0-9가-힣`,~!@#$%^&*()\-_=+\[\]{}\\|;:'",<.>\/?]{1,20}$/.test(val), {
      message: '비밀번호 형식에 맞지 않습니다.',
    }),
  clientId: z.string().optional(),
})

export type ZLoginWithAccount = z.infer<typeof loginWithAccountSchema>
