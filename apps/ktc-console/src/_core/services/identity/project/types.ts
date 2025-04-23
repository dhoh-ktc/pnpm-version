import { IProject } from '@/_core/entities/identity/project'

export interface IProjectService {
  fetchAll(): Promise<IProject[]>

  create(data: Pick<IProject, 'name' | 'description'>): Promise<IProject>
}

// export interface IPostsServiceMock {
//   fetchMore: jest.Mock<Promise<IPost[]>>
//   fetchOne: jest.Mock<Promise<[IPost, IComment[]]>>
//   fetchMyPost: jest.Mock<Promise<IPost[]>>
//   getMyPost: jest.Mock<IPost[]>
// }
