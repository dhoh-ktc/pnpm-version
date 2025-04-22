import { IProjectService } from '@/_core/services/identity/project/types'
import { ProjectAPI } from '@/_core/repositories/identity/modules/project'
import { IProject, IProjectData, Project } from '@/_core/entities/identity/project'

// import { repository } from '@/_core/repositories'

export class ProjectService implements IProjectService {
  // constructor(private readonly projectRepository:ProjectAPI) {}
  public async create(data: Pick<IProject, 'name' | 'description'>): Promise<IProject> {
    const repository = new ProjectAPI()
    return await repository.save({ ...data }).then((projectData: IProjectData) => {
      return new Project(projectData)
    })
  }

  // public async fetch(): Promise<IProject> {
  //   return Promise.resolve(undefined)
  // }
  // public async fetchAll(): Promise<IProject[]> {
  //   return Promise.resolve([])
  // }
}
