import { repository } from '@/_core/repositories'
import { IVpcService } from '@/_core/services/network/vpcs/types'
import { VpcAPI } from '@/_core/repositories/network/vpc'
import { IVpc, Vpc } from '@/_core/entities/networking/vpc'

export class VpcService implements IVpcService {
  constructor(private readonly vpcRepository: VpcAPI = repository().NETWORK.VPC) {}

  // public async create(data: Pick<IProject, 'name' | 'description'>): Promise<IProject> {
  //   return await this.vpcRepository.save({ ...data }).then((projectData: IProjectData) => {
  //     return new Project(projectData)
  //   })
  // }

  public async fetchAll(projectId: string): Promise<IVpc[]> {
    return await this.vpcRepository.fetchItems(projectId).then((result) => {
      return result.map((item) => new Vpc(item))
    })
  }
}
