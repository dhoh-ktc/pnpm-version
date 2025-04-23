import { z } from 'zod'

export const enum MAKE_PROJECT_KEY {
  NAME = 'name',
  DESCRIPTION = 'description',
}

export const ZMakeProjectSchema = z.object({
  [MAKE_PROJECT_KEY.NAME]: z.string({ required_error: '프로젝트 이름을 입력해 주세요' }),
  [MAKE_PROJECT_KEY.DESCRIPTION]: z.string({ required_error: '프로젝트 설명을 입력해주세요' }),
})

export type ZMakeProjectInput = z.infer<typeof ZMakeProjectSchema>
