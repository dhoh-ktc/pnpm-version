import { INetwork, INetworkData } from '@/_core/entities/network/vpc/network/types'
import { ISubnetPool, ISubnetPoolData } from '@/_core/entities/network/vpc/subnetpool/types'

export interface IVpcData {
  id: string
  name: string
  cidr: string
  status: string
  description: string
  created: string
  updated: string
  network?: INetworkData
  subnetpool?: ISubnetPoolData
}

export interface IVpc extends Omit<IVpcData, 'created' | 'updated'> {
  created: string[]
  updated: string[]
  network?: INetwork
  subnetpool?: ISubnetPool
}
