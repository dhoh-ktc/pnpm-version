import { IVpc } from '@/_core/entities/networking/vpc'

export interface ISubnetService {
  fetchAll(projectId: string): Promise<IVpc[]>

  create(data: {
    name: string
    network_id: string
    cidr: string
    subnetpool_id: string
  }): Promise<IVpc>
}

// export interface IPostsServiceMock {
//   fetchMore: jest.Mock<Promise<IPost[]>>
//   fetchOne: jest.Mock<Promise<[IPost, IComment[]]>>
//   fetchMyPost: jest.Mock<Promise<IPost[]>>
//   getMyPost: jest.Mock<IPost[]>
// }
