import { IProjectService } from '@/_core/services/identity/project/types'
import { ProjectAPI } from '@/_core/repositories/identity/project'
import { IProject, IProjectData, Project } from '@/_core/entities/identity/project'
import { repository } from '@/_core/repositories'

export class ProjectService implements IProjectService {
  constructor(private readonly projectRepository: ProjectAPI = repository().IDENTITY.project) {}

  public async create(data: Pick<IProject, 'name' | 'description'>): Promise<IProject> {
    return await this.projectRepository.save({ ...data }).then((projectData: IProjectData) => {
      return new Project(projectData)
    })
  }

  public async fetchAll(): Promise<IProject[]> {
    return await this.projectRepository.fetchItems().then((result) => {
      return result.map((item) => new Project(item))
    })
  }
}
