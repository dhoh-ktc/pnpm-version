import { IVpc, IVpcData } from '@/_core/entities/network/vpc/vpc/types'
import { DateUtil } from '@repo/utils/date-util'
import { INetwork } from '@/_core/entities/network/vpc/network/types'
import { ISubnetPool } from '@/_core/entities/network/vpc/subnetpool/types'

export class Vpc implements IVpc {
  id: string
  name: string
  cidr: string
  status: string
  description: string
  created: string[]
  updated: string[]
  network?: INetwork
  subnetpool?: ISubnetPool

  constructor(data: IVpcData) {
    this.id = data.id
    this.name = data.name
    this.cidr = data.cidr
    this.status = data.status
    this.description = data.description

    this.created = data.created ? DateUtil.getDateArray(data.created) : []
    this.updated = data.updated ? DateUtil.getDateArray(data.updated) : []

    if (data.network) this.network = data.network
    if (data.subnetpool) this.subnetpool = data.subnetpool
  }
}
