import { IProject, IProjectData } from './types'
import { CreationInformation } from '@/_core/entities/common/creation-information'

export class Project implements IProject {
  createdAt: string[]
  createdBy: string
  description: string
  id: string
  name: string
  ownedBy: string
  updatedAt: string[]
  updatedBy: string

  constructor(data: IProjectData) {
    this.description = data.description || ''
    this.id = data.id || ''
    this.name = data.name || ''
    this.ownedBy = data.ownedBy || ''

    const creationInfo = new CreationInformation(data)
    this.createdBy = creationInfo.createdBy
    this.createdAt = creationInfo.createdAt
    this.updatedAt = creationInfo.updatedAt
    this.updatedBy = creationInfo.updatedBy
  }
}
