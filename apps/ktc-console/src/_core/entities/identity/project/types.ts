import { ICreationInformation, ICreationInformationData } from '@/_core/entities/common/creation-information'

export interface IProjectData extends ICreationInformationData {
  id?: string // 프로젝트 ID
  name?: string // 프로젝트 이름
  ownedBy?: string // 프로젝트 소유자(Account)
  description?: string
}

export interface IProject extends ICreationInformation {
  id: string // 프로젝트 ID
  name: string // 프로젝트 이름
  ownedBy: string // 프로젝트 소유자(Account)
  description: string
}