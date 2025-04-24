import { z } from 'zod'

export const enum MAKE_VPC_KEY {
  NAME = 'name',
  DESCRIPTION = 'description',
  CIDR = 'cidr',
}

export const ZMakeVPCSchema = z.object({
  [MAKE_VPC_KEY.NAME]: z.string({ required_error: 'VPC 이름을 입력해 주세요' }),
  [MAKE_VPC_KEY.DESCRIPTION]: z.string({ required_error: 'VPC 설명을 입력해주세요' }),
  [MAKE_VPC_KEY.CIDR]: z.string({ required_error: 'CIDR 을 입력해주세요' }),
})

export type ZMakeVPCInput = z.infer<typeof ZMakeVPCSchema>
