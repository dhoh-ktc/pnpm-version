import { IVpc } from '@/_core/entities/network/vpc/vpc'

export interface IVpcService {
  get(projectId: string, vpcId: string): Promise<IVpc>

  getList(projectId: string): Promise<IVpc[]>

  create(data: {
    projectId: string
    name: string
    cidr: string
    description: string
  }): Promise<IVpc>
}

// export interface IPostsServiceMock {
//   fetchMore: jest.Mock<Promise<IPost[]>>
//   fetchOne: jest.Mock<Promise<[IPost, IComment[]]>>
//   fetchMyPost: jest.Mock<Promise<IPost[]>>
//   getMyPost: jest.Mock<IPost[]>
// }
