import { z } from 'zod'

export const enum LOGIN_ACCOUNT_KEY {
  LOGIN_ID = 'loginId',
  PASSWORD = 'password',
  CLIENT_ID = 'clientId',
}

export const ZLoginAccountSchema = z.object({
  [LOGIN_ACCOUNT_KEY.LOGIN_ID]: z
    .string({ required_error: '아이디(이메일)을 입력해주세요.' })
    .email({ message: '이메일 형식에 맞지 않습니다.' }),
  [LOGIN_ACCOUNT_KEY.PASSWORD]: z
    .string({ required_error: '비밀번호를 입력해주세요.' })
    .refine((val) => /^[a-zA-Z0-9가-힣`,~!@#$%^&*()\-_=+\[\]{}\\|;:'",<.>\/?]{1,20}$/.test(val), {
      message: '비밀번호 형식에 맞지 않습니다.',
    }),
  [LOGIN_ACCOUNT_KEY.CLIENT_ID]: z.string().optional(),
})

export type ZLoginAccountInput = z.infer<typeof ZLoginAccountSchema>
