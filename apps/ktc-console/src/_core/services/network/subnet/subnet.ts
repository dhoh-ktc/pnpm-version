import { repository } from '@/_core/repositories'
import { IVpc, IVpcData, Vpc } from '@/_core/entities/networking/vpc'
import { ISubnetService } from '@/_core/services/network/subnet/types'
import { SubnetRepository } from '@/_core/repositories/network/subnet'

export class SubnetService implements ISubnetService {
  constructor(
    private readonly subnetRepository: SubnetRepository = repository().NETWORK.SUBNET(),
  ) {}

  public async create(data: {
    name: string
    network_id: string
    cidr: string
    subnetpool_id: string
  }): Promise<IVpc> {
    return await this.subnetRepository
      .save({ ...data })
      .then((vpcData: IVpcData) => new Vpc(vpcData))
  }

  // public async fetchAll(projectId: string): Promise<IVpc[]> {
  //   return await this.subnetRepository
  //     .fetchItems(projectId)
  //     .then((result) => result.map((item) => new Vpc(item)))
  // }
}
