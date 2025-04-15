import { ICreationInformation, ICreationInformationData } from './types'
import { DateUtil } from '@repo/utils/src/date-util'

export class CreationInformation implements ICreationInformation {

  createdAt: string[]
  createdBy: string
  updatedAt: string[]
  updatedBy: string

  constructor(data: ICreationInformationData) {
    this.createdAt = data.createdAt ? DateUtil.getDateArray(data.createdAt) : []
    this.createdBy = data.createdBy || ''
    this.updatedAt = data.updatedAt ? DateUtil.getDateArray(data.updatedAt) : []
    this.updatedBy = data.updatedBy || ''
  }
}