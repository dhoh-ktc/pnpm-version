import { repository } from '@/_core/repositories'
import { IVpcService } from '@/_core/services/network/vpcs/types'
import { VpcAPI } from '@/_core/repositories/network/vpc'
import { IVpc, IVpcData, Vpc } from '@/_core/entities/networking/vpc'

export class VpcService implements IVpcService {
  constructor(private readonly vpcRepository: VpcAPI = repository().NETWORK.VPC) {}

  public async create(data: {
    projectId: string
    name: string
    cidr: string
    description: string
  }): Promise<IVpc> {
    return await this.vpcRepository.save({ ...data }).then((vpcData: IVpcData) => {
      return new Vpc(vpcData)
    })
  }

  public async fetchAll(projectId: string): Promise<IVpc[]> {
    return await this.vpcRepository.fetchItems(projectId).then((result) => {
      return result.map((item) => new Vpc(item))
    })
  }
}
