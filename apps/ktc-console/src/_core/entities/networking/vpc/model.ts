import { IVpc, IVpcData } from '@/_core/entities/networking/vpc/types'
import { DateUtil } from '@repo/utils/date-util'

export class Vpc implements IVpc {
  id: string
  name: string
  cidr: string
  status: string
  description: string
  created: string[]
  updated: string[]

  constructor(data: IVpcData) {
    this.id = data.id
    this.name = data.name
    this.cidr = data.cidr
    this.status = data.status
    this.description = data.description

    this.created = data.created ? DateUtil.getDateArray(data.created) : []
    this.updated = data.updated ? DateUtil.getDateArray(data.updated) : []
  }
}
